export default function Homepage() {
  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex items-center justify-between gap-4 py-4">
            <a href="#" className="flex items-center gap-2 text-2xl font-extrabold">
              <span className="material-symbols-outlined text-amber-400">diamond</span>
              لوکس‌یدک
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
                <span className="material-symbols-outlined">account_circle</span>
                <span className="hidden sm:inline">پنل کاربری</span>
              </a>

              <a
                href="#"
                className="relative rounded-full border border-white/10 p-2 transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className="absolute -left-2 -top-2 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-bold text-black">
                  ۲
                </span>
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 py-4 text-sm text-white/80">
            <a href="#" className="flex items-center gap-1 transition hover:text-amber-300">
              <span className="material-symbols-outlined text-base">menu</span>
              مجموعه قطعات
            </a>

            <a href="#" className="transition hover:text-amber-300">
              خودروهای آلمانی
            </a>

            <a href="#" className="transition hover:text-amber-300">
              برندهای ایتالیایی
            </a>

            <a href="#" className="transition hover:text-amber-300">
              قطعات سفارشی
            </a>

            <a href="#" className="transition hover:text-amber-300">
              اکسسوری لوکس
            </a>

            <a href="#" className="flex items-center gap-1 transition hover:text-amber-300">
              <span className="material-symbols-outlined text-base">stars</span>
              باشگاه مشتریان VIP
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-bold tracking-[0.35em] text-amber-400">
              PREMIUM QUALITY
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.35] md:text-6xl">
              مهندسی دقیق برای برترین خودروها
            </h1>

            <p className="max-w-xl text-lg leading-8 text-white/70">
              مجموعه‌ای برگزیده از قطعات اصلی و کمیاب برای کسانی که به دنبال کمال در
              جزئیات خودروی خود هستند.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-amber-400 px-7 py-3 font-bold text-black transition hover:bg-amber-300"
              >
                مشاهده کلکسیون
              </a>

              <a
                href="#"
                className="rounded-full border border-white/20 px-7 py-3 font-bold transition hover:border-amber-300 hover:text-amber-300"
              >
                خدمات VIP
              </a>
            </div>
          </div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUpti7vD27KZL1rZ41e-tVLZ3nGUHrC9KnjrgK4fVbCMoLG0UQ3rqqoh5774rEp76u52OPZXjW08vwCJAaeJp_exwCbSoqbYYFSxxMa5MvmL_Rgp8TmpFxIoGCD5tiN-HIfgI8pUWdDr79-JqGFkH7WgsA6f8BkB01mKyaIIa_9riOohzJ7gbnlNCAwdLoWA4jFdbEA6K1ymSgEPcWENcWwr-NpYzLcVuNYGkzp-vnj4VElxA7_LrFh4s1coVvfouQswWKFxbm04E"
            alt="لوکس‌یدک"
            className="h-[420px] w-full rounded-[2rem] object-cover md:h-[560px]"
          />
        </section>

        {/* Category Cards */}
        <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-16 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-[2rem]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeW35CiuEJx7es-Dbrzc0A_MsZzaDFznoJvFuAdoDpU-syBov55CGBV4kMlxjYWPYR9WiXRNgx0vJ4dqSHp2OdZXCX2iiz31YOi9gncPILHY8Wy4FW4qdBG9Nv3j_uJBh29ieRh9dbwTwcOxbXrsw8gQQVVSCEqoP_ZeAD10d6EPi_wRYKlPvYhiVWB6uXMNwPYIAwX591-bF5uY9OS8xmX9le8kZsvtQpXt_g1ack75w22TfrXXGnkrPSvniBu0YQrxuARPnjRHU"
              alt="تایرهای پرفورمنس"
              className="h-80 w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

            <div className="absolute bottom-0 w-full p-7">
              <h3 className="text-2xl font-extrabold">تایرهای پرفورمنس</h3>
              <p className="mt-2 text-white/70">High Speed Stability</p>

              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 font-bold text-amber-300 transition hover:text-amber-200"
              >
                مشاهده جزئیات
                <span className="material-symbols-outlined">arrow_back</span>
              </a>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvaYwjhYVbDFXN2Bh01PTc3WH2B7hS0upoVDsEJzqVS2RSScaMGoPVHesIq0sfjNz0EFFD7nGXTLz5dSlIT9pkRdEN-Qmcei3zTiw6JW5Lu5q3aDyFA3w5_sGGtWb5Zx9PqskD5Yp48IgOtZGD-6G0XxxBxclX0OxyJ6vHqiOQsxyeY0-I_m_vkEYWZQSpy2ZVg1NiE7I-loC6UU_uIMa1Xj1xbmTMFI8BCZZy_-Jo46f0rZMECx2_GNBQoROs2XnpWND1r0MaH-A"
              alt="کیت‌های آیرودینامیک"
              className="h-80 w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

            <div className="absolute bottom-0 w-full p-7">
              <h3 className="text-2xl font-extrabold">کیت‌های آیرودینامیک</h3>
              <p className="mt-2 text-white/70">Carbon Fiber Series</p>

              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 font-bold text-amber-300 transition hover:text-amber-200"
              >
                کاتالوگ محصولات
                <span className="material-symbols-outlined">arrow_back</span>
              </a>
            </div>
          </article>
        </section>

        {/* Partners */}
        <section className="border-y border-white/10 bg-zinc-900/60">
          <div className="mx-auto w-full max-w-7xl px-4 py-10">
            <p className="text-center text-sm text-white/60">شرکای تجاری</p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center text-xl font-extrabold text-white/70 sm:grid-cols-3 md:grid-cols-6">
              <a href="#" className="transition hover:text-white">
                PORSCHE
              </a>

              <a href="#" className="transition hover:text-white">
                BMW
              </a>

              <a href="#" className="transition hover:text-white">
                AUDI
              </a>

              <a href="#" className="transition hover:text-white">
                MERCEDES
              </a>

              <a href="#" className="transition hover:text-white">
                MASERATI
              </a>

              <a href="#" className="transition hover:text-white">
                FERRARI
              </a>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="mx-auto w-full max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-amber-400">
                auto_awesome
              </span>

              <h2 className="text-3xl font-extrabold">پیشنهادات ویژه طلایی</h2>
            </div>

            <div className="text-lg font-bold text-amber-300">
              فرصت‌های محدود
              <span dir="ltr" className="ms-3 inline-block rounded-xl border border-white/10 bg-zinc-900 px-4 py-2">
                ۴۲:۱۸:۰۵
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900">
              <div className="relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48"
                  alt="فیلتر روغن اورجینال سری M"
                  className="h-64 w-full object-cover"
                />

                <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold">
                  LIMITED
                </span>
              </div>

              <div className="p-6">
                <h3 className="min-h-14 text-lg font-bold leading-7">
                  فیلتر روغن اورجینال سری M
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-white/45 line-through">۴,۵۰۰,۰۰۰</span>
                  <span className="text-2xl font-extrabold text-amber-400">
                    ۳,۸۰۰,۰۰۰
                  </span>
                  <span className="text-white/70">تومان</span>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900">
              <div className="relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc"
                  alt="شمع ایریدیوم لیزری - سفارش آلمان"
                  className="h-64 w-full object-cover"
                />

                <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold">
                  LIMITED
                </span>
              </div>

              <div className="p-6">
                <h3 className="min-h-14 text-lg font-bold leading-7">
                  شمع ایریدیوم لیزری - سفارش آلمان
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-white/45 line-through">۱,۲۰۰,۰۰۰</span>
                  <span className="text-2xl font-extrabold text-amber-400">
                    ۱,۰۵۰,۰۰۰
                  </span>
                  <span className="text-white/70">تومان</span>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900">
              <div className="relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpKH3BHIgaqOGCy-s7uElWjm0wuo5r5oP-ZI3OxbMzWkTSYnV9sY30Yi064DIFy9GOT657LVE3YYwFISkYjrGVG_ZUWqNm2J5_zqXHX7GkiHGbPHQGZInmLsVkhDRNeK5STZJWMITRHsB5VZtJTDJIjBEmcm4THxbFmo5Q7LfzcwMghsfteDXgNUb2f14uXW7WsNcy4eZOW4fbMpvQ0rQkAlNL5Qe2qdHiiZ-DOc_g-IUDIDsSI-pShlYUANiCfeIvrTpu__oSvpg"
                  alt="دیسک ترمز کربن-سرامیک پرفورمنس"
                  className="h-64 w-full object-cover"
                />

                <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold">
                  LIMITED
                </span>
              </div>

              <div className="p-6">
                <h3 className="min-h-14 text-lg font-bold leading-7">
                  دیسک ترمز کربن-سرامیک پرفورمنس
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-white/45 line-through">۱۲,۰۰۰,۰۰۰</span>
                  <span className="text-2xl font-extrabold text-amber-400">
                    ۱۰,۸۰۰,۰۰۰
                  </span>
                  <span className="text-white/70">تومان</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Professional Selection */}
        <section className="border-y border-white/10 bg-zinc-900/60 py-16">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-amber-400">
                  workspace_premium
                </span>

                <h2 className="text-3xl font-extrabold">منتخب حرفه‌ای‌ها</h2>
              </div>

              <a
                href="#"
                className="text-sm font-bold tracking-[0.2em] text-amber-300 transition hover:text-amber-200"
              >
                VIEW ALL COLLECTION
              </a>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <article className="flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 sm:flex-row">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOdKme51mkE6otXDJZ8tBYYo1O6bMWiFyEOCNZ5PpHfca0awiDPPgoKXiSxKFS11w0udtKbt8fA62D8CGwT4UlnzCku1SKRMTVXjRytVlBe2I7NN6UqIJ1qBbiB2IFF8bNXunj1xEN6d1-iOr0ysNOWeMkaTgphdCsmO7Yfe-bdNHF2c06ACrnBOo5ggHA0tIsCWClurBlYWQzLTnAgHmS7-xZHboOcox7v5ooo5bfhRPyjKNZhH8lIsUbqaeU-mDlACr1k3XssCA"
                  alt="باتری لیتیومی فوق سبک موتوراسپرت"
                  className="h-64 w-full object-cover sm:w-2/5"
                />

                <div className="flex flex-col justify-between p-6">
                  <div>
                    <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-black">
                      VIP ONLY
                    </span>

                    <h3 className="mt-4 text-xl font-bold leading-8">
                      باتری لیتیومی فوق سبک موتوراسپرت
                    </h3>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-2xl font-extrabold text-amber-400">
                      ۸,۹۰۰,۰۰۰
                      <span className="text-base font-medium text-white/70"> تومان</span>
                    </span>

                    <button
                      aria-label="add shopping cart"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-amber-300"
                    >
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </article>

              <article className="flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950 sm:flex-row">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs_9MCj8nW40lYUethz4GfwgrVcFslwB8X-j4RCSZ9IWSFjyA0GxM-w7oKvBqoFDoIGYd0YsSbHVLfMn4vDncA9dN8MDVkuuKwle6l4JuGwDynGK8k-vDkYRm5TT4daAl3JPOVXPEMkqzEeSyMazeiLk-_3F8CMeoHE63skVbWBI7f0TD5FonG2M6svx_tJIffk5sHmDDQ-Cgkoz3hxdN9kXoH8twoPUigAp2H1-bIkHxWH_hqesY2qlBa4qQfDw8sbM_XrFfCVBE"
                  alt="روغن موتور استر پایه سینتتیک - تاییدیه ریسینگ"
                  className="h-64 w-full object-cover sm:w-2/5"
                />

                <div className="flex flex-col justify-between p-6">
                  <div>
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      ۵ لیتر
                    </span>

                    <h3 className="mt-4 text-xl font-bold leading-8">
                      روغن موتور استر پایه سینتتیک - تاییدیه ریسینگ
                    </h3>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-2xl font-extrabold text-amber-400">
                      ۴,۲۰۰,۰۰۰
                      <span className="text-base font-medium text-white/70"> تومان</span>
                    </span>

                    <button
                      aria-label="add shopping cart"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-amber-300"
                    >
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="mx-auto w-full max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl text-amber-400">
                new_releases
              </span>

              <h2 className="text-3xl font-extrabold">تازه رسیده به انبار</h2>
            </div>

            <a
              href="#"
              className="text-sm font-bold tracking-[0.2em] text-amber-300 transition hover:text-amber-200"
            >
              EXPLORE NEW ARRIVALS
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 md:flex-row">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcd2DGnJlV2Co3kSuTzkJBTEhYQkW5uLQcDeorhJZG6-0QeKdnVg9iT4cZm4e7ukr0zySlzTw2KcuA9mpqaXMaBaQGbdgPKlMbRAfxiowU8koxoxRx6EtlbgF9CnGUd9ABrxDNPzm5T40Kv4BBBwRldNVWXcrEeFiq3jTOtWAEHbxCkAcv83FEQm7USL_ljbSJKNdV-B5IR91TlmyUM6-1H6nMrDzBdakyfQ5U7KdBg1nJgsu7tlDSxXs-D9Yx4fD4BgbzLyq46nU"
                alt="کیت کلاچ تقویت شده پلاتینیوم"
                className="h-64 w-full object-cover md:w-2/5"
              />

              <div className="flex flex-col justify-between p-6">
                <h3 className="text-xl font-bold leading-8">
                  کیت کلاچ تقویت شده پلاتینیوم
                </h3>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-2xl font-extrabold text-amber-400">
                    ۱۵,۵۰۰,۰۰۰
                    <span className="text-base font-medium text-white/70"> تومان</span>
                  </span>

                  <a
                    href="#"
                    className="rounded-full bg-white px-5 py-2 font-bold text-black transition hover:bg-amber-300"
                  >
                    خرید سریع
                  </a>
                </div>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900 md:flex-row">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjS2rlmnoHyvMpiADRRCL7LpLtZIrmJKRu3KMzXfPUMiohQJ70haHAjTA1-Q1yg4OgSvOdQsPicw8jFDx7K1UQDLS2rujbgvqK_LwDn1_3bV3RsxAUA2Bq4UqBsun0564ZLouGKo23WI05xQY1948Y5bqBkb0su-t1iAXlRIR7JMzAq-xRY1wbqlpUgHGkc6zojMsVjfNu8n0PLMuJRtT4tK3aHnP6pnky6fVqwV_1RSgmuk0qwMwOyOPqbYPhJtFVEhkFOcIBNIk"
                alt="لاستیک تخصصی زمستانه سری Z"
                className="h-64 w-full object-cover md:w-2/5"
              />

              <div className="flex flex-col justify-between p-6">
                <h3 className="text-xl font-bold leading-8">
                  لاستیک تخصصی زمستانه سری Z
                </h3>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-2xl font-extrabold text-amber-400">
                    ۹,۸۰۰,۰۰۰
                    <span className="text-base font-medium text-white/70"> تومان</span>
                  </span>

                  <a
                    href="#"
                    className="rounded-full bg-white px-5 py-2 font-bold text-black transition hover:bg-amber-300"
                  >
                    خرید سریع
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto w-full max-w-7xl px-4 pb-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-zinc-900 p-6">
              <span className="material-symbols-outlined text-3xl text-amber-400">
                verified
              </span>

              <h3 className="mt-4 text-xl font-bold">اصالت تضمین شده</h3>

              <p className="mt-3 leading-7 text-white/70">
                ارائه شناسنامه معتبر برای تمامی قطعات خاص
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-zinc-900 p-6">
              <span className="material-symbols-outlined text-3xl text-amber-400">
                flight_takeoff
              </span>

              <h3 className="mt-4 text-xl font-bold">ارسال اختصاصی</h3>

              <p className="mt-3 leading-7 text-white/70">
                حمل ایمن و سریع با سرویس اختصاصی وی‌آی‌پی
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-zinc-900 p-6">
              <span className="material-symbols-outlined text-3xl text-amber-400">
                handyman
              </span>

              <h3 className="mt-4 text-xl font-bold">کارشناس فنی همراه</h3>

              <p className="mt-3 leading-7 text-white/70">
                مشاوره تخصصی نصب و راه‌اندازی قطعات پیچیده
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-zinc-900 p-6">
              <span className="material-symbols-outlined text-3xl text-amber-400">
                history_edu
              </span>

              <h3 className="mt-4 text-xl font-bold">گارانتی طلایی</h3>

              <p className="mt-3 leading-7 text-white/70">
                طرح جایگزینی سریع قطعات بدون پرسش
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <a href="#" className="flex items-center gap-2 text-2xl font-extrabold">
              <span className="material-symbols-outlined text-amber-400">diamond</span>
              لوکس‌یدک
            </a>

            <p className="mt-5 leading-8 text-white/70">
              پیشرو در ارائه راه‌کارهای تامین قطعات برای خودروهای سوپرلوکس و خاص در
              منطقه با استانداردهای جهانی.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <span className="material-symbols-outlined">public</span>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <span className="material-symbols-outlined">mail_outline</span>
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <span className="material-symbols-outlined">phone_in_talk</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">خدمات مشتریان</h3>

            <ul className="mt-5 space-y-3 text-white/70">
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  رزرو نوبت کارشناسی
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  سفارش قطعات نایاب
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  پیگیری سفارش‌های VIP
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  شرایط عضویت در کلوب
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">دسته‌بندی‌های لوکس</h3>

            <ul className="mt-5 space-y-3 text-white/70">
              <li>
                <a href="#" className="transition hover:text-amber-300">
                  کیت‌های بدنه فیبر کربن
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  سیستم اگزوز تیتانیوم
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  رینگ‌های فورج شده
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-amber-300">
                  تزئینات داخلی چرم و چوب
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold">مجوزهای بین‌المللی</h3>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4 font-bold">
                ISO 9001
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4 font-bold">
                TÜV GERMANY
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-white/60 md:flex-row">
            <p>COPYRIGHT © 2024 LUXURY YADAK. ALL RIGHTS RESERVED.</p>

            <div className="flex items-center gap-5">
              <a href="#" className="transition hover:text-amber-300">
                PRIVACY POLICY
              </a>

              <a href="#" className="transition hover:text-amber-300">
                TERMS OF SERVICE
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}