import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";

// Public pages
import LandingPage from "../pages/LandingPage";
import ServicesPage from "../pages/ServicesPage";
import PricingPage from "../pages/PricingPage";
import AboutPage from "../pages/AboutPage";

// Auth pages
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import VerificationPage from "../pages/VerificationPage";

// Dashboard pages
import DashboardHome from "../pages/DashboardHome";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import Coupons from "../pages/Coupons";
import Banners from "../pages/Banners";
import Reviews from "../pages/Reviews";
import StoreSettings from "../pages/StoreSettings";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Authentication */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify" element={<VerificationPage />} />
        </Route>

        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/categories" element={<Categories />} />
          <Route path="/dashboard/orders" element={<Orders />} />
          <Route path="/dashboard/customers" element={<Customers />} />
          <Route path="/dashboard/coupons" element={<Coupons />} />
          <Route path="/dashboard/banners" element={<Banners />} />
          <Route path="/dashboard/reviews" element={<Reviews />} />
          <Route path="/dashboard/settings" element={<StoreSettings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
