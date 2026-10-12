import { useState } from "react";
import { useUserData } from "../../hooks/useUserData";
import { toPersianDigits } from "../../lib/format";

export default function AddressesPage() {
  const { addresses, addAddress, updateAddress, deleteAddress, setDefaultAddress } =
    useUserData();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    province: "تهران",
    city: "تهران",
    address: "",
    postalCode: "",
    recipientName: "",
    recipientPhone: "",
    isDefault: false,
  });

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      title: "",
      province: "تهران",
      city: "تهران",
      address: "",
      postalCode: "",
      recipientName: "",
      recipientPhone: "",
      isDefault: addresses.length === 0,
    });
    setModalOpen(true);
  };

  const openEditModal = (addr) => {
    setEditingId(addr.id);
    setFormData({
      title: addr.title,
      province: addr.province,
      city: addr.city,
      address: addr.address,
      postalCode: addr.postalCode,
      recipientName: addr.recipientName,
      recipientPhone: addr.recipientPhone,
      isDefault: addr.isDefault,
    });
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateAddress(editingId, formData);
    } else {
      addAddress(formData);
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-amber-400">
            pin_drop
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-white">آدرس‌های من</h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              مدیریت نشانی‌های تحویل سفارش، تعمیرگاه و انبار
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-l from-amber-500 via-amber-400 to-yellow-300 px-5 py-2.5 text-xs font-bold text-black transition hover:brightness-110"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          افزودن آدرس جدید
        </button>
      </div>

      {/* Address Cards List */}
      {addresses.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-12 text-center">
          <span className="material-symbols-outlined text-5xl text-zinc-600">
            location_off
          </span>
          <h3 className="mt-4 text-lg font-bold text-white">هنوز آدرسی ثبت نکرده‌اید</h3>
          <p className="mt-2 text-xs text-zinc-400">
            با افزودن نشانی، سفارشات شما با سرعت بیشتری پردازش و ارسال خواهد شد.
          </p>
          <button
            type="button"
            onClick={openAddModal}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-300"
          >
            ثبت اولین آدرس
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all ${
                addr.isDefault
                  ? "border-amber-400/60 bg-zinc-950 shadow-[0_0_15px_rgba(212,175,55,0.08)]"
                  : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-amber-400">
                      location_city
                    </span>
                    <h3 className="font-extrabold text-white text-sm">{addr.title}</h3>
                  </div>

                  {addr.isDefault ? (
                    <span className="rounded-full bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 text-[11px] font-bold text-amber-400">
                      آدرس پیش‌فرض
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setDefaultAddress(addr.id)}
                      className="text-xs text-zinc-400 hover:text-amber-400 transition"
                    >
                      انتخاب به عنوان پیش‌فرض
                    </button>
                  )}
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-300">
                  {addr.province}، {addr.city}، {addr.address}
                </p>

                <div className="mt-4 space-y-1.5 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">کد پستی:</span>
                    <span className="font-mono text-zinc-300">
                      {toPersianDigits(addr.postalCode)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500">تحویل‌گیرنده:</span>
                    <span className="text-zinc-300">{addr.recipientName}</span>
                    <span className="text-zinc-600">|</span>
                    <span className="text-zinc-300" dir="ltr">
                      {toPersianDigits(addr.recipientPhone)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex items-center justify-end gap-3 border-t border-zinc-800/80 pt-4">
                <button
                  type="button"
                  onClick={() => openEditModal(addr)}
                  className="flex items-center gap-1 text-xs font-bold text-zinc-300 hover:text-amber-400 transition"
                >
                  <span className="material-symbols-outlined text-sm">edit</span>
                  ویرایش
                </button>

                <button
                  type="button"
                  onClick={() => deleteAddress(addr.id)}
                  className="flex items-center gap-1 text-xs font-bold text-red-400 hover:text-red-300 transition"
                >
                  <span className="material-symbols-outlined text-sm">delete</span>
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Add / Edit */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-zinc-700 bg-zinc-950 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <h3 className="text-lg font-bold text-white">
                {editingId ? "ویرایش آدرس" : "افزودن آدرس جدید"}
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-900 hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-300">
                  عنوان آدرس (مثلاً منزل، محل کار، تعمیرگاه)
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="منزل"
                  className="mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300">استان</label>
                  <input
                    type="text"
                    required
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300">شهر</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300">
                  نشانی پستی دقیق (خیابان، کوچه، پلاک، واحد)
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="خیابان ..."
                  className="mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-300">کد پستی (۱۰ رقمی)</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    placeholder="۱۲۳۴۵۶۷۸۹۰"
                    className="mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-300">شماره موبایل تحویل‌گیرنده</label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.recipientPhone}
                    onChange={(e) => setFormData({ ...formData, recipientPhone: e.target.value })}
                    placeholder="0912..."
                    className="mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300">نام و نام خانوادگی تحویل‌گیرنده</label>
                <input
                  type="text"
                  required
                  value={formData.recipientName}
                  onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                  placeholder="نام و نام خانوادگی"
                  className="mt-1.5 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                  className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-amber-400 focus:ring-amber-400"
                />
                <span className="text-xs text-zinc-300">انتخاب به عنوان آدرس پیش‌فرض ارسال</span>
              </label>

              <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-xs font-bold text-zinc-400 hover:text-white"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-amber-400 px-6 py-2.5 text-xs font-bold text-black hover:bg-amber-300 transition"
                >
                  ثبت آدرس
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
