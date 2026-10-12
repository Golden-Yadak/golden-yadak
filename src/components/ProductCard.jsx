import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart.js";
import { useUserData } from "../hooks/useUserData.js";
import { formatToman } from "../lib/format.js";

export default function ProductCard({ product, onAddToCart }) {
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useUserData();
  const [addedAnimation, setAddedAnimation] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      addItem(product);
    }
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1800);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-amber-400/40 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
      {/* Image & Badges */}
      <div className="relative overflow-hidden">
        <Link to={`/product?id=${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {product.badge && (
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${
              product.badgeColor ?? "bg-amber-400 text-black"
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          className={`absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition ${
            isFavorited
              ? "bg-red-500/90 text-white shadow-lg"
              : "bg-black/60 text-white/80 hover:bg-black hover:text-red-400"
          }`}
          title={isFavorited ? "حذف از نشان‌شده‌ها" : "نشان کردن"}
        >
          <span className="material-symbols-outlined text-lg">
            {isFavorited ? "favorite" : "favorite_border"}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Company / Car model tag */}
          <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
            <span>{product.company || "خودروهای ایرانی"}</span>
            {product.carModel && (
              <>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400">{product.carModel}</span>
              </>
            )}
          </div>

          <Link to={`/product?id=${product.id}`}>
            <h3 className="mt-2 min-h-12 text-base font-bold leading-6 text-white transition hover:text-amber-300 line-clamp-2">
              {product.title}
            </h3>
          </Link>

          {/* Pricing */}
          <div className="mt-4 flex flex-wrap items-baseline gap-2">
            {product.oldPrice && (
              <span className="text-xs text-white/40 line-through">
                {formatToman(product.oldPrice)}
              </span>
            )}

            <span className="text-xl font-extrabold text-amber-400">
              {formatToman(product.price)}
            </span>

            <span className="text-xs text-white/70">تومان</span>
          </div>
        </div>

        {/* Add to Cart CTA */}
        <button
          type="button"
          onClick={handleAdd}
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3 font-extrabold text-black transition-all ${
            addedAnimation
              ? "bg-emerald-400 text-black scale-[0.98]"
              : "bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 hover:brightness-110"
          }`}
        >
          <span className="material-symbols-outlined text-xl">
            {addedAnimation ? "done" : "add_shopping_cart"}
          </span>
          {addedAnimation ? "به سبد افزوده شد ✓" : "افزودن به سبد خرید"}
        </button>
      </div>
    </article>
  );
}
