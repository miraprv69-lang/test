import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function StoreSettings() {
  return (
    <div className="w-full">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-6">إعدادات المتجر</h1>

      {/* FORM CARD */}
      <div className="bg-white shadow-card rounded-xl p-8">

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Store Name */}
          <div className="space-y-2">
            <label className="font-medium text-sm">اسم المتجر</label>
            <Input placeholder="أدخل اسم المتجر" />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="font-medium text-sm">رقم الهاتف</label>
            <Input placeholder="0770xxxxxxx" />
          </div>

          {/* Description */}
          <div className="col-span-2 space-y-2">
            <label className="font-medium text-sm">وصف المتجر</label>
            <textarea
              placeholder="اكتب وصفاً مختصراً عن متجرك"
              className="w-full h-28 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none text-sm focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* Address */}
          <div className="col-span-2 space-y-2">
            <label className="font-medium text-sm">العنوان</label>
            <Input placeholder="المدينة، المنطقة، الشارع" />
          </div>

          {/* Currency */}
          <div className="space-y-2">
            <label className="font-medium text-sm">العملة</label>
            <select className="w-full bg-gray-100 px-4 py-3 rounded-xl text-sm outline-none">
              <option>الدينار العراقي (د.ع)</option>
              <option>الدولار (USD)</option>
            </select>
          </div>

          {/* Language */}
          <div className="space-y-2">
            <label className="font-medium text-sm">اللغة</label>
            <select className="w-full bg-gray-100 px-4 py-3 rounded-xl text-sm outline-none">
              <option>العربية</option>
              <option>English</option>
            </select>
          </div>

          {/* Logo Upload */}
          <div className="space-y-2">
            <label className="font-medium text-sm">شعار المتجر</label>
            <div className="w-full h-28 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
              اضغط لرفع الشعار
            </div>
          </div>

          {/* Cover Upload */}
          <div className="space-y-2">
            <label className="font-medium text-sm">صورة الغلاف</label>
            <div className="w-full h-28 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
              اضغط لرفع الغلاف
            </div>
          </div>

        </form>

        {/* SAVE BUTTON */}
        <div className="flex justify-end mt-8">
          <Button className="px-8 py-3 text-lg rounded-xl">
            حفظ التغييرات
          </Button>
        </div>

      </div>

    </div>
  );
}
