// src/pages/CustomerStorePage.jsx
import React, { useEffect, useState } from 'react';
import StoreProductCard from '../components/StoreProductCard.jsx';

const CustomerStorePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [storeName, setStoreName] = useState('متجر Box Smart');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: fetch store + products data using params
    // For now, fake loading:
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'منتج ١', price: '27,000 د.ع' },
        { id: 2, name: 'منتج ٢', price: '35,000 د.ع' },
        { id: 3, name: 'منتج ٣', price: '12,000 د.ع' },
      ]);
      setIsLoading(false);
    }, 400);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3 text-text-secondary">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <span className="text-sm font-medium">جارٍ تحميل منتجات المتجر...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1 text-right">
          <h1 className="text-2xl font-black text-text-primary">
            {storeName}
          </h1>
          <p className="text-sm text-text-secondary">
            جميع المنتجات المعروضة متاحة للطلب الآن.
          </p>
        </div>
      </header>

      <section>
        {products.length === 0 ? (
          <div className="bg-surface rounded-2xl border border-dashed border-gray-300 p-8 text-center text-text-secondary text-sm">
            لا توجد منتجات متاحة في هذا المتجر حالياً.
          </div>
        ) : (
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <StoreProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default CustomerStorePage;
