import { BRAND } from "../lib/config";
import {
  ADMIN_MENU,
  ADMIN_STATS,
  ADMIN_CHART_DAYS,
  ADMIN_LOW_STOCK,
  ADMIN_ORDERS,
} from "../data/admin";

export default function AdminDashboard() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#0b0b0b] text-white lg:flex">
      {/* سایدبار سمت راست */}
      <aside className="flex w-full shrink-0 flex-col border-b border-white/5 bg-[#101010] lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:border-b-0 lg:border-l">
        {/* برند */}
        <div className="flex flex-col items-center gap-3 border-b border-white/5 py-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-black">
              <span className="material-symbols-outlined">{BRAND.logoIcon}</span>
            </span>
            <span className="text-xl font-extrabold">{BRAND.name}</span>
          </div>

          <p className="text-[10px] font-bold tracking-[0.3em] text-white/40">
            ADMIN MANAGEMENT
          </p>
        </div>

        {/* منو */}
        <nav className="flex-1 p-4">
          <p className="px-2 pb-3 text-[10px] font-bold tracking-widest text-white/40">
            منوی پیشرفته
          </p>

          <ul className="space-y-2">
            {ADMIN_MENU.map(([icon, label, active]) => (
              <li key={label}>
                <a
                  href="#"
                  className={
                    active
                      ? "flex items-center gap-3 rounded-xl border-r-2 border-amber-400 bg-amber-400/10 px-4 py-3 text-sm font-bold text-amber-300"
                      : "flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                  }
                >
                  <span className="material-symbols-outlined text-xl text-amber-400/90">
                    {icon}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* کارت مدیر */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-300">
                <span className="material-symbols-outlined">person</span>
              </span>

              <div>
                <p className="text-sm font-bold">مدیر سیستم</p>
                <p className="mt-1 text-xs text-white/40">خروج از حساب</p>
              </div>
            </div>

            <span className="material-symbols-outlined text-white/40">logout</span>
          </div>
        </div>
      </aside>

      {/* محتوای اصلی */}
      <main className="flex-1 space-y-6 p-6">
        {/* هدر */}
        <section className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-2xl font-extrabold">خلاصه وضعیت داشبورد</h1>

            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
              امروز: ۲۸ اردیبهشت ۱۴۰۳
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center text-[10px] font-bold tracking-widest text-white/40">
              STATUS
              <span className="mt-1 text-xs text-emerald-400">آنلاین</span>
            </div>

            <span className="h-8 w-px bg-white/10"></span>

            <button
              aria-label="notifications"
              className="relative rounded-full p-2 transition hover:bg-white/5"
            >
              <span className="material-symbols-outlined text-white/70">
                notifications
              </span>
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
          </div>
        </section>

        {/* کارت‌های آمار */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

              <p className="mt-5 text-sm text-white/50">{stat.label}</p>

              <p className="mt-2 flex items-baseline gap-2 text-2xl font-extrabold">
                {stat.value}
                <span className="text-xs font-medium text-white/40">
                  {stat.unit}
                </span>
              </p>
            </div>
          ))}
        </section>

        {/* نمودار + موجودی */}
        <section className="grid gap-6 xl:grid-cols-3">
          {/* نمودار عملکرد فروش */}
          <div className="rounded-2xl border border-white/5 bg-[#141414] p-6 xl:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-extrabold">نمودار عملکرد فروش</h2>
                <p className="mt-2 text-xs text-white/50">
                  تحلیل هفتگی تراکنش‌های موفق
                </p>
              </div>

              <div className="flex gap-2 text-xs">
                <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/60 transition hover:text-white">
                  روزانه
                </button>

                <button className="rounded-lg border border-amber-400/40 bg-amber-400/10 px-4 py-2 font-bold text-amber-300">
                  هفتگی
                </button>
              </div>
            </div>

            <div className="mt-8">
              <svg
                viewBox="0 0 700 240"
                className="h-56 w-full"
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
                  stroke="#eab308"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <div className="mt-4 flex justify-between text-[10px] text-white/40">
                {ADMIN_CHART_DAYS.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
          </div>

          {/* محصولات کم‌موجود */}
          <div className="rounded-2xl border border-white/5 bg-[#141414] p-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-red-400">
                warning
              </span>
              <h2 className="text-lg font-extrabold">
                محصولات کم‌موجود یا تمام شده
              </h2>
            </div>

            <ul className="mt-6 space-y-5">
              {ADMIN_LOW_STOCK.map((item) => (
                <li key={item.name} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-xl border border-white/10 object-cover"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="mt-1 text-xs text-white/40">
                      موجودی انبار:
                      <span className="ms-2 font-bold text-red-400">
                        {item.stock}
                      </span>
                    </p>
                  </div>

                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-bold text-white/70 transition hover:border-amber-400/40 hover:text-amber-300">
              مدیریت موجودی انبار
            </button>
          </div>
        </section>

        {/* آخرین سفارشات */}
        <section className="rounded-2xl border border-white/5 bg-[#141414] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-extrabold">آخرین سفارشات ثبت شده</h2>

            <a
              href="#"
              className="text-xs font-bold text-amber-300 underline underline-offset-4 transition hover:text-amber-200"
            >
              مدیریت سفارشات
            </a>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-white/5 text-xs text-white/40">
                  <th className="py-3 pe-4 text-right font-bold">شناسه سفارش</th>
                  <th className="py-3 pe-4 text-right font-bold">مشتری</th>
                  <th className="py-3 pe-4 text-right font-bold">محصولات</th>
                  <th className="py-3 pe-4 text-right font-bold">مبلغ کل</th>
                  <th className="py-3 pe-4 text-right font-bold">وضعیت</th>
                  <th className="py-3 text-right font-bold">تاریخ</th>
                </tr>
              </thead>

              <tbody>
                {ADMIN_ORDERS.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="py-5 pe-4 font-extrabold text-amber-300">
                      {order.id}
                    </td>

                    <td className="py-5 pe-4">
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-white/60">
                          {order.avatar}
                        </span>
                        {order.customer}
                      </span>
                    </td>

                    <td className="py-5 pe-4 text-white/50">{order.products}</td>

                    <td className="py-5 pe-4 font-bold">{order.total}</td>

                    <td className="py-5 pe-4">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-bold ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="py-5 text-white/50">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
