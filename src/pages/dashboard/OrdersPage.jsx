import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";
import { formatToman, toPersianDigits } from "../../lib/format";

export default function OrdersPage() {
  const { orders } = useUserData();
  const [activeTab, setActiveTab] = useState("all");
  const [copiedCode, setCopiedCode] = useState(null);

  const filterTabs = [
    { id: "all", label: "همه سفارش‌ها", count: orders.length },
    { id: "current", label: "جاری و در حال ارسال", count: orders.filter((o) => o.status === "جاری").length },
    { id: "delivered", label: "تحویل داده شده", count: orders.filter((o) => o.status === "تحویل شده").length },
    { id: "cancelled", label: "لغو شده", count: orders.filter((o) => o.status === "لغو شده").length },
  ];

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "current") return order.status === "جاری";
    if (activeTab === "delivered") return order.status === "تحویل شده";
    if (activeTab === "cancelled") return order.status === "لغو شده";
    return true;
  });

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header and Filter Tabs */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-5">
          <span className="material-symbols-outlined text-2xl text-amber-400">
            local_mall
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-white">سفارش‌های من</h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              تاریخچه و رهگیری لحظه‌ای مرسوله‌های پستی و تیپاکس
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {filterTabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                  active
                    ? "bg-amber-400 text-black shadow-md"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[11px] ${
                    active ? "bg-black/20 text-black" : "bg-zinc-800 text-zinc-300"
                  }`}
                >
                  {toPersianDigits(tab.count)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Orders List */}
      {filteredOrders.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-12 text-center">
          <span className="material-symbols-outlined text-5xl text-zinc-600">
            inventory_2
          </span>
          <h3 className="mt-4 text-lg font-bold text-white">سفارشی در این وضعیت یافت نشد</h3>
          <p className="mt-2 text-xs text-zinc-400">
            می‌توانید قطعات مورد نیاز خودروی خود را از بخش فروشگاه انتخاب کنید.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-300"
          >
            مشاهده کاتالوگ قطعات
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const isCurrent = order.status === "جاری";
            const isDelivered = order.status === "تحویل شده";

            return (
              <article
                key={order.id}
                className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-700"
              >
                {/* Order Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 bg-zinc-900/50 px-6 py-4">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">شماره سفارش:</span>
                      <span className="font-extrabold text-amber-400 font-mono">
                        {order.id}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">تاریخ ثبت:</span>
                      <span className="font-medium text-zinc-300">
                        {toPersianDigits(order.date)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">روش ارسال:</span>
                      <span className="font-medium text-zinc-300">
                        {order.shippingMethod}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      isCurrent
                        ? "border border-amber-400/40 bg-amber-400/10 text-amber-300"
                        : isDelivered
                        ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                        : "border border-red-500/40 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {order.status} · {order.statusText}
                  </span>
                </div>

                {/* Items in Order */}
                <div className="p-6">
                  <div className="divide-y divide-zinc-800/60">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-16 w-16 rounded-xl object-cover border border-zinc-800 shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-white hover:text-amber-400 transition">
                              {item.title}
                            </h4>
                            <div className="mt-1 flex items-center gap-3 text-xs text-zinc-400">
                              <span>تعداد: {toPersianDigits(item.qty || 1)}</span>
                              <span>·</span>
                              <span>قیمت واحد: {formatToman(item.price)} تومان</span>
                            </div>
                          </div>
                        </div>

                        <span className="text-sm font-extrabold text-amber-400 self-end sm:self-center">
                          {formatToman(item.price * (item.qty || 1))} تومان
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer & Tracking */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800/80 pt-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      {order.trackingCode && (
                        <div className="flex items-center gap-2 rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-1.5">
                          <span className="text-zinc-500">کد رهگیری مرسوله:</span>
                          <span className="font-mono font-bold text-white" dir="ltr">
                            {order.trackingCode}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopy(order.trackingCode)}
                            className="text-amber-400 hover:text-amber-300 font-bold ml-1"
                            title="کپی کد رهگیری"
                          >
                            {copiedCode === order.trackingCode ? "کپی شد ✓" : "کپی"}
                          </button>
                        </div>
                      )}

                      {order.address && (
                        <span className="text-zinc-400 truncate max-w-sm">
                          📍 تحویل به: {order.address}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-400">مبلغ کل فاکتور:</span>
                      <span className="text-base font-black text-amber-400">
                        {formatToman(order.totalPrice + (order.shippingFee || 0))} تومان
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
