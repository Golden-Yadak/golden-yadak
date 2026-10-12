import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../hooks/useCart";
import { useUserData } from "../hooks/useUserData";
import { formatToman, toPersianDigits } from "../lib/format";

export default function Checkout() {
  const { items, totalPrice, clear } = useCart();
  const { addresses, addAddress, addOrder } = useUserData();

  // Selected address ID
  const defaultAddr = addresses.find((a) => a.isDefault) || addresses[0];
  const [selectedAddrId, setSelectedAddrId] = useState(defaultAddr?.id || "");

  // Modal for new address in checkout
  const [showNewAddrModal, setShowNewAddrModal] = useState(false);
  const [newAddrForm, setNewAddrForm] = useState({
    title: "آدرس سفارش",
    province: "تهران",
    city: "تهران",
    address: "",
    postalCode: "",
    recipientName: "",
    recipientPhone: "",
    isDefault: false,
  });

  // Shipping method
  const SHIPPING_OPTIONS = [
    {
      id: "tipax",
      name: "تیپاکس اکسپرس سراسری (تحویل ۲۴ الی ۴۸ ساعته)",
      cost: 85000,
      desc: "بسته‌بندی ضربه‌گیر ویژه قطعات حساس خودرو با بیمه ارزش کالا",
      icon: "local_shipping",
    },
    {
      id: "courier",
      name: "پیک فوری موتوری ویژه تهران (تحویل حداکثر ۳ ساعته)",
      cost: 50000,
      desc: "ارسال مستقیم از انبار مرکزی ملت تا درب تعمیرگاه یا منزل",
      icon: "two_wheeler",
    },
    {
      id: "post",
      name: "پست پیشتاز جمهوری اسلامی (تحویل ۲ الی ۴ روزه)",
      cost: 45000,
      desc: "ارسال اقتصادی به تمام نقاط شهری و روستایی کشور",
      icon: "markunread_mailbox",
    },
  ];
  const [shippingMethodId, setShippingMethodId] = useState("tipax");

  // Payment method
  const PAYMENT_OPTIONS = [
    {
      id: "online",
      name: "پرداخت اینترنتی امن (شاپرک - شتاب)",
      desc: "کلیه کارت‌های بانکی عضو شتاب با رمز دوم پویا",
      icon: "credit_card",
    },
    {
      id: "card",
      name: "کارت به کارت مستقیم",
      desc: "واریز به شماره کارت بانک سامان به نام فروشگاه گلدن یدک",
      icon: "sync_alt",
    },
    {
      id: "cod",
      name: "پرداخت در محل (مخصوص تهران)",
      desc: "تسویه با دستگاه کارتخوان سیار هنگام تحویل کالا",
      icon: "payments",
    },
  ];
  const [paymentMethodId, setPaymentMethodId] = useState("online");

  // Promo code
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState(null);

  // Note
  const [orderNote, setOrderNote] = useState("");

  // Completed Order State
  const [completedOrder, setCompletedOrder] = useState(null);

  const selectedShipping =
    SHIPPING_OPTIONS.find((s) => s.id === shippingMethodId) || SHIPPING_OPTIONS[0];

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === "GOLDEN10" || code === "YADAK10") {
      const discount = Math.round(totalPrice * 0.1);
      setAppliedDiscount(discount);
      setCouponMessage({ type: "success", text: "تخفیف ۱۰ درصدی با موفقیت اعمال شد!" });
    } else if (code === "VIP15") {
      const discount = Math.round(totalPrice * 0.15);
      setAppliedDiscount(discount);
      setCouponMessage({ type: "success", text: "تخفیف ۱۵ درصدی ویژه باشگاه مشتریان اعمال شد!" });
    } else {
      setAppliedDiscount(0);
      setCouponMessage({ type: "error", text: "کد تخفیف وارد شده نامعتبر یا منقضی شده است." });
    }
  };

  const handleSaveNewAddress = (e) => {
    e.preventDefault();
    const created = addAddress(newAddrForm);
    setSelectedAddrId(created.id);
    setShowNewAddrModal(false);
  };

  const finalTotal = Math.max(0, totalPrice - appliedDiscount + selectedShipping.cost);

  const handlePlaceOrder = () => {
    if (items.length === 0) return;

    const chosenAddr = addresses.find((a) => a.id === selectedAddrId) || addresses[0];

    const orderData = {
      items: items.map((i) => ({
        id: i.id,
        title: i.title,
        price: i.price,
        qty: i.qty,
        image: i.image,
      })),
      totalPrice: totalPrice - appliedDiscount,
      shippingFee: selectedShipping.cost,
      shippingMethod: selectedShipping.name,
      paymentMethod: PAYMENT_OPTIONS.find((p) => p.id === paymentMethodId)?.name,
      address: chosenAddr
        ? `${chosenAddr.province}، ${chosenAddr.city}، ${chosenAddr.address} (تحویل‌گیرنده: ${chosenAddr.recipientName})`
        : "نشانی ثبت شده در سیستم",
      note: orderNote,
    };

    const newOrder = addOrder(orderData);
    clear();
    setCompletedOrder(newOrder);
  };

  if (completedOrder) {
    return (
      <div dir="rtl" className="min-h-screen bg-black text-zinc-100 flex flex-col justify-between">
        <Header />

        <main className="mx-auto w-full max-w-3xl px-4 py-16 flex-1">
          <div className="rounded-3xl border border-amber-400/30 bg-zinc-950 p-8 md:p-12 text-center shadow-[0_0_30px_rgba(212,175,55,0.1)]">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border-2 border-emerald-400 text-emerald-400">
              <span className="material-symbols-outlined text-4xl">check</span>
            </div>

            <h1 className="mt-6 text-2xl md:text-3xl font-extrabold text-white">
              سفارش شما با موفقیت ثبت و تایید شد!
            </h1>

            <p className="mt-3 text-sm text-zinc-400 max-w-md mx-auto leading-6">
              سفارش شما در انبار مرکزی گلدن یدک تایید شد و هم‌اکنون در مرحله کنترل کیفیت و بسته‌بندی ایمن قرار دارد.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-right space-y-3 text-sm">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">شماره پیگیری سفارش:</span>
                <span className="font-mono font-extrabold text-amber-400 text-base">
                  {completedOrder.id}
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">کد رهگیری مرسوله:</span>
                <span className="font-mono text-zinc-200" dir="ltr">
                  {completedOrder.trackingCode}
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">روش ارسال:</span>
                <span className="text-zinc-200">{completedOrder.shippingMethod}</span>
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-zinc-400">مبلغ پرداخت شده:</span>
                <span className="font-bold text-amber-400 text-base">
                  {formatToman(completedOrder.totalPrice + (completedOrder.shippingFee || 0))} تومان
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard/orders"
                className="w-full sm:w-auto rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 px-8 py-3 text-sm font-bold text-black transition hover:brightness-110"
              >
                مشاهده در سفارش‌های من
              </Link>

              <Link
                to="/products"
                className="w-full sm:w-auto rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-3 text-sm font-bold text-zinc-300 hover:text-white hover:border-zinc-500 transition"
              >
                ادامه خرید قطعات
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div dir="rtl" className="min-h-screen bg-black text-zinc-100 flex flex-col justify-between">
        <Header />
        <main className="mx-auto w-full max-w-xl px-4 py-20 text-center flex-1">
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950 p-12">
            <span className="material-symbols-outlined text-6xl text-zinc-600">
              shopping_cart_checkout
            </span>
            <h2 className="mt-4 text-xl font-bold text-white">سبد خرید شما برای تسویه خالی است</h2>
            <p className="mt-2 text-sm text-zinc-400">
              لطفاً ابتدا قطعات مورد نیاز خودروی خود را انتخاب کرده و به سبد اضافه کنید.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex rounded-xl bg-amber-400 px-6 py-2.5 text-xs font-bold text-black hover:bg-amber-300"
            >
              مشاهده محصولات
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-black text-zinc-100 flex flex-col justify-between">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 flex-1">
        {/* Step indicator */}
        <div className="mb-8 flex items-center justify-center gap-4 text-xs font-bold text-zinc-400">
          <Link to="/cart" className="flex items-center gap-2 hover:text-amber-400">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-zinc-300">
              ۱
            </span>
            <span>سبد خرید</span>
          </Link>
          <span className="text-zinc-600">———</span>
          <div className="flex items-center gap-2 text-amber-400">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-black">
              ۲
            </span>
            <span>اطلاعات ارسال و پرداخت</span>
          </div>
          <span className="text-zinc-600">———</span>
          <div className="flex items-center gap-2 text-zinc-600">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-600">
              ۳
            </span>
            <span>تایید نهایی و فاکتور</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Main Options Column */}
          <div className="space-y-8">
            {/* 1. Address Section */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-2xl text-amber-400">
                    location_on
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-white">انتخاب آدرس تحویل سفارش</h2>
                    <p className="text-xs text-zinc-400">
                      مرسوله به این آدرس ارسال و تحویل خواهد شد.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowNewAddrModal(true)}
                  className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span className="material-symbols-outlined text-base">add</span>
                  افزودن آدرس جدید
                </button>
              </div>

              <div className="mt-6 space-y-3">
                {addresses.map((addr) => {
                  const isSelected = selectedAddrId === addr.id;
                  return (
                    <label
                      key={addr.id}
                      onClick={() => setSelectedAddrId(addr.id)}
                      className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-all ${
                        isSelected
                          ? "border-amber-400/80 bg-amber-400/5 shadow-[0_0_15px_rgba(212,175,55,0.06)]"
                          : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="address_select"
                        checked={isSelected}
                        onChange={() => setSelectedAddrId(addr.id)}
                        className="mt-1 h-4 w-4 accent-amber-400"
                      />
                      <div className="flex-1 text-sm">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-white">{addr.title}</span>
                          {addr.isDefault && (
                            <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                              پیش‌فرض
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs leading-5 text-zinc-300">
                          {addr.province}، {addr.city}، {addr.address}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-4 text-xs text-zinc-400">
                          <span>تحویل‌گیرنده: {addr.recipientName}</span>
                          <span dir="ltr">تلفن: {toPersianDigits(addr.recipientPhone)}</span>
                          <span>کد پستی: {toPersianDigits(addr.postalCode)}</span>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 2. Shipping Method Section */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                <span className="material-symbols-outlined text-2xl text-amber-400">
                  local_shipping
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white">انتخاب شیوه ارسال مرسوله</h2>
                  <p className="text-xs text-zinc-400">
                    بسته‌بندی ضربه‌گیر ویژه با هولوگرام پلمب انبار گلدن یدک
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {SHIPPING_OPTIONS.map((shipping) => {
                  const isSelected = shippingMethodId === shipping.id;
                  return (
                    <label
                      key={shipping.id}
                      onClick={() => setShippingMethodId(shipping.id)}
                      className={`flex cursor-pointer items-center justify-between gap-4 rounded-xl border p-4 transition-all ${
                        isSelected
                          ? "border-amber-400/80 bg-amber-400/5 shadow-[0_0_15px_rgba(212,175,55,0.06)]"
                          : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping_select"
                          checked={isSelected}
                          onChange={() => setShippingMethodId(shipping.id)}
                          className="h-4 w-4 accent-amber-400"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg text-amber-400">
                              {shipping.icon}
                            </span>
                            <span className="text-sm font-bold text-white">{shipping.name}</span>
                          </div>
                          <p className="mt-1 text-xs text-zinc-400">{shipping.desc}</p>
                        </div>
                      </div>

                      <span className="text-sm font-extrabold text-amber-400 shrink-0">
                        {formatToman(shipping.cost)} تومان
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 3. Payment Method Section */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                <span className="material-symbols-outlined text-2xl text-amber-400">
                  account_balance_wallet
                </span>
                <div>
                  <h2 className="text-lg font-bold text-white">انتخاب روش پرداخت</h2>
                  <p className="text-xs text-zinc-400">
                    اتصال به درگاه امن شاپرک با ضمانت بازگشت وجه ۷ روزه
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {PAYMENT_OPTIONS.map((pay) => {
                  const isSelected = paymentMethodId === pay.id;
                  return (
                    <label
                      key={pay.id}
                      onClick={() => setPaymentMethodId(pay.id)}
                      className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all ${
                        isSelected
                          ? "border-amber-400/80 bg-amber-400/5 shadow-[0_0_15px_rgba(212,175,55,0.06)]"
                          : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment_select"
                        checked={isSelected}
                        onChange={() => setPaymentMethodId(pay.id)}
                        className="h-4 w-4 accent-amber-400"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg text-amber-400">
                            {pay.icon}
                          </span>
                          <span className="text-sm font-bold text-white">{pay.name}</span>
                        </div>
                        <p className="mt-1 text-xs text-zinc-400">{pay.desc}</p>
                      </div>
                    </label>
                  );
                })}
              </div>

              {/* Order note */}
              <div className="mt-6">
                <label className="block text-xs font-bold text-zinc-300">
                  یادداشت و هماهنگی ارسال (اختیاری)
                </label>
                <input
                  type="text"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="مثلاً: تحویل به مکانیک در تعمیرگاه، یا تماس قبل از ارسال"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Sidebar Summary Column */}
          <aside className="space-y-6">
            <div className="sticky top-24 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-6">
              <h3 className="text-base font-extrabold text-white border-b border-zinc-800 pb-4">
                خلاصه پیش‌فاکتور
              </h3>

              {/* Items List */}
              <div className="divide-y divide-zinc-800/60 max-h-56 overflow-y-auto space-y-3 pr-1">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-3 pt-3 first:pt-0">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-10 w-10 rounded-lg object-cover border border-zinc-800 shrink-0"
                      />
                      <div className="text-xs">
                        <p className="font-bold text-white line-clamp-1 max-w-[170px]">
                          {item.title}
                        </p>
                        <span className="text-zinc-500">
                          {toPersianDigits(item.qty)} × {formatToman(item.price)}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-400 shrink-0">
                      {formatToman(item.price * item.qty)} تومان
                    </span>
                  </div>
                ))}
              </div>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyCoupon} className="border-t border-zinc-800 pt-4">
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  کد تخفیف دارید؟
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="GOLDEN10"
                    dir="ltr"
                    className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs font-mono text-white placeholder-zinc-600 focus:border-amber-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-zinc-800 px-4 py-2 text-xs font-bold text-zinc-200 hover:bg-zinc-700 transition"
                  >
                    اعمال
                  </button>
                </div>
                {couponMessage && (
                  <p
                    className={`mt-2 text-xs font-medium ${
                      couponMessage.type === "success" ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {couponMessage.text}
                  </p>
                )}
              </form>

              {/* Price Calculation */}
              <div className="border-t border-zinc-800 pt-4 space-y-3 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>مجموع قیمت قطعات:</span>
                  <span className="font-bold text-white">{formatToman(totalPrice)} تومان</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>تخفیف اعمال‌شده:</span>
                    <span className="font-bold">-{formatToman(appliedDiscount)} تومان</span>
                  </div>
                )}

                <div className="flex justify-between text-zinc-400">
                  <span>هزینه بسته‌بندی و ارسال:</span>
                  <span className="font-bold text-white">
                    {formatToman(selectedShipping.cost)} تومان
                  </span>
                </div>

                <div className="border-t border-zinc-800/80 pt-3 flex justify-between items-baseline">
                  <span className="text-sm font-extrabold text-white">مبلغ نهایی پرداخت:</span>
                  <div className="text-left">
                    <span className="text-lg font-black text-amber-400">
                      {formatToman(finalTotal)}
                    </span>
                    <span className="text-xs text-zinc-400 mr-1">تومان</span>
                  </div>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3.5 text-sm font-extrabold text-black transition hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                <span className="material-symbols-outlined text-lg">check_circle</span>
                پرداخت و ثبت نهایی سفارش
              </button>

              <div className="text-[11px] text-zinc-500 text-center space-y-1">
                <p>🔒 پرداخت امن توسط پروتکل رمزنگاری شاپرک</p>
                <p>⚡ اصالت و سلامت کلیه قطعات گارانتی می‌گردد</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Quick Add Address Modal */}
      {showNewAddrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-zinc-700 bg-zinc-950 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-base font-bold text-white">ثبت آدرس تحویل جدید</h3>
              <button
                type="button"
                onClick={() => setShowNewAddrModal(false)}
                className="text-zinc-400 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSaveNewAddress} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-bold text-zinc-300">عنوان آدرس</label>
                <input
                  type="text"
                  required
                  value={newAddrForm.title}
                  onChange={(e) => setNewAddrForm({ ...newAddrForm, title: e.target.value })}
                  placeholder="منزل یا تعمیرگاه"
                  className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-zinc-300">استان</label>
                  <input
                    type="text"
                    required
                    value={newAddrForm.province}
                    onChange={(e) => setNewAddrForm({ ...newAddrForm, province: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300">شهر</label>
                  <input
                    type="text"
                    required
                    value={newAddrForm.city}
                    onChange={(e) => setNewAddrForm({ ...newAddrForm, city: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300">نشانی پستی دقیق</label>
                <textarea
                  required
                  rows={2}
                  value={newAddrForm.address}
                  onChange={(e) => setNewAddrForm({ ...newAddrForm, address: e.target.value })}
                  placeholder="خیابان، پلاک، واحد..."
                  className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-zinc-300">کد پستی</label>
                  <input
                    type="text"
                    required
                    value={newAddrForm.postalCode}
                    onChange={(e) => setNewAddrForm({ ...newAddrForm, postalCode: e.target.value })}
                    placeholder="۱۰ رقمی"
                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300">شماره تماس</label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={newAddrForm.recipientPhone}
                    onChange={(e) => setNewAddrForm({ ...newAddrForm, recipientPhone: e.target.value })}
                    placeholder="0912..."
                    className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300">نام تحویل‌گیرنده</label>
                <input
                  type="text"
                  required
                  value={newAddrForm.recipientName}
                  onChange={(e) => setNewAddrForm({ ...newAddrForm, recipientName: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setShowNewAddrModal(false)}
                  className="px-3 py-2 text-xs text-zinc-400 hover:text-white"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-amber-400 px-5 py-2 text-xs font-bold text-black hover:bg-amber-300"
                >
                  افزودن و انتخاب
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
