import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BRAND } from "../lib/config";
import { NAV_ITEMS, FOOTER_COLUMNS } from "../data/navigation";
import { useCart } from "../hooks/useCart";
import { useUserData } from "../hooks/useUserData";

export default function Homepage() {
  const { addItem } = useCart();
  const { products } = useUserData();

  const handleQuickAdd = (prodId) => {
    const p = (products || []).find((item) => item.id === prodId);
    if (p) addItem(p);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white">
      <Header navItems={NAV_ITEMS} />

      <main>
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
              <span className="material-symbols-outlined text-sm">verified</span>
              مرجع تخصصی قطعات خودروهای ایرانی
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.35]">
              مهندسی دقیق و اصالت برای خودروهای ملی و داخلی
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-8 text-white/70">
              مجموعه‌ای برگزیده از قطعات اصلی شرکتی ایساکو، سایپایدک، کروز و عظام برای خانواده پژو، دنا، تارا، شاهین، کوییک و سمند با ضمانت اصالت فیزیکی کالا.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/products"
                className="flex items-center gap-2 rounded-full bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 px-8 py-3.5 font-bold text-black transition hover:brightness-110 shadow-lg shadow-amber-400/20"
              >
                <span>مشاهده کلکسیون قطعات</span>
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </Link>

              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 font-bold transition hover:border-amber-300 hover:text-amber-300"
              >
                <span>پیگیری سفارش و پنل</span>
                <span className="material-symbols-outlined text-lg">person</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUpti7vD27KZL1rZ41e-tVLZ3nGUHrC9KnjrgK4fVbCMoLG0UQ3rqqoh5774rEp76u52OPZXjW08vwCJAaeJp_exwCbSoqbYYFSxxMa5MvmL_Rgp8TmpFxIoGCD5tiN-HIfgI8pUWdDr79-JqGFkH7WgsA6f8BkB01mKyaIIa_9riOohzJ7gbnlNCAwdLoWA4jFdbEA6K1ymSgEPcWENcWwr-NpYzLcVuNYGkzp-vnj4VElxA7_LrFh4s1coVvfouQswWKFxbm04E"
              alt={BRAND.name}
              className="h-[380px] w-full rounded-[2rem] object-cover md:h-[500px] border border-white/10 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 right-6 left-6 flex items-center justify-between text-xs text-zinc-300">
              <span className="font-bold text-amber-400">قطعات شرکتی گرید A</span>
              <span>ضمانت تعویض تا ۷ روز</span>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-16 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeW35CiuEJx7es-Dbrzc0A_MsZzaDFznoJvFuAdoDpU-syBov55CGBV4kMlxjYWPYR9WiXRNgx0vJ4dqSHp2OdZXCX2iiz31YOi9gncPILHY8Wy4FW4qdBG9Nv3j_uJBh29ieRh9dbwTwcOxbXrsw8gQQVVSCEqoP_ZeAD10d6EPi_wRYKlPvYhiVWB6uXMNwPYIAwX591-bF5uY9OS8xmX9le8kZsvtQpXt_g1ack75w22TfrXXGnkrPSvniBu0YQrxuARPnjRHU"
              alt="قطعات موتوری ایران خودرو"
              className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 w-full p-7">
              <span className="text-xs font-bold text-amber-400">خانواده ایران خودرو</span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                کیت‌های فنی و موتوری TU5 و EF7
              </h3>
              <p className="mt-2 text-sm text-white/70">
                پژو ۲۰۶، ۲۰۷، دنا پلاس توربو، تارا و سمند با گارانتی ایساکو
              </p>

              <Link
                to="/products?company=ایران خودرو"
                className="mt-4 inline-flex items-center gap-2 font-bold text-amber-300 transition hover:text-amber-200"
              >
                مشاهده قطعات ایران‌خودرو
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </Link>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-white/10 group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvaYwjhYVbDFXN2Bh01PTc3WH2B7hS0upoVDsEJzqVS2RSScaMGoPVHesIq0sfjNz0EFFD7nGXTLz5dSlIT9pkRdEN-Qmcei3zTiw6JW5Lu5q3aDyFA3w5_sGGtWb5Zx9PqskD5Yp48IgOtZGD-6G0XxxBxclX0OxyJ6vHqiOQsxyeY0-I_m_vkEYWZQSpy2ZVg1NiE7I-loC6UU_uIMa1Xj1xbmTMFI8BCZZy_-Jo46f0rZMECx2_GNBQoROs2XnpWND1r0MaH-A"
              alt="قطعات سایپا"
              className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 w-full p-7">
              <span className="text-xs font-bold text-amber-400">خانواده سایپا</span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                لوازم یدکی شاهین، کوییک و ساینا
              </h3>
              <p className="mt-2 text-sm text-white/70">
                قطعات سیستم تعلیق، کلاچ و مصرفی شرکتی سایپایدک
              </p>

              <Link
                to="/products?company=سایپا"
                className="mt-4 inline-flex items-center gap-2 font-bold text-amber-300 transition hover:text-amber-200"
              >
                مشاهده قطعات سایپا
                <span className="material-symbols-outlined text-lg">arrow_back</span>
              </Link>
            </div>
          </article>
        </section>

        {/* Partners: Domestic Auto Manufacturers and Parts Makers */}
        <section className="border-y border-white/10 bg-zinc-950/70">
          <div className="mx-auto w-full max-w-7xl px-4 py-8">
            <p className="text-center text-xs font-bold tracking-widest text-zinc-400">
              تأمین مستقیم از برترین تولیدکنندگان قطعات خودروهای داخلی
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center text-base md:text-lg font-extrabold text-white/80 sm:grid-cols-3 md:grid-cols-6">
              {[
                { name: "ایران خودرو", query: "ایران خودرو" },
                { name: "سایپا", query: "سایپا" },
                { name: "ایساکو", query: "ایساکو" },
                { name: "کروز", query: "کروز" },
                { name: "عظام", query: "عظام" },
                { name: "والئو فرانسه", query: "والئو" },
              ].map((brand) => (
                <Link
                  key={brand.name}
                  to={`/products?brand=${brand.query}`}
                  className="rounded-xl border border-white/5 bg-zinc-900/60 py-3 transition hover:border-amber-400/40 hover:text-amber-300"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers for Iranian Cars */}
        <section className="mx-auto w-full max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-amber-400">
                auto_awesome
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                  پیشنهادات ویژه قطعات منتخب
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  تخفیف ویژه دوره‌ای بر روی قطعات پرمصرف خودروهای داخلی
                </p>
              </div>
            </div>

            <Link
              to="/products"
              className="text-sm font-bold text-amber-300 transition hover:text-amber-200"
            >
              مشاهده همه تخفیف‌ها ←
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                id: "timing-belt-kit-isaco-ef7",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeW35CiuEJx7es-Dbrzc0A_MsZzaDFznoJvFuAdoDpU-syBov55CGBV4kMlxjYWPYR9WiXRNgx0vJ4dqSHp2OdZXCX2iiz31YOi9gncPILHY8Wy4FW4qdBG9Nv3j_uJBh29ieRh9dbwTwcOxbXrsw8gQQVVSCEqoP_ZeAD10d6EPi_wRYKlPvYhiVWB6uXMNwPYIAwX591-bF5uY9OS8xmX9le8kZsvtQpXt_g1ack75w22TfrXXGnkrPSvniBu0YQrxuARPnjRHU",
                title: "کیت تسمه تایم ایساکو - دنا پلاس، سورن و سمند EF7",
                old: "۲,۵۰۰,۰۰۰",
                price: "۲,۱۵۰,۰۰۰",
                badge: "تخفیف ویژه",
              },
              {
                id: "spark-plug-bosch-shahin-quick",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc",
                title: "شمع سوزنی ایریدیوم بوش اصل - شاهین، کوییک و ساینا",
                old: "۱,۵۵۰,۰۰۰",
                price: "۱,۳۵۰,۰۰۰",
                badge: "اصالت تضمینی",
              },
              {
                id: "brake-disc-crouse-dena-pars",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpKH3BHIgaqOGCy-s7uElWjm0wuo5r5oP-ZI3OxbMzWkTSYnV9sY30Yi064DIFy9GOT657LVE3YYwFISkYjrGVG_ZUWqNm2J5_zqXHX7GkiHGbPHQGZInmLsVkhDRNeK5STZJWMITRHsB5VZtJTDJIjBEmcm4THxbFmo5Q7LfzcwMghsfteDXgNUb2f14uXW7WsNcy4eZOW4fbMpvQ0rQkAlNL5Qe2qdHiiZ-DOc_g-IUDIDsSI-pShlYUANiCfeIvrTpu__oSvpg",
                title: "دیسک ترمز خنک‌شونده سوراخ‌دار کروز - دنا پلاس و پارس ELX",
                old: "۳,۲۰۰,۰۰۰",
                price: "۲,۶۸۰,۰۰۰",
                badge: "خنک‌شونده",
              },
            ].map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <Link to={`/product?id=${item.id}`}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-60 w-full object-cover transition hover:scale-105 duration-300"
                      />
                    </Link>

                    <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <Link to={`/product?id=${item.id}`}>
                      <h3 className="min-h-14 text-base font-bold leading-7 text-white hover:text-amber-400 transition">
                        {item.title}
                      </h3>
                    </Link>

                    <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-xs text-white/45 line-through">{item.old}</span>
                      <span className="text-xl font-extrabold text-amber-400">
                        {item.price}
                      </span>
                      <span className="text-xs text-white/70">تومان</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleQuickAdd(item.id)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3 text-xs font-extrabold text-black hover:brightness-110 transition"
                  >
                    <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                    خرید سریع این قطعه
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Professional Selection */}
        <section className="border-y border-white/10 bg-zinc-950 py-16">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-amber-400">
                  workspace_premium
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold">قطعات پرمصرف و تقویت‌شده</h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    محبوب‌ترین انتخاب‌های مکانیک‌ها و تیونرهای خودروهای داخلی
                  </p>
                </div>
              </div>

              <Link
                to="/products"
                className="text-xs font-bold text-amber-300 transition hover:text-amber-200"
              >
                مشاهده تمام قطعات ←
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {[
                {
                  id: "clutch-kit-valeo-tu5",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcd2DGnJlV2Co3kSuTzkJBTEhYQkW5uLQcDeorhJZG6-0QeKdnVg9iT4cZm4e7ukr0zySlzTw2KcuA9mpqaXMaBaQGbdgPKlMbRAfxiowU8koxoxRx6EtlbgF9CnGUd9ABrxDNPzm5T40Kv4BBBwRldNVWXcrEeFiq3jTOtWAEHbxCkAcv83FEQm7USL_ljbSJKNdV-B5IR91TlmyUM6-1H6nMrDzBdakyfQ5U7KdBg1nJgsu7tlDSxXs-D9Yx4fD4BgbzLyq46nU",
                  badge: "اصلی والئو",
                  badgeStyle: "bg-amber-400 text-black",
                  title: "کیت کلاچ کامل والئو (Valeo) جعبه آبی - پژو ۲۰۶ و ۲۰۷",
                  price: "۴,۹۵۰,۰۰۰",
                },
                {
                  id: "headlight-sport-207-crouse",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48",
                  badge: "فابریک کروز",
                  badgeStyle: "border border-white/10 bg-white/5 text-white/80",
                  title: "چراغ جلو کریستالی اسپرت نئون‌دار کروز - مخصوص پژو ۲۰۷",
                  price: "۶,۴۰۰,۰۰۰",
                },
              ].map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 sm:flex-row"
                >
                  <Link to={`/product?id=${item.id}`} className="sm:w-2/5 shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-60 sm:h-full w-full object-cover"
                    />
                  </Link>

                  <div className="flex flex-col justify-between p-6 flex-1">
                    <div>
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${item.badgeStyle}`}
                      >
                        {item.badge}
                      </span>

                      <Link to={`/product?id=${item.id}`}>
                        <h3 className="mt-3 text-lg font-bold leading-7 text-white hover:text-amber-400 transition">
                          {item.title}
                        </h3>
                      </Link>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/5 pt-4">
                      <span className="text-xl font-extrabold text-amber-400">
                        {item.price}
                        <span className="text-xs font-medium text-white/70"> تومان</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => handleQuickAdd(item.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:bg-amber-300"
                        title="افزودن به سبد"
                      >
                        <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Features */}
        <section className="mx-auto w-full max-w-7xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["verified", "ضمانت اصالت هولوگرام‌دار", "ارائه بارکد و لیبل رسمی ایساکو و سایپا برای جلوگیری از قطعات تقلبی"],
              ["local_shipping", "ارسال اکسپرس ۲۴ ساعته", "تحویل سریع با تیپاکس، پیک فوری و پست پیشتاز به سراسر کشور"],
              ["handyman", "مشاوره فنی رایگان", "راهنمایی مهندسی جهت انتخاب قطعه مناسب با شماره شاسی خودرو"],
              ["assignment_return", "۷ روز مهلت تعویض و بازگشت", "آرامش خاطر با ضمانت بازگشت وجه در صورت عدم همخوانی"],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-white/10 bg-zinc-950 p-6"
              >
                <span className="material-symbols-outlined text-3xl text-amber-400">
                  {icon}
                </span>

                <h3 className="mt-4 text-base font-bold text-white">{title}</h3>

                <p className="mt-2 text-xs leading-6 text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer columns={FOOTER_COLUMNS} />
    </div>
  );
}
