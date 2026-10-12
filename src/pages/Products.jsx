import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useUserData } from "../hooks/useUserData";
import { toPersianDigits } from "../lib/format";

export default function Products() {
  const { products } = useUserData();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read initial filters from search params
  const paramCompany = searchParams.get("company") || "all";
  const paramCategory = searchParams.get("category") || "all";
  const paramModel = searchParams.get("model") || "all";
  const paramBrand = searchParams.get("brand") || "all";

  const [selectedCompany, setSelectedCompany] = useState(paramCompany);
  const [selectedCategory, setSelectedCategory] = useState(paramCategory);
  const [selectedModel, setSelectedModel] = useState(paramModel);
  const [selectedBrand, setSelectedBrand] = useState(paramBrand);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // newest | cheapest | expensive

  const companies = [
    { id: "all", label: "همه شرکت‌ها" },
    { id: "ایران خودرو", label: "ایران خودرو (IKCO)" },
    { id: "سایپا", label: "سایپا (SAIPA)" },
    { id: "پارس خودرو", label: "پارس خودرو و رنو" },
  ];

  const carModels = [
    { id: "all", label: "همه مدل‌ها" },
    { id: "پژو ۲۰۶ و ۲۰۷", label: "پژو ۲۰۶، ۲۰۷، رانا" },
    { id: "دنا و سمند", label: "دنا پلاس، سمند سورن" },
    { id: "شاهین و کوییک", label: "شاهین، کوییک، ساینا، تیبا" },
    { id: "تندر ۹۰ و رنو", label: "تندر ۹۰ (ال ۹۰)، ساندرو" },
  ];

  const categories = [
    { id: "all", label: "همه دسته‌بندی‌ها" },
    { id: "موتوری و گیربکس", label: "موتوری و گیربکس" },
    { id: "ترمز و تعلیق", label: "ترمز و تعلیق" },
    { id: "برقی و سنسورها", label: "برقی و سنسورها" },
    { id: "مصرفی و فیلترها", label: "مصرفی و فیلترها" },
    { id: "بدنه و چراغ", label: "بدنه و چراغ اسپرت" },
  ];

  const brands = [
    { id: "all", label: "همه برندها" },
    { id: "ایساکو", label: "ایساکو (ISACO)" },
    { id: "سایپایدک", label: "سایپا یدک" },
    { id: "کروز", label: "کروز (Crouse)" },
    { id: "عظام", label: "عظام (Ezam)" },
    { id: "والئو", label: "والئو (Valeo)" },
    { id: "بوش", label: "بوش (Bosch)" },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Company
      if (selectedCompany !== "all" && p.company !== selectedCompany) {
        return false;
      }
      // Model
      if (selectedModel !== "all" && p.carModel !== selectedModel) {
        return false;
      }
      // Category
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }
      // Brand
      if (selectedBrand !== "all" && !p.brand.includes(selectedBrand)) {
        return false;
      }
      // Search
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(term);
        const matchesCar = (p.compatibleCars || []).some((c) =>
          c.toLowerCase().includes(term)
        );
        const matchesBrand = p.brand?.toLowerCase().includes(term);
        if (!matchesTitle && !matchesCar && !matchesBrand) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "cheapest") return a.price - b.price;
      if (sortBy === "expensive") return b.price - a.price;
      return 0;
    });
  }, [products, selectedCompany, selectedModel, selectedCategory, selectedBrand, searchTerm, sortBy]);

  const handleResetFilters = () => {
    setSelectedCompany("all");
    setSelectedCategory("all");
    setSelectedModel("all");
    setSelectedBrand("all");
    setSearchTerm("");
    setSortBy("newest");
    setSearchParams({});
  };

  return (
    <div dir="rtl" className="min-h-screen bg-black text-white flex flex-col justify-between">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 flex-1">
        {/* Top search & breadcrumbs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              کاتالوگ قطعات خودروهای ایرانی
            </h1>
            <p className="mt-1 text-xs text-zinc-400">
              لوازم یدکی شرکتی و افترمارکت با ضمانت اصالت برای محصولات ایران خودرو، سایپا و پارس خودرو
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجوی نام قطعه، مدل ماشین یا کد..."
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-2.5 pr-10 pl-4 text-xs text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
            />
            <span className="material-symbols-outlined absolute right-3 top-2.5 text-zinc-400 text-lg">
              search
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filters Sidebar */}
          <aside className="h-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-400">tune</span>
                <h2 className="text-sm font-extrabold text-white">فیلترهای هوشمند</h2>
              </div>

              {(selectedCompany !== "all" ||
                selectedCategory !== "all" ||
                selectedModel !== "all" ||
                selectedBrand !== "all" ||
                searchTerm) && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-amber-400 hover:text-amber-300"
                >
                  پاک کردن
                </button>
              )}
            </div>

            {/* Filter by Company */}
            <div>
              <h3 className="text-xs font-bold text-zinc-300 mb-2">شرکت سازنده خودرو</h3>
              <div className="space-y-1.5">
                {companies.map((c) => (
                  <label
                    key={c.id}
                    className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="filter_company"
                      checked={selectedCompany === c.id}
                      onChange={() => setSelectedCompany(c.id)}
                      className="accent-amber-400"
                    />
                    <span>{c.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Model */}
            <div className="border-t border-zinc-800/80 pt-4">
              <h3 className="text-xs font-bold text-zinc-300 mb-2">مدل و خانواده خودرو</h3>
              <div className="space-y-1.5">
                {carModels.map((m) => (
                  <label
                    key={m.id}
                    className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="filter_model"
                      checked={selectedModel === m.id}
                      onChange={() => setSelectedModel(m.id)}
                      className="accent-amber-400"
                    />
                    <span>{m.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Category */}
            <div className="border-t border-zinc-800/80 pt-4">
              <h3 className="text-xs font-bold text-zinc-300 mb-2">دسته‌بندی فنی</h3>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <label
                    key={cat.id}
                    className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="filter_cat"
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                      className="accent-amber-400"
                    />
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Brand */}
            <div className="border-t border-zinc-800/80 pt-4">
              <h3 className="text-xs font-bold text-zinc-300 mb-2">برند قطعه‌ساز</h3>
              <div className="space-y-1.5">
                {brands.map((b) => (
                  <label
                    key={b.id}
                    className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="filter_brand"
                      checked={selectedBrand === b.id}
                      onChange={() => setSelectedBrand(b.id)}
                      className="accent-amber-400"
                    />
                    <span>{b.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid & Sorting */}
          <section className="space-y-6">
            {/* Sorting bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-xs">
              <div className="flex flex-wrap items-center gap-2 text-zinc-400">
                <span>مرتب‌سازی:</span>
                <button
                  type="button"
                  onClick={() => setSortBy("newest")}
                  className={`rounded-lg px-3 py-1.5 font-bold transition ${
                    sortBy === "newest"
                      ? "bg-amber-400 text-black"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                  }`}
                >
                  جدیدترین
                </button>
                <button
                  type="button"
                  onClick={() => setSortBy("cheapest")}
                  className={`rounded-lg px-3 py-1.5 font-bold transition ${
                    sortBy === "cheapest"
                      ? "bg-amber-400 text-black"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                  }`}
                >
                  ارزان‌ترین
                </button>
                <button
                  type="button"
                  onClick={() => setSortBy("expensive")}
                  className={`rounded-lg px-3 py-1.5 font-bold transition ${
                    sortBy === "expensive"
                      ? "bg-amber-400 text-black"
                      : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                  }`}
                >
                  گران‌ترین
                </button>
              </div>

              <span className="text-zinc-500 font-medium">
                نمایش {toPersianDigits(filteredProducts.length)} محصول
              </span>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950 p-16 text-center">
                <span className="material-symbols-outlined text-5xl text-zinc-600">
                  search_off
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">قطعه‌ای با این فیلترها یافت نشد</h3>
                <p className="mt-2 text-xs text-zinc-400">
                  فیلترهای انتخابی را تغییر داده یا از دکمه پاک کردن فیلترها استفاده کنید.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="mt-6 rounded-xl bg-amber-400 px-6 py-2.5 text-xs font-bold text-black hover:bg-amber-300 transition"
                >
                  نمایش تمامی قطعات
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
