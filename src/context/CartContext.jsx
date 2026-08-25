import { useReducer, useEffect, useMemo } from "react";
import { CartContext } from "../hooks/useCart.js";

// =============================================================
//  Provider سبد خرید
//  فقط کامپوننت export می‌کنه (برای Fast Refresh تمیز).
//  state در localStorage ذخیره می‌شه تا بعد از رفرش حفظ بشه.
//
//  هر آیتم: { id, title, price (عدد تومان), image, quantity }
//  دسترسی به state از طریق هوک useCart انجام می‌شه.
// =============================================================

const STORAGE_KEY = "gy_cart_v1";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, quantity = 1 } = action;
      const existing = state.find((item) => item.id === product.id);
      if (existing) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...state,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity,
        },
      ];
    }
    case "INCREMENT":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    case "DECREMENT":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
    case "REMOVE":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

// خواندن اولیه‌ی state از localStorage (امن برای SSR)
function init() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], init);

  // persist در localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ذخیره‌سازی ممکنه در حالت private/SR شکست بخوره؛ نادیده می‌گیریم
    }
  }, [items]);

  const value = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return {
      items,
      totalItems,
      totalPrice,
      addItem: (product, quantity = 1) =>
        dispatch({ type: "ADD", product, quantity }),
      incrementItem: (id) => dispatch({ type: "INCREMENT", id }),
      decrementItem: (id) => dispatch({ type: "DECREMENT", id }),
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
