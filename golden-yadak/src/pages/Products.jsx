const PRODUCTS = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc",
    badge: "اصالت تضمینی",
    badgeColor: "bg-emerald-500 text-white",
    title: "شمع سوزنی ایریدیوم برند بوش - سری پلاتینیوم آلمان",
    priceLabel: "قیمت واحد:",
    price: "۱,۲۵۰,۰۰۰",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpKH3BHIgaqOGCy-s7uElWjm0wuo5r5oP-ZI3OxbMzWkTSYnV9sY30Yi064DIFy9GOT657LVE3YYwFISkYjrGVG_ZUWqNm2J5_zqXHX7GkiHGbPHQGZInmLsVkhDRNeK5STZJWMITRHsB5VZtJTDJIjBEmcm4THxbFmo5Q7LfzcwMghsfteDXgNUb2f14uXW7WsNcy4eZOW4fbMpvQ0rQkAlNL5Qe2qdHiiZ-DOc_g-IUDIDsSI-pShlYUANiCfeIvrTpu__oSvpg",
    badge: "ویژه",
    badgeColor: "bg-amber-400 text-black",
    title: "دیسک ترمز خنک‌شونده برمبو - مدل High Performance",
    priceLabel: "قیمت جفت:",
    price: "۸,۹۰۰,۰۰۰",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_9MCj8nW40lYUethz4GfwgrVcFslwB8X-j4RCSZ9IWSFjyA0GxM-w7oKvBqoFDoIGYd0YsSbHVLfMn4vDncA9dN8MDVkuuKwle6l4JuGwDynGK8k-vDkYRm5TT4daAl3JPOVXPEMkqzEeSyMazeiLk-_3F8CMeoHE63skVbWBI7f0TD5FonG2M6svx_tJIffk5sHmDDQ-Cgkoz3hxdN9kXoH8twoPUigAp2H1-bIkHxWH_hqesY2qlBa4qQfDw8sbM_XrFfCVBE",
    badge: "۱۵٪-",
    badgeColor: "bg-red-500 text-white",
    title: "روغن موتور تمام سنتتیک کاسترول - Magnatec لوکس",
    oldPrice: "۱,۳۵۰,۰۰",
    price: ",۱۴۷,۵۰۰",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48",
    title: "فیلتر روغن اورجینال بی ام و - مخصوص سری ۷ و ۵",
    priceLabel: "قیمت واحد:",
    price: "۴۵۰,۰۰",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcd2DGnJlV2Co3kSuTzkJBTEhYQkW5uLQcDeorhJZG6-0QeKdnVg9iT4cZm4e7ukr0zySlzTw2KcuA9mpqaXMaBaQGbdgPKlMbRAfxiowU8koxoxRx6EtlbgF9CnGUd9ABrxDNPzm5T40Kv4BBBwRldNVWXcrEeFiq3jTOtWAEHbxCkAcv83FEQm7USL_ljbSJKNdV-B5IR91TlmyUM6-1H6nMrDzBdakyfQ5U7KdBg1nJgsu7tlDSxXs-D9Yx4fD4BgbzLyq46nU",
    badge: "نایاب",
    badgeColor: "bg-orange-500 text-white",
    title: "کیت کلاچ کامل والئو (Valeo) جعبه آبی - ساخت فرانسه",
    priceLabel: "قیمت کیت:",
    price: "۶,۸۰۰,۰۰۰",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOdKme51mkE6otXDJZ8tBYYo1O6bMWiFyEOCNZ5PpHfca0awiDPPgoKXiSxKFS11w0udtKbt8fA62D8CGwT4UlnzCku1SKRMTVXjRytVlBe2I7NN6UqIJ1qBbiB2IFF8bNXunj1xEN6d1-iOr0ysNOWeMkaTgphdCsmO7Yfe-bdNHF2c06ACrnBOo5ggHA0tIsCWClurBlYWQzLTnAgHmS7-xZHboOcox7v5ooo5bfhRPyjKNZhH8lIsUbqaeU-mDlACr1k3XssCA",
    badge: "گارانتی طلایی",
    badgeColor: "bg-amber-400 text-black",
    title: "باتری ۷۴ آمپر سوزوکی - تکنولوژی ژاپن با ۱۸ ماه ضمانت",
    priceLabel: "قیمت با داغی:",
    price: "۳,۴۰,۰۰۰",
  },
];

const CREDITS = ["PREMIUM", "MEMBER", "ORIGINAL", "CERTIFIED"];

export default function Products() {
  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a href="/" className="flex items-center gap-2 text-2xl font-extrabold">
            <span className="material-symbols-outlined text-amber-400">
              settings_input_component
            </span>
            لوکسیدک
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
              <span className="hidden sm:inline">پنل کاربری</span>
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
                <article
                  key={product.title}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-56 w-full object-cover"
                    />

                    {product.badge && (
                      <span
                        className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${product.badgeColor}`}
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
                        <span className="text-sm text-white/60">
                          {product.priceLabel}
                        </span>
                      )}

                      {product.oldPrice && (
                        <span className="text-sm text-white/40 line-through">
                          {product.oldPrice}
                        </span>
                      )}

                      <span className="text-xl font-extrabold text-amber-400">
                        {product.price}
                      </span>

                      <span className="text-sm text-white/70">تومان</span>
                    </div>

                    <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3 font-extrabold text-black transition hover:brightness-110">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                      افزودن به سبد خرید
                    </button>
                  </div>
                </article>
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

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2 text-2xl font-extrabold">
              <span className="material-symbols-outlined text-amber-400">
                settings_input_component
              </span>
              لوکسیدک
            </a>

            <p className="mt-5 leading-8 text-white/70">
              مرجع تخصصی تامین قطعات یدکی خودروهای لوکس و وارداتی با
              استانداردهای بین‌المللی و تضمین کیفیت طلایی.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <span className="material-symbols-outlined">share</span>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <span className="material-symbols-outlined">call</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">خدمات لوکس</h3>

            <ul className="mt-5 space-y-3 text-white/70">
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  مشاوره فنی VIP
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  سفارش قطعات نایاب
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  گارانتی طلایی تعویض
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  ارسال سریع با پیک اختصاصی
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">دسته‌بندی‌ها</h3>

            <ul className="mt-5 space-y-3 text-white/70">
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  کیت بدنه تیونینگ
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  سیستم‌های اگزوز لوکس
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  رینگ و لاستیک اورجینال
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  قطعات فنی موتور
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">اعتبارات</h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {CREDITS.map((credit) => (
                <span
                  key={credit}
                  className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold tracking-widest text-amber-300"
                >
                  {credit}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-white/60 md:flex-row">
            <p>تمامی حقوق مادی و معنوی برای مجموعه لوکس‌یدک محفوظ است. ۱۴۰۲ ©</p>

            <div className="flex items-center gap-5">
              <a href="#" className="transition hover:text-amber-300">
                شرایط و ضوابط
              </a>

              <a href="#" className="transition hover:text-amber-300">
                همکاری با ما
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}