// =============================================================
//  داده‌های محصولات
//  فعلاً داده‌ی نمونه (mock) است؛ بعداً از API جایگزین می‌شه.
//  ساختار فیلدها طوری طراحی شده که با پاسخ API واقعی هم‌خوان باشه.
// =============================================================

export const PRODUCTS = [
  {
    id: "spark-plug-bosch",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc",
    badge: "اصالت تضمینی",
    badgeColor: "bg-emerald-500 text-white",
    title: "شمع سوزنی ایریدیوم برند بوش - سری پلاتینیوم آلمان",
    priceLabel: "قیمت واحد:",
    price: "۱,۲۵۰,۰۰۰",
  },
  {
    id: "brake-disc-brembo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpKH3BHIgaqOGCy-s7uElWjm0wuo5r5oP-ZI3OxbMzWkTSYnV9sY30Yi064DIFy9GOT657LVE3YYwFISkYjrGVG_ZUWqNm2J5_zqXHX7GkiHGbPHQGZInmLsVkhDRNeK5STZJWMITRHsB5VZtJTDJIjBEmcm4THxbFmo5Q7LfzcwMghsfteDXgNUb2f14uXW7WsNcy4eZOW4fbMpvQ0rQkAlNL5Qe2qdHiiZ-DOc_g-IUDIDsSI-pShlYUANiCfeIvrTpu__oSvpg",
    badge: "ویژه",
    badgeColor: "bg-amber-400 text-black",
    title: "دیسک ترمز خنک‌شونده برمبو - مدل High Performance",
    priceLabel: "قیمت جفت:",
    price: "۸,۹۰۰,۰۰۰",
  },
  {
    id: "engine-oil-castrol",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_9MCj8nW40lYUethz4GfwgrVcFslwB8X-j4RCSZ9IWSFjyA0GxM-w7oKvBqoFDoIGYd0YsSbHVLfMn4vDncA9dN8MDVkuuKwle6l4JuGwDynGK8k-vDkYRm5TT4daAl3JPOVXPEMkqzEeSyMazeiLk-_3F8CMeoHE63skVbWBI7f0TD5FonG2M6svx_tJIffk5sHmDDQ-Cgkoz3hxdN9kXoH8twoPUigAp2H1-bIkHxWH_hqesY2qlBa4qQfDw8sbM_XrFfCVBE",
    badge: "۱۵٪-",
    badgeColor: "bg-red-500 text-white",
    title: "روغن موتور تمام سنتتیک کاسترول - Magnatec لوکس",
    oldPrice: "۱,۳۵۰,۰۰",
    price: ",۱۴۷,۵۰۰",
  },
  {
    id: "oil-filter-bmw",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48",
    title: "فیلتر روغن اورجینال بی ام و - مخصوص سری ۷ و ۵",
    priceLabel: "قیمت واحد:",
    price: "۴۵۰,۰۰",
  },
  {
    id: "clutch-kit-valeo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcd2DGnJlV2Co3kSuTzkJBTEhYQkW5uLQcDeorhJZG6-0QeKdnVg9iT4cZm4e7ukr0zySlzTw2KcuA9mpqaXMaBaQGbdgPKlMbRAfxiowU8koxoxRx6EtlbgF9CnGUd9ABrxDNPzm5T40Kv4BBBwRldNVWXcrEeFiq3jTOtWAEHbxCkAcv83FEQm7USL_ljbSJKNdV-B5IR91TlmyUM6-1H6nMrDzBdakyfQ5U7KdBg1nJgsu7tlDSxXs-D9Yx4fD4BgbzLyq46nU",
    badge: "نایاب",
    badgeColor: "bg-orange-500 text-white",
    title: "کیت کلاچ کامل والئو (Valeo) جعبه آبی - ساخت فرانسه",
    priceLabel: "قیمت کیت:",
    price: "۶,۸۰۰,۰۰۰",
  },
  {
    id: "battery-suzuki",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOdKme51mkE6otXDJZ8tBYYo1O6bMWiFyEOCNZ5PpHfca0awiDPPgoKXiSxKFS11w0udtKbt8fA62D8CGwT4UlnzCku1SKRMTVXjRytVlBe2I7NN6UqIJ1qBbiB2IFF8bNXunj1xEN6d1-iOr0ysNOWeMkaTgphdCsmO7Yfe-bdNHF2c06ACrnBOo5ggHA0tIsCWClurBlYWQzLTnAgHmS7-xZHboOcox7v5ooo5bfhRPyjKNZhH8lIsUbqaeU-mDlACr1k3XssCA",
    badge: "گارانتی طلایی",
    badgeColor: "bg-amber-400 text-black",
    title: "باتری ۷۴ آمپر سوزوکی - تکنولوژی ژاپن با ۱۸ ماه ضمانت",
    priceLabel: "قیمت با داغی:",
    price: "۳,۴۰,۰۰۰",
  },
];

export const PRODUCT_CREDITS = ["PREMIUM", "MEMBER", "ORIGINAL", "CERTIFIED"];
