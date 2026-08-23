import { useCart } from "../hooks/useCart.js";
import { formatToman } from "../lib/format.js";

// =============================================================
//  کارت محصول — برای گرید لیست محصولات و هرجا نیاز به کارت
//  محصول یکدست باشد استفاده می‌شود.
//
//  دکمه‌ی افزودن به سبد به‌طور خودکار به CartContext وصل است.
//  با prop اختیاری onAddToCart می‌تونی رفتار سفارشی بدی.
//
//  props:
//    product -> { id, image, title, price (عدد),
//                 badge?, badgeColor?, priceLabel?, oldPrice? }
// =============================================================

export default function ProductCard({ product, onAddToCart }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    if (onAddToCart) onAddToCart(product);
    else addItem(product);
  };

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-cover"
        />

        {product.badge && (
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${product.badgeColor ?? "bg-amber-400 text-black"}`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="min-h-14 text-base font-bold leading-7">
          {product.title}
        </h3>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {product.priceLabel && (
            <span className="text-sm text-white/60">{product.priceLabel}</span>
          )}

          {product.oldPrice && (
            <span className="text-sm text-white/40 line-through">
              {formatToman(product.oldPrice)}
            </span>
          )}

          <span className="text-xl font-extrabold text-amber-400">
            {formatToman(product.price)}
          </span>

          <span className="text-sm text-white/70">تومان</span>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3 font-extrabold text-black transition hover:brightness-110"
        >
          <span className="material-symbols-outlined">add_shopping_cart</span>
          افزودن به سبد خرید
        </button>
      </div>
    </article>
  );
}
