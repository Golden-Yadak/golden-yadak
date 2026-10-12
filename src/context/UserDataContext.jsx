import { useState, useEffect } from "react";
import { UserDataContext } from "../hooks/useUserData.js";
import { PRODUCTS } from "../data/products.js";

const STORAGE_KEYS = {
  PROFILE: "golden_yadak_profile",
  ADDRESSES: "golden_yadak_addresses",
  ORDERS: "golden_yadak_orders",
  WISHLIST: "golden_yadak_wishlist",
  PRODUCTS: "golden_yadak_products",
};

const INITIAL_PROFILE = {
  fullName: "آریامهر دارپوی",
  nationalCode: "۰۰۲۳۴۵۶۷۸۹",
  phone: "۰۹۱۲۳۴۵۶۷۸۹",
  email: "aryamehr@example.com",
  sheba: "IR120170000000108927892001",
};

const INITIAL_ADDRESSES = [
  {
    id: "addr-1",
    title: "منزل (اصلی)",
    province: "تهران",
    city: "تهران",
    address: "خیابان پاسداران، بوستان دوم، کوچه مریم، پلاک ۱۴، واحد ۴",
    postalCode: "۱۹۵۸۶۷۴۵۱۲",
    recipientName: "آریامهر دارپوی",
    recipientPhone: "۰۹۱۲۳۴۵۶۷۸۹",
    isDefault: true,
  },
  {
    id: "addr-2",
    title: "تعمیرگاه تخصصی کارنو",
    province: "تهران",
    city: "تهران",
    address: "خیابان ملت، کوچه کاوه، مجتمع یدک‌آوران، طبقه همکف، پلاک ۸",
    postalCode: "۱۱۴۵۸۹۶۳۲۱",
    recipientName: "مهندس رضایی (مکانیک)",
    recipientPhone: "۰۹۳۵۱۲۳۴۵۶۷",
    isDefault: false,
  },
];

const INITIAL_ORDERS = [
  {
    id: "GY-98421",
    date: "۱۴۰۳/۰۷/۱۸",
    status: "جاری", // جاری | تحویل شده | لغو شده
    statusText: "در حال بسته‌بندی در انبار مرکزی",
    shippingMethod: "تیپاکس اکسپرس (تحویل ۲۴ ساعته)",
    trackingCode: "TPX-88492014",
    items: [
      {
        id: "clutch-kit-valeo-tu5",
        title: "کیت کلاچ کامل والئو (Valeo) اصلی فرانسه - پژو ۲۰۶ و ۲۰۷",
        price: 4950000,
        qty: 1,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBcd2DGnJlV2Co3kSuTzkJBTEhYQkW5uLQcDeorhJZG6-0QeKdnVg9iT4cZm4e7ukr0zySlzTw2KcuA9mpqaXMaBaQGbdgPKlMbRAfxiowU8koxoxRx6EtlbgF9CnGUd9ABrxDNPzm5T40Kv4BBBwRldNVWXcrEeFiq3jTOtWAEHbxCkAcv83FEQm7USL_ljbSJKNdV-B5IR91TlmyUM6-1H6nMrDzBdakyfQ5U7KdBg1nJgsu7tlDSxXs-D9Yx4fD4BgbzLyq46nU",
      },
    ],
    totalPrice: 4950000,
    shippingFee: 85000,
    address: "خیابان پاسداران، بوستان دوم، کوچه مریم، پلاک ۱۴، واحد ۴",
  },
  {
    id: "GY-95110",
    date: "۱۴۰۳/۰۶/۲۲",
    status: "تحویل شده",
    statusText: "تحویل مشتری شد با امضای دیجیتال",
    shippingMethod: "پیک فوری موتوری تهران",
    trackingCode: "MOT-29104",
    items: [
      {
        id: "spark-plug-bosch-shahin-quick",
        title: "شمع سوزنی ایریدیوم بوش آلمان - کوییک و شاهین (دست ۴ عددی)",
        price: 1350000,
        qty: 1,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD08aUpVbBjTo1BWsryX1imdfB-M5vR5cy1d7r2aTdZf6QgIz3_mMoR3e8ZlgcPHeyjnR5N7lIjrQ4oaq88dZze6clU4BByKIkEi8IiY16i1fd6AQhnwBDCGpEtrgFsFot50S82xfg947Lb4T0VCziQPZJkR1So70r1Hiwj1x8FCRQN5DOkA_phn05I5mYB02bvtsv-SDoFt7uAJPoZU_Rywic6ZPf_98cQtTbnRkDXin610yTXWU2FAAmK_mlpWpQ1RRr46QLkWfc",
      },
      {
        id: "engine-oil-behran-super-pishtaz",
        title: "روغن موتور بهران سوپر پیشتاز 10W-40 (۴ لیتری)",
        price: 740000,
        qty: 1,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBs_9MCj8nW40lYUethz4GfwgrVcFslwB8X-j4RCSZ9IWSFjyA0GxM-w7oKvBqoFDoIGYd0YsSbHVLfMn4vDncA9dN8MDVkuuKwle6l4JuGwDynGK8k-vDkYRm5TT4daAl3JPOVXPEMkqzEeSyMazeiLk-_3F8CMeoHE63skVbWBI7f0TD5FonG2M6svx_tJIffk5sHmDDQ-Cgkoz3hxdN9kXoH8twoPUigAp2H1-bIkHxWH_hqesY2qlBa4qQfDw8sbM_XrFfCVBE",
      },
    ],
    totalPrice: 2090000,
    shippingFee: 50000,
    address: "خیابان پاسداران، بوستان دوم، کوچه مریم، پلاک ۱۴، واحد ۴",
  },
];

const INITIAL_WISHLIST = ["timing-belt-kit-isaco-ef7", "headlight-sport-207-crouse"];

export function UserDataProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return saved ? JSON.parse(saved) : INITIAL_PROFILE;
    } catch {
      return INITIAL_PROFILE;
    }
  });

  const [addresses, setAddresses] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ADDRESSES);
      return saved ? JSON.parse(saved) : INITIAL_ADDRESSES;
    } catch {
      return INITIAL_ADDRESSES;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ORDERS);
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WISHLIST);
      return saved ? JSON.parse(saved) : INITIAL_WISHLIST;
    } catch {
      return INITIAL_WISHLIST;
    }
  });

  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
      return saved ? JSON.parse(saved) : PRODUCTS;
    } catch {
      return PRODUCTS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ADDRESSES, JSON.stringify(addresses));
  }, [addresses]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  const updateProfile = (data) => {
    setProfile((prev) => ({ ...prev, ...data }));
  };

  const addAddress = (addressData) => {
    const newAddress = {
      ...addressData,
      id: "addr-" + Date.now(),
      isDefault: addressData.isDefault || addresses.length === 0,
    };

    setAddresses((prev) => {
      let updated = [...prev];
      if (newAddress.isDefault) {
        updated = updated.map((a) => ({ ...a, isDefault: false }));
      }
      return [newAddress, ...updated];
    });
    return newAddress;
  };

  const updateAddress = (id, updatedFields) => {
    setAddresses((prev) =>
      prev.map((addr) => {
        if (addr.id === id) {
          return { ...addr, ...updatedFields };
        }
        if (updatedFields.isDefault) {
          return { ...addr, isDefault: false };
        }
        return addr;
      })
    );
  };

  const deleteAddress = (id) => {
    setAddresses((prev) => {
      const filtered = prev.filter((a) => a.id !== id);
      if (filtered.length > 0 && !filtered.some((a) => a.isDefault)) {
        filtered[0].isDefault = true;
      }
      return filtered;
    });
  };

  const setDefaultAddress = (id) => {
    setAddresses((prev) =>
      prev.map((a) => ({
        ...a,
        isDefault: a.id === id,
      }))
    );
  };

  const addOrder = (orderData) => {
    const newOrder = {
      id: `GY-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Intl.DateTimeFormat("fa-IR").format(new Date()),
      status: "جاری",
      statusText: "سفارش ثبت شد و در انتظار تایید انبار",
      trackingCode: `TRK-${Math.floor(100000 + Math.random() * 900000)}`,
      ...orderData,
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  const addProduct = (productData) => {
    const newProduct = {
      id: "prod-" + Date.now(),
      inStock: true,
      badge: "جدید",
      ...productData,
      price: Number(productData.price) || 0,
      oldPrice: productData.oldPrice ? Number(productData.oldPrice) : null,
    };
    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            ...updatedFields,
            price:
              updatedFields.price !== undefined
                ? Number(updatedFields.price) || p.price
                : p.price,
            oldPrice:
              updatedFields.oldPrice !== undefined
                ? updatedFields.oldPrice
                  ? Number(updatedFields.oldPrice)
                  : null
                : p.oldPrice,
          };
        }
        return p;
      })
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const resetProducts = () => {
    setProducts(PRODUCTS);
    localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
  };

  return (
    <UserDataContext.Provider
      value={{
        profile,
        updateProfile,
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
        orders,
        addOrder,
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        resetProducts,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}
