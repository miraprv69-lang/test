// src/pages/AddProduct.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div dir="rtl" className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900">إضافة منتج</h1>
          <p className="text-sm text-gray-600 mt-1">
            قم بإضافة تفاصيل المنتج و رفع الصور الخاصة به.
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/products")}
          className="text-xs text-gray-600 hover:underline"
        >
          رجوع الى قائمة المنتجات
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              أسم المنتج
            </label>
            <input
              type="text"
              placeholder="مثال: ايفون 13 برو"
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Price + discount */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">السعر</label>
              <input
                type="number"
                placeholder="450000"
                className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">
                نسبة الخصم (اختياري)
              </label>
              <input
                type="text"
                placeholder="10%"
                className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-1">الفئة</label>
            <select
              defaultValue=""
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none bg-white focus:ring-1 focus:ring-blue-500"
            >
              <option value="" disabled>
                اختر الفئة
              </option>
              <option value="electronics">أجهزة ذكية</option>
              <option value="fashion">ملابس</option>
              <option value="home">منزلية</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-1">الوصف</label>
            <textarea
              rows={4}
              placeholder="اكتب وصف المنتج هنا..."
              className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              صور المنتج
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              className="w-full text-sm"
            />
            <p className="text-[11px] text-gray-500 mt-1">
              يمكنك رفع اكثر من صورة، يفضل أن تكون بدقة عالية.
            </p>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              حالة المنتج
            </label>
            <div className="flex items-center gap-3 text-xs">
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-green-100 text-green-700"
              >
                متوفر
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-full bg-red-100 text-red-700"
              >
                غير متوفر
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate("/dashboard/products")}
              className="px-4 py-2 rounded-full text-xs text-gray-600 hover:bg-gray-50"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-blue-600 text-white text-xs hover:bg-blue-700"
            >
              حفظ المنتج
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
