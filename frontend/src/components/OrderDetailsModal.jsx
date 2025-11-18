import React from 'react';
import { RiCloseLine, RiPrinterLine, RiPhoneLine, RiMapPinLine } from 'react-icons/ri';

const OrderDetailsModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir="rtl">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <h3 className="text-xl font-extrabold text-gray-900">تفاصيل الطلب</h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors">
            <RiCloseLine className="text-xl" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* Customer Info Card */}
          <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="p-3 bg-white rounded-full shadow-sm text-blue-600">
              <RiMapPinLine className="text-xl" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">{order.name}</h4>
              <p className="text-sm text-gray-600 mt-1 font-medium">بغداد - شارع فلسطين قرب المحطة</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-blue-700 font-bold">
                <RiPhoneLine />
                <span dir="ltr">0776 100 293</span>
              </div>
            </div>
          </div>

          {/* Order Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl text-center">
              <p className="text-xs text-gray-500 font-bold uppercase">المجموع الكلي</p>
              <p className="text-xl font-black text-blue-600 mt-1">{order.total} د.ع</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl text-center">
              <p className="text-xs text-gray-500 font-bold uppercase">حالة الطلب</p>
              <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-lg">
                {order.status}
              </span>
            </div>
          </div>

          {/* Product List (Mockup) */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-gray-900">المنتجات</h5>
            <div className="flex justify-between items-center p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 font-bold rounded-lg text-xs">x4</span>
                <span className="text-sm font-medium text-gray-700">جهاز ايفون 15 برو</span>
              </div>
              <span className="text-sm font-bold text-gray-900">40,000 د.ع</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            <RiPrinterLine />
            طباعة وصل
          </button>
          <button className="flex-1 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">
            أتصال
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;