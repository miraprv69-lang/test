import React from 'react';
import { RiCloseLine, RiUserSmileLine, RiShoppingBag3Line, RiWallet3Line } from 'react-icons/ri';

const CustomerDetailsModal = ({ isOpen, onClose, customer }) => {
  if (!isOpen || !customer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir="rtl">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        
        <div className="bg-blue-600 px-6 py-6 text-white flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <RiUserSmileLine className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-black">{customer.name}</h3>
              <p className="text-blue-100 text-sm opacity-90 mt-1" dir="ltr">{customer.phone}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white">
            <RiCloseLine className="text-2xl" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Stats Row */}
          <div className="flex gap-4">
            <div className="flex-1 p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
              <RiWallet3Line className="mx-auto text-blue-500 mb-2 text-xl" />
              <p className="text-xs text-gray-500 font-bold">الاجمالي</p>
              <p className="text-lg font-black text-gray-900">{customer.total}</p>
            </div>
            <div className="flex-1 p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
              <RiShoppingBag3Line className="mx-auto text-purple-500 mb-2 text-xl" />
              <p className="text-xs text-gray-500 font-bold">الطلبات</p>
              <p className="text-lg font-black text-gray-900">{customer.orders}</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-50">
              <span className="text-gray-500 text-sm">تاريخ الانضمام</span>
              <span className="font-bold text-gray-900 text-sm">{customer.joined}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-50">
              <span className="text-gray-500 text-sm">اخر طلب</span>
              <span className="font-bold text-gray-900 text-sm">{customer.lastOrder}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-50">
              <span className="text-gray-500 text-sm">طلبات نشطة</span>
              <span className="font-bold text-green-600 text-sm">{customer.activeOrders}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 grid grid-cols-2 gap-3">
           <button className="py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
            مراسلة
          </button>
          <button onClick={onClose} className="py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-colors">
            اغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsModal;