import { Link } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";
import { formatToman, toPersianDigits } from "../../lib/format";

export default function DashboardOverview({ onNavigateTab }) {
  const { profile, orders, addresses, wishlist } = useUserData();

  const activeOrders = orders.filter((o) => o.status === "جاری");
  const deliveredOrders = orders.filter((o) => o.status === "تحویل شده");
  const latestOrder = orders[0];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6 md:p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-white">
              سلام، {profile.fullName || "کاربر گرامی"} خوش آمدید 👋
            </h1>
            <p className="mt-2 text-sm text-zinc-400 max-w-xl leading-6">
              به پنل تخصصی قطعات خودروهای ایرانی گلدن یدک خوش آمدید. در این بخش می‌توانید سفارشات جاری را رهگیری کرده، آدرس‌ها را مدیریت کرده و وضعیت قطعات انتخابی خود را بررسی نمایید.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 px-6 py-3 text-sm font-bold text-black transition hover:brightness-110 shrink-0"
          >
            <span className="material-symbols-outlined text-lg">shopping_bag</span>
            خرید قطعات جدید
          </Link>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-sm font-medium">سفارش‌های جاری</span>
            <span className="material-symbols-outlined text-amber-400">local_shipping</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">
              {toPersianDigits(activeOrders.length)}
            </span>
            <span className="text-xs text-zinc-500">سفارش فعال</span>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-sm font-medium">سفارش‌های تحویل شده</span>
            <span className="material-symbols-outlined text-emerald-400">check_circle</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">
              {toPersianDigits(deliveredOrders.length)}
            </span>
            <span className="text-xs text-zinc-500">موفق</span>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-sm font-medium">آدرس‌های ثبت‌شده</span>
            <span className="material-symbols-outlined text-blue-400">location_on</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">
              {toPersianDigits(addresses.length)}
            </span>
            <span className="text-xs text-zinc-500">نشانی پستی</span>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
          <div className="flex items-center justify-between text-zinc-400">
            <span className="text-sm font-medium">علاقه‌مندی‌ها</span>
            <span className="material-symbols-outlined text-red-400">favorite</span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">
              {toPersianDigits(wishlist.length)}
            </span>
            <span className="text-xs text-zinc-500">قطعه نشان‌شده</span>
          </div>
        </div>
      </div>

      {/* Latest Order Tracking */}
      {latestOrder && (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl text-amber-400">
                package_2
              </span>
              <div>
                <h3 className="font-extrabold text-white">
                  آخرین وضعیت سفارش {latestOrder.id}
                </h3>
                <span className="text-xs text-zinc-400">
                  ثبت شده در تاریخ {toPersianDigits(latestOrder.date)}
                </span>
              </div>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                latestOrder.status === "جاری"
                  ? "bg-amber-400/10 text-amber-300 border border-amber-400/30"
                  : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
              }`}
            >
              {latestOrder.statusText || latestOrder.status}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
              {latestOrder.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-14 w-14 rounded-xl object-cover border border-zinc-800"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white line-clamp-1 max-w-xs">
                      {item.title}
                    </h4>
                    <span className="text-xs text-zinc-400">
                      تعداد: {toPersianDigits(item.qty || 1)} عدد · {formatToman(item.price)} تومان
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/dashboard/orders"
                onClick={() => onNavigateTab && onNavigateTab("orders")}
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs font-bold text-zinc-200 transition hover:border-amber-400 hover:text-amber-300"
              >
                مشاهده فاکتور و رهگیری
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Quick Access Grid */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Link
          to="/dashboard/addresses"
          onClick={() => onNavigateTab && onNavigateTab("addresses")}
          className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-amber-400/40"
        >
          <span className="material-symbols-outlined text-3xl text-amber-400 group-hover:scale-110 transition-transform">
            add_location_alt
          </span>
          <h4 className="mt-4 font-bold text-white">مدیریت آدرس‌های ارسال</h4>
          <p className="mt-1 text-xs leading-5 text-zinc-400">
            تغییر آدرس پیش‌فرض یا ثبت نشانی جدید برای دریافت سریع قطعات
          </p>
        </Link>

        <Link
          to="/dashboard/wishlist"
          onClick={() => onNavigateTab && onNavigateTab("wishlist")}
          className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-amber-400/40"
        >
          <span className="material-symbols-outlined text-3xl text-amber-400 group-hover:scale-110 transition-transform">
            bookmark_heart
          </span>
          <h4 className="mt-4 font-bold text-white">قطعات نشان‌شده</h4>
          <p className="mt-1 text-xs leading-5 text-zinc-400">
            مشاهده قطعات ذخیره‌شده و انتقال مستقیم به سبد خرید
          </p>
        </Link>

        <Link
          to="/dashboard/profile"
          onClick={() => onNavigateTab && onNavigateTab("profile")}
          className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-amber-400/40"
        >
          <span className="material-symbols-outlined text-3xl text-amber-400 group-hover:scale-110 transition-transform">
            badge
          </span>
          <h4 className="mt-4 font-bold text-white">اطلاعات حساب و بانکی</h4>
          <p className="mt-1 text-xs leading-5 text-zinc-400">
            بروزرسانی مشخصات فردی، کدملی و شماره شبا جهت عودت وجه
          </p>
        </Link>
      </div>
    </div>
  );
}
