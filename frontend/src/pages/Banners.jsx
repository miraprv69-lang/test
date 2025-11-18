import { FiMoreVertical } from "react-icons/fi";
import Button from "../components/ui/Button";

export default function Banners() {
  return (
    <div className="w-full">

      {/* TITLE + ADD BUTTON */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">البنرات</h1>

        <Button className="px-6 py-3 rounded-xl">
          + إضافة بنر
        </Button>
      </div>

      {/* BANNERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Banner Card */}
        <div className="bg-white shadow-card rounded-xl p-4">
          
          {/* Banner Image */}
          <div className="w-full h-40 bg-gray-200 rounded-xl mb-4"></div>

          {/* Info Row */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">عنوان البنر</h3>
              <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-xl mt-1 inline-block">
                فعال
              </span>
            </div>

            <button className="p-2 rounded-xl hover:bg-gray-100">
              <FiMoreVertical className="text-xl text-gray-600" />
            </button>
          </div>

        </div>

        {/* Banner Card 2 */}
        <div className="bg-white shadow-card rounded-xl p-4">
          <div className="w-full h-40 bg-gray-200 rounded-xl mb-4"></div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">عرض الصيف</h3>
              <span className="text-xs px-3 py-1 bg-yellow-100 text-yellow-700 rounded-xl mt-1 inline-block">
                غير فعال
              </span>
            </div>

            <button className="p-2 rounded-xl hover:bg-gray-100">
              <FiMoreVertical className="text-xl text-gray-600" />
            </button>
          </div>
        </div>

        {/* Banner Card 3 */}
        <div className="bg-white shadow-card rounded-xl p-4">
          <div className="w-full h-40 bg-gray-200 rounded-xl mb-4"></div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">تخفيضات</h3>
              <span className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-xl mt-1 inline-block">
                منتهي
              </span>
            </div>

            <button className="p-2 rounded-xl hover:bg-gray-100">
              <FiMoreVertical className="text-xl text-gray-600" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
