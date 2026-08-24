// =============================================================
//  تست رندر سمت سرور (SSR) — شبکه‌ی ایمنی
//  هر صفحه‌ی اصلی را داخل providerهای موردنیازش رندر می‌کند تا
//  خطاهای زمانِ اجرا (مثل ایمپورت گمشده) را قبل از کامیت بگیرد.
//
//  اجرا:  npm run test:render
//  خروج غیرصفر در صورت خطا → مناسب gating قبل از commit.
// =============================================================

import { renderToString } from "react-dom/server";
import { createElement as h } from "react";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../src/context/CartContext.jsx";
import { AuthProvider } from "../src/context/AuthContext.jsx";

import Homepage from "../src/pages/Homepage.jsx";
import Products from "../src/pages/Products.jsx";
import ProductDetail from "../src/pages/ProductDetail.jsx";
import Cart from "../src/pages/Cart.jsx";
import AdminDashboard from "../src/pages/AdminDashboard.jsx";
import Login from "../src/pages/Login.jsx";
import Verify from "../src/pages/Verify.jsx";

const pages = {
  Homepage,
  Products,
  ProductDetail,
  Cart,
  AdminDashboard,
  Login,
  Verify,
};

let failed = 0;

for (const [name, Comp] of Object.entries(pages)) {
  try {
    const html = renderToString(
      h(AuthProvider, null,
        h(CartProvider, null, h(MemoryRouter, null, h(Comp)))
      )
    );
    console.log(`✅ ${name}: رندر شد (${html.length} کاراکتر)`);
  } catch (error) {
    failed += 1;
    console.log(`❌ ${name}: ${error.message}`);
    console.log((error.stack || "").split("\n").slice(0, 6).join("\n"));
    console.log("---");
  }
}

if (failed > 0) {
  console.log(`\n⛔ ${failed} صفحه با خطا رندر شد`);
  process.exitCode = 1;
} else {
  console.log(`\n✅ همه‌ی ${Object.keys(pages).length} صفحه بدون خطا رندر شدند`);
}
