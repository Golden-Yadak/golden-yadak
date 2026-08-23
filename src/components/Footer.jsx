import { BRAND } from "../lib/config";

// =============================================================
//  فوتر مشترک صفحات فروشگاه
//  ستون برند، شبکه‌های اجتماعی و نوار کپی‌رایت ثابت و مشترکند.
//
//  props:
//    columns   -> آرایه‌ی ستون‌های لینک: [{ title, links: [{label, href}] }]
//    aside     -> (اختیاری) ستون ویژه‌ی آخر به‌صورت JSX
//                 (مثلاً نشان‌های اعتبار یا فرم خبرنامه)
//    description -> (اختیاری) متن توضیحات برند؛ پیش‌فرض از کانفیگ
// =============================================================

export default function Footer({ columns = [], aside = null, description }) {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 xl:grid-cols-4">
        {/* ستون برند */}
        <div>
          <a href="/" className="flex items-center gap-2 text-2xl font-extrabold">
            <span className="material-symbols-outlined text-amber-400">
              {BRAND.logoIcon}
            </span>
            {BRAND.name}
          </a>

          <p className="mt-5 leading-8 text-white/70">
            {description ??
              "پیشرو در ارائه راه‌کارهای تامین قطعات برای خودروهای سوپرلوکس و خاص در منطقه با استانداردهای جهانی."}
          </p>

          <div className="mt-6 flex items-center gap-4">
            {["public", "mail_outline", "phone_in_talk"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition hover:border-amber-400/60 hover:text-amber-300"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ستون‌های لینک */}
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-lg font-extrabold">{col.title}</h3>

            <ul className="mt-5 space-y-3 text-white/70">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-amber-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* ستون ویژه (اختیاری) */}
        {aside && <div>{aside}</div>}
      </div>

      {/* نوار کپی‌رایت */}
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs text-white/60 md:flex-row">
          <p>COPYRIGHT © {BRAND.copyrightYear} {BRAND.nameLatin}. ALL RIGHTS RESERVED.</p>

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
  );
}
