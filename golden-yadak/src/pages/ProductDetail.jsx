const MAIN_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBcd2DGnJlV2Co3kSuTzkJBTEhYQkW5uLQcDeorhJZG6-0QeKdnVg9iT4cZm4e7ukr0zySlzTw2KcuA9mpqaXMaBaQGbdgPKlMbRAfxiowU8koxoxRx6EtlbgF9CnGUd9ABrxDNPzm5T40Kv4BBBwRldNVWXcrEeFiq3jTOtWAEHbxCkAcv83FEQm7USL_ljbSJKNdV-B5IR91TlmyUM6-1H6nMrDzBdakyfQ5U7KdBg1nJgsu7tlDSxXs-D9Yx4fD4BgbzLyq46nU";

const GALLERY = [
  MAIN_IMAGE,
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpKH3BHIgaqOGCy-s7uElWjm0wuo5r5oP-ZI3OxbMzWkTSYnV9sY30Yi064DIFy9GOT657LVE3YYwFISkYjrGVG_ZUWqNm2J5_zqXHX7GkiHGbPHQGZInmLsVkhDRNeK5STZJWMITRHsB5VZtJTDJIjBEmcm4THxbFmo5Q7LfzcwMghsfteDXgNUb2f14uXW7WsNcy4eZOW4fbMpvQ0rQkAlNL5Qe2qdHiiZ-DOc_g-IUDIDsSI-pShlYUANiCfeIvrTpu__oSvpg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc",
];

const COMPATIBLE_CARS = [
  "سمند (Samand)",
  "پژو ۴۰۵ (Peugeot)",
  "پژو پارس (Pars)",
  "دنا (Dena)",
];

const SPECS = [
  ["برند", "والئو (Valeo)"],
  ["کشور سازنده", "کره جنوبی (اصلی)"],
  ["تعداد فنر", "۴ فنر تقویت شده"],
];

const FEATURES = [
  "دارای هولوگرام اصالت کالا",
  "مقاومت بالا در برابر حرارت",
  "گارانتی کتبی ۱۲ ماهه",
];

const TRUST_BADGES = [
  ["verified_user", "ضمانت اصالت گلد"],
  ["electric_bolt", "ارسال VIP تهران"],
  ["headset_mic", "پشتیبانی اختصاصی"],
  ["assignment_return", "تضمین بازگشت وجه"],
];

export default function ProductDetail() {
  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-2 text-2xl font-extrabold">
            <span className="material-symbols-outlined text-amber-400">
              settings_input_component
            </span>
            یدک‌آنلاین
          </a>

          <div className="flex items-center gap-3 md:gap-5">
            <a
              href="#"
              aria-label="search"
              className="rounded-full p-2 transition hover:bg-white/10"
            >
              <span className="material-symbols-outlined">search</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-amber-400/60 hover:text-amber-300"
            >
              <span className="material-symbols-outlined">person_outline</span>
              <span className="hidden sm:inline">حساب کاربری</span>
            </a>

            <a
              href="#"
              className="relative rounded-full border border-white/10 p-2 transition hover:border-amber-400/60 hover:text-amber-300"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute -left-2 -top-2 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-bold text-black">
                ۲
              </span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-white/60">
          <a href="#" className="transition hover:text-amber-300">
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
                src={MAIN_IMAGE}
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
              {GALLERY.map((image, index) => (
                <button
                  key={image}
                  className={
                    index === 0
                      ? "overflow-hidden rounded-2xl border-2 border-amber-400"
                      : "overflow-hidden rounded-2xl border border-white/10 opacity-70 transition hover:opacity-100"
                  }
                >
                  <img
                    src={image}
                    alt=""
                    className="h-20 w-full object-cover"
                  />
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
                {COMPATIBLE_CARS.map((car) => (
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
              {SPECS.map(([label, value]) => (
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
              {FEATURES.map((feature) => (
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
          {TRUST_BADGES.map(([icon, label]) => (
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

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 bg-zinc-950">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2 text-2xl font-extrabold">
              <span className="material-symbols-outlined text-amber-400">
                settings_input_component
              </span>
              یدک‌آنلاین
            </a>

            <p className="mt-5 leading-8 text-white/70">
              تجربه خرید لوکس و مطمئن قطعات خودرو در ایران. تامین مستقیم بهترین
              برندهای جهانی با ضمانت اصالت بی قید و شرط.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">منوی دسترسی</h3>

            <ul className="mt-5 space-y-3 text-white/70">
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  فروشگاه لوکس
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  رهگیری سفارش
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  مجله خودرو
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">تماس با ما</h3>

            <ul className="mt-5 space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-400">
                  call
                </span>
                <span dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-400">
                  location_on
                </span>
                تهران، خیابان ملت، برج اداری یدک
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">عضویت در خبرنامه</h3>

            <div className="mt-5 flex gap-2">
              <input
                type="email"
                dir="ltr"
                className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-left outline-none transition focus:border-amber-400/60"
              />

              <button className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-black transition hover:bg-amber-300">
                تایید
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-white/60">
            تمامی حقوق مادی و معنوی محفوظ است. طراحی شده برای یدک‌آنلاین لوکس ©
            ۱۴۰۲
          </p>
        </div>
      </footer>
    </div>
  );
}