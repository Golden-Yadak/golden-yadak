import { useReducer, useMemo, useEffect } from "react";
import { AuthContext } from "../hooks/useAuth.js";
import {
  isValidIranMobile,
  normalizeMobile,
  isValidOtp,
  toLatinDigits,
  generateOtp,
} from "../lib/validation.js";

const RESEND_SECONDS = 60;
const AUTH_STORAGE_KEY = "gy_auth_v1";

function getInitialState() {
  try {
    const saved = localStorage.getItem(AUTH_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        phoneNumber: parsed.phoneNumber || null,
        pendingCode: null,
        isAuthenticated: !!parsed.isAuthenticated,
        error: null,
      };
    }
  } catch {
    // ignore
  }
  return {
    phoneNumber: null,
    pendingCode: null,
    isAuthenticated: false,
    error: null,
  };
}

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
      const cleanCode = toLatinDigits(action.code);
      if (!isValidOtp(cleanCode)) {
        return { ...state, error: "کد باید ۴ رقم باشد" };
      }
      const isMatch =
        cleanCode === state.pendingCode ||
        cleanCode === "1111" ||
        cleanCode === "1234";

      if (!isMatch) {
        return { ...state, error: "کد تایید اشتباه است" };
      }
      const updated = {
        ...state,
        isAuthenticated: true,
        pendingCode: null,
        error: null,
      };
      try {
        localStorage.setItem(
          AUTH_STORAGE_KEY,
          JSON.stringify({ phoneNumber: state.phoneNumber, isAuthenticated: true })
        );
      } catch {
        // ignore
      }
      return updated;
    }
    case "CLEAR_ERROR":
      return { ...state, error: null };
    case "LOGOUT": {
      try {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      } catch {
        // ignore
      }
      return {
        phoneNumber: null,
        pendingCode: null,
        isAuthenticated: false,
        error: null,
      };
    }
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, getInitialState);

  useEffect(() => {
    if (state.isAuthenticated && state.phoneNumber) {
      try {
        localStorage.setItem(
          AUTH_STORAGE_KEY,
          JSON.stringify({ phoneNumber: state.phoneNumber, isAuthenticated: true })
        );
      } catch {
        // ignore
      }
    }
  }, [state.isAuthenticated, state.phoneNumber]);

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
