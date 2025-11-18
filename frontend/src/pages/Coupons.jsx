import Button from "../components/ui/Button";
import Table from "../components/ui/Table";

export default function Coupons() {
  return (
    <div className="w-full">

      {/* TITLE + ADD BUTTON */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">الكوبونات</h1>

        <Button className="px-6 py-3 rounded-xl">
          + إضافة كوبون
        </Button>
      </div>

      {/* COUPONS TABLE */}
      <div className="bg-white shadow-card rounded-xl p-6">

        <Table
          headers={[
            "اسم الكوبون",
            "نوع الخصم",
            "القيمة",
            "تاريخ الانتهاء",
            "الحالة",
            "الإجراءات",
          ]}
          
          data={[
            [
              "SUMMER2024",
              "خصم نسبة",
              "15%",
              "2024-08-01",
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-xl text-xs">
                فعال
              </span>,
              <button className="text-primary underline">تعديل</button>,
            ],

            [
              "WELCOME10",
              "خصم ثابت",
              "10,000 د.ع",
              "2024-06-15",
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-xl text-xs">
                منتهي قريباً
              </span>,
              <button className="text-primary underline">تعديل</button>,
            ],

            [
              "BLACKFRIDAY",
              "خصم نسبة",
              "30%",
              "2023-12-01",
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-xl text-xs">
                منتهي
              </span>,
              <button className="text-primary underline">تعديل</button>,
            ],
          ]}
        />

      </div>

    </div>
  );
}
