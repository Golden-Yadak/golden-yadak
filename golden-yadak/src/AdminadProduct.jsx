import React from 'react';

export default function AdminAddProduct({ onBackToStore }) {
  return (
    <div className="bg-[#0B0B0B] text-gray-200 min-h-screen font-sans dir-rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-lg border-b border-[#2A2A2A]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-[#F9E29C] via-[#D4AF37] to-[#AA8B24] p-2 rounded-lg">
                <span className="material-icons text-black text-sm">diamond</span>
              </div>
              <h1 className="text-xl font-black tracking-tight">
                پنل مدیریت <span className="gold-gradient-text">یدک آنلاین</span>
              </h1>
            </div>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#" onClick={(e) => { e.preventDefault(); onBackToStore(); }} className="hover:text-[#D4AF37] transition-colors">
                صفحه فروشگاه
              </a>
              <a href="#" className="text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1 font-bold">
                افزودن محصول
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                مدیریت سفارشات
              </a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                کپن‌ها و تخفیفات
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onBackToStore}
              className="bg-[#141414] border border-[#2A2A2A] text-xs font-bold text-[#D4AF37] px-4 py-2 rounded-xl hover:bg-[#2A2A2A] transition-all flex items-center gap-2"
            >
              <span className="material-icons text-sm">store</span>
              بازگشت به فروشگاه
            </button>
            <div className="text-left hidden sm:block">
              <p class="text-xs font-black text-white">مدیریت کل سیستم</p>
              <p class="text-[10px] text-[#D4AF37] uppercase tracking-widest">Administrator Access</p>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 overflow-hidden">
              <img
                alt="Admin"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCspbZ9RbY4bkH37eLsTz6J0G_yQwmJS0d9m5tivLNadPZX1V527xBvbXo_bHOcWvTVddz9y-7xEEUpjZW70F0BmtGiSOODb1R424oQChrMC_DFb8HfqVSg4M1-cIMbOWlAiXT1fESbIiGj3k6P2bDzAHb7HgbHBAFPTEWlFQkAk5Boq5WitVx2pfzLuNfPbud8P9rVpbaE0rVjUxB3qdheJIxoW3RImS-SLUiIE12a-4EqkD71-ASbLXzr7jXApV3JoSitUTIEph4"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Form Content */}
      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Sidebar Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <section className="bg-[#141414] border border-[#2A2A2A] rounded-3xl p-8">
              <h3 className="text-sm font-black text-white mb-6 flex items-center gap-2">
                <span className="material-icons text-[#D4AF37] text-lg">image</span>
                تصاویر محصول
              </h3>
              <div className="aspect-square w-full rounded-2xl border-2 border-dashed border-[#2A2A2A] bg-[#0B0B0B] flex flex-col items-center justify-center gap-4 hover:border-[#D4AF37]/50 transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-5xl text-gray-700 group-hover:text-[#D4AF37] transition-colors">
                  add_photo_alternate
                </span>
                <p className="text-xs text-gray-500 font-bold group-hover:text-gray-300">
                  کلیک کنید یا تصویر را بکشید
                </p>
                <p className="text-[10px] text-gray-600 uppercase">JPG, PNG (Max 5MB)</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="aspect-square rounded-xl bg-[#0B0B0B] border border-[#2A2A2A] flex items-center justify-center overflow-hidden">
                  <img
                    alt="Preview"
                    className="w-full h-full object-contain opacity-50"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48"
                  />
                </div>
                <div className="aspect-square rounded-xl bg-[#0B0B0B] border border-[#2A2A2A] flex items-center justify-center text-gray-700">
                  <span className="material-icons">add</span>
                </div>
                <div className="aspect-square rounded-xl bg-[#0B0B0B] border border-[#2A2A2A] flex items-center justify-center text-gray-700">
                  <span className="material-icons">add</span>
                </div>
              </div>
            </section>

            <section className="bg-[#141414] border border-[#2A2A2A] rounded-3xl p-8">
              <h3 className="text-sm font-black text-white mb-6 flex items-center gap-2">
                <span className="material-icons text-[#D4AF37] text-lg">settings</span>
                وضعیت و انتشار
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#0B0B0B] rounded-xl border border-[#2A2A2A]">
                  <span className="text-xs font-bold text-gray-400">وضعیت نمایش</span>
                  <div className="w-12 h-6 bg-[#D4AF37]/20 rounded-full relative p-1 cursor-pointer">
                    <div className="w-4 h-4 bg-[#D4AF37] rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#0B0B0B] rounded-xl border border-[#2A2A2A]">
                  <span className="text-xs font-bold text-gray-400">موجودی در انبار</span>
                  <input
                    className="bg-transparent text-left w-16 text-[#D4AF37] font-black border-none focus:ring-0 outline-none"
                    type="number"
                    defaultValue="12"
                  />
                </div>
              </div>
              <button className="w-full mt-8 py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg bg-gradient-to-br from-[#F9E29C] via-[#D4AF37] to-[#AA8B24] text-black hover:brightness-110 transition-all">
                <span className="material-icons text-lg">save</span>
                ذخیره محصول جدید
              </button>
              <button 
                onClick={onBackToStore}
                className="w-full mt-4 py-4 rounded-xl border border-[#2A2A2A] text-gray-500 font-bold text-sm hover:bg-[#2A2A2A]/30 transition-all"
              >
                انصراف
              </button>
            </section>
          </div>

          {/* Right Column - Form Details */}
          <div className="w-full lg:w-2/3 space-y-8">
            <section className="bg-[#141414] border border-[#2A2A2A] rounded-3xl p-8">
              <h3 className="text-lg font-black text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full"></span>
                اطلاعات پایه محصول (General Info)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">نام کامل محصول</label>
                  <input className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200 placeholder-gray-600" placeholder="مثال: کیت کلاچ تقویت شده پلاتینیوم سری X" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">شناسه کالا (SKU)</label>
                  <input className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200 placeholder-gray-600" placeholder="LX-8890-GER" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">دسته بندی</label>
                  <select className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200">
                    <option>قطعات موتوری</option>
                    <option>سیستم تعلیق</option>
                    <option>ترمز و ایمنی</option>
                    <option>بدنه و آیرودینامیک</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">قیمت اصلی (تومان)</label>
                  <input className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200 placeholder-gray-600" placeholder="۱۵,۵۰۰,۰۰۰" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">تخفیف ویژه (%)</label>
                  <input className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200 placeholder-gray-600" placeholder="۰" type="number"/>
                </div>
              </div>
            </section>

            <section className="bg-[#141414] border border-[#2A2A2A] rounded-3xl p-8">
              <h3 className="text-lg font-black text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full"></span>
                مشخصات فنی (Technical Specs)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">وزن (کیلوگرم)</label>
                  <input className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200 placeholder-gray-600" placeholder="۴.۵" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">ابعاد (سانتی‌متر)</label>
                  <input className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200 placeholder-gray-600" placeholder="۳۰x۳۰x۱۰" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">کشور سازنده</label>
                  <input className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200 placeholder-gray-600" placeholder="آلمان" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">مدت گارانتی</label>
                  <input className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200 placeholder-gray-600" placeholder="۲۴ ماه طلایی" type="text"/>
                </div>
                <div className="md:col-span-4">
                  <label className="block text-xs font-bold text-gray-500 mb-2 mr-1 uppercase">توضیحات فنی محصول</label>
                  <textarea className="w-full bg-[#0B0B0B] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-gray-200 placeholder-gray-600 resize-none" placeholder="جزئیات ساختاری و آلیاژهای به کار رفته را اینجا بنویسید..." rows="4"></textarea>
                </div>
              </div>
            </section>

            <section className="bg-[#141414] border border-[#2A2A2A] rounded-3xl p-8 border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-black text-white flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full"></span>
                  سازگاری خودرو (Vehicle Compatibility)
                </h3>
                <button className="text-[#D4AF37] text-xs font-black border border-[#D4AF37]/40 px-4 py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-all flex items-center gap-2">
                  <span className="material-icons text-sm">add</span>
                  افزودن مدل جدید
                </button>
              </div>
              <div className="bg-[#0B0B0B]/50 rounded-2xl border border-[#2A2A2A] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#2A2A2A]">
                  <div className="bg-[#141414] p-4">
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">برند</label>
                    <select className="w-full bg-transparent border-none text-sm text-gray-200 outline-none">
                      <option>Porsche</option>
                      <option>BMW</option>
                      <option>Mercedes-Benz</option>
                    </select>
                  </div>
                  <div className="bg-[#141414] p-4">
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">مدل</label>
                    <select className="w-full bg-transparent border-none text-sm text-gray-200 outline-none">
                      <option>911 Carrera</option>
                      <option>718 Cayman</option>
                      <option>Panamera</option>
                    </select>
                  </div>
                  <div className="bg-[#141414] p-4">
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">سال تولید</label>
                    <select className="w-full bg-transparent border-none text-sm text-gray-200 outline-none">
                      <option>2020-2024</option>
                      <option>2015-2019</option>
                    </select>
                  </div>
                  <div className="bg-[#141414] p-4">
                    <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">تیپ (Trim)</label>
                    <select className="w-full bg-transparent border-none text-sm text-gray-200 outline-none">
                      <option>Turbo S</option>
                      <option>GT3</option>
                      <option>S</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="bg-[#0B0B0B] border border-[#2A2A2A] py-2 px-4 rounded-full flex items-center gap-3 group">
                  <span className="text-[10px] font-black text-gray-400">PORSCHE 911 (2020+) - TURBO S</span>
                  <button className="text-gray-600 group-hover:text-red-500 transition-colors">
                    <span className="material-icons text-sm">close</span>
                  </button>
                </div>
                <div className="bg-[#0B0B0B] border border-[#2A2A2A] py-2 px-4 rounded-full flex items-center gap-3 group">
                  <span className="text-[10px] font-black text-gray-400">BMW M4 (2021+) - COMPETITION</span>
                  <button className="text-gray-600 group-hover:text-red-500 transition-colors">
                    <span className="material-icons text-sm">close</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0B0B] border-t border-[#2A2A2A] py-6 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 tracking-widest uppercase font-bold">SYSTEM VERSION 3.2.0 | ADMIN PANEL</p>
          <div className="flex gap-8 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> SERVER: ONLINE</span>
            <span>LAST BACKUP: 2 HOURS AGO</span>
          </div>
        </div>
      </footer>
    </div>
  );
}