import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart.js";
import { BRAND } from "../lib/config.js";
import { formatToman, toPersianDigits } from "../lib/format.js";

// =============================================================
//  صفحه‌ی سبد خرید
//  آیتم‌ها از CartContext خوانده می‌شن. شامل:
//   - حالت خالی
//   - استپر تعداد (افزایش/کاهش)
//   - حذف آیتم
//   - خلاصه‌ی قیمت و دکمه‌ی تسویه (placeholder)
// =============================================================

export default function Cart() {
  const { items, totalItems, totalPrice, incrementItem, decrementItem, removeItem, clear } =
    useCart();

  const isEmpty = items.length === 0;

  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-3xl text-amber-400">
            shopping_bag
          </span>
          <h1 className="text-3xl font-extrabold">سبد خرید</h1>
        </div>

        {isEmpty ? (
          // حالت خالی
          <div className="mt-12 flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-white/10 bg-zinc-900/50 px-6 py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-white/20">
              remove_shopping_cart
            </span>

            <h2 className="mt-6 text-2xl font-extrabold">سبد خرید شما خالی است</h2>

            <p className="mt-3 max-w-md leading-8 text-white/60">
              هنوز محصولی به سبد اضافه نکرده‌اید. از فروشگاه ما دیدن کنید و اولین
              قطعه‌ی لوکس خود را انتخاب کنید.
            </p>

            <Link
              to="/products"
              className="mt-8 rounded-full bg-amber-400 px-7 py-3 font-bold text-black transition hover:bg-amber-300"
            >
              مشاهده محصولات
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* لیست آیتم‌ها */}
            <section className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-zinc-900 p-4 sm:flex-row sm:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 w-full rounded-2xl object-cover sm:h-24 sm:w-24"
                  />

                  <div className="flex-1">
                    <h3 className="text-base font-bold leading-7">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      قیمت واحد: {formatToman(item.price)} تومان
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-4">
                      {/* استپر تعداد */}
                      <div
                        dir="ltr"
                        className="flex items-center rounded-xl border border-white/10 bg-zinc-950"
                      >
                        <button
                          type="button"
                          aria-label="decrease"
                          onClick={() => decrementItem(item.id)}
                          className="px-3 py-2 transition hover:text-amber-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm font-extrabold">
                          {toPersianDigits(item.quantity)}
                        </span>
                        <button
                          type="button"
                          aria-label="increase"
                          onClick={() => incrementItem(item.id)}
                          className="px-3 py-2 transition hover:text-amber-300"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-1 text-sm text-white/50 transition hover:text-red-400"
                      >
                        <span className="material-symbols-outlined text-base">
                          delete
                        </span>
                        حذف
                      </button>
                    </div>
                  </div>

                  {/* جمع این ردیف */}
                  <div className="shrink-0 text-left sm:w-32">
                    <p className="text-xs text-white/40">جمع</p>
                    <p className="mt-1 text-lg font-extrabold text-amber-400">
                      {formatToman(item.price * item.quantity)}
                    </p>
                    <p className="text-xs text-white/50">تومان</p>
                  </div>
                </article>
              ))}

              <button
                type="button"
                onClick={clear}
                className="flex items-center gap-2 text-sm text-white/50 transition hover:text-red-400"
              >
                <span className="material-symbols-outlined text-base">
                  delete_sweep
                </span>
                خالی کردن سبد
              </button>
            </section>

            {/* خلاصه‌ی سفارش */}
            <aside className="h-fit rounded-[1.5rem] border border-white/10 bg-zinc-900 p-6 lg:sticky lg:top-24">
              <h2 className="text-lg font-extrabold">خلاصه سفارش</h2>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-white/60">تعداد کالا</dt>
                  <dd className="font-bold">{toPersianDigits(totalItems)} عدد</dd>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <dt className="text-white/60">جمع کل</dt>
                  <dd className="text-xl font-extrabold text-amber-400">
                    {formatToman(totalPrice)}
                    <span className="ms-1 text-xs font-medium text-white/50">
                      تومان
                    </span>
                  </dd>
                </div>
              </dl>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3.5 font-extrabold text-black transition hover:brightness-110"
              >
                ادامه و تسویه حساب
              </button>

              <Link
                to="/products"
                className="mt-3 flex items-center justify-center gap-2 text-sm text-white/60 transition hover:text-amber-300"
              >
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
                ادامه خرید
              </Link>

              <p className="mt-5 text-center text-[11px] leading-6 text-white/40">
                پرداخت ایمن با درگاه معتبر پس از ثبت سفارش در {BRAND.name}
              </p>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
