import { createContext, useContext } from "react";

// =============================================================
//  Context object و هوک دسترسی به وضعیت احراز هویت
//  جدا از کامپوننت AuthProvider (برای رعایت Fast Refresh).
// =============================================================

export const AuthContext = createContext(null);

// هوک دسترسی به وضعیت احراز هویت؛ بیرون از Provider خطا می‌دهد.
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth باید داخل AuthProvider استفاده شود");
  }
  return ctx;
}
