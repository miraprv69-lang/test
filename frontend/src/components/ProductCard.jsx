import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, dir, index }) => {
  const isRTL = dir === 'rtl';

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        <motion.img 
          src={product.images[0] || 'https://placehold.co/300x200/e2e8f0/a0aec0?text=No+Image'} 
          alt={product.name_en} 
          className="h-full w-full object-cover" 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
          {isRTL ? product.name : product.name}
        </h3>
        {/* THIS IS THE FIX: Was </pre>, now </p> */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-10 overflow-hidden">
          {isRTL ? product.description : product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price}
          </span>
          <motion.button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRTL ? 'أضف للسلة' : 'Add to Cart'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;