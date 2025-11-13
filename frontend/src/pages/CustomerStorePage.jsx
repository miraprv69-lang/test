import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

const CustomerStorePage = ({ dir }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isRTL = dir === 'rtl';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // We use /api/products, and vite.config.js proxies this to our backend
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir={dir}>
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-primary-600 to-blue-400 dark:from-primary-700 dark:to-blue-500 rounded-lg shadow-lg p-8 md:p-12 mb-12 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {isRTL ? 'أفضل التخفيضات' : 'BEST SALE'}
          </h1>
          <p className="text-lg text-blue-100">
            {isRTL ? 'أسرع متجر في العراق' : 'The fastest store in Iraq'}
          </p>
        </div>
        <motion.button 
          className="bg-white text-primary-600 font-semibold py-2 px-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRTL ? 'تسوق الآن' : 'Shop Now'}
        </motion.button>
      </motion.div>

      {/* Products Grid */}
      <h2 className="text-3xl font-bold text-text-primary dark:text-white mb-8">
        {isRTL ? 'المنتجات المميزة' : 'Featured Products'}
      </h2>

      {loading && (
        <div className="text-center text-text-secondary py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">{isRTL ? 'جاري التحميل...' : 'Loading...'}</p>
        </div>
      )}
      {error && <p className="text-center text-red-500 py-10">{isRTL ? 'حدث خطأ' : 'An error occurred'}: {error}</p>}

      {!loading && !error && (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} dir={dir} index={i} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CustomerStorePage;