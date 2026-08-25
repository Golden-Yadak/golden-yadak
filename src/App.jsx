import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";

const BASE_DOMAIN = import.meta.env.VITE_BASE_DOMAIN || "";

function getSubdomain() {
  if (typeof window === "undefined") {
    return "main";
  }

  const hostname = window.location.hostname.toLowerCase().trim();

  if (!hostname) {
    return "main";
  }

  if (hostname === "localhost") {
    return "main";
  }

  if (hostname === "127.0.0.1") {
    return "main";
  }

  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return "main";
  }

  if (hostname.endsWith(".localhost")) {
    const sub = hostname.replace(/\.localhost$/, "");

    if (!sub || sub === "www") {
      return "main";
    }

    return sub;
  }

  if (BASE_DOMAIN) {
    const normalizedBaseDomain = BASE_DOMAIN.toLowerCase();
    const suffix = `.${normalizedBaseDomain}`;

    if (hostname === normalizedBaseDomain) {
      return "main";
    }

    if (hostname.endsWith(suffix)) {
      const sub = hostname.slice(0, -suffix.length);

      if (!sub || sub === "www") {
        return "main";
      }

      return sub;
    }

    return "main";
  }

  const parts = hostname.split(".");

  if (parts.length <= 2) {
    return "main";
  }

  const sub = parts[0];

  if (sub === "www") {
    return "main";
  }

  return sub;
}

function MainSubdomainApp({ subdomain }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage subdomain={subdomain} />} />

      <Route path="/login" element={<Login subdomain={subdomain} />} />

      <Route path="/verify" element={<Verify subdomain={subdomain} />} />

      <Route path="/products" element={<Products subdomain={subdomain} />} />

      <Route path="/product" element={<ProductDetail subdomain={subdomain} />} />

      <Route path="/cart" element={<Cart subdomain={subdomain} />} />

      <Route path="/admin" element={<AdminDashboard subdomain={subdomain} />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

const SUBDOMAIN_APPS = {
  main: MainSubdomainApp,
};

export default function App() {
  const subdomain = getSubdomain();

  const SubdomainApp =
    SUBDOMAIN_APPS[subdomain] || SUBDOMAIN_APPS.main;

  return (
    <BrowserRouter>
      <SubdomainApp subdomain={subdomain} />
    </BrowserRouter>
  );
}