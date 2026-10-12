import { Link } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";
import { useCart } from "../../hooks/useCart";
import { formatToman } from "../../lib/format";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, products } = useUserData();
  const { addItem } = useCart();

  const wishlistedProducts = (products || []).filter((p) => wishlist.includes(p.id));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-5">
          <span className="material-symbols-outlined text-2xl text-amber-400">
            bookmark
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-white">لیست علاقه‌مندی‌ها</h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              قطعات نشان‌شده برای خرید در آینده یا بررسی قیمت
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Wishlist Items */}
      {wishlistedProducts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-12 text-center">
          <span className="material-symbols-outlined text-5xl text-zinc-600">
            bookmark_border
          </span>
          <h3 className="mt-4 text-lg font-bold text-white">لیست علاقه‌مندی‌های شما خالی است</h3>
          <p className="mt-2 text-xs text-zinc-400">
            با کلیک روی آیکون بوکمارک هر قطعه در فروشگاه، می‌توانید آن را به این لیست اضافه نمایید.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-300"
          >
            مشاهده محصولات
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {wishlistedProducts.map((product) => (
            <article
              key={product.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700"
            >
              <div>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-44 w-full rounded-xl object-cover border border-zinc-800/80"
                  />

                  {product.badge && (
                    <span
                      className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                        product.badgeColor || "bg-amber-400 text-black"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                <Link
                  to={`/product?id=${product.id}`}
                  className="mt-4 block font-bold text-white hover:text-amber-400 transition text-sm leading-6 line-clamp-2"
                >
                  {product.title}
                </Link>

                <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                  <span>سازگار با: {product.carModel || "خودروهای ایرانی"}</span>
                  <span className="text-emerald-400">موجود در انبار</span>
                </div>

                <div className="mt-4 flex items-baseline gap-1 text-base font-extrabold text-amber-400">
                  {formatToman(product.price)}
                  <span className="text-xs font-normal text-zinc-400">تومان</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 flex items-center gap-3 border-t border-zinc-800/80 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    addItem(product);
                  }}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-2.5 text-xs font-bold text-black transition hover:brightness-110"
                >
                  <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                  انتقال به سبد
                </button>

                <button
                  type="button"
                  onClick={() => removeFromWishlist(product.id)}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 transition hover:border-red-500/40 hover:text-red-400"
                  title="حذف از لیست"
                >
                  <span className="material-symbols-outlined text-base">delete</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
