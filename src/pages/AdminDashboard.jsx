import { useState } from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../lib/config";
import {
  ADMIN_STATS,
  ADMIN_CHART_DAYS,
  ADMIN_LOW_STOCK,
} from "../data/admin";
import { useUserData } from "../hooks/useUserData";
import { formatToman, toPersianDigits } from "../lib/format";

// نمونه تصاویر باکیفیت و سریع برای قطعات خودروهای ایرانی
const SAMPLE_PART_IMAGES = [
  {
    name: "کیت کلاچ والئو (پژو)",
    car: "پژو ۲۰۶ و ۲۰۷",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcd2DGnJlV2Co3kSuTzkJBTEhYQkW5uLQcDeorhJZG6-0QeKdnVg9iT4cZm4e7ukr0zySlzTw2KcuA9mpqaXMaBaQGbdgPKlMbRAfxiowU8koxoxRx6EtlbgF9CnGUd9ABrxDNPzm5T40Kv4BBBwRldNVWXcrEeFiq3jTOtWAEHbxCkAcv83FEQm7USL_ljbSJKNdV-B5IR91TlmyUM6-1H6nMrDzBdakyfQ5U7KdBg1nJgsu7tlDSxXs-D9Yx4fD4BgbzLyq46nU",
  },
  {
    name: "دیسک ترمز خنک‌شونده (دنا)",
    car: "دنا و سمند",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpKH3BHIgaqOGCy-s7uElWjm0wuo5r5oP-ZI3OxbMzWkTSYnV9sY30Yi064DIFy9GOT657LVE3YYwFISkYjrGVG_ZUWqNm2J5_zqXHX7GkiHGbPHQGZInmLsVkhDRNeK5STZJWMITRHsB5VZtJTDJIjBEmcm4THxbFmo5Q7LfzcwMghsfteDXgNUb2f14uXW7WsNcy4eZOW4fbMpvQ0rQkAlNL5Qe2qdHiiZ-DOc_g-IUDIDsSI-pShlYUANiCfeIvrTpu__oSvpg",
  },
  {
    name: "تسمه تایم ایساکو (EF7)",
    car: "موتور ملی EF7",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeW35CiuEJx7es-Dbrzc0A_MsZzaDFznoJvFuAdoDpU-syBov55CGBV4kMlxjYWPYR9WiXRNgx0vJ4dqSHp2OdZXCX2iiz31YOi9gncPILHY8Wy4FW4qdBG9Nv3j_uJBh29ieRh9dbwTwcOxbXrsw8gQQVVSCEqoP_ZeAD10d6EPi_wRYKlPvYhiVWB6uXMNwPYIAwX591-bF5uY9OS8xmX9le8kZsvtQpXt_g1ack75w22TfrXXGnkrPSvniBu0YQrxuARPnjRHU",
  },
  {
    name: "شمع ایریدیوم بوش",
    car: "شاهین، کوییک و ساینا",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc",
  },
  {
    name: "چراغ جلو کریستالی نئون",
    car: "پژو ۲۰۷ مدرن",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48",
  },
  {
    name: "روغن موتور بهران SN",
    car: "انواع خودروهای ملی",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_9MCj8nW40lYUethz4GfwgrVcFslwB8X-j4RCSZ9IWSFjyA0GxM-w7oKvBqoFDoIGYd0YsSbHVLfMn4vDncA9dN8MDVkuuKwle6l4JuGwDynGK8k-vDkYRm5TT4daAl3JPOVXPEMkqzEeSyMazeiLk-_3F8CMeoHE63skVbWBI7f0TD5FonG2M6svx_tJIffk5sHmDDQ-Cgkoz3hxdN9kXoH8twoPUigAp2H1-bIkHxWH_hqesY2qlBa4qQfDw8sbM_XrFfCVBE",
  },
  {
    name: "کمک فنر گازی عظام",
    car: "کوییک، تیبا، پراید",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOdKme51mkE6otXDJZ8tBYYo1O6bMWiFyEOCNZ5PpHfca0awiDPPgoKXiSxKFS11w0udtKbt8fA62D8CGwT4UlnzCku1SKRMTVXjRytVlBe2I7NN6UqIJ1qBbiB2IFF8bNXunj1xEN6d1-iOr0ysNOWeMkaTgphdCsmO7Yfe-bdNHF2c06ACrnBOo5ggHA0tIsCWClurBlYWQzLTnAgHmS7-xZHboOcox7v5ooo5bfhRPyjKNZhH8lIsUbqaeU-mDlACr1k3XssCA",
  },
  {
    name: "کیت کلاچ شرکتی شاهین",
    car: "شاهین دنده‌ای",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvaYwjhYVbDFXN2Bh01PTc3WH2B7hS0upoVDsEJzqVS2RSScaMGoPVHesIq0sfjNz0EFFD7nGXTLz5dSlIT9pkRdEN-Qmcei3zTiw6JW5Lu5q3aDyFA3w5_sGGtWb5Zx9PqskD5Yp48IgOtZGD-6G0XxxBxclX0OxyJ6vHqiOQsxyeY0-I_m_vkEYWZQSpy2ZVg1NiE7I-loC6UU_uIMa1Xj1xbmTMFI8BCZZy_-Jo46f0rZMECx2_GNBQoROs2XnpWND1r0MaH-A",
  },
  {
    name: "کیت تسمه تایم کنتیننتال",
    car: "تندر ۹۰، ساندرو، مگان",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjS2rlmnoHyvMpiADRRCL7LpLtZIrmJKRu3KMzXfPUMiohQJ70haHAjTA1-Q1yg4OgSvOdQsPicw8jFDx7K1UQDLS2rujbgvqK_LwDn1_3bV3RsxAUA2Bq4UqBsun0564ZLouGKo23WI05xQY1948Y5bqBkb0su-t1iAXlRIR7JMzAq-xRY1wbqlpUgHGkc6zojMsVjfNu8n0PLMuJRtT4tK3aHnP6pnky6fVqwV_1RSgmuk0qwMwOyOPqbYPhJtFVEhkFOcIBNIk",
  },
];

