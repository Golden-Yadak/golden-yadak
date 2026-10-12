import { Link, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../hooks/useAuth";
import { useUserData } from "../../hooks/useUserData";
import { toPersianDigits } from "../../lib/format";

export default function DashboardLayout({ children, currentTab, onSelectTab }) {
  const { logout } = useAuth();
  const { profile, orders, wishlist } = useUserData();
  const location = useLocation();

  const menuItems = [
    {
      id: "overview",
      path: "/dashboard",
      label: "پیشخوان کاربری",
      icon: "dashboard",
    },
    {
      id: "orders",
      path: "/dashboard/orders",
      label: "سفارش‌های من",
      icon: "shopping_bag",
      badge: orders.filter((o) => o.status === "جاری").length || null,
    },
    {
      id: "addresses",
      path: "/dashboard/addresses",
      label: "آدرس‌های من",
      icon: "location_on",
    },
    {
      id: "wishlist",
      path: "/dashboard/wishlist",
      label: "لیست علاقه‌مندی‌ها",
      icon: "favorite",
      badge: wishlist.length || null,
    },
    {
      id: "profile",
      path: "/dashboard/profile",
      label: "اطلاعات حساب کاربری",
      icon: "person",
    },
  ];

  const getIsActive = (item) => {
    if (currentTab) return currentTab === item.id;
    if (item.path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname.startsWith(item.path);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-black text-zinc-100 flex flex-col justify-between">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 flex-1">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-6">
            {/* User Profile Card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-center">
              <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-amber-400 bg-zinc-900 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <span className="material-symbols-outlined text-4xl text-amber-400">
                  person
                </span>
                <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white ring-2 ring-zinc-950">
                  ✓
                </span>
              </div>

              <h2 className="text-lg font-extrabold text-white">
                {profile.fullName || "کاربر گلدن یدک"}
              </h2>
              <p className="mt-1 text-sm text-zinc-400" dir="ltr">
                {toPersianDigits(profile.phone || "۰۹۱۲۳۴۵۶۷۸۹")}
              </p>

              <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/5 px-3 py-2 text-xs font-medium text-amber-300">
                ⭐ مشتری ویژه باشگاه طلایی
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="rounded-2xl border border-zinc-800 bg-zinc-950 p-3 space-y-1">
              {menuItems.map((item) => {
                const active = getIsActive(item);
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => onSelectTab && onSelectTab(item.id)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                      active
                        ? "bg-amber-400/10 text-amber-400 border-r-4 border-amber-400"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-xl ${active ? "text-amber-400" : "text-zinc-500"}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1.5 text-xs font-bold text-black">
                        {toPersianDigits(item.badge)}
                      </span>
                    )}
                  </Link>
                );
              })}

              <hr className="my-2 border-zinc-800" />

              <button
                type="button"
                onClick={logout}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
              >
                <span className="material-symbols-outlined text-xl">logout</span>
                <span>خروج از حساب</span>
              </button>
            </nav>
          </aside>

          {/* Main Content Area */}
          <section className="min-w-0">
            {children}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
