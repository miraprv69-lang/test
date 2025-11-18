import Button from "../components/ui/Button";
import Table from "../components/ui/Table";

export default function Products() {
  return (
    <div className="w-full">

      {/* TITLE + ADD BUTTON */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">المنتجات</h1>

        <Button className="px-6 py-3 rounded-xl">
          + إضافة منتج
        </Button>
      </div>

      {/* SEARCH + FILTERS */}
      <div className="bg-white shadow-card rounded-xl p-6 mb-8">
        
        <div className="flex flex-col md:flex-row gap-4 justify-between">

          {/* Search */}
          <input
            className="w-full md:w-1/3 px-4 py-3 bg-gray-100 rounded-xl outline-none"
            placeholder="بحث عن منتج..."
          />

          {/* Filters */}
          <div className="flex gap-4">
            <select className="px-4 py-3 bg-gray-100 rounded-xl outline-none text-sm">
              <option>التصنيف</option>
            </select>

            <select className="px-4 py-3 bg-gray-100 rounded-xl outline-none text-sm">
              <option>الحالة</option>
            </select>
          </div>

        </div>
      </div>

      {/* PRODUCTS TABLE */}
      <div className="bg-white shadow-card rounded-xl p-6">
        <Table
          headers={[
            "المنتج",
            "السعر",
            "التصنيف",
            "الحالة",
            "المخزون",
            "الإجراءات",
          ]}
          data={[
            [
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                <span>هاتف آيفون 14</span>
              </div>,
              "950,000 د.ع",
              "إلكترونيات",
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-xl text-xs">
                متوفر
              </span>,
              "15",
              <button className="text-primary underline">تعديل</button>,
            ],

            [
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                <span>ساعة سامسونغ</span>
              </div>,
              "120,000 د.ع",
              "إكسسوارات",
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-xl text-xs">
                غير متوفر
              </span>,
              "0",
              <button className="text-primary underline">تعديل</button>,
            ],
          ]}
        />
      </div>

    </div>
  );
}
