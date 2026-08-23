import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { PRODUCTS, PRODUCT_CREDITS } from "../data/products";

export default function Products() {
  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* سایدبار فیلترها */}
          <aside className="h-fit rounded-[1.75rem] border border-white/10 bg-zinc-900 p-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-amber-400">
                filter_list
              </span>
              <h2 className="text-lg font-extrabold">فیلتر پیشرفته</h2>
            </div>

            <div className="mt-6">
              <h3 className="font-extrabold text-white/80">دسته‌بندی</h3>

              <ul className="mt-4 space-y-3 text-white/70">
                <li>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 accent-amber-400" />
                    قطعات موتوری
                  </label>
                </li>

                <li>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 accent-amber-400" />
                    سیستم تعلیق
                  </label>
                </li>

                <li>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 accent-amber-400" />
                    تجهیزات روشنایی
                  </label>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-extrabold text-white/80">محدوده قیمت</h3>

              <ul className="mt-4 space-y-3 text-white/70">
                <li>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 accent-amber-400" />
                    ۱۰ میلیون +
                  </label>
                </li>

                <li>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 accent-amber-400" />
                    ۱ میلیون
                  </label>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-extrabold text-white/80">برندهای تجاری</h3>

              <ul className="mt-4 space-y-3 text-white/70">
                <li>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 accent-amber-400" />
                    بوش (Bosch)
                  </label>
                </li>

                <li>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="h-4 w-4 accent-amber-400" />
                    برمبو (Brembo)
                  </label>
                </li>
              </ul>
            </div>

            <button className="mt-8 w-full rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3 font-extrabold text-black transition hover:brightness-110">
              اعمال فیلترها
            </button>
          </aside>

          {/* لیست محصولات */}
          <section>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-sm text-white/70">
                <span>ترتیب بر اساس:</span>

                <button className="rounded-full bg-amber-400 px-4 py-1.5 font-bold text-black">
                  محبوب‌ترین
                </button>

                <button className="rounded-full border border-white/10 px-4 py-1.5 transition hover:border-amber-400/60">
                  گران‌ترین
                </button>

                <button className="rounded-full border border-white/10 px-4 py-1.5 transition hover:border-amber-400/60">
                  جدیدترین
                </button>
              </div>

              <span className="text-sm text-white/60">
                نمایش ۱۲ محصول از ۴۵۰
              </span>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* صفحه‌بندی */}
            <nav className="mt-10 flex items-center justify-center gap-2">
              <button
                aria-label="previous"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400/60"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>

              <button className="h-10 w-10 rounded-full bg-amber-400 font-extrabold text-black">
                ۱
              </button>

              <button className="h-10 w-10 rounded-full border border-white/10 transition hover:border-amber-400/60">
                ۲
              </button>

              <button className="h-10 w-10 rounded-full border border-white/10 transition hover:border-amber-400/60">
                ۳
              </button>

              <button
                aria-label="next"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400/60"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </nav>
          </section>
        </div>
      </main>

      <Footer
        columns={[
          {
            title: "خدمات لوکس",
            links: [
              { label: "مشاوره فنی VIP", href: "#" },
              { label: "سفارش قطعات نایاب", href: "#" },
              { label: "گارانتی طلایی تعویض", href: "#" },
              { label: "ارسال سریع با پیک اختصاصی", href: "#" },
            ],
          },
          {
            title: "دسته‌بندی‌ها",
            links: [
              { label: "کیت بدنه تیونینگ", href: "#" },
              { label: "سیستم‌های اگزوز لوکس", href: "#" },
              { label: "رینگ و لاستیک اورجینال", href: "#" },
              { label: "قطعات فنی موتور", href: "#" },
            ],
          },
        ]}
        description="مرجع تخصصی تامین قطعات یدکی خودروهای لوکس و وارداتی با استانداردهای بین‌المللی و تضمین کیفیت طلایی."
        aside={
          <div>
            <h3 className="text-lg font-extrabold">اعتبارات</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {PRODUCT_CREDITS.map((credit) => (
                <span
                  key={credit}
                  className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold tracking-widest text-amber-300"
                >
                  {credit}
                </span>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
