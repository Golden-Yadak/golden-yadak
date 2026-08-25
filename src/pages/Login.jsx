import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { BRAND } from "../lib/config.js";
import { isValidIranMobile, normalizeMobile } from "../lib/validation.js";

export default function Login() {
  const navigate = useNavigate();
  const { requestCode, error: ctxError, clearError } = useAuth();
  const [phone, setPhone] = useState("");
  const [localError, setLocalError] = useState("");

  const error = localError || ctxError;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidIranMobile(phone)) {
      setLocalError("شماره موبایل معتبر وارد کنید (۱۱ رقم، شامل ۰۹)");
      return;
    }
    setLocalError("");
    requestCode(normalizeMobile(phone));
    navigate("/verify");
  }

  return (
    <div
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-[#050505] px-4 py-10 text-white"
    >
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/5 bg-[#151515] shadow-2xl shadow-black/60 md:grid-cols-2">
        {/* نیمه تصویر */}
        <section className="relative hidden md:block">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUpti7vD27KZL1rZ41e-tVLZ3nGUHrC9KnjrgK4fVbCMoLG0UQ3rqqoh5774rEp76u52OPZXjW08vwCJAaeJp_exwCbSoqbYYFSxxMa5MvmL_Rgp8TmpFxIoGCD5tiN-HIfgI8pUWdDr79-JqGFkH7WgsA6f8BkB01mKyaIIa_9riOohzJ7gbnlNCAwdLoWA4jFdbEA6K1ymSgEPcWENcWwr-NpYzLcVuNYGkzp-vnj4VElxA7_LrFh4s1coVvfouQswWKFxbm04E"
            alt={BRAND.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>

          <div className="relative flex h-full flex-col justify-end p-10">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold tracking-[0.35em] text-amber-400">
                {BRAND.nameLatin}
              </span>
              <span className="h-px w-16 bg-amber-400/70"></span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.5]">
              قدرت و اصالت در
              <span className="block text-amber-400">قلب خودروی شما</span>
            </h1>

            <p className="mt-5 max-w-md leading-8 text-white/60">
              دسترسی به کمیاب‌ترین قطعات خودروهای لوکس و سوپر اسپرت با
              ضمانت‌نامه بین‌المللی.
            </p>
          </div>
        </section>

        {/* نیمه فرم */}
        <section className="flex flex-col p-10 md:p-12">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-black">
              <span className="material-symbols-outlined">{BRAND.logoIcon}</span>
            </span>
            <span className="text-2xl font-extrabold">{BRAND.name}</span>
          </Link>

          <div className="mt-16">
            <h2 className="text-3xl font-extrabold">خوش آمدید</h2>

            <p className="mt-4 leading-7 text-white/60">
              برای ورود یا ثبت‌نام، شماره موبایل خود را وارد کنید.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <label
                htmlFor="mobile"
                className="mt-8 block text-sm font-bold text-white/70"
              >
                شماره موبایل
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 transition focus-within:border-amber-400/60">
                <span className="material-symbols-outlined text-white/40">
                  smartphone
                </span>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  dir="ltr"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="09123456789"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (localError) setLocalError("");
                    if (ctxError) clearError();
                  }}
                  className="w-full bg-transparent text-left outline-none placeholder:text-white/30"
                />
              </div>

              {error && (
                <p className="mt-3 flex items-center gap-2 text-sm text-red-400">
                  <span className="material-symbols-outlined text-base">
                    error
                  </span>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 py-3.5 font-extrabold text-black transition hover:brightness-110"
              >
                ارسال کد تایید
              </button>
            </form>

            <p className="mt-6 text-center text-[11px] leading-6 text-white/40">
              با ورود به {BRAND.name}، شما{" "}
              <a href="#" className="font-bold text-amber-400 transition hover:text-amber-300">
                شرایط و قوانین
              </a>{" "}
              و{" "}
              <a href="#" className="font-bold text-amber-400 transition hover:text-amber-300">
                سیاست حریم خصوصی
              </a>{" "}
              ما را می‌پذیرید.
            </p>
          </div>

          <div className="mt-16 flex items-center justify-center gap-4 md:mt-auto md:pt-16">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-black">
              <span className="material-symbols-outlined text-lg">verified</span>
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-black">
              <span className="material-symbols-outlined text-lg">security</span>
            </span>

            <span className="text-xs font-bold tracking-[0.25em] text-white/40">
              SECURE LUXURY ACCESS
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
