import Card from "../components/ui/Card";
import Table from "../components/ui/Table";

export default function DashboardHome() {
  return (
    <div className="w-full">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold mb-6">الرئيسية</h1>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <Card>
          <p className="text-gray-600 text-sm">إجمالي المبيعات</p>
          <h2 className="text-2xl font-bold mt-1">2,450,000 د.ع</h2>
        </Card>

        <Card>
          <p className="text-gray-600 text-sm">إجمالي الطلبات</p>
          <h2 className="text-2xl font-bold mt-1">320 طلب</h2>
        </Card>

        <Card>
          <p className="text-gray-600 text-sm">عدد العملاء</p>
          <h2 className="text-2xl font-bold mt-1">120 عميل</h2>
        </Card>

        <Card>
          <p className="text-gray-600 text-sm">عدد المنتجات</p>
          <h2 className="text-2xl font-bold mt-1">58 منتج</h2>
        </Card>

      </div>

      {/* CHART SECTION */}
      <div className="bg-white shadow-card rounded-xl p-6 mb-10">
        <h2 className="text-xl font-bold mb-4">المبيعات خلال هذا الشهر</h2>

        {/* Placeholder Chart */}
        <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
          (رسم بياني قادم)
        </div>
      </div>

      {/* RECENT ORDERS TABLE */}
      <div className="bg-white shadow-card rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">أحدث الطلبات</h2>

        <Table
          headers={[
            "العميل",
            "رقم الطلب",
            "الحالة",
            "المبلغ",
            "تاريخ الطلب"
          ]}
          data={[
            ["علي أحمد", "#2541", "مكتمل", "35,000 د.ع", "2024-01-10"],
            ["محمد علي", "#2539", "قيد المعالجة", "12,000 د.ع", "2024-01-10"],
            ["سارة يوسف", "#2535", "ملغي", "8,500 د.ع", "2024-01-09"],
          ]}
        />
      </div>

    </div>
  );
}
