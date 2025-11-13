import React, { useState, useEffect } from 'react';
import { Home, Package, ShoppingCart, Users, Settings, Plus, Edit, Trash2, ChevronDown, Bell, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// This modal file doesn't exist yet, we will add it in the next step
import ProductFormModal from '../components/ProductFormModal.jsx'; 

const DashboardPage = ({ setPage, dir }) => {
  const isRTL = dir === 'rtl';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      setError(isRTL ? 'فشل في جلب المنتجات' : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpenModal = (product = null) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleSaveProduct = async (formData) => {
    const isEditing = !!editingProduct;
    const url = isEditing ? `/api/products/${editingProduct.id}` : '/api/products';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || (isEditing ? 'Failed to update' : 'Failed to create'));
      }
      
      handleCloseModal();
      fetchProducts(); // Refresh
      
    } catch (e) {
      console.error('Save error:', e);
      setError(e.message);
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm(isRTL ? 'هل أنت متأكد أنك تريد حذف هذا المنتج؟' : 'Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`/api/products/${productId}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete');
        fetchProducts(); // Refresh
      } catch (e) {
        console.error('Delete error:', e);
        setError(isRTL ? 'فشل في حذف المنتج' : 'Failed to delete product');
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar - Matches Figma Admin Design */}
      <aside className={`bg-gray-900 text-gray-300 w-64 p-6 shadow-lg hidden md:flex flex-col`}>
        <h2 className="text-2xl font-bold mb-8 text-white">{isRTL ? 'متجر بوكسي' : 'Boxy Store'}</h2>
        <nav className="flex-grow">
          <ul className="space-y-2">
            <SidebarLink icon={Home} label={isRTL ? 'صفحة الرئيسية' : 'Dashboard'} active />
            <SidebarLink icon={Package} label={isRTL ? 'المنتجات' : 'Products'} />
            <SidebarLink icon={ShoppingCart} label={isRTL ? 'الطلبات' : 'Orders'} />
            <SidebarLink icon={Users} label={isRTL ? 'الزبائن' : 'Customers'} />
            <SidebarLink icon={Settings} label={isRTL ? 'اعدادات المتجر' : 'Settings'} />
          </ul>
        </nav>
        <div>
          <button onClick={() => setPage('store')} className="w-full text-center p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
            {isRTL ? 'عرض المتجر' : 'View Store'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header for Main Content */}
        <header className="bg-white dark:bg-gray-900 shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {isRTL ? 'إدارة المنتجات' : 'Product Management'}
          </h1>
          <div className="flex items-center gap-4">
            <Bell className="text-gray-600 dark:text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <UserIcon size={16} className="text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-sm font-medium dark:text-gray-200">Admin</span>
              <ChevronDown size={16} className="text-gray-600 dark:text-gray-400" />
            </div>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{isRTL ? 'جميع المنتجات' : 'All Products'}</h2>
            <motion.button 
              onClick={() => handleOpenModal(null)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Plus size={18} />
              {isRTL ? 'إضافة منتج' : 'Add Product'}
            </motion.button>
          </div>

          {/* Product Table - Matches Figma */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-x-auto">
            {loading && <p className="p-4 text-gray-600 dark:text-gray-400">{isRTL ? 'جاري التحميل...' : 'Loading...'}</p>}
            {error && <p className="p-4 text-red-500">{error}</p>}
            {!loading && !error && (
              <table className="w-full min-w-[600px]">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <Th>{isRTL ? 'المنتج' : 'Product'}</Th>
                    <Th>{isRTL ? 'السعر' : 'Price'}</Th>
                    <Th>{isRTL ? 'المخزون' : 'Stock'}</Th>
                    <Th>{isRTL ? 'SKU' : 'SKU'}</Th>
                    <Th>{isRTL ? 'إجراءات' : 'Actions'}</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <AnimatePresence>
                    {products.map((product, i) => (
                      <motion.tr 
                        key={product.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: i * 0.05 } }}
                        exit={{ opacity: 0 }}
                      >
                        <Td>{product.name}</Td>
                        <Td>${product.price}</Td>
                        <Td>{product.stock}</Td>
                        <Td>{product.sku || 'N/A'}</Td>
                        <Td>
                          <div className="flex gap-3">
                            <motion.button whileHover={{ scale: 1.1 }} onClick={() => handleOpenModal(product)} className="text-blue-600 hover:text-blue-800">
                              <Edit size={18} />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.1 }} onClick={() => handleDeleteProduct(product.id)} className="text-red-600 hover:text-red-800">
                              <Trash2 size={18} />
                            </motion.button>
                          </div>
                        </Td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>

      {/* Modal Portal */}
      <AnimatePresence>
        {isModalOpen && (
          <ProductFormModal 
            product={editingProduct}
            onClose={handleCloseModal}
            onSave={handleSaveProduct}
            isRTL={isRTL}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper components for Dashboard
const SidebarLink = ({ icon: Icon, label, active = false }) => (
  <li>
    <a 
      href="#" 
      className={`flex items-center gap-3 text-lg p-2 rounded-lg transition-colors ${
        active 
        ? 'bg-blue-600 text-white' 
        : 'hover:bg-gray-700'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </a>
  </li>
);

const Th = ({ children }) => (
  <th className="p-4 text-start text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
    {children}
  </th>
);

const Td = ({ children }) => (
  <td className="p-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
    {children}
  </td>
);


export default DashboardPage;