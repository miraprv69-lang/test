import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductFormModal = ({ product, onClose, onSave, isRTL }) => {
  // This state holds all the form data
  const [formData, setFormData] = useState({
    name: product ? product.name : '',
    description: product ? product.description : '',
    price: product ? product.price : 0,
    old_price: product ? (product.old_price || 0) : 0,
    stock: product ? product.stock : 0,
    sku: product ? (product.sku || '') : '',
    category_id: product ? (product.category_id || 1) : 1, 
    // We .join(', ') to turn the array into a string for the text input
    images: product ? product.images.join(', ') : '',
    colors: product ? product.colors.join(', ') : '',
    storages: product ? product.storages.join(', ') : '',
    is_new: product ? product.is_new : false,
    is_featured: product ? product.is_featured : false,
  });

  // A single handler for all form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // When the user clicks "Save"
  const handleSubmit = (e) => {
    e.preventDefault();
    // We convert the form strings back into the correct data types for our database
    const finalData = {
      ...formData,
      price: parseFloat(formData.price) || 0,
      old_price: parseFloat(formData.old_price) || 0,
      stock: parseInt(formData.stock, 10) || 0,
      category_id: parseInt(formData.category_id, 10),
      // We .split(',') to turn the string back into an array
      images: formData.images.split(',').map(s => s.trim()).filter(Boolean),
      colors: formData.colors.split(',').map(s => s.trim()).filter(Boolean),
      storages: formData.storages.split(',').map(s => s.trim()).filter(Boolean),
    };
    onSave(finalData); // Send the data back to DashboardPage.jsx
  };

  // Helper components to make the form cleaner
  const InputLabel = ({ children }) => (
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {children}
    </label>
  );

  const TextInput = ({ name, value, onChange, placeholder }) => (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  );
  
  const NumberInput = ({ name, value, onChange }) => (
     <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    />
  );

  // Animation variants for the modal
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    // Backdrop
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
      onClick={onClose} // Close modal if you click outside
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Modal Content */}
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
        variants={modalVariants}
      >
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {product ? (isRTL ? 'تعديل المنتج' : 'Edit Product') : (isRTL ? 'إضافة منتج جديد' : 'Add New Product')}
            </h2>
            <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <X size={24} />
            </button>
          </div>

          {/* Form Body - This matches your Figma dashboard "Add Product" form */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <InputLabel>{isRTL ? 'اسم المنتج' : 'Product Name'}</InputLabel>
              <TextInput name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <InputLabel>{isRTL ? 'SKU' : 'SKU'}</InputLabel>
              <TextInput name="sku" value={formData.sku} onChange={handleChange} />
            </div>
            <div className="md:col-span-2">
              <InputLabel>{isRTL ? 'الوصف' : 'Description'}</InputLabel>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <InputLabel>{isRTL ? 'السعر' : 'Price'}</InputLabel>
              <NumberInput name="price" value={formData.price} onChange={handleChange} />
            </div>
            <div>
              <InputLabel>{isRTL ? 'السعر القديم (اختياري)' : 'Old Price (Optional)'}</InputLabel>
              <NumberInput name="old_price" value={formData.old_price} onChange={handleChange} />
            </div>
             <div>
              <InputLabel>{isRTL ? 'المخزون' : 'Stock'}</InputLabel>
              <NumberInput name="stock" value={formData.stock} onChange={handleChange} />
            </div>
            <div>
              <InputLabel>{isRTL ? 'الفئة' : 'Category'}</InputLabel>
              <select name="category_id" value={formData.category_id} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <option value="1">Mobiles</option>
                <option value="2">Watches</option>
                <option value="3">Accessories</option>
              </select>
            </div>
             <div className="md:col-span-2">
              <InputLabel>{isRTL ? 'الصور (مفصولة بفاصلة)' : 'Images (comma-separated)'}</InputLabel>
              <TextInput name="images" value={formData.images} onChange={handleChange} placeholder="https://url1.com, https://url2.com" />
            </div>
            <div>
              <InputLabel>{isRTL ? 'الألوان (مفصولة بفاصلة)' : 'Colors (comma-separated)'}</InputLabel>
              <TextInput name="colors" value={formData.colors} onChange={handleChange} placeholder="Red, Blue, Green" />
            </div>
            <div>
              <InputLabel>{isRTL ? 'التخزين (مفصول بفاصلة)' : 'Storages (comma-separated)'}</InputLabel>
              <TextInput name="storages" value={formData.storages} onChange={handleChange} placeholder="128GB, 256GB" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="is_new" checked={formData.is_new} onChange={handleChange} className="rounded" />
              <InputLabel>{isRTL ? 'منتج جديد؟' : 'New Product?'}</InputLabel>
            </div>
             <div className="flex items-center gap-2">
              <input type="checkbox" name="is_featured" checked={formData.is_featured} onChange={handleChange} className="rounded" />
              <InputLabel>{isRTL ? 'منتج مميز؟' : 'Featured Product?'}</InputLabel>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end items-center p-4 border-t dark:border-gray-700 gap-3 sticky bottom-0 bg-white dark:bg-gray-800">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
            >
              {isRTL ? 'إلغاء' : 'Cancel'}
            </button>
            <motion.button 
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
            >
              {isRTL ? 'حفظ التغييرات' : 'Save Changes'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ProductFormModal;