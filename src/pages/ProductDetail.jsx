import Header from "../components/Header";
import Footer from "../components/Footer";
import { PRODUCT_DETAIL as P } from "../data/productDetail";
import { CONTACT } from "../lib/config";

export default function ProductDetail() {
  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-white/60">
          <a href="/" className="transition hover:text-amber-300">
            خانه
          </a>

          <span className="material-symbols-outlined text-base">
            chevron_left
          </span>

          <a href="#" className="transition hover:text-amber-300">
            قطعات فنی
          </a>

          <span className="material-symbols-outlined text-base">
            chevron_left
          </span>

          <span className="text-white/90">دیسک و صفحه کلاچ والئو</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          {/* گالری تصاویر */}
          <section>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={P.mainImage}
                alt="کیت کلاچ والئو (VALEO) مدل پریمیوم"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />

              <div className="absolute left-4 top-4 flex gap-2">
                <button
                  aria-label="favorite"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur transition hover:text-amber-300"
                >
                  <span className="material-symbols-outlined">
                    favorite_border
                  </span>
                </button>

                <button
                  aria-label="share"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 backdrop-blur transition hover:text-amber-300"
                >
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {P.gallery.map((image, index) => (
                <button
                  key={image}
                  className={
                    index === 0
                      ? "overflow-hidden rounded-2xl border-2 border-amber-400"
                      : "overflow-hidden rounded-2xl border border-white/10 opacity-70 transition hover:opacity-100"
                  }
                >
                  <img src={image} alt="" className="h-20 w-full object-cover" />
                </button>
              ))}
            </div>
          </section>

          {/* اطلاعات محصول */}
          <section>
            <span className="inline-block rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-black">
              محصول ویژه
            </span>

            <div className="mt-4 flex items-center gap-1 text-amber-400">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star_half</span>
              <span className="ms-2 text-sm text-white/60">(۴.۸)</span>
            </div>

            <h1 className="mt-4 text-2xl font-extrabold leading-[1.6] md:text-3xl">
              کیت کلاچ والئو (VALEO) مدل پریمیوم مناسب خودروهای گروه ایران‌خودرو
            </h1>

            <p className="mt-4 leading-8 text-white/70">
              این کیت کلاچ اصلی والئو با تکنولوژی کره جنوبی ساخته شده و برای
              ارائه نرمی فوق‌العاده در کلاچ‌گیری و انتقال قدرت بهینه در
              ترافیک‌های سنگین طراحی شده است.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-900 p-5">
              <div className="flex items-center gap-2 font-extrabold">
                <span className="material-symbols-outlined text-amber-400">
                  directions_car
                </span>
                خودروهای سازگار
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {P.compatibleCars.map((car) => (
                  <span
                    key={car}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {car}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-lg text-white/40 line-through">
                ۵,۴۰۰,۰۰
              </span>

              <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold">
                ۱۲٪ تخفیف
              </span>

              <span className="text-3xl font-extrabold text-amber-400">
                ۴,۷۵۰,۰۰۰
                <span className="text-base font-medium text-white/70"> تومان</span>
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-emerald-400">
              <span className="material-symbols-outlined">check_circle</span>
              موجود در انبار مرکزی (تحویل فوری)
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div
                dir="ltr"
                className="flex items-center rounded-xl border border-white/10 bg-zinc-900"
              >
                <button className="px-4 py-3 transition hover:text-amber-300">
                  -
                </button>

                <span className="w-10 text-center font-extrabold">۱</span>

                <button className="px-4 py-3 transition hover:text-amber-300">
                  +
                </button>
              </div>

              <button className="flex min-w-[220px] flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3.5 font-extrabold text-black transition hover:brightness-110">
                <span className="material-symbols-outlined">shopping_bag</span>
                افزودن به سبد خرید
              </button>
            </div>
          </section>
        </div>

        {/* مشخصات و ویژگی‌ها */}
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-zinc-900 p-6">
            <h2 className="text-lg font-extrabold">مشخصات فنی</h2>

            <dl className="mt-5 divide-y divide-white/5">
              {P.specs.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <dt className="text-white/60">{label}</dt>
                  <dd className="font-bold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-zinc-900 p-6">
            <h2 className="text-lg font-extrabold">ویژگی‌های ممتاز</h2>

            <ul className="mt-5 space-y-4">
              {P.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-emerald-400">
                    verified
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* نشان‌های اعتماد */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {P.trustBadges.map(([icon, label]) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900 p-5"
            >
              <span className="material-symbols-outlined text-2xl text-amber-400">
                {icon}
              </span>
              <span className="font-bold">{label}</span>
            </div>
          ))}
        </section>
      </main>

      <Footer
        columns={[
          {
            title: "منوی دسترسی",
            links: [
              { label: "فروشگاه لوکس", href: "#" },
              { label: "رهگیری سفارش", href: "#" },
              { label: "مجله خودرو", href: "#" },
            ],
          },
          {
            title: "تماس با ما",
            links: [
              { label: CONTACT.phone, href: "tel:" + CONTACT.phone },
              { label: CONTACT.address, href: "#" },
            ],
          },
        ]}
        description="تجربه خرید لوکس و مطمئن قطعات خودرو در ایران. تامین مستقیم بهترین برندهای جهانی با ضمانت اصالت بی قید و شرط."
        aside={
          <div>
            <h3 className="text-lg font-extrabold">عضویت در خبرنامه</h3>

            <div className="mt-5 flex gap-2">
              <input
                type="email"
                dir="ltr"
                placeholder="ایمیل شما"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-left outline-none transition focus:border-amber-400/60"
              />

              <button className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-black transition hover:bg-amber-300">
                تایید
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
}
