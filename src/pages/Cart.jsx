import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart.js";
import { formatToman, toPersianDigits } from "../lib/format.js";

export default function Cart() {
  const { items, totalItems, totalPrice, incrementItem, decrementItem, removeItem, clear } =
    useCart();

  const isEmpty = items.length === 0;

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 flex-1">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-amber-400">
              shopping_bag
            </span>
            <h1 className="text-2xl font-extrabold">سبد خرید شما</h1>
            {!isEmpty && (
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                {toPersianDigits(totalItems)} قلم کالا
              </span>
            )}
          </div>

          {!isEmpty && (
            <button
              type="button"
              onClick={clear}
              className="text-xs text-zinc-500 hover:text-red-400 transition"
            >
              خالی کردن سبد خرید
            </button>
          )}
        </div>

        {isEmpty ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-zinc-800 bg-zinc-950 px-6 py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-zinc-700">
              remove_shopping_cart
            </span>

            <h2 className="mt-6 text-2xl font-extrabold text-white">سبد خرید شما در حال حاضر خالی است</h2>

            <p className="mt-3 max-w-md leading-7 text-zinc-400 text-sm">
              هیچ قطعه‌ای در سبد خرید شما نیست. کاتالوگ قطعات خودروهای ایران‌خودرو و سایپا را بررسی کرده و قطعه مورد نیاز را اضافه کنید.
            </p>

            <Link
              to="/products"
              className="mt-8 rounded-full bg-amber-400 px-8 py-3 text-sm font-bold text-black transition hover:bg-amber-300"
            >
              مشاهده محصولات و قطعات
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* List of items */}
            <section className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-20 rounded-xl object-cover border border-zinc-800 shrink-0"
                    />

                    <div>
                      <Link
                        to={`/product?id=${item.id}`}
                        className="font-bold text-white hover:text-amber-400 transition text-sm leading-6 line-clamp-2"
                      >
                        {item.title}
                      </Link>

                      <div className="mt-1.5 flex items-center gap-3 text-xs text-zinc-400">
                        <span>قیمت واحد:</span>
                        <span className="text-zinc-200 font-bold">
                          {formatToman(item.price)} تومان
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:self-center pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800">
                    {/* Stepper */}
                    <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => decrementItem(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded text-zinc-400 hover:text-white"
                        title="کاهش"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-white">
                        {toPersianDigits(item.qty)}
                      </span>
                      <button
                        type="button"
                        onClick={() => incrementItem(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded text-zinc-400 hover:text-white"
                        title="افزایش"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-left">
                      <span className="block text-sm font-extrabold text-amber-400">
                        {formatToman(item.price * item.qty)} تومان
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-zinc-500 hover:text-red-400 p-1"
                      title="حذف از سبد"
                    >
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </article>
              ))}
            </section>

            {/* Checkout Invoice Card */}
            <aside>
              <div className="sticky top-24 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-6">
                <h3 className="text-base font-extrabold text-white border-b border-zinc-800 pb-4">
                  خلاصه فاکتور خرید
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>مجموع قیمت قطعات:</span>
                    <span className="font-bold text-white">{formatToman(totalPrice)} تومان</span>
                  </div>

                  <div className="flex justify-between text-zinc-400">
                    <span>تعداد اقلام:</span>
                    <span className="font-bold text-white">{toPersianDigits(totalItems)} عدد</span>
                  </div>

                  <div className="flex justify-between text-zinc-400">
                    <span>هزینه ارسال:</span>
                    <span className="text-amber-400 font-bold">محاسبه در مرحله بعد</span>
                  </div>

                  <div className="border-t border-zinc-800 pt-4 flex justify-between items-baseline">
                    <span className="text-sm font-extrabold text-white">مبلغ قابل پرداخت:</span>
                    <div className="text-left">
                      <span className="text-xl font-black text-amber-400">
                        {formatToman(totalPrice)}
                      </span>
                      <span className="text-xs text-zinc-400 mr-1">تومان</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3.5 text-sm font-extrabold text-black transition hover:brightness-110 shadow-lg shadow-amber-400/20"
                >
                  <span>ادامه جهت ثبت آدرس و تسویه</span>
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                </Link>

                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3.5 text-center text-xs text-zinc-400 space-y-1">
                  <p className="text-amber-300 font-bold">🚚 ارسال اکسپرس ۲۴ ساعته</p>
                  <p>تمامی قطعات دارای پلمب و گارانتی اصالت هستند.</p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
