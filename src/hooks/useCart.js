import { createContext, useContext } from "react";

// =============================================================
//  Context object و هوک دسترسی به سبد خرید
//  جدا از کامپوننت CartProvider تا قوانین Fast Refresh رعایت بشه
//  (هر فایل فقط کامپوننت یا فقط non-component export کنه).
// =============================================================

// object مشترک context (بیرون از provider ساخته می‌شه)
export const CartContext = createContext(null);

// هوک دسترسی به سبد؛ بیرون از Provider خطا می‌ده.
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart باید داخل CartProvider استفاده شود");
  }
  return ctx;
}
