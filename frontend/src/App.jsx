// frontend/src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import DashboardLayout from './pages/DashboardLayout.jsx';
import AuthLayout from './pages/AuthLayout.jsx';
import PublicLayout from './pages/PublicLayout.jsx';
import StoreLayout from './pages/StoreLayout.jsx';

// Dashboard Pages
import MainDashboard from './pages/MainDashboard.jsx';
import Products from './pages/Products.jsx';
import Categories from './pages/Categories.jsx';
import AddProduct from './pages/AddProduct.jsx';
import Orders from './pages/Orders.jsx';
import Banners from './pages/Banners.jsx';
import Customers from './pages/Customers.jsx';
import Coupons from './pages/Coupons.jsx';
import StoreSettings from './pages/StoreSettings.jsx';

// Auth Pages
import LoginPage from './pages/LoginPage.jsx'; // <-- This import was missing
import SignupPage from './pages/SignupPage.jsx';
import VerificationPage from './pages/VerificationPage.jsx';
import PersonalInfoPage from './pages/PersonalInfoPage.jsx';

// Public Pages
import LandingPage from './pages/LandingPage.jsx';

// Store Pages
import StoreHomePage from './pages/StoreHomePage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';

function App() {
  return (
    <Routes>
      {/* Public-facing routes */}
      <Route path="/landing" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      {/* Store routes */}
      <Route path="/store" element={<StoreLayout />}>
        <Route index element={<StoreHomePage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>

      {/* Auth routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="verify" element={<VerificationPage />} />
        <Route path="personal-info" element={<PersonalInfoPage />} />
      </Route>

      {/* Dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<MainDashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
        <Route path="banners" element={<Banners />} />
        <Route path="customers" element={<Customers />} />
        <Route path="coupons" element={<Coupons />} />
        <Route path="settings" element={<StoreSettings />} />
      </Route>
    </Routes>
  );
}

export default App;