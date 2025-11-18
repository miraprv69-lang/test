import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

const AddCategoryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir="rtl">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-gray-900">أنشاء فئة جديدة</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <RiCloseLine className="text-2xl" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-500 mb-4">قم بادخال المعلومات ادناه لاضافة فئة جديدة</p>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">الأسم</label>
            <input type="text" placeholder="اسم الفئة" className="app-input" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">الوصف</label>
            <textarea rows="3" placeholder="وصف قصير..." className="app-input resize-none"></textarea>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-200 rounded-xl transition-colors">
            الغاء
          </button>
          <button className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors">
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;