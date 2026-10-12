import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart.js";
import { useUserData } from "../hooks/useUserData.js";
import { PRODUCTS } from "../data/products.js";
import { PRODUCT_DETAIL as P } from "../data/productDetail.js";
import { formatToman, toPersianDigits } from "../lib/format.js";

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist, products } = useUserData();

  const product =
    (products || []).find((p) => p.id === productId) || (products || [])[0] || PRODUCTS[0];

  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image || P.mainImage);
  const [addedToast, setAddedToast] = useState(false);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItem({ ...product, qty });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const discountPercent = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  const compatibleCars = product.compatibleCars || P.compatibleCars;

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 flex-1">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
          <Link to="/" className="hover:text-amber-400 transition">
            صفحه اصلی
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <Link to="/products" className="hover:text-amber-400 transition">
            قطعات خودروهای ایرانی
          </Link>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <span className="text-zinc-500">{product.company || "لوازم یدکی"}</span>
          <span className="material-symbols-outlined text-sm">chevron_left</span>
          <span className="text-amber-400 font-bold truncate max-w-xs">{product.title}</span>
        </nav>

        {/* Product Details Grid */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          {/* Gallery Column */}
          <section className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-4">
              <img
                src={activeImage}
                alt={product.title}
                className="h-[380px] md:h-[460px] w-full rounded-2xl object-cover"
              />

              {product.badge && (
                <span
                  className={`absolute top-8 right-8 rounded-full px-3.5 py-1 text-xs font-bold ${
                    product.badgeColor || "bg-amber-400 text-black"
                  }`}
                >
                  {product.badge}
                </span>
              )}

              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-8 left-8 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition ${
                  isFavorited
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-black/60 text-white hover:text-red-400"
                }`}
                title="نشان کردن قطعه"
              >
                <span className="material-symbols-outlined text-xl">
                  {isFavorited ? "favorite" : "favorite_border"}
                </span>
              </button>
            </div>

            {/* Thumbnail row */}
            <div className="grid grid-cols-4 gap-3">
              {[product.image, ...P.gallery.slice(1)].map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(imgUrl)}
                  className={`overflow-hidden rounded-xl border-2 transition ${
                    activeImage === imgUrl
                      ? "border-amber-400 opacity-100"
                      : "border-zinc-800 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`تصویر ${idx + 1}`}
                    className="h-20 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Info & Buy Module Column */}
          <section className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-amber-400">
                <span className="rounded-lg bg-amber-400/10 border border-amber-400/20 px-3 py-1">
                  شرکت: {product.company || "ایران خودرو"}
                </span>
                <span className="rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-1 text-zinc-300">
                  برند: {product.brand || "ایساکو اصل"}
                </span>
                {product.code && (
                  <span className="text-zinc-500 font-mono" dir="ltr">
                    کد فنی: {product.code}
                  </span>
                )}
              </div>

              <h1 className="mt-3 text-2xl md:text-3xl font-black text-white leading-10">
                {product.title}
              </h1>
            </div>

            {/* Compatible Iranian Cars */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 mb-3">
                <span className="material-symbols-outlined text-amber-400 text-lg">
                  directions_car
                </span>
                <span>خودروهای ایرانی سازگار با این قطعه:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {compatibleCars.map((car, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-1.5 text-xs text-zinc-200"
                  >
                    ✓ {car}
                  </span>
                ))}
              </div>
            </div>

            {/* Price Box */}
            <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 shadow-[0_0_20px_rgba(212,175,55,0.06)]">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <span className="text-sm text-zinc-400">قیمت قطعه با ضمانت اصالت:</span>

                <div className="flex items-baseline gap-3">
                  {product.oldPrice && (
                    <span className="text-sm text-zinc-500 line-through">
                      {formatToman(product.oldPrice)}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="rounded-md bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                      %{toPersianDigits(discountPercent)} تخفیف
                    </span>
                  )}
                  <span className="text-3xl font-black text-amber-400">
                    {formatToman(product.price)}
                  </span>
                  <span className="text-sm text-zinc-400">تومان</span>
                </div>
              </div>

              {/* Quantity and CTA */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-1.5 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-extrabold text-white text-base">
                    {toPersianDigits(qty)}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3.5 px-6 font-extrabold text-black transition hover:brightness-110 shadow-lg shadow-amber-400/20 w-full"
                >
                  <span className="material-symbols-outlined text-xl">
                    {addedToast ? "done" : "add_shopping_cart"}
                  </span>
                  {addedToast ? "با موفقیت به سبد افزوده شد ✓" : "افزودن به سبد خرید"}
                </button>
              </div>

              {addedToast && (
                <div className="mt-4 flex items-center justify-between rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs font-bold text-emerald-400">
                  <span>این قطعه به سبد خرید اضافه شد.</span>
                  <Link to="/cart" className="underline hover:text-emerald-300">
                    مشاهده سبد و تسویه ←
                  </Link>
                </div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {P.trustBadges.map(([icon, label], idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-center"
                >
                  <span className="material-symbols-outlined text-2xl text-amber-400">
                    {icon}
                  </span>
                  <span className="mt-2 text-xs font-bold text-zinc-300">{label}</span>
                </div>
              ))}
            </div>

            {/* Specifications & Features */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-4">
              <h3 className="text-sm font-extrabold text-white border-b border-zinc-800 pb-3">
                مشخصات فنی و اصالت قطعه
              </h3>
              <div className="space-y-2.5 text-xs">
                {P.specs.map(([title, val], idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-zinc-900">
                    <span className="text-zinc-400">{title}:</span>
                    <span className="font-bold text-zinc-200">{val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <h4 className="text-xs font-bold text-amber-400 mb-2">ویژگی‌های برجسته:</h4>
                <ul className="space-y-1.5 text-xs text-zinc-300 list-disc list-inside">
                  {P.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
