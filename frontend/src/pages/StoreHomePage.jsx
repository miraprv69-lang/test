// src/pages/StoreHomePage.jsx
import React from 'react';
import StoreProductCard from '../components/StoreProductCard.jsx';

const productsData = [
  { id: 1, name: 'منتج ١', price: '27,000 د.ع' },
  { id: 2, name: 'منتج ٢', price: '35,000 د.ع' },
  { id: 3, name: 'منتج ٣', price: '12,000 د.ع' },
  { id: 4, name: 'منتج ٤', price: '52,000 د.ع' },
];

const StoreHomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero */}
      <section className="bg-surface rounded-2xl border border-gray-100 shadow-md shadow-gray-100 p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1 space-y-2 text-right">
            <h1 className="text-2xl sm:text-3xl font-black text-text-primary">
              أهلاً بك في متجر Box Smart
            </h1>
            <p className="text-sm text-text-secondary">
              اكتشف أفضل المنتجات المختارة بعناية، مع تجربة شراء بسيطة وسريعة.
            </p>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-black text-text-primary">
            المنتجات المميزة
          </h2>
          <button className="text-xs font-bold text-primary hover:text-primary-700">
            مشاهدة الكل
          </button>
        </div>

        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {productsData.map((product) => (
            <StoreProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default StoreHomePage;
