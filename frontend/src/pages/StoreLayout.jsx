// src/pages/StoreLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import StoreHeader from '../components/StoreHeader.jsx';
import PublicFooter from '../components/PublicFooter.jsx';

const StoreLayout = () => {
  return (
    <div
      className="min-h-screen bg-canvas text-text-primary flex flex-col"
      dir="rtl"
    >
      <StoreHeader />

      <main className="flex-1">
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
};

export default StoreLayout;
