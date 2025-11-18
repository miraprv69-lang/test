import Modal from "./ui/Modal";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function AddBannerModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>

      {/* TITLE */}
      <h2 className="text-xl font-bold mb-6 text-right">
        إضافة بانر جديد
      </h2>

      <div className="grid grid-cols-1 gap-6">

        {/* Banner Image Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium">صورة البانر</label>
          <div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 cursor-pointer">
            اضغط لرفع صورة البانر
          </div>
        </div>

        {/* Banner Title */}
        <div className="space-y-2">
          <label className="text-sm font-medium">عنوان البانر (اختياري)</label>
          <Input placeholder="اكتب عنواناً يظهر على البانر" />
        </div>

        {/* Link */}
        <div className="space-y-2">
          <label className="text-sm font-medium">الرابط</label>
          <Input placeholder="الرابط الذي يتم توجيه المستخدم له" />
        </div>

        {/* Status Toggle */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border">
          <label className="text-sm font-medium">حالة البانر</label>

          <input
            type="checkbox"
            className="w-6 h-6 accent-primary cursor-pointer"
          />
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
          حفظ البانر
        </Button>
      </div>

    </Modal>
  );
}
