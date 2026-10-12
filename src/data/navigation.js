// =============================================================
//  داده‌های ناوبری و فوتر برای فروشگاه قطعات خودروهای ایرانی
// =============================================================

// نوار ناوبری زیر هدر (صفحه‌ی اصلی)
export const NAV_ITEMS = [
  { label: "تمامی قطعات", icon: "menu", href: "/products" },
  { label: "ایران‌خودرو (پژو، دنا، تارا)", href: "/products?company=ایران خودرو" },
  { label: "سایپا (شاهین، کوییک، ساینا)", href: "/products?company=سایپا" },
  { label: "رنو و پارس‌خودرو (ال ۹۰، ساندرو)", href: "/products?company=پارس خودرو" },
  { label: "موتوری و گیربکس", href: "/products?category=موتوری و گیربکس" },
  { label: "ترمز و تعلیق", href: "/products?category=ترمز و تعلیق" },
  { label: "پیگیری سفارش", icon: "local_shipping", href: "/dashboard/orders" },
];

// ستون‌های لینک فوتر
export const FOOTER_COLUMNS = [
  {
    title: "خدمات مشتریان",
    links: [
      { label: "پیگیری سفارش‌ها", href: "/dashboard/orders" },
      { label: "راهنمای استعلام اصالت قطعات", href: "/products" },
      { label: "قوانین و رویه مرجوعی ۷ روزه", href: "/cart" },
      { label: "پرسش‌های متداول", href: "/" },
      { label: "تماس با کارشناسان فنی", href: "/dashboard" },
    ],
  },
  {
    title: "خانواده خودروهای تحت پوشش",
    links: [
      { label: "لوازم یدکی دنا و دنا پلاس توربو", href: "/products?model=دنا و سمند" },
      { label: "قطعات پژو ۲۰۶، ۲۰۷ و رانا", href: "/products?model=پژو ۲۰۶ و ۲۰۷" },
      { label: "قطعات شاهین و آریا سایپا", href: "/products?model=شاهین و کوییک" },
      { label: "لوازم کوییک، ساینا، تیبا و پراید", href: "/products?model=شاهین و کوییک" },
      { label: "قطعات تندر ۹۰ و ساندرو", href: "/products?company=پارس خودرو" },
    ],
  },
  {
    title: "برندهای معتبر همکار",
    links: [
      { label: "قطعات شرکتی ایساکو (ISACO)", href: "/products?brand=ایساکو" },
      { label: "لوازم اصلی سایپا یدک", href: "/products?brand=سایپایدک" },
      { label: "صنایع تولیدی کروز (Crouse)", href: "/products?brand=کروز" },
      { label: "گروه صنعتی عظام (Ezam)", href: "/products?brand=عظام" },
      { label: "والئو فرانسه (Valeo)", href: "/products?brand=والئو" },
    ],
  },
];
