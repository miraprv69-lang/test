import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiBox,
  FiLayers,
  FiShoppingCart,
  FiUsers,
  FiTag,
  FiImage,
  FiStar,
  FiSettings
} from "react-icons/fi";

export default function Sidebar() {
  const links = [
    { label: "الرئيسية", path: "/dashboard", icon: <FiHome /> },
    { label: "المنتجات", path: "/dashboard/products", icon: <FiBox /> },
    { label: "الأقسام", path: "/dashboard/categories", icon: <FiLayers /> },
    { label: "الطلبات", path: "/dashboard/orders", icon: <FiShoppingCart /> },
    { label: "العملاء", path: "/dashboard/customers", icon: <FiUsers /> },
    { label: "الكوبونات", path: "/dashboard/coupons", icon: <FiTag /> },
    { label: "البنرات", path: "/dashboard/banners", icon: <FiImage /> },
    { label: "التقييمات", path: "/dashboard/reviews", icon: <FiStar /> },
    { label: "الإعدادات", path: "/dashboard/settings", icon: <FiSettings /> },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-card px-4 py-6">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-primary mb-10 text-center">
        BoxSmart
      </h1>

      {/* Nav */}
      <nav className="space-y-2">
        {links.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition ${
                isActive
                  ? "bg-primary text-white shadow"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}
