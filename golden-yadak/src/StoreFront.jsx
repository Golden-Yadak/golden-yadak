import React from 'react';

export default function App() {
    const products = [
        {
            id: 1,
            title: 'شمع سوزنی ایریدیوم برند بوش - سری پلاتینیوم آلمان',
            price: '۱,۲۵۰,۰۰۰',
            unit: 'قیمت واحد:',
            badge: 'اصالت تضمینی',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc',
        },
        {
            id: 2,
            title: 'دیسک ترمز خنک‌شونده برمبو - مدل High Performance',
            price: '۸,۹۰۰,۰۰۰',
            unit: 'قیمت جفت:',
            badge: 'ویژه',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpKH3BHIgaqOGCy-s7uElWjm0wuo5r5oP-ZI3OxbMzWkTSYnV9sY30Yi064DIFy9GOT657LVE3YYwFISkYjrGVG_ZUWqNm2J5_zqXHX7GkiHGbPHQGZInmLsVkhDRNeK5STZJWMITRHsB5VZtJTDJIjBEmcm4THxbFmo5Q7LfzcwMghsfteDXgNUb2f14uXW7WsNcy4eZOW4fbMpvQ0rQkAlNL5Qe2qdHiiZ-DOc_g-IUDIDsSI-pShlYUANiCfeIvrTpu__oSvpg',
        },
        {
            id: 3,
            title: 'روغن موتور تمام سنتتیک کاسترول - Magnatec لوکس',
            price: '۱,۱۴۷,۵۰۰',
            oldPrice: '۱,۳۵۰,۰۰۰',
            discount: '۱۵٪-',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs_9MCj8nW40lYUethz4GfwgrVcFslwB8X-j4RCSZ9IWSFjyA0GxM-w7oKvBqoFDoIGYd0YsSbHVLfMn4vDncA9dN8MDVkuuKwle6l4JuGwDynGK8k-vDkYRm5TT4daAl3JPOVXPEMkqzEeSyMazeiLk-_3F8CMeoHE63skVbWBI7f0TD5FonG2M6svx_tJIffk5sHmDDQ-Cgkoz3hxdN9kXoH8twoPUigAp2H1-bIkHxWH_hqesY2qlBa4qQfDw8sbM_XrFfCVBE',
        },
        {
            id: 4,
            title: 'فیلتر روغن اورجینال بی ام و - مخصوص سری ۷ و ۵',
            price: '۴۵۰,۰۰۰',
            unit: 'قیمت واحد:',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrypdwkTTjKAfamJzaZiBtGRH1C-HsMrbMgq8bAvzw-6A0i7l_oRcOlMGEo1adQPcowTfW3tCBxDZgEy23IP1diCx6Cow7_bukQZpb7EQX4y1nz62BedFUs3l27KMckF65SvVgxESmE-BxI8VzeSAwkNsz-x9Y3OwQmHgL-LS1Lk1f9V5kPFRc_NcZ-y0L26GnX2VxztZ_cxs86eSlXQ9c6DGDn-0md1qkF1EeKIPzZFLn-MWa6Dta6jq2rnt_dfr2jpqqKyCDn48',
        },
        {
            id: 5,
            title: 'کیت کلاچ کامل والئو (Valeo) جعبه آبی - ساخت فرانسه',
            price: '۶,۸۰۰,۰۰۰',
            unit: 'قیمت کیت:',
            badge: 'نایاب',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcd2DGnJlV2Co3kSuTzkJBTEhYQkW5uLQcDeorhJZG6-0QeKdnVg9iT4cZm4e7ukr0zySlzTw2KcuA9mpqaXMaBaQGbdgPKlMbRAfxiowU8koxoxRx6EtlbgF9CnGUd9ABrxDNPzm5T40Kv4BBBwRldNVWXcrEeFiq3jTOtWAEHbxCkAcv83FEQm7USL_ljbSJKNdV-B5IR91TlmyUM6-1H6nMrDzBdakyfQ5U7KdBg1nJgsu7tlDSxXs-D9Yx4fD4BgbzLyq46nU',
        },
        {
            id: 6,
            title: 'باتری ۷۴ آمپر سوزوکی - تکنولوژی ژاپن با ۱۸ ماه ضمانت',
            price: '۳,۴۰۰,۰۰۰',
            unit: 'قیمت با داغی:',
            badge: 'گارانتی طلایی',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOdKme51mkE6otXDJZ8tBYYo1O6bMWiFyEOCNZ5PpHfca0awiDPPgoKXiSxKFS11w0udtKbt8fA62D8CGwT4UlnzCku1SKRMTVXjRytVlBe2I7NN6UqIJ1qBbiB2IFF8bNXunj1xEN6d1-iOr0ysNOWeMkaTgphdCsmO7Yfe-bdNHF2c06ACrnBOo5ggHA0tIsCWClurBlYWQzLTnAgHmS7-xZHboOcox7v5ooo5bfhRPyjKNZhH8lIsUbqaeU-mDlACr1k3XssCA',
        },
    ];

    return (
        <div className="bg-[#000000] min-h-screen text-[#E5E5E5] font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#000000]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-xl">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3 order-1">
                        <div className="gold-gradient p-2.5 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                            <span className="material-icons text-black">settings_input_component</span>
                        </div>
                        <h1 className="text-2xl font-black text-white tracking-tighter italic">
                            لوکس<span className="gold-text">یدک</span>
                        </h1>
                    </div>
                    <div className="flex-grow max-w-2xl relative order-3 lg:order-2">
                        <input
                            className="w-full h-12 pr-12 pl-4 rounded-xl border border-[#1F1F1F] bg-[#0D0D0D] text-white focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all outline-none text-sm placeholder-gray-600"
                            placeholder="جستجوی قطعات تخصصی و برندهای لوکس..."
                            type="text"
                        />
                        <span className="material-icons absolute right-4 top-3 text-[#D4AF37]">search</span>
                    </div>
                    <div className="flex items-center gap-6 order-2 lg:order-3">
                        <button className="relative p-2 text-gray-400 hover:text-[#D4AF37] transition-colors">
                            <span className="material-icons">shopping_cart</span>
                            <span className="absolute -top-1 -left-1 gold-gradient text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg">
                                ۲
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="bg-[#0D0D0D] p-6 rounded-3xl border border-[#1F1F1F] sticky top-28">
                            <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#D4AF37]">filter_list</span>
                                فیلتر پیشرفته
                            </h3>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-4 border-r-2 border-[#D4AF37] pr-2">
                                        دسته‌بندی
                                    </h4>
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                defaultChecked
                                                type="checkbox"
                                                className="w-5 h-5 rounded border-[#1F1F1F] bg-[#000000] text-[#D4AF37] focus:ring-[#D4AF37]"
                                            />
                                            <span className="text-sm text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                                                قطعات موتوری
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 rounded border-[#1F1F1F] bg-[#000000] text-[#D4AF37] focus:ring-[#D4AF37]"
                                            />
                                            <span className="text-sm text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                                                سیستم تعلیق
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 rounded border-[#1F1F1F] bg-[#000000] text-[#D4AF37] focus:ring-[#D4AF37]"
                                            />
                                            <span className="text-sm text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                                                تجهیزات روشنایی
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-4 border-r-2 border-[#D4AF37] pr-2">
                                        محدوده قیمت
                                    </h4>
                                    <input
                                        className="w-full h-1 bg-[#1F1F1F] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                                        max="100"
                                        min="0"
                                        type="range"
                                    />
                                    <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-bold">
                                        <span>۱۰ میلیون +</span>
                                        <span>۱ میلیون</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 mb-4 border-r-2 border-[#D4AF37] pr-2">
                                        برندهای تجاری
                                    </h4>
                                    <div className="grid grid-cols-1 gap-3">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                name="brand"
                                                type="radio"
                                                className="w-5 h-5 border-[#1F1F1F] bg-[#000000] text-[#D4AF37] focus:ring-[#D4AF37]"
                                            />
                                            <span className="text-sm text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                                                بوش (Bosch)
                                            </span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                name="brand"
                                                type="radio"
                                                className="w-5 h-5 border-[#1F1F1F] bg-[#000000] text-[#D4AF37] focus:ring-[#D4AF37]"
                                            />
                                            <span className="text-sm text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                                                برمبو (Brembo)
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-8 py-3 gold-gradient text-black font-black rounded-xl shadow-lg hover:brightness-110 transition-all">
                                اعمال فیلترها
                            </button>
                        </div>
                    </aside>

                    {/* Section Products */}
                    <section className="flex-grow">
                        <div className="flex items-center justify-between mb-8 bg-[#0D0D0D] p-4 rounded-2xl border border-[#1F1F1F]">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-500 text-sm">ترتیب بر اساس:</span>
                                <button className="text-[#D4AF37] text-sm font-bold border-b-2 border-[#D4AF37] pb-1">
                                    محبوب‌ترین
                                </button>
                                <button className="text-gray-400 text-sm font-bold hover:text-white transition-colors">
                                    گران‌ترین
                                </button>
                                <button className="text-gray-400 text-sm font-bold hover:text-white transition-colors">
                                    جدیدترین
                                </button>
                            </div>
                            <div className="text-gray-500 text-xs font-bold">نمایش ۱۲ محصول از ۴۵۰</div>
                        </div>

                        {/* Grid Products */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-[#0D0D0D] rounded-3xl border border-[#1F1F1F] p-5 group hover:gold-border-glow transition-all duration-300"
                                >
                                    <div className="relative mb-6 rounded-2xl overflow-hidden bg-[#000000] p-4 border border-[#1F1F1F] aspect-square flex items-center justify-center">
                                        <img
                                            alt={product.title}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                            src={product.img}
                                        />
                                        {product.badge && (
                                            <span className="absolute top-4 right-4 bg-[#000000]/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1 rounded-lg text-[10px] font-black">
                                                {product.badge}
                                            </span>
                                        )}
                                        {product.discount && (
                                            <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded-lg text-[10px] font-black">
                                                {product.discount}
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-white font-bold text-sm mb-4 h-10 overflow-hidden leading-relaxed">
                                        {product.title}
                                    </h3>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between">
                                            {product.oldPrice ? (
                                                <span className="text-gray-400 line-through text-xs">{product.oldPrice}</span>
                                            ) : (
                                                <span className="text-gray-500 text-xs">{product.unit || 'قیمت:'}</span>
                                            )}
                                            <div className="text-left">
                                                <span className="gold-text font-black text-xl">{product.price}</span>
                                                <span className="text-[10px] text-gray-500 mr-1">تومان</span>
                                            </div>
                                        </div>
                                        <button className="w-full py-3 gold-gradient text-black font-black rounded-xl flex items-center justify-center gap-2 hover:brightness-110 shadow-lg transition-all">
                                            <span className="material-icons text-sm">add_shopping_cart</span>
                                            افزودن به سبد خرید
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center gap-2">
                            <button className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#1F1F1F] text-[#D4AF37] flex items-center justify-center hover:gold-border-glow transition-all">
                                <span className="material-icons">chevron_right</span>
                            </button>
                            <button className="w-10 h-10 rounded-xl gold-gradient text-black font-black flex items-center justify-center">
                                ۱
                            </button>
                            <button className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#1F1F1F] text-gray-400 flex items-center justify-center hover:text-[#D4AF37] transition-all">
                                ۲
                            </button>
                            <button className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#1F1F1F] text-gray-400 flex items-center justify-center hover:text-[#D4AF37] transition-all">
                                ۳
                            </button>
                            <button className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-[#1F1F1F] text-[#D4AF37] flex items-center justify-center hover:gold-border-glow transition-all">
                                <span className="material-icons">chevron_left</span>
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#0D0D0D] text-white pt-20 pb-10 border-t border-[#D4AF37]/20 mt-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-1">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="gold-gradient p-2.5 rounded-xl">
                                    <span className="material-icons text-black">settings_input_component</span>
                                </div>
                                <h1 className="text-3xl font-black italic">
                                    لوکس<span className="gold-text">یدک</span>
                                </h1>
                            </div>
                            <p className="text-sm text-gray-400 leading-loose mb-8">
                                مرجع تخصصی تامین قطعات یدکی خودروهای لوکس و وارداتی با استانداردهای بین‌المللی و تضمین کیفیت طلایی.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-11 h-11 bg-[#000000] border border-[#1F1F1F] rounded-xl flex items-center justify-center hover:border-[#D4AF37] transition-all text-[#D4AF37] shadow-lg">
                                    <span className="material-icons text-xl">share</span>
                                </a>
                                <a href="#" className="w-11 h-11 bg-[#000000] border border-[#1F1F1F] rounded-xl flex items-center justify-center hover:border-[#D4AF37] transition-all text-[#D4AF37] shadow-lg">
                                    <span className="material-icons text-xl">alternate_email</span>
                                </a>
                                <a href="#" className="w-11 h-11 bg-[#000000] border border-[#1F1F1F] rounded-xl flex items-center justify-center hover:border-[#D4AF37] transition-all text-[#D4AF37] shadow-lg">
                                    <span className="material-icons text-xl">call</span>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-black mb-8 text-xl border-r-4 border-[#D4AF37] pr-4">خدمات لوکس</h4>
                            <ul className="space-y-5 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">مشاوره فنی VIP</a></li>
                                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">سفارش قطعات نایاب</a></li>
                                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">گارانتی طلایی تعویض</a></li>
                                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">ارسال سریع با پیک اختصاصی</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black mb-8 text-xl border-r-4 border-[#D4AF37] pr-4">دسته‌بندی‌ها</h4>
                            <ul className="space-y-5 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">کیت بدنه تیونینگ</a></li>
                                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">سیستم‌های اگزوز لوکس</a></li>
                                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">رینگ و لاستیک اورجینال</a></li>
                                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">قطعات فنی موتور</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black mb-8 text-xl border-r-4 border-[#D4AF37] pr-4">اعتبارات</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#000000] border border-[#D4AF37]/20 p-4 rounded-2xl aspect-square flex flex-col items-center justify-center shadow-inner group hover:border-[#D4AF37] transition-all">
                                    <span className="text-[#D4AF37] font-black text-[10px]">PREMIUM</span>
                                    <span className="text-gray-600 text-[8px]">MEMBER</span>
                                </div>
                                <div className="bg-[#000000] border border-[#D4AF37]/20 p-4 rounded-2xl aspect-square flex flex-col items-center justify-center shadow-inner group hover:border-[#D4AF37] transition-all">
                                    <span className="text-[#D4AF37] font-black text-[10px]">ORIGINAL</span>
                                    <span className="text-gray-600 text-[8px]">CERTIFIED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                        <p>تمامی حقوق مادی و معنوی برای مجموعه لوکس‌یدک محفوظ است.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-[#D4AF37] transition-colors">شرایط و ضوابط</a>
                            <a href="#" className="hover:text-[#D4AF37] transition-colors">همکاری با ما</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}