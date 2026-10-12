import { useState } from "react";
import { useUserData } from "../../hooks/useUserData";

export default function ProfilePage() {
  const { profile, updateProfile } = useUserData();
  const [formData, setFormData] = useState({
    fullName: profile.fullName || "",
    nationalCode: profile.nationalCode || "",
    phone: profile.phone || "",
    email: profile.email || "",
    sheba: profile.sheba || "",
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSavedSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
      <div className="flex items-center gap-3 border-b border-zinc-800 pb-5">
        <span className="material-symbols-outlined text-2xl text-amber-400">
          manage_accounts
        </span>
        <div>
          <h2 className="text-xl font-extrabold text-white">اطلاعات حساب کاربری</h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            مشخصات فردی، احراز هویت و اطلاعات واریز وجه مرجوعی
          </p>
        </div>
      </div>

      {savedSuccess && (
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-bold text-emerald-400">
          <span className="material-symbols-outlined text-xl">check_circle</span>
          اطلاعات حساب شما با موفقیت ذخیره و به‌روزرسانی شد.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* نام و نام خانوادگی */}
          <div>
            <label className="block text-sm font-bold text-zinc-300">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="مثلاً: آریامهر دارپوی"
              required
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>

          {/* کدملی */}
          <div>
            <label className="block text-sm font-bold text-zinc-300">
              کد ملی (جهت صدور فاکتور رسمی)
            </label>
            <input
              type="text"
              name="nationalCode"
              value={formData.nationalCode}
              onChange={handleChange}
              placeholder="۱۰ رقم بدون خط تیره"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>

          {/* شماره تلفن همراه */}
          <div>
            <label className="block text-sm font-bold text-zinc-300">
              شماره تلفن همراه
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              dir="ltr"
              placeholder="09123456789"
              required
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>

          {/* پست الکترونیک */}
          <div>
            <label className="block text-sm font-bold text-zinc-300">
              پست الکترونیک (ایمیل)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              dir="ltr"
              placeholder="user@example.com"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* شماره شبا بانکی */}
        <div>
          <label className="block text-sm font-bold text-zinc-300">
            شماره شبا بانکی (جهت عودت وجه یا گارانتی)
          </label>
          <div className="relative mt-2">
            <input
              type="text"
              name="sheba"
              value={formData.sheba}
              onChange={handleChange}
              dir="ltr"
              placeholder="IR000000000000000000000000"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>
          <p className="mt-1.5 text-xs text-zinc-500">
            در صورت انصراف از خرید یا استرداد وجه داغی قطعه، مبلغ به این شبا واریز می‌گردد.
          </p>
        </div>

        <div className="flex justify-end pt-4 border-t border-zinc-800">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 px-8 py-3 text-sm font-bold text-black transition hover:brightness-110"
          >
            <span className="material-symbols-outlined text-lg">save</span>
            ذخیره تغییرات
          </button>
        </div>
      </form>
    </div>
  );
}
