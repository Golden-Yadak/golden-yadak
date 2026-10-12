// =============================================================
//  داده‌های داشبورد مدیریت فروشگاه قطعات خودروهای ایرانی
// =============================================================

export const ADMIN_MENU = [
  ["dashboard", "داشبورد و آمار فروش", true],
  ["inventory_2", "مدیریت قطعات خودرو", false],
  ["shopping_cart", "مدیریت سفارشات انبار", false],
  ["confirmation_number", "کپن‌ها و تخفیفات ویژه", false],
];

export const ADMIN_STATS = [
  {
    icon: "payments",
    iconColor: "text-amber-400",
    trend: "+۱۴٪",
    trendIcon: "trending_up",
    trendColor: "text-emerald-400",
    label: "فروش امروز",
    value: "۱۸,۴۵۰,۰۰۰",
    unit: "تومان",
  },
  {
    icon: "account_balance_wallet",
    iconColor: "text-white/80",
    trend: "+۱۹٪",
    trendIcon: "trending_up",
    trendColor: "text-emerald-400",
    label: "فروش ماهانه",
    value: "۳۸۵,۰۰۰,۰۰۰",
    unit: "تومان",
  },
  {
    icon: "shopping_basket",
    iconColor: "text-red-400",
    trend: "۲۴ ساعت اخیر",
    trendIcon: null,
    trendColor: "text-white/40",
    label: "سفارشات جدید قطعات",
    value: "۲۴",
    unit: "عدد",
  },
  {
    icon: "local_shipping",
    iconColor: "text-blue-400",
    trend: "۶ مرسوله تیپاکس",
    trendIcon: null,
    trendColor: "text-amber-400",
    label: "ارسال‌های آماده خروج",
    value: "۱۶",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeW35CiuEJx7es-Dbrzc0A_MsZzaDFznoJvFuAdoDpU-syBov55CGBV4kMlxjYWPYR9WiXRNgx0vJ4dqSHp2OdZXCX2iiz31YOi9gncPILHY8Wy4FW4qdBG9Nv3j_uJBh29ieRh9dbwTwcOxbXrsw8gQQVVSCEqoP_ZeAD10d6EPi_wRYKlPvYhiVWB6uXMNwPYIAwX591-bF5uY9OS8xmX9le8kZsvtQpXt_g1ack75w22TfrXXGnkrPSvniBu0YQrxuARPnjRHU",
    name: "تسمه تایم ایساکو EF7 (دنا و سورن)",
    stock: "۲ عدد (موجودی بحرانی)",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc",
    name: "شمع سوزنی بوش شاهین و کوییک",
    stock: "۳ ست",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcd2DGnJlV2Co3kSuTzkJBTEhYQkW5uLQcDeorhJZG6-0QeKdnVg9iT4cZm4e7ukr0zySlzTw2KcuA9mpqaXMaBaQGbdgPKlMbRAfxiowU8koxoxRx6EtlbgF9CnGUd9ABrxDNPzm5T40Kv4BBBwRldNVWXcrEeFiq3jTOtWAEHbxCkAcv83FEQm7USL_ljbSJKNdV-B5IR91TlmyUM6-1H6nMrDzBdakyfQ5U7KdBg1nJgsu7tlDSxXs-D9Yx4fD4BgbzLyq46nU",
    name: "کیت کلاچ والئو اصلی پژو ۲۰۶",
    stock: "۴ عدد",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpKH3BHIgaqOGCy-s7uElWjm0wuo5r5oP-ZI3OxbMzWkTSYnV9sY30Yi064DIFy9GOT657LVE3YYwFISkYjrGVG_ZUWqNm2J5_zqXHX7GkiHGbPHQGZInmLsVkhDRNeK5STZJWMITRHsB5VZtJTDJIjBEmcm4THxbFmo5Q7LfzcwMghsfteDXgNUb2f14uXW7WsNcy4eZOW4fbMpvQ0rQkAlNL5Qe2qdHiiZ-DOc_g-IUDIDsSI-pShlYUANiCfeIvrTpu__oSvpg",
    name: "دیسک ترمز تهویه‌دار کروز دنا",
    stock: "۱ جفت",
  },
];

export const ADMIN_ORDERS = [
  {
    id: "#GY-9942",
    avatar: "آد",
    customer: "آریامهر دارپوی",
    products: "کیت کلاچ والئو ۲۰۶ (۱)",
    total: "۴,۹۵۰,۰۰۰ تومان",
    status: "تایید شده",
    statusColor: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
    date: "۱۴:۳۰ - امروز",
  },
  {
    id: "#GY-9941",
    avatar: "مر",
    customer: "محمد رضایی (تعمیرگاه)",
    products: "دیسک ترمز کروز دنا (۲)",
    total: "۵,۳۶۰,۰۰۰ تومان",
    status: "در حال بسته‌بندی",
    statusColor: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    date: "۱۲:۱۵ - امروز",
  },
];