export default function AdminDashboard() {
  const {
    orders: liveUserOrders,
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    resetProducts,
  } = useUserData();

  const [activeTab, setActiveTab] = useState("overview"); // overview | products | orders | coupons

  // Product management state
  const [productSearch, setProductSearch] = useState("");
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); // null when adding, object when editing
  const [isDragging, setIsDragging] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [productForm, setProductForm] = useState({
    title: "",
    company: "ایران خودرو",
    carModel: "پژو ۲۰۶ و ۲۰۷",
    category: "موتوری و گیربکس",
    brand: "ایساکو (ISACO)",
    price: "",
    oldPrice: "",
    code: "",
    badge: "اصلی شرکتی",
    inStock: true,
    stockCount: 12,
    warranty: "۱۲ ماه ضمانت شرکتی",
    compatibleCars: "پژو ۲۰۶ تیپ ۵، پژو ۲۰۷i، رانا",
    description: "",
    image: SAMPLE_PART_IMAGES[0].url,
  });

  // Orders management state
  const [allOrders, setAllOrders] = useState(() => {
    const seeded = [
      {
        id: "#GY-9942",
        customer: "آریامهر دارپوی",
        phone: "۰۹۱۲۳۴۵۶۷۸۹",
        itemsText: "کیت کلاچ والئو ۲۰۶ (۱)",
        total: 4950000,
        status: "تایید شده",
        date: "۱۴:۳۰ - امروز",
        shipping: "تیپاکس اکسپرس",
      },
      {
        id: "#GY-9941",
        customer: "محمد رضایی (تعمیرگاه)",
        phone: "۰۹۳۵۱۲۳۴۵۶۷",
        itemsText: "دیسک ترمز کروز دنا (۲)",
        total: 5360000,
        status: "در حال بسته‌بندی",
        date: "۱۲:۱۵ - امروز",
        shipping: "پیک موتوری تهران",
      },
    ];

    const formattedLive = liveUserOrders.map((o) => ({
      id: o.id,
      customer: "مشتری فروشگاه",
      phone: "۰۹۱۲۳۴۵۶۷۸۹",
      itemsText: o.items?.map((i) => `${i.title} (${i.qty})`).join("، ") || "اقلام سفارش",
      total: o.totalPrice + (o.shippingFee || 0),
      status: o.status === "جاری" ? "در حال بسته‌بندی" : o.status,
      date: o.date,
      shipping: o.shippingMethod || "تیپاکس",
    }));

    return [...formattedLive, ...seeded];
  });

  const [orderFilter, setOrderFilter] = useState("all");

  // Coupons management state
  const [coupons, setCoupons] = useState([
    {
      id: "cp-1",
      code: "GOLDEN10",
      title: "تخفیف عمومی جشنواره تابستانه",
      discount: "۱۰٪",
      maxDiscount: "۲۰۰,۰۰۰ تومان",
      usedCount: 42,
      active: true,
    },
    {
      id: "cp-2",
      code: "VIP15",
      title: "تخفیف ویژه دارندگان کارت طلایی",
      discount: "۱۵٪",
      maxDiscount: "۵۰۰,۰۰۰ تومان",
      usedCount: 18,
      active: true,
    },
    {
      id: "cp-3",
      code: "NOWRUZ",
      title: "کد تخفیف نوروزی",
      discount: "۲۰٪",
      maxDiscount: "۳۵۰,۰۰۰ تومان",
      usedCount: 95,
      active: false,
    },
  ]);

  const [showAddCouponModal, setShowAddCouponModal] = useState(false);
  const [newCouponForm, setNewCouponForm] = useState({
    code: "",
    title: "",
    discount: "",
    maxDiscount: "",
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 4000);
  };

  // Open modal for Adding a new product
  const openAddModal = () => {
    setEditingProduct(null);
    setProductForm({
      title: "",
      company: "ایران خودرو",
      carModel: "پژو ۲۰۶ و ۲۰۷",
      category: "موتوری و گیربکس",
      brand: "ایساکو (ISACO)",
      price: "",
      oldPrice: "",
      code: `ISA-${Math.floor(100000 + Math.random() * 900000)}`,
      badge: "اصلی شرکتی",
      inStock: true,
      stockCount: 15,
      warranty: "۱۲ ماه ضمانت تعویض",
      compatibleCars: "پژو ۲۰۶ تیپ ۵، پژو ۲۰۷i، رانا و رانا پلاس",
      description: "قطعه اصلی اورجینال با استاندارد خط تولید و هولوگرام اصالت کالا.",
      image: SAMPLE_PART_IMAGES[0].url,
    });
    setShowProductModal(true);
  };

  // Open modal for Editing an existing product
  const openEditModal = (product) => {
    setEditingProduct(product);
    setProductForm({
      title: product.title || "",
      company: product.company || "ایران خودرو",
      carModel: product.carModel || "پژو ۲۰۶ و ۲۰۷",
      category: product.category || "موتوری و گیربکس",
      brand: product.brand || "ایساکو (ISACO)",
      price: product.price ? String(product.price) : "",
      oldPrice: product.oldPrice ? String(product.oldPrice) : "",
      code: product.code || "",
      badge: product.badge || "اصلی شرکتی",
      inStock: product.inStock !== false,
      stockCount: product.stockCount || 12,
      warranty: product.warranty || "۱۲ ماه گارانتی طلایی",
      compatibleCars: Array.isArray(product.compatibleCars)
        ? product.compatibleCars.join("، ")
        : product.compatibleCars || "",
      description:
        product.description ||
        "قطعه با کیفیت درجه یک، تست فنی شده و دارای تاییدیه کارشناسان گلدن یدک.",
      image: product.image || SAMPLE_PART_IMAGES[0].url,
    });
    setShowProductModal(true);
  };

  // Upload image from file (input file)
  const handleImageFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setProductForm((prev) => ({ ...prev, image: event.target.result }));
        showToast("تصویر فایل با موفقیت بارگذاری شد.");
      }
    };
    reader.readAsDataURL(file);
  };

  // Drag & drop file handler
  const handleDropFile = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer?.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setProductForm((prev) => ({ ...prev, image: event.target.result }));
        showToast("تصویر با موفقیت بارگذاری شد.");
      }
    };
    reader.readAsDataURL(file);
  };

  // Save product (Add or Update)
  const handleSaveProduct = (e) => {
    e.preventDefault();
    const compatibleList = productForm.compatibleCars
      ? productForm.compatibleCars
          .split("،")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

    if (editingProduct) {
      // Update existing product
      updateProduct(editingProduct.id, {
        ...productForm,
        price: Number(productForm.price) || editingProduct.price,
        oldPrice: productForm.oldPrice ? Number(productForm.oldPrice) : null,
        stockCount: Number(productForm.stockCount) || 12,
        compatibleCars:
          compatibleList.length > 0 ? compatibleList : [productForm.carModel],
      });
      showToast(`اطلاعات قطعه «${productForm.title}» با موفقیت ویرایش و ذخیره شد.`);
    } else {
      // Add new product
      const newProd = addProduct({
        ...productForm,
        price: Number(productForm.price) || 1000000,
        oldPrice: productForm.oldPrice ? Number(productForm.oldPrice) : null,
        stockCount: Number(productForm.stockCount) || 15,
        code:
          productForm.code ||
          `ISA-${Math.floor(100000 + Math.random() * 900000)}`,
        badge: productForm.badge || "جدید",
        compatibleCars:
          compatibleList.length > 0 ? compatibleList : [productForm.carModel],
      });
      showToast(`قطعه جدید «${newProd.title}» با موفقیت به انبار افزوده شد.`);
    }
    setShowProductModal(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("آیا از حذف این قطعه از انبار اطمینان دارید؟")) {
      deleteProduct(id);
      showToast("قطعه با موفقیت از انبار حذف گردید.");
    }
  };

  const handleToggleStock = (product) => {
    updateProduct(product.id, { inStock: !product.inStock });
    showToast(
      `وضعیت موجودی قطعه «${product.title}» به ${
        !product.inStock ? "«موجود در انبار»" : "«ناموجود»"
      } تغییر یافت.`
    );
  };

  const handleResetCatalog = () => {
    if (
      window.confirm(
        "آیا اطمینان دارید که می‌خواهید کاتالوگ قطعات را به حالت پیش‌فرض کارخانه بازنشانی کنید؟"
      )
    ) {
      resetProducts();
      showToast("کاتالوگ قطعات با موفقیت بازنشانی شد.");
    }
  };

  // Handlers for orders
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setAllOrders(
      allOrders.map((ord) => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
    );
  };

  // Handlers for coupons
  const handleToggleCoupon = (couponId) => {
    setCoupons(
      coupons.map((c) => (c.id === couponId ? { ...c, active: !c.active } : c))
    );
  };

  const handleAddCoupon = (e) => {
    e.preventDefault();
    const created = {
      id: "cp-" + Date.now(),
      code: newCouponForm.code.toUpperCase(),
      title: newCouponForm.title,
      discount: `${newCouponForm.discount}٪`,
      maxDiscount: `${formatToman(Number(newCouponForm.maxDiscount) || 100000)} تومان`,
      usedCount: 0,
      active: true,
    };
    setCoupons([created, ...coupons]);
    setShowAddCouponModal(false);
    setNewCouponForm({ code: "", title: "", discount: "", maxDiscount: "" });
  };

  const filteredProducts = (products || []).filter((p) => {
    if (!productSearch.trim()) return true;
    const term = productSearch.toLowerCase();
    return (
      p.title.toLowerCase().includes(term) ||
      (p.carModel && p.carModel.toLowerCase().includes(term)) ||
      (p.brand && p.brand.toLowerCase().includes(term))
    );
  });

  const filteredOrders = allOrders.filter((ord) => {
    if (orderFilter === "pending") return ord.status === "در حال بسته‌بندی";
    if (orderFilter === "approved") return ord.status === "تایید شده";
    if (orderFilter === "delivered") return ord.status === "تحویل شده";
    return true;
  });

  const menuItems = [
    { id: "overview", label: "داشبورد و آمار فروش", icon: "dashboard" },
    { id: "products", label: "مدیریت قطعات خودرو", icon: "inventory_2", badge: products?.length || 0 },
    { id: "orders", label: "مدیریت سفارشات انبار", icon: "shopping_cart", badge: allOrders.length },
    { id: "coupons", label: "کپن‌ها و تخفیفات ویژه", icon: "confirmation_number", badge: coupons.length },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#0b0b0b] text-white lg:flex">
      {/* Sidebar */}
      <aside className="flex w-full shrink-0 flex-col border-b border-white/5 bg-[#101010] lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:border-b-0 lg:border-l">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2 border-b border-white/5 py-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 text-black">
              <span className="material-symbols-outlined text-2xl">{BRAND.logoIcon}</span>
            </span>
            <span className="text-lg font-black text-white">{BRAND.name}</span>
          </Link>

          <p className="text-[10px] font-bold tracking-widest text-amber-400">
            پنل مدیریت تخصصی قطعات
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-1">
          <p className="px-2 pb-2 text-[10px] font-bold tracking-widest text-white/40">
            بخش‌های مدیریتی
          </p>

          <ul className="space-y-1.5">
            {menuItems.map((item) => {
              const active = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-all ${
                      active
                        ? "border-r-4 border-amber-400 bg-amber-400/10 text-amber-300"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-lg ${active ? "text-amber-400" : "text-white/50"}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300 font-mono">
                        {toPersianDigits(item.badge)}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="pt-4 border-t border-white/5">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold text-zinc-400 hover:bg-zinc-900 hover:text-amber-300 transition"
            >
              <span className="material-symbols-outlined text-lg">storefront</span>
              <span>مشاهده وب‌سایت فروشگاه</span>
            </Link>
          </div>
        </nav>

        {/* Admin User Card */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 font-bold">
                م
              </span>
              <div>
                <p className="text-xs font-bold text-white">مدیر ارشد سامانه</p>
                <p className="mt-0.5 text-[10px] text-emerald-400">سطح دسترسی کامل</p>
              </div>
            </div>

            <Link to="/" title="خروج به صفحه اصلی">
              <span className="material-symbols-outlined text-white/40 hover:text-red-400 text-lg">
                logout
              </span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 space-y-6 p-6 min-w-0">
        {/* Top Header */}
        <section className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-xl md:text-2xl font-extrabold text-white">
              {menuItems.find((m) => m.id === activeTab)?.label}
            </h1>

            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
              خودروهای ایرانی (ایران خودرو و سایپا)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              سامانه متصل و آماده
            </span>
          </div>
        </section>

        {/* 1. OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {ADMIN_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-[#141414] p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                      <span className={`material-symbols-outlined ${stat.iconColor}`}>
                        {stat.icon}
                      </span>
                    </span>

                    <span
                      className={`flex items-center gap-1 text-xs font-bold ${stat.trendColor}`}
                    >
                      {stat.trendIcon && (
                        <span className="material-symbols-outlined text-base">
                          {stat.trendIcon}
                        </span>
                      )}
                      {stat.trend}
                    </span>
                  </div>

                  <p className="mt-4 text-xs text-white/50">{stat.label}</p>
                  <p className="mt-1 flex items-baseline gap-2 text-xl font-extrabold text-white">
                    {stat.value}
                    <span className="text-xs font-medium text-white/40">{stat.unit}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Sales Chart & Critical Stock */}
            <div className="grid gap-6 xl:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-[#141414] p-6 xl:col-span-2">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-base font-extrabold text-white">نمودار فروش هفتگی قطعات</h2>
                    <p className="mt-1 text-xs text-white/50">
                      روند فروش قطعات خانواده پژو، دنا، شاهین و کوییک
                    </p>
                  </div>

                  <span className="rounded-lg border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
                    هفتگی
                  </span>
                </div>

                <div className="mt-6">
                  <svg
                    viewBox="0 0 700 240"
                    className="h-52 w-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {[40, 90, 140, 190].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        x2="700"
                        y1={y}
                        y2={y}
                        stroke="rgba(255,255,255,0.07)"
                        strokeDasharray="4 8"
                      />
                    ))}

                    <path
                      d="M0,170 C60,120 110,110 170,130 C230,150 260,150 320,80 C380,20 430,30 470,90 C510,150 560,165 610,155 C650,147 680,90 700,40 L700,240 L0,240 Z"
                      fill="url(#chartFill)"
                    />

                    <path
                      d="M0,170 C60,120 110,110 170,130 C230,150 260,150 320,80 C380,20 430,30 470,90 C510,150 560,165 610,155 C650,147 680,90 700,40"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                    />
                  </svg>

                  <div className="mt-4 flex justify-between text-xs text-white/40">
                    {ADMIN_CHART_DAYS.map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Critical Stock Alert */}
              <div className="rounded-2xl border border-white/5 bg-[#141414] p-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <h2 className="text-base font-extrabold text-white">موجودی بحرانی انبار</h2>
                  <span className="rounded-full bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 text-[11px] font-bold text-red-400">
                    نیاز به سفارش‌گذاری
                  </span>
                </div>

                <div className="mt-4 divide-y divide-white/5">
                  {ADMIN_LOW_STOCK.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between gap-3 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-10 w-10 rounded-lg object-cover border border-white/10"
                        />
                        <div>
                          <p className="text-xs font-bold text-white line-clamp-1 max-w-[140px]">
                            {item.name}
                          </p>
                          <span className="text-[11px] text-red-400">{item.stock}</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveTab("products")}
                        className="rounded-lg bg-zinc-800 px-2.5 py-1 text-[11px] font-bold text-zinc-300 hover:bg-zinc-700"
                      >
                        شارژ انبار
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. PRODUCTS MANAGEMENT TAB */}
        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/5 bg-[#141414] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative w-72">
                    <input
                      type="text"
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      placeholder="جستجوی نام قطعه، مدل ماشین یا برند..."
                      className="w-full rounded-xl border border-white/10 bg-black/60 py-2.5 pr-9 pl-4 text-xs text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                    />
                    <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-zinc-400 text-lg">
                      search
                    </span>
                  </div>

                  <span className="text-xs text-zinc-400 font-medium bg-black/40 px-3 py-2 rounded-xl border border-white/5">
                    تعداد: <span className="text-amber-400 font-bold">{toPersianDigits(filteredProducts.length)}</span> قطعه
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleResetCatalog}
                    className="flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-bold text-zinc-400 hover:text-white hover:border-zinc-700 transition"
                    title="بازنشانی قطعات به حالت اولیه کاتالوگ"
                  >
                    <span className="material-symbols-outlined text-base">restart_alt</span>
                    <span className="hidden sm:inline">بازنشانی کاتالوگ</span>
                  </button>

                  <button
                    type="button"
                    onClick={openAddModal}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 px-5 py-2.5 text-xs font-extrabold text-black transition hover:brightness-110 shadow-lg shadow-amber-500/10"
                  >
                    <span className="material-symbols-outlined text-lg">add_circle</span>
                    افزودن قطعه جدید به انبار
                  </button>
                </div>
              </div>

              {/* Table of Products */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-zinc-400">
                      <th className="pb-3.5 pr-4 font-bold">تصویر و نام قطعه</th>
                      <th className="pb-3.5 font-bold">شرکت و مدل خودرو</th>
                      <th className="pb-3.5 font-bold">دسته‌بندی و کد فنی</th>
                      <th className="pb-3.5 font-bold">برند سازنده</th>
                      <th className="pb-3.5 font-bold">قیمت فروش (تومان)</th>
                      <th className="pb-3.5 font-bold text-center">وضعیت موجودی انبار</th>
                      <th className="pb-3.5 pl-4 text-left font-bold">عملیات مدیریت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-zinc-200">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-white/[0.02] transition group">
                        <td className="py-4 pr-4">
                          <div className="flex items-center gap-3">
                            <div
                              onClick={() => openEditModal(p)}
                              className="relative cursor-pointer group/img shrink-0"
                              title="کلیک برای ویرایش قطعه"
                            >
                              <img
                                src={p.image}
                                alt={p.title}
                                className="h-12 w-12 rounded-xl object-cover border border-white/10 group-hover/img:border-amber-400 transition"
                              />
                              <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center bg-black/60 rounded-xl opacity-0 group-hover/img:opacity-100 text-amber-300 text-base transition">
                                edit
                              </span>
                            </div>
                            <div>
                              <button
                                type="button"
                                onClick={() => openEditModal(p)}
                                className="font-bold text-white block text-right hover:text-amber-300 transition line-clamp-1 max-w-[220px]"
                                title={p.title}
                              >
                                {p.title}
                              </button>
                              <div className="flex items-center gap-2 mt-1">
                                {p.badge && (
                                  <span className="rounded bg-amber-400/10 text-amber-300 px-1.5 py-0.5 text-[9px] font-bold border border-amber-400/20">
                                    {p.badge}
                                  </span>
                                )}
                                <span className="text-[10px] text-zinc-500 font-mono" dir="ltr">
                                  {p.code || "STD-PART"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 font-medium">
                          <span className="text-amber-400 font-bold block">{p.company}</span>
                          <span className="text-zinc-400 text-[11px]">{p.carModel}</span>
                        </td>
                        <td className="py-4">
                          <span className="text-zinc-300 block">{p.category}</span>
                          <span className="text-zinc-500 text-[10px]">{p.warranty || "۱۲ ماه گارانتی"}</span>
                        </td>
                        <td className="py-4 font-bold text-zinc-200">{p.brand}</td>
                        <td className="py-4 font-mono">
                          <div className="flex flex-col">
                            <span className="font-black text-amber-400 text-sm">
                              {formatToman(p.price)}
                            </span>
                            {p.oldPrice && p.oldPrice > p.price && (
                              <span className="text-zinc-500 line-through text-[10px]">
                                {formatToman(p.oldPrice)}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <button
                            type="button"
                            onClick={() => handleToggleStock(p)}
                            title="کلیک برای تغییر وضعیت موجودی این قطعه"
                            className={`cursor-pointer inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold transition ${
                              p.inStock !== false
                                ? "bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20"
                                : "bg-red-500/10 border border-red-500/40 text-red-400 hover:bg-red-500/20"
                            }`}
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${
                                p.inStock !== false ? "bg-emerald-400 animate-pulse" : "bg-red-400"
                              }`}
                            ></span>
                            {p.inStock !== false ? "موجود در انبار" : "ناموجود"}
                          </button>
                        </td>
                        <td className="py-4 pl-4 text-left">
                          <div className="flex items-center justify-end gap-2">
                            {/* دکمه ویرایش برجسته با متن و آیکون */}
                            <button
                              type="button"
                              onClick={() => openEditModal(p)}
                              className="flex items-center gap-1.5 rounded-xl bg-amber-400/10 border border-amber-400/40 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-400 hover:text-black transition shadow-sm"
                              title="ویرایش مشخصات قطعه"
                            >
                              <span className="material-symbols-outlined text-base">edit</span>
                              <span>ویرایش اطلاعات</span>
                            </button>

                            {/* دکمه مشاهده در سایت */}
                            <Link
                              to={`/product?id=${p.id}`}
                              className="flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900 p-2 text-zinc-400 hover:border-amber-400/50 hover:text-white transition"
                              title="مشاهده صفحه قطعه در فروشگاه"
                            >
                              <span className="material-symbols-outlined text-base">visibility</span>
                            </Link>

                            {/* دکمه حذف قطعه */}
                            <button
                              type="button"
                              onClick={() => handleDeleteProduct(p.id)}
                              className="flex items-center justify-center rounded-xl border border-white/5 bg-zinc-900 p-2 text-red-400/80 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 transition"
                              title="حذف قطعه از انبار"
                            >
                              <span className="material-symbols-outlined text-base">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 3. ORDERS MANAGEMENT TAB */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/5 bg-[#141414] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex gap-2 text-xs">
                  {[
                    { id: "all", label: "همه سفارش‌ها" },
                    { id: "pending", label: "در حال بسته‌بندی" },
                    { id: "approved", label: "تایید شده" },
                    { id: "delivered", label: "تحویل مشتری" },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setOrderFilter(f.id)}
                      className={`rounded-xl px-3 py-1.5 font-bold transition ${
                        orderFilter === f.id
                          ? "bg-amber-400 text-black"
                          : "bg-black/40 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <span className="text-xs text-zinc-400">
                  تعداد: {toPersianDigits(filteredOrders.length)} سفارش
                </span>
              </div>

              {/* Orders Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-right text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-zinc-400">
                      <th className="pb-3 pr-4 font-bold">شماره سفارش</th>
                      <th className="pb-3 font-bold">مشتری</th>
                      <th className="pb-3 font-bold">قطعات</th>
                      <th className="pb-3 font-bold">روش ارسال</th>
                      <th className="pb-3 font-bold">مبلغ فاکتور</th>
                      <th className="pb-3 font-bold">وضعیت فعلی</th>
                      <th className="pb-3 pl-4 text-left font-bold">تغییر وضعیت انبار</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-zinc-200">
                    {filteredOrders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-white/[0.02] transition">
                        <td className="py-3.5 pr-4 font-mono font-bold text-amber-400">
                          {ord.id}
                        </td>
                        <td className="py-3.5">
                          <span className="font-bold text-white block">{ord.customer}</span>
                          <span className="text-zinc-500 text-[10px]" dir="ltr">{ord.phone}</span>
                        </td>
                        <td className="py-3.5 text-zinc-300 max-w-xs truncate">
                          {ord.itemsText}
                        </td>
                        <td className="py-3.5 text-zinc-400">{ord.shipping}</td>
                        <td className="py-3.5 font-black text-amber-400 font-mono">
                          {formatToman(ord.total)} تومان
                        </td>
                        <td className="py-3.5">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                              ord.status === "تایید شده"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                : ord.status === "تحویل شده"
                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                : "bg-amber-400/10 text-amber-300 border border-amber-400/20"
                            }`}
                          >
                            {ord.status}
                          </span>
                        </td>
                        <td className="py-3.5 pl-4 text-left">
                          <select
                            value={ord.status}
                            onChange={(e) => handleUpdateOrderStatus(ord.id, e.target.value)}
                            className="rounded-lg border border-white/10 bg-black/60 px-2.5 py-1 text-[11px] text-white focus:border-amber-400 focus:outline-none"
                          >
                            <option value="در حال بسته‌بندی">در حال بسته‌بندی</option>
                            <option value="تایید شده">تایید شده</option>
                            <option value="ارسال با تیپاکس">ارسال با تیپاکس</option>
                            <option value="تحویل شده">تحویل شده</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 4. COUPONS TAB */}
        {activeTab === "coupons" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/5 bg-[#141414] p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div>
                  <h2 className="text-base font-extrabold text-white">کدهای تخفیف و کپن‌های فروشگاه</h2>
                  <p className="mt-1 text-xs text-white/50">
                    مدیریت تخفیف‌های دوره‌ای و ویژه مشتریان باشگاه طلایی
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAddCouponModal(true)}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 px-5 py-2.5 text-xs font-bold text-black transition hover:brightness-110 shadow-md"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                  تعریف کد تخفیف جدید
                </button>
              </div>

              {/* Coupons List */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {coupons.map((c) => (
                  <div
                    key={c.id}
                    className={`rounded-2xl border p-5 transition ${
                      c.active
                        ? "border-amber-400/40 bg-zinc-950 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                        : "border-white/5 bg-[#101010] opacity-60"
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <span className="font-mono text-base font-black text-amber-400 tracking-wider">
                        {c.code}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                          c.active ? "bg-emerald-500/10 text-emerald-400" : "bg-zinc-800 text-zinc-400"
                        }`}
                      >
                        {c.active ? "فعال" : "غیرفعال"}
                      </span>
                    </div>

                    <h4 className="mt-3 text-xs font-bold text-white">{c.title}</h4>

                    <div className="mt-3 space-y-1.5 text-xs text-zinc-400">
                      <div className="flex justify-between">
                        <span>میزان تخفیف:</span>
                        <span className="font-bold text-amber-400">{c.discount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>سقف تخفیف:</span>
                        <span className="text-zinc-200">{c.maxDiscount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>تعداد استفاده:</span>
                        <span className="font-mono">{toPersianDigits(c.usedCount)} بار</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleCoupon(c.id)}
                      className={`mt-4 w-full rounded-xl py-2 text-xs font-bold transition ${
                        c.active
                          ? "border border-red-500/30 text-red-400 hover:bg-red-500/10"
                          : "border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                      }`}
                    >
                      {c.active ? "غیرفعال کردن کد" : "فعال‌سازی مجدد"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modal: Add or Edit Product */}
      {showProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
          <div className="w-full max-w-3xl rounded-3xl border border-zinc-700/80 bg-[#121212] p-6 sm:p-8 shadow-2xl my-8 text-xs max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
                  <span className="material-symbols-outlined text-xl">
                    {editingProduct ? "edit_note" : "add_box"}
                  </span>
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    {editingProduct
                      ? `ویرایش مشخصات قطعه: ${editingProduct.title}`
                      : "افزودن قطعه جدید به انبار فروشگاه"}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {editingProduct
                      ? `شناسه سیستمی: ${editingProduct.id} — ویرایش کامل اطلاعات فنی، قیمت و عکس`
                      : "ثبت مشخصات قطعات خودروهای ایرانی، بارگذاری عکس و تعیین موجودی"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowProductModal(false);
                  setEditingProduct(null);
                }}
                className="rounded-xl p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="mt-6 space-y-6">
              {/* بخش ۱: تصاویر و آپلود عکس قطعه (بسیار شاخص و کامل) */}
              <div className="rounded-2xl border border-amber-400/30 bg-black/60 p-5 space-y-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-amber-400 font-extrabold">
                    <span className="material-symbols-outlined text-xl">image</span>
                    <span className="text-sm">تصویر شاخص و عکس قطعه خودرو</span>
                  </div>
                  <span className="text-[11px] text-zinc-400">
                    نمایش در صفحه محصولات و جزئیات کالا
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                  {/* کادر پیش‌نمایش عکس فعال */}
                  <div className="md:col-span-4 flex flex-col items-center">
                    <div className="relative h-40 w-40 overflow-hidden rounded-2xl border-2 border-amber-400/60 bg-zinc-950 p-1 shadow-lg shadow-amber-500/10">
                      <img
                        src={productForm.image}
                        alt="پیش‌نمایش قطعه"
                        className="h-full w-full object-cover rounded-xl"
                      />
                      <span className="absolute bottom-2 right-2 left-2 rounded-lg bg-black/80 backdrop-blur-sm px-2 py-1 text-center text-[10px] font-bold text-amber-300 border border-amber-400/30">
                        پیش‌نمایش فعال
                      </span>
                    </div>

                    <p className="mt-2 text-center text-[10px] text-zinc-400 max-w-[160px] truncate" dir="ltr">
                      {productForm.image?.slice(0, 35)}...
                    </p>
                  </div>

                  {/* بخش آپلود درگ اند دراپ و فایل */}
                  <div className="md:col-span-8 space-y-3">
                    {/* باکس درگ اند دراپ */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDropFile}
                      className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-5 text-center transition cursor-pointer ${
                        isDragging
                          ? "border-amber-400 bg-amber-400/10"
                          : "border-white/20 bg-zinc-900/50 hover:border-amber-400/60 hover:bg-zinc-900"
                      }`}
                    >
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        title="انتخاب عکس از دستگاه"
                      />
                      <span className="material-symbols-outlined text-4xl text-amber-400">
                        add_photo_alternate
                      </span>
                      <p className="mt-2 text-xs font-bold text-white">
                        عکس را به اینجا بکشید یا برای انتخاب از دستگاه کلیک کنید
                      </p>
                      <p className="mt-1 text-[10px] text-zinc-400">
                        پشتیبانی از فایل‌های JPG، PNG و WEBP از گوشی یا کامپیوتر
                      </p>
                    </div>

                    {/* وارد کردن آدرس مستقیم اینترنتی */}
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-300 mb-1">
                        یا آدرس مستقیم اینترنتی تصویر (Image URL) را وارد کنید:
                      </label>
                      <div className="relative">
                        <input
                          type="url"
                          value={productForm.image}
                          onChange={(e) =>
                            setProductForm({ ...productForm, image: e.target.value })
                          }
                          placeholder="https://..."
                          dir="ltr"
                          className="w-full rounded-xl border border-white/10 bg-black px-3.5 py-2 pl-9 text-zinc-200 placeholder-zinc-600 focus:border-amber-400 focus:outline-none font-mono text-[11px]"
                        />
                        <span className="material-symbols-outlined absolute left-2.5 top-2 text-zinc-500 text-sm">
                          link
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* گالری کاتالوگ تصاویر آماده قطعات خودروهای ایرانی */}
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-bold text-zinc-300 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-amber-400">
                        auto_awesome
                      </span>
                      انتخاب سریع از تصاویر قطعات خودروهای ایرانی (کلیک کنید):
                    </span>
                    <span className="text-[10px] text-amber-400/80">آماده و با کیفیت بالا</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {SAMPLE_PART_IMAGES.map((preset) => {
                      const isSelected = productForm.image === preset.url;
                      return (
                        <button
                          key={preset.name}
                          type="button"
                          onClick={() =>
                            setProductForm({ ...productForm, image: preset.url })
                          }
                          className={`flex items-center gap-2 rounded-xl p-2 text-right transition border ${
                            isSelected
                              ? "border-amber-400 bg-amber-400/15 shadow-sm text-amber-300 font-bold"
                              : "border-white/5 bg-zinc-900/80 text-zinc-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <img
                            src={preset.url}
                            alt={preset.name}
                            className="h-9 w-9 rounded-lg object-cover shrink-0 border border-white/10"
                          />
                          <div className="min-w-0 flex-1">
                            <span className="block text-[11px] truncate">{preset.name}</span>
                            <span className="block text-[9px] text-zinc-500 truncate">
                              {preset.car}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* بخش ۲: اطلاعات پایه قطعه */}
              <div className="rounded-2xl border border-white/5 bg-zinc-900/60 p-5 space-y-4">
                <h4 className="text-xs font-bold text-amber-400 border-b border-white/5 pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">info</span>
                  اطلاعات شناسنامه قطعه
                </h4>

                <div>
                  <label className="block font-bold text-zinc-300">
                    نام کامل قطعه خودرو <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={productForm.title}
                    onChange={(e) =>
                      setProductForm({ ...productForm, title: e.target.value })
                    }
                    placeholder="مثلاً: کیت کلاچ کامل والئو (Valeo) اصلی فرانسه - پژو ۲۰۶ و ۲۰۷"
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3.5 py-2.5 text-white placeholder-zinc-600 focus:border-amber-400 focus:outline-none text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-zinc-300">شرکت خودروساز</label>
                    <select
                      value={productForm.company}
                      onChange={(e) =>
                        setProductForm({ ...productForm, company: e.target.value })
                      }
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option value="ایران خودرو">ایران خودرو (IKCO)</option>
                      <option value="سایپا">سایپا (SAIPA)</option>
                      <option value="پارس خودرو">پارس خودرو / رنو</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-zinc-300">
                      خانواده / مدل اصلی خودرو <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={productForm.carModel}
                      onChange={(e) =>
                        setProductForm({ ...productForm, carModel: e.target.value })
                      }
                      placeholder="پژو ۲۰۶ و ۲۰۷، دنا و سمند، شاهین..."
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white placeholder-zinc-600 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-zinc-300">دسته‌بندی فنی قطعه</label>
                    <select
                      value={productForm.category}
                      onChange={(e) =>
                        setProductForm({ ...productForm, category: e.target.value })
                      }
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option value="موتوری و گیربکس">موتوری و گیربکس</option>
                      <option value="ترمز و تعلیق">ترمز و تعلیق</option>
                      <option value="برقی و سنسورها">برقی و سنسورها</option>
                      <option value="مصرفی و فیلترها">مصرفی و فیلترها</option>
                      <option value="بدنه و چراغ">بدنه و چراغ</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-zinc-300">
                      برند سازنده قطعه <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={productForm.brand}
                      onChange={(e) =>
                        setProductForm({ ...productForm, brand: e.target.value })
                      }
                      placeholder="ایساکو، سایپا یدک، کروز، عظام، والئو، بوش..."
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white placeholder-zinc-600 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-zinc-300">
                    خودروهای سازگار (با کامای فارسی «،» جدا کنید)
                  </label>
                  <input
                    type="text"
                    value={productForm.compatibleCars}
                    onChange={(e) =>
                      setProductForm({ ...productForm, compatibleCars: e.target.value })
                    }
                    placeholder="پژو ۲۰۶ تیپ ۵، پژو ۲۰۷i، رانا پلاس، تارا..."
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white placeholder-zinc-600 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* بخش ۳: قیمت‌گذاری، کد فنی و موجودی */}
              <div className="rounded-2xl border border-white/5 bg-zinc-900/60 p-5 space-y-4">
                <h4 className="text-xs font-bold text-amber-400 border-b border-white/5 pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">payments</span>
                  قیمت‌گذاری و انبارداری
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-zinc-300">
                      قیمت فروش نهایی (تومان) <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      value={productForm.price}
                      onChange={(e) =>
                        setProductForm({ ...productForm, price: e.target.value })
                      }
                      placeholder="4950000"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-amber-400 font-mono font-bold focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-zinc-300">
                      قیمت قبل از تخفیف (اختیاری - تومان)
                    </label>
                    <input
                      type="number"
                      value={productForm.oldPrice}
                      onChange={(e) =>
                        setProductForm({ ...productForm, oldPrice: e.target.value })
                      }
                      placeholder="5800000"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-zinc-300 font-mono focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-zinc-300">کد فنی قطعه (SKU)</label>
                    <input
                      type="text"
                      value={productForm.code}
                      onChange={(e) =>
                        setProductForm({ ...productForm, code: e.target.value })
                      }
                      placeholder="ISA-826360"
                      dir="ltr"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white font-mono focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-zinc-300">برچسب ویژه قطعه</label>
                    <input
                      type="text"
                      value={productForm.badge}
                      onChange={(e) =>
                        setProductForm({ ...productForm, badge: e.target.value })
                      }
                      placeholder="اصلی شرکتی، ضمانت ایساکو..."
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-zinc-300">مدت زمان گارانتی</label>
                    <input
                      type="text"
                      value={productForm.warranty}
                      onChange={(e) =>
                        setProductForm({ ...productForm, warranty: e.target.value })
                      }
                      placeholder="۱۲ ماه گارانتی طلایی"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-zinc-300">وضعیت موجودی در انبار</label>
                    <select
                      value={productForm.inStock ? "true" : "false"}
                      onChange={(e) =>
                        setProductForm({ ...productForm, inStock: e.target.value === "true" })
                      }
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white focus:border-amber-400 focus:outline-none font-bold"
                    >
                      <option value="true">موجود در انبار</option>
                      <option value="false">ناموجود در انبار</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-zinc-300">تعداد موجودی در انبار</label>
                    <input
                      type="number"
                      value={productForm.stockCount}
                      onChange={(e) =>
                        setProductForm({ ...productForm, stockCount: e.target.value })
                      }
                      placeholder="12"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 px-3 py-2 text-white font-mono focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-zinc-300">توضیحات و مشخصات فنی</label>
                  <textarea
                    rows={3}
                    value={productForm.description}
                    onChange={(e) =>
                      setProductForm({ ...productForm, description: e.target.value })
                    }
                    placeholder="مشخصات آلیاژ، گواهینامه‌های فنی و نکات نصب قطعه..."
                    className="mt-1 w-full rounded-xl border border-white/10 bg-black/80 p-3 text-white placeholder-zinc-600 focus:border-amber-400 focus:outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              {/* دکمه‌های ثبت و انصراف */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setShowProductModal(false);
                    setEditingProduct(null);
                  }}
                  className="rounded-xl px-5 py-2.5 text-zinc-400 hover:bg-white/5 hover:text-white transition font-bold"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 px-7 py-2.5 font-black text-black hover:brightness-110 transition shadow-lg shadow-amber-500/20"
                >
                  <span className="material-symbols-outlined text-base">save</span>
                  <span>{editingProduct ? "ذخیره تغییرات قطعه" : "ثبت و افزودن قطعه به انبار"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Add Coupon */}
      {showAddCouponModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl border border-zinc-700 bg-zinc-950 p-6 shadow-2xl text-xs">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-base font-bold text-white">تعریف کد تخفیف جدید</h3>
              <button
                type="button"
                onClick={() => setShowAddCouponModal(false)}
                className="text-zinc-400 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAddCoupon} className="mt-4 space-y-3">
              <div>
                <label className="block font-bold text-zinc-300">کد تخفیف (لاتین)</label>
                <input
                  type="text"
                  required
                  dir="ltr"
                  value={newCouponForm.code}
                  onChange={(e) => setNewCouponForm({ ...newCouponForm, code: e.target.value })}
                  placeholder="YADAK20"
                  className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-white font-mono uppercase focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-zinc-300">عنوان جشنواره یا تخفیف</label>
                <input
                  type="text"
                  required
                  value={newCouponForm.title}
                  onChange={(e) => setNewCouponForm({ ...newCouponForm, title: e.target.value })}
                  placeholder="تخفیف ویژه دارندگان دنا و پژو"
                  className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-zinc-300">درصد تخفیف</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="100"
                    value={newCouponForm.discount}
                    onChange={(e) => setNewCouponForm({ ...newCouponForm, discount: e.target.value })}
                    placeholder="15"
                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-white font-mono focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-bold text-zinc-300">سقف تخفیف (تومان)</label>
                  <input
                    type="number"
                    required
                    value={newCouponForm.maxDiscount}
                    onChange={(e) => setNewCouponForm({ ...newCouponForm, maxDiscount: e.target.value })}
                    placeholder="200000"
                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-white font-mono focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setShowAddCouponModal(false)}
                  className="px-3 py-2 text-zinc-400 hover:text-white"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-amber-400 px-5 py-2 font-bold text-black hover:bg-amber-300 transition"
                >
                  ایجاد کوپن
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-2xl bg-zinc-950 border border-amber-400/80 px-5 py-3.5 shadow-2xl shadow-amber-500/10 text-white font-bold text-xs backdrop-blur-md animate-fade-in">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-400 text-black font-black">
            <span className="material-symbols-outlined text-base">check</span>
          </span>
          <span className="text-zinc-200">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage("")}
            className="text-zinc-500 hover:text-white mr-2"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}
    </div>
  );
}
