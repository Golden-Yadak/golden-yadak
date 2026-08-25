import { useReducer, useMemo } from "react";
import { AuthContext } from "../hooks/useAuth.js";
import {
  isValidIranMobile,
  normalizeMobile,
  isValidOtp,
  toLatinDigits,
  generateOtp,
} from "../lib/validation.js";

// =============================================================
//  Provider احراز هویت (شبیه‌سازی شده برای محیط توسعه)
//
//  state:
//    phoneNumber   -> شماره نرمال‌شده (بعد از درخواست کد)
//    pendingCode   -> کد تولیدشده (در توسعه؛ در پروداکشن از SMS)
//    isAuthenticated -> وضعیت ورود
//    error         -> پیام خطای فعلی
//
//  توجه: چون بک‌اند نداریم، کد در همین state نگه داشته می‌شود
//  تا کل فلو قابل‌تست باشد. بعداً با فراخوانی API جایگزین می‌شود.
// =============================================================

const RESEND_SECONDS = 60;

function reducer(state, action) {
  switch (action.type) {
    case "REQUEST_CODE": {
      const phone = normalizeMobile(action.phone);
      if (!isValidIranMobile(phone)) {
        return { ...state, error: "شماره موبایل نامعتبر است" };
      }
      return {
        ...state,
        phoneNumber: phone,
        pendingCode: generateOtp(),
        error: null,
      };
    }
    case "RESEND_CODE":
      return { ...state, pendingCode: generateOtp(), error: null };
    case "VERIFY_CODE": {
      if (!isValidOtp(action.code)) {
        return { ...state, error: "کد باید ۴ رقم باشد" };
      }
      if (toLatinDigits(action.code) !== state.pendingCode) {
        return { ...state, error: "کد تایید اشتباه است" };
      }
      return {
        ...state,
        isAuthenticated: true,
        pendingCode: null,
        error: null,
      };
    }
    case "CLEAR_ERROR":
      return { ...state, error: null };
    case "LOGOUT":
      return {
        phoneNumber: null,
        pendingCode: null,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    phoneNumber: null,
    pendingCode: null,
    isAuthenticated: false,
    error: null,
  });

  const value = useMemo(
    () => ({
      phoneNumber: state.phoneNumber,
      pendingCode: state.pendingCode,
      isAuthenticated: state.isAuthenticated,
      error: state.error,
      resendSeconds: RESEND_SECONDS,
      requestCode: (phone) => dispatch({ type: "REQUEST_CODE", phone }),
      resendCode: () => dispatch({ type: "RESEND_CODE" }),
      verifyCode: (code) => dispatch({ type: "VERIFY_CODE", code }),
      clearError: () => dispatch({ type: "CLEAR_ERROR" }),
      logout: () => dispatch({ type: "LOGOUT" }),
    }),
    [state]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
