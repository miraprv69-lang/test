import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

const AddCouponModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir="rtl">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-100">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-gray-900">أضافة كوبون خصم</h3>
          <button onClick={onClose}><RiCloseLine className="text-2xl text-gray-400" /></button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">اسم الكود</label>
            <input type="text" placeholder="مثلا: خصم العيد" className="app-input" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">رمز الخصم</label>
            <input type="text" placeholder="NEWUSER20" className="app-input uppercase font-mono tracking-wider" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">ينتهي في</label>
              <input type="date" className="app-input" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">الحد الاقصى</label>
              <input type="number" placeholder="100" className="app-input" />
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 rounded-b-2xl">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-200 rounded-xl">الغاء</button>
          <button className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md">حفظ</button>
        </div>
      </div>
    </div>
  );
};

export default AddCouponModal;