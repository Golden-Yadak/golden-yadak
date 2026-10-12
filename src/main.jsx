import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { UserDataProvider } from "./context/UserDataContext.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <UserDataProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserDataProvider>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
