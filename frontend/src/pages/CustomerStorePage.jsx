import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard.jsx'; 

const CustomerStorePage = ({ setPage, dir }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isRTL = dir === 'rtl';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/products'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error("Error fetching products:", e);
        setError(isRTL ? "فشل في جلب المنتجات. حاول مرة أخرى." : "Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [isRTL]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        
        {/* Hero Product Section - Animated */}
        <motion.div 
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 md:p-12 rounded-lg mb-8 flex flex-col md:flex-row items-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex-1 mb-6 md:mb-0"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">{isRTL ? 'آيفون 13 برو' : 'iPhone 13 Pro'}</h2>
            <p className="text-xl mb-6 text-gray-300">{isRTL ? 'أداء يتجاوز الخيال.' : 'Oh. So. Pro.'}</p>
            <motion.button 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <ShoppingBag size={20} />
              {isRTL ? 'تسوق الآن' : 'Shop Now'}
            </motion.button>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src="https://placehold.co/400x300/374151/FFF?text=iPhone+13+Pro" alt="iPhone 13 Pro" className="w-64 md:w-80" />
          </motion.div>
        </motion.div>
        
        {/* Featured Products Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {isRTL ? 'المنتجات المميزة' : 'Featured Products'}
          </h2>
          
          {loading && <p className="text-gray-600 dark:text-gray-400">{isRTL ? 'جاري تحميل المنتجات...' : 'Loading products...'}</p>}
          {error && <p className="text-red-500">{error}</p>}
          
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

      </div>
    </div>
  );
};

export default CustomerStorePage;