import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BRAND } from "../lib/config";
import { useCart } from "../hooks/useCart.js";
import { useAuth } from "../hooks/useAuth.js";
import { toPersianDigits } from "../lib/format.js";
import { maskMobile } from "../lib/validation.js";

function persianMobile(phone) {
  return toPersianDigits(phone ? maskMobile(phone) : "");
}

export default function Header({ navItems }) {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { isAuthenticated, phoneNumber, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchInput.trim())}`);
      setShowSearch(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 py-3.5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-extrabold text-white">
            <span className="material-symbols-outlined text-amber-400 text-3xl">
              {BRAND.logoIcon}
            </span>
            <span className="tracking-tight">{BRAND.name}</span>
          </Link>

          {/* Center search bar (desktop) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-md mx-6 relative"
          >
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="جستجوی قطعه، خودرو (دنا، ۲۰۶، شاهین، تارا...)"
              className="w-full rounded-full border border-zinc-800 bg-zinc-900/90 py-2 pr-10 pl-4 text-xs text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
            />
            <button
              type="submit"
              className="material-symbols-outlined absolute right-3 top-2 text-zinc-400 text-lg hover:text-amber-400"
            >
              search
            </button>
          </form>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile search toggle */}
            <button
              type="button"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="search"
              className="md:hidden rounded-full p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              <span className="material-symbols-outlined">search</span>
            </button>

            {/* Dashboard Link */}
            <Link
              to="/dashboard"
              className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 px-3.5 py-1.5 text-xs font-bold text-amber-300 transition hover:border-amber-400 hover:bg-amber-400/10"
              title="پنل کاربری و سفارشات"
            >
              <span className="material-symbols-outlined text-lg">person</span>
              <span className="hidden sm:inline">پنل کاربری</span>
            </Link>

            {/* Admin Link */}
            <Link
              to="/admin"
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-amber-400/50 hover:text-amber-300"
              title="پنل مدیریت قطعات و انبارداری"
            >
              <span className="material-symbols-outlined text-base">admin_panel_settings</span>
              <span className="hidden md:inline text-[11px]">پنل ادمین</span>
            </Link>

            {/* Login / Logout */}
            {isAuthenticated ? (
              <button
                type="button"
                onClick={logout}
                className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400 transition hover:text-red-400 hover:border-red-500/30"
                title="خروج از حساب"
              >
                <span className="material-symbols-outlined text-base">logout</span>
                <span className="hidden md:inline" dir="ltr">
                  {persianMobile(phoneNumber)}
                </span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300 transition hover:border-zinc-700 hover:text-white"
              >
                <span>ورود</span>
              </Link>
            )}

            {/* Shopping Cart */}
            <Link
              to="/cart"
              aria-label="cart"
              className="relative flex items-center justify-center rounded-full border border-white/10 bg-zinc-900/60 p-2 text-zinc-200 transition hover:border-amber-400/60 hover:text-amber-300"
            >
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
              {totalItems > 0 && (
                <span className="absolute -left-1.5 -top-1.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-400 px-1 text-[11px] font-black text-black">
                  {toPersianDigits(totalItems)}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search input expand */}
        {showSearch && (
          <form onSubmit={handleSearchSubmit} className="md:hidden pb-3 pt-1">
            <div className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="جستجوی نام قطعه، ماشین یا برند..."
                autoFocus
                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-2.5 pr-10 pl-4 text-xs text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
              />
              <button
                type="submit"
                className="material-symbols-outlined absolute right-3 top-2.5 text-zinc-400 text-lg hover:text-amber-400"
              >
                search
              </button>
            </div>
          </form>
        )}

        {/* Secondary Navigation Row */}
        {navItems && navItems.length > 0 && (
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-white/10 py-3 text-xs text-white/80 overflow-x-auto whitespace-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href || "/products"}
                className="flex items-center gap-1.5 transition hover:text-amber-300 font-medium"
              >
                {item.icon && (
                  <span className="material-symbols-outlined text-base text-amber-400">
                    {item.icon}
                  </span>
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
