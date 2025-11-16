import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, X, AlertCircle } from 'lucide-react';
import ProductFormModal from '../components/ProductFormModal.jsx'; // We'll create this next
import { motion, AnimatePresence } from 'framer-motion';

// Helper: Icon Component
const Icon = ({ Svg, size = 20, className = "" }) => (
  <Svg size={size} className={`inline-block ${className}`} />
);

const DashboardPage = ({ dir }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const isRTL = dir === 'rtl';

  // --- Data Fetching ---
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // --- Event Handlers ---
  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm(isRTL ? 'هل أنت متأكد من حذف هذا المنتج؟' : 'Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`/api/products/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete');
        setProducts(products.filter(p => p.id !== id)); // Update state
      } catch (err) {
        alert(isRTL ? 'فشل حذف المنتج' : 'Failed to delete product');
      }
    }
  };
  
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  
  const handleModalSave = (productData) => {
    // This function is passed to the modal to handle both create and update
    // A real app would have more robust state management
    fetchProducts(); // Just refetch all products for simplicity
    handleModalClose();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" dir={dir}>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-text-primary dark:text-white">
            {isRTL ? 'إدارة المنتجات' : 'Product Management'}
          </h1>
          <motion.button
            onClick={handleAddProduct}
            className="flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-primary-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon Svg={Plus} size={16} />
            {isRTL ? 'أضف منتج' : 'Add Product'}
          </motion.button>
        </div>

        {/* Product Table */}
        <div className="bg-canvas dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead className="bg-surface dark:bg-gray-700">
                <tr>
                  <th className="p-4 text-start text-xs font-semibold text-text-secondary uppercase tracking-wider">{isRTL ? 'المنتج' : 'Product'}</th>
                  <th className="p-4 text-start text-xs font-semibold text-text-secondary uppercase tracking-wider">{isRTL ? 'السعر' : 'Price'}</th>
                  <th className="p-4 text-start text-xs font-semibold text-text-secondary uppercase tracking-wider">{isRTL ? 'المخزون' : 'Stock'}</th>
                  <th className="p-4 text-start text-xs font-semibold text-text-secondary uppercase tracking-wider">{isRTL ? 'إجراءات' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color dark:divide-gray-700">
                {loading && (
                  <tr>
                    <td colSpan="4" className="p-4 text-center text-text-secondary">{isRTL ? 'جاري التحميل...' : 'Loading...'}</td>
                  </tr>
                )}
                {error && (
                  <tr>
                    <td colSpan="4" className="p-4 text-center text-red-500 flex items-center justify-center gap-2">
                      <Icon Svg={AlertCircle} /> {isRTL ? 'فشل تحميل المنتجات' : 'Failed to load products'}
                    </td>
                  </tr>
                )}
                {!loading && !error && products.map(product => (
                  <tr key={product.id} className="hover:bg-surface dark:hover:bg-gray-700/50">
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.images[0] || 'https://placehold.co/40x40/e2e8f0/adb5bd?text=N/A'} 
                          alt={product.name}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                        <span className="font-medium text-text-primary dark:text-white">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4 whitespace-nowrap text-text-secondary">
                      {new Intl.NumberFormat(isRTL ? 'ar-IQ' : 'en-US', { style: 'currency', currency: 'IQD', maximumFractionDigits: 0 }).format(product.price)}
                    </td>
                    <td className="p-4 whitespace-nowrap text-text-secondary">{product.stock}</td>
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button onClick={() => handleEditProduct(product)} className="text-primary hover:text-primary-700"><Icon Svg={Edit} size={18} /></button>
                        <button onClick={() => handleDeleteProduct(product.id)} className="text-red-500 hover:text-red-700"><Icon Svg={Trash2} size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ProductFormModal 
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSave={handleModalSave}
            product={selectedProduct}
            dir={dir}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardPage;