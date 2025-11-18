import Button from "../components/ui/Button";
import Table from "../components/ui/Table";

export default function Categories() {
  return (
    <div className="w-full">

      {/* TITLE + ADD BUTTON */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">الأقسام</h1>

        <Button className="px-6 py-3 rounded-xl">
          + إضافة قسم
        </Button>
      </div>

      {/* CATEGORIES TABLE */}
      <div className="bg-white shadow-card rounded-xl p-6">

        <Table
          headers={[
            "اسم القسم",
            "عدد المنتجات",
            "الحالة",
            "الإجراءات",
          ]}
          data={[
            [
              "الهواتف",
              "24 منتج",
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-xl text-xs">
                فعال
              </span>,
              <button className="text-primary underline">تعديل</button>,
            ],

            [
              "الإكسسوارات",
              "10 منتجات",
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-xl text-xs">
                غير فعال
              </span>,
              <button className="text-primary underline">تعديل</button>,
            ],
          ]}
        />

      </div>

    </div>
  );
}
