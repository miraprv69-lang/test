import Modal from "./ui/Modal";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function CategoryFormModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>

      {/* TITLE */}
      <h2 className="text-xl font-bold mb-6 text-right">
        إضافة فئة جديدة
      </h2>

      {/* FORM */}
      <div className="grid grid-cols-1 gap-6">

        {/* Category Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium">اسم الفئة</label>
          <Input placeholder="أدخل اسم الفئة" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">الوصف (اختياري)</label>
          <textarea
            className="w-full h-24 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-primary"
            placeholder="وصف مختصر للفئة"
          ></textarea>
        </div>

        {/* Icon Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium">أيقونة الفئة (اختياري)</label>
          <div className="w-full h-28 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 cursor-pointer">
            اضغط لرفع أيقونة
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
          حفظ الفئة
        </Button>
      </div>

    </Modal>
  );
}
