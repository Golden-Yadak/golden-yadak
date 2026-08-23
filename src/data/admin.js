// =============================================================
//  داده‌های داشبورد مدیریت
//  فعلاً نمونه؛ بعداً از API پنل مدیریت لود می‌شه.
// =============================================================

export const ADMIN_MENU = [
  ["dashboard", "داشبورد", true],
  ["inventory_2", "مدیریت محصولات", false],
  ["shopping_cart", "مدیریت سفارشات", false],
  ["confirmation_number", "کپن‌ها و تخفیفات", false],
];

export const ADMIN_STATS = [
  {
    icon: "payments",
    iconColor: "text-amber-400",
    trend: "+۱۲٪",
    trendIcon: "trending_up",
    trendColor: "text-emerald-400",
    label: "فروش امروز",
    value: "۱۴,۵۰۰,۰۰۰",
    unit: "تومان",
  },
  {
    icon: "account_balance_wallet",
    iconColor: "text-white/80",
    trend: "+۸٪",
    trendIcon: "trending_up",
    trendColor: "text-emerald-400",
    label: "فروش ماهانه",
    value: "۴۲۰,۰۰۰,۰۰۰",
    unit: "تومان",
  },
  {
    icon: "shopping_basket",
    iconColor: "text-red-400",
    trend: "۲۴ ساعت اخیر",
    trendIcon: null,
    trendColor: "text-white/40",
    label: "سفارشات جدید",
    value: "۱۸",
    unit: "عدد",
  },
  {
    icon: "local_shipping",
    iconColor: "text-blue-400",
    trend: "۴ فوری",
    trendIcon: null,
    trendColor: "text-red-400",
    label: "ارسال‌های معلق",
    value: "۱۲",
    unit: "مرسوله",
  },
];

export const ADMIN_CHART_DAYS = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

export const ADMIN_LOW_STOCK = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48",
    name: "فیلتر روغن سری M",
    stock: "تمام شده",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc",
    name: "شمع ایریدیوم لیزری",
    stock: "۲ عدد",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOdKme51mkE6otXDJZ8tBYYo1O6bMWiFyEOCNZ5PpHfca0awiDPPgoKXiSxKFS11w0udtKbt8fA62D8CGwT4UlnzCku1SKRMTVXjRytVlBe2I7NN6UqIJ1qBbiB2IFF8bNXunj1xEN6d1-iOr0ysNOWeMkaTgphdCsmO7Yfe-bdNHF2c06ACrnBOo5ggHA0tIsCWClurBlYWQzLTnAgHmS7-xZHboOcox7v5ooo5bfhRPyjKNZhH8lIsUbqaeU-mDlACr1k3XssCA",
    name: "باتری لیتیومی ریسینگ",
    stock: "۵ عدد (بحرانی)",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48",
    name: "لنت ترمز Brembo",
    stock: "۱ عدد",
  },
];

export const ADMIN_ORDERS = [
  {
    id: "#ORD-9942",
    avatar: "AA",
    customer: "آرش افشار",
    products: "کیت بدنه (۱)",
    total: "۱۲۵,۰۰,۰۰۰ ت",
    status: "تایید شده",
    statusColor: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
    date: "۱۴:۳۰ - امروز",
  },
  {
    id: "#ORD-9941",
    avatar: "MS",
    customer: "محمد سعیدی",
    products: "دیسک ترمز (۲)",
    total: "۲۱,۶۰۰,۰۰۰ ت",
    status: "در انتظار",
    statusColor: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    date: "۱۲:۱۵ - امروز",
  },
];
