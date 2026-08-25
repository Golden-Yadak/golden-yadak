// =============================================================
//  ابزارهای اعتبارسنجی و نرمال‌سازی (موبایل، کد OTP)
// =============================================================

const FA_TO_EN = {
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
};

// تبدیل ارقام فارسی/عربی به لاتین
export function toLatinDigits(input) {
  return String(input).replace(/[۰-۹٠-٩]/g, (d) => FA_TO_EN[d] ?? d);
}

// نرمال‌سازی شماره موبایل: حذف فاصله/خط‌تیره/پرانتز + ارقام لاتین
export function normalizeMobile(input) {
  return toLatinDigits(input).replace(/[\s\-()_]/g, "");
}

// اعتبارسنجی موبایل ایرانی: ۰۹XXXXXXXXX (۱۱ رقم)
export function isValidIranMobile(input) {
  return /^09\d{9}$/.test(normalizeMobile(input));
}

// اعتبارسنجی کد ۴ رقمی
export function isValidOtp(input) {
  return /^\d{4}$/.test(toLatinDigits(input));
}

// تولید کد ۴ رقمی تصادفی (شبیه‌سازی OTP در محیط توسعه)
export function generateOtp() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

// ماسک کردن موبایل برای نمایش: ۰۹۱۲۳۴۵۶۷۸۹ -> ۰۹۱۲***۶۷۸۹
export function maskMobile(input) {
  const digits = normalizeMobile(input);
  if (digits.length !== 11) return input;
  return `${digits.slice(0, 4)}***${digits.slice(-4)}`;
}
