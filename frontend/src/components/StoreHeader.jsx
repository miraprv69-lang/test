import { FiBell, FiSearch } from "react-icons/fi";

export default function StoreHeader() {
  return (
    <header className="w-full bg-white shadow-card p-4 rounded-xl flex items-center justify-between mb-6">

      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full w-72">
        <FiSearch className="text-gray-500" />
        <input
          className="bg-transparent outline-none w-full text-sm"
          placeholder="بحث..."
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        <button className="p-2 bg-gray-100 rounded-full">
          <FiBell className="text-gray-600 text-lg" />
        </button>

        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
          A
        </div>

      </div>

    </header>
  );
}
