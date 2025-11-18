import Table from "../components/ui/Table";
import Button from "../components/ui/Button";

export default function Orders() {
  return (
    <div className="w-full">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-6">الطلبات</h1>

      {/* FILTERS + SEARCH */}
      <div className="bg-white shadow-card rounded-xl p-6 mb-8">

        <div className="flex flex-col md:flex-row justify-between gap-4">

          {/* Search */}
          <input
            placeholder="بحث عن طلب..."
            className="w-full md:w-1/3 bg-gray-100 px-4 py-3 rounded-xl outline-none"
          />

          {/* Filters */}
          <div className="flex gap-4">

            <select className="bg-gray-100 px-4 py-3 rounded-xl text-sm outline-none">
              <option>الحالة</option>
              <option>مكتمل</option>
              <option>قيد المعالجة</option>
              <option>ملغي</option>
            </select>

            <select className="bg-gray-100 px-4 py-3 rounded-xl text-sm outline-none">
              <option>التاريخ</option>
              <option>آخر 7 أيام</option>
              <option>هذا الشهر</option>
              <option>هذا العام</option>
            </select>

          </div>

        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white shadow-card rounded-xl p-6">
        <Table
          headers={[
            "رقم الطلب",
            "العميل",
            "المبلغ",
            "الحالة",
            "التاريخ",
            "الإجراءات",
          ]}
          data={[
            [
              "#1024",
              "أحمد علي",
              "35,000 د.ع",
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-xl text-xs">
                مكتمل
              </span>,
              "2024-01-12",
              <button className="text-primary underline">عرض</button>,
            ],

            [
              "#1022",
              "محمد كريم",
              "12,500 د.ع",
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-xl text-xs">
                قيد المعالجة
              </span>,
              "2024-01-10",
              <button className="text-primary underline">عرض</button>,
            ],

            [
              "#1019",
              "سارة يوسف",
              "8,000 د.ع",
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-xl text-xs">
                ملغي
              </span>,
              "2024-01-09",
              <button className="text-primary underline">عرض</button>,
            ],
          ]}
        />
      </div>

    </div>
  );
}
