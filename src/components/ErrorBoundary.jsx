import { Component } from "react";

// =============================================================
//  ErrorBoundary — شبکه‌ی ایمنی رندر
//  هر خطای زمانِ اجرا (مثل ایمپورت گمشده، خرابی فایل، و...)
//  را می‌گیرد و به‌جای صفحه‌ی خالی/مشکی، یک پیام خوانا نشان
//  می‌دهد تا کاربر (و توسعه‌دهنده) دقیقاً بفهمد مشکل چیست.
//
//  نکته: از استایل inline استفاده شده تا حتی اگر CSS/Tailwind
//  بارگذاری نشد هم درست نمایش داده شود.
// =============================================================

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // لاگ در کنسول مرورگر برای دیباگ
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      const message = this.state.error?.message || String(this.state.error);

      return (
        <div
          dir="rtl"
          style={{
            minHeight: "100vh",
            background: "#0b0b0b",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            textAlign: "center",
            fontFamily: "Tahoma, sans-serif",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚠️</div>

          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              marginBottom: "0.75rem",
            }}
          >
            خطایی هنگام نمایش رخ داد
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              maxWidth: "30rem",
              lineHeight: 2,
            }}
          >
            نمایش برنامه با مشکل مواجه شد. لطفاً صفحه را مجدداً بارگذاری کنید.
            اگر مشکل پابرجا بود، متن خطای زیر را به توسعه‌دهنده گزارش دهید.
          </p>

          <pre
            style={{
              marginTop: "1.5rem",
              color: "#fca5a5",
              fontSize: "0.85rem",
              maxWidth: "42rem",
              overflow: "auto",
              direction: "ltr",
              textAlign: "left",
              background: "rgba(255,255,255,0.05)",
              padding: "1rem",
              borderRadius: "0.75rem",
              whiteSpace: "pre-wrap",
            }}
          >
            {message}
          </pre>

          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1.75rem",
              background: "#fbbf24",
              color: "#000",
              fontWeight: 800,
              padding: "0.75rem 1.75rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
            }}
          >
            بارگذاری مجدد صفحه
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
