import Modal from "./ui/Modal";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function ProductFormModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      
      {/* TITLE */}
      <h2 className="text-xl font-bold mb-6 text-right">
        إضافة منتج جديد
      </h2>

      {/* PRODUCT FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Product Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium">اسم المنتج</label>
          <Input placeholder="أدخل اسم المنتج" />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <label className="text-sm font-medium">السعر</label>
          <Input placeholder="مثال: 15000" type="number" />
        </div>

        {/* Category */}
        <div className="space-y-2 col-span-2">
          <label className="text-sm font-medium">الفئة</label>
          <select className="w-full bg-gray-100 px-4 py-3 rounded-xl text-sm outline-none">
            <option>اختر الفئة</option>
            <option>الكترونيات</option>
            <option>أجهزة منزلية</option>
          </select>
        </div>

        {/* Stock */}
        <div className="space-y-2">
          <label className="text-sm font-medium">المخزون</label>
          <Input placeholder="الكمية المتوفرة" type="number" />
        </div>

        {/* SKU */}
        <div className="space-y-2">
          <label className="text-sm font-medium">رمز المنتج (SKU)</label>
          <Input placeholder="مثال: SKU-12345" />
        </div>

        {/* Description */}
        <div className="col-span-2 space-y-2">
          <label className="text-sm font-medium">الوصف</label>
          <textarea
            className="w-full h-28 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-primary"
            placeholder="أدخل وصفاً مختصراً للمنتج"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="col-span-2 space-y-2">
          <label className="text-sm font-medium">صورة المنتج</label>
          <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 cursor-pointer">
            اضغط لرفع صورة
          </div>
        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center justify-end gap-4 mt-8">
        <button
          onClick={onClose}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl"
        >
          إلغاء
        </button>

        <Button className="px-8 py-3 rounded-xl">
          حفظ المنتج
        </Button>
      </div>

    </Modal>
  );
}
