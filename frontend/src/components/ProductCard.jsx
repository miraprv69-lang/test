import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, dir, index }) => {
  const isRTL = dir === 'rtl';
  const price = new Intl.NumberFormat(isRTL ? 'ar-IQ' : 'en-US', {
    style: 'currency',
    currency: 'IQD',
    maximumFractionDigits: 0,
  }).format(product.price);

  const oldPrice = product.old_price ? new Intl.NumberFormat(isRTL ? 'ar-IQ' : 'en-US', {
    style: 'currency',
    currency: 'IQD',
    maximumFractionDigits: 0,
  }).format(product.old_price) : null;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-canvas dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden relative">
        <motion.img
          src={product.images[0] || 'https://placehold.co/300x200/e2e8f0/adb5bd?text=No+Image'}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {product.is_new && (
          <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
            {isRTL ? 'جديد' : 'NEW'}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-2 truncate">{product.name}</h3>
        <p className="text-text-secondary dark:text-gray-400 text-sm mb-4 flex-grow" style={{ minHeight: '40px' }}>
          {product.description?.substring(0, 50) || 'No description'}{product.description?.length > 50 ? '...' : ''}
        </p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-text-primary dark:text-blue-400">{price}</span>
          {oldPrice && (
            <span className="text-sm text-text-tertiary line-through">{oldPrice}</span>
          )}
        </div>

        <motion.button
          className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-primary-700 dark:hover:bg-primary-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRTL ? 'أضف للسلة' : 'Add to Cart'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;