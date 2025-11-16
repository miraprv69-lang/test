// frontend/src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import all page components with the .jsx extension
import DashboardLayout from './pages/DashboardLayout.jsx';
import MainDashboard from './pages/MainDashboard.jsx';
import Products from './pages/Products.jsx';
import Categories from './pages/Categories.jsx';
import Orders from './pages/Orders.jsx';
import AddProduct from './pages/AddProduct.jsx'; // <-- 1. Import AddProduct

function App() {
  return (
    <Routes>
      {/* All dashboard routes live under here */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Child routes that render inside DashboardLayout */}
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<MainDashboard />} />
        
        {/* Product Routes */}
        <Route path="products" element={<Products />} />
        <Route path="products/add" element={<AddProduct />} /> {/* <-- 2. Add new route */}
        
        {/* Categories Route */}
        <Route path="categories" element={<Categories />} />
        
        {/* Orders Route */}
        <Route path="orders" element={<Orders />} />
      </Route>

      {/* Redirect the user from "/" to "/dashboard" */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;