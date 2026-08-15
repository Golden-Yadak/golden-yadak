import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StoreFront from './StoreFront'; // همان کامپوننت فروشگاه
import AdminAddProduct from './AdminadProduct'; // کامپوننت پنل مدیریت

export default function App() {
  return (
    <Routes>
      {/* مسیر اصلی فروشگاه */}
      <Route path="/" element={<StoreFront />} />

      {/* مسیر پنل مدیریت */}
      <Route path="/admin/add-product" element={<AdminAddProduct />} />

      {/* مسیر پشتیبان برای صفحات یافت‌نشده (404) */}
      <Route path="*" element={<StoreFront />} />
    </Routes>
  );
}