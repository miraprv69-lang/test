import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const ProductFormModal = ({ isOpen, onClose, onSave, product, dir }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    old_price: '',
    stock: 0,
    images: '', // Storing as comma-separated string for simplicity
    colors: '',
    storages: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isRTL = dir === 'rtl';
  const isEditMode = Boolean(product);

  useEffect(() => {
    if (isEditMode) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price || 0,
        old_price: product.old_price || '',
        stock: product.stock || 0,
        images: (product.images || []).join(', '),
        colors: (product.colors || []).join(', '),
        storages: (product.storages || []).join(', '),
      });
    } else {
      // Reset form for "Add" mode
      setFormData({
        name: '', description: '', price: 0, old_price: '', stock: 0,
        images: '', colors: '', storages: '',
      });
    }
  }, [product, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Convert comma-separated strings to arrays
    const payload = {
      ...formData,
      price: parseFloat(formData.price),
      old_price: formData.old_price ? parseFloat(formData.old_price) : null,
      stock: parseInt(formData.stock, 10),
      images: formData.images.split(',').map(s => s.trim()).filter(Boolean),
      colors: formData.colors.split(',').map(s => s.trim()).filter(Boolean),
      storages: formData.storages.split(',').map(s => s.trim()).filter(Boolean),
    };

    const url = isEditMode ? `/api/products/${product.id}` : '/api/products';
    const method = isEditMode ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Failed to save product');
      onSave(await response.json());
    } catch (err) {
      alert(isRTL ? 'فشل حفظ المنتج' : 'Failed to save product');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Form Input component
  const Input = ({ label, name, ...props }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-text-secondary">{label}</label>
      <input
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-canvas dark:bg-gray-700 border border-border-color dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        {...props}
      />
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      dir={dir}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className="bg-canvas dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()} // Prevent closing on modal click
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold text-text-primary dark:text-white">
            {isEditMode ? (isRTL ? 'تعديل المنتج' : 'Edit Product') : (isRTL ? 'إضافة منتج' : 'Add Product')}
          </h2>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
            <X size={24} />
          </button>
        </div>
        
        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-4">
          <Input label={isRTL ? 'اسم المنتج' : 'Product Name'} name="name" type="text" required />
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-text-secondary">{isRTL ? 'الوصف' : 'Description'}</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full px-3 py-2 bg-canvas dark:bg-gray-700 border border-border-color dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label={isRTL ? 'السعر' : 'Price'} name="price" type="number" step="0.01" required />
            <Input label={isRTL ? 'السعر القديم (اختياري)' : 'Old Price (Optional)'} name="old_price" type="number" step="0.01" />
            <Input label={isRTL ? 'المخزون' : 'Stock'} name="stock" type="number" step="1" required />
          </div>
          <Input label={isRTL ? 'الصور (مفصولة بفاصلة)' : 'Images (comma-separated URLs)'} name="images" type="text" />
          <Input label={isRTL ? 'الألوان (مفصولة بفاصلة)' : 'Colors (comma-separated)'} name="colors" type="text" />
          <Input label={isRTL ? 'أحجام التخزين (مفصولة بفاصلة)' : 'Storages (comma-separated)'} name="storages" type="text" />
          
          {/* Modal Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t dark:border-gray-700 mt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2 bg-surface dark:bg-gray-700 text-text-primary dark:text-white rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 disabled:opacity-50"
            >
              {isRTL ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary-700 disabled:opacity-50"
            >
              {isSubmitting ? (isRTL ? 'جاري الحفظ...' : 'Saving...') : (isRTL ? 'حفظ' : 'Save')}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ProductFormModal;