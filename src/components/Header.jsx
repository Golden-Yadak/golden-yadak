import { Link } from "react-router-dom";
import { BRAND } from "../lib/config";
import { useCart } from "../hooks/useCart.js";
import { useAuth } from "../hooks/useAuth.js";
import { toPersianDigits } from "../lib/format.js";
import { maskMobile } from "../lib/validation.js";

// =============================================================
//  هدر مشترک صفحات فروشگاه
//  - شمارنده‌ی سبد خرید از CartContext (زنده)
//  - بخش کاربری از AuthContext (ورود/خروج)
//  - prop اختیاری `navItems` نوار ناوبری پایین هدر
// =============================================================

// نمایش شماره با ارقام فارسی
function persianMobile(phone) {
  return toPersianDigits(phone ? maskMobile(phone) : "");
}

export default function Header({ navItems }) {
  const { totalItems } = useCart();
  const { isAuthenticated, phoneNumber, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* لوگو */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold">
            <span className="material-symbols-outlined text-amber-400">
              {BRAND.logoIcon}
            </span>
            {BRAND.name}
          </Link>

          {/* اکشن‌های هدر */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              aria-label="search"
              className="rounded-full p-2 transition hover:bg-white/10"
            >
              <span className="material-symbols-outlined">search</span>
            </button>

            {isAuthenticated ? (
              <button
                type="button"
                onClick={logout}
                className="flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-amber-300 transition hover:border-amber-400/70"
              >
                <span className="material-symbols-outlined">logout</span>
                <span className="hidden sm:inline" dir="ltr">
                  {persianMobile(phoneNumber)} · خروج
                </span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <span className="material-symbols-outlined">account_circle</span>
                <span className="hidden sm:inline">ورود / پنل کاربری</span>
              </Link>
            )}

            <Link
              to="/cart"
              aria-label="cart"
              className="relative rounded-full border border-white/10 p-2 transition hover:border-amber-400/60 hover:text-amber-300"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {totalItems > 0 && (
                <span className="absolute -left-2 -top-2 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-bold text-black">
                  {toPersianDigits(totalItems)}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* نوار ناوبری (فقط اگر navItems پاس داده شده باشد) */}
        {navItems && navItems.length > 0 && (
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 py-4 text-sm text-white/80">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-1 transition hover:text-amber-300"
              >
                {item.icon && (
                  <span className="material-symbols-outlined text-base">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
