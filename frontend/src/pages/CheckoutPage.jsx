import React from 'react';
import { Link } from 'react-router-dom';
import { RiSecurePaymentLine, RiMapPin2Line } from 'react-icons/ri';

const CheckoutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-black text-gray-900">إتمام الطلب</h1>
        <p className="text-gray-500 mt-2">قم بمراجعة طلبك وإكمال عملية الدفع</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Right Side: Form */}
        <div className="flex-grow space-y-8">
          {/* Shipping Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <RiMapPin2Line className="text-xl" />
              </div>
              <h2 className="text-xl font-extrabold text-gray-900">معلومات التوصيل</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">الأسم الكامل</label>
                <input type="text" placeholder="مثال: علي حسن محمد" className="app-input" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">رقم الهاتف</label>
                <input type="tel" placeholder="077..." className="app-input" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">المحافظة</label>
                <select className="app-input bg-white">
                  <option>بغداد</option>
                  <option>البصرة</option>
                  <option>أربيل</option>
                  <option>الموصل</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">العنوان التفصيلي</label>
                <input type="text" placeholder="المنطقة، الشارع، رقم الدار..." className="app-input" />
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-50 rounded-lg text-green-600">
                <RiSecurePaymentLine className="text-xl" />
              </div>
              <h2 className="text-xl font-extrabold text-gray-900">طريقة الدفع</h2>
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-4 p-4 border border-blue-200 bg-blue-50 rounded-xl cursor-pointer">
                <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">الدفع عند الاستلام</span>
              </label>
              <label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                <input type="radio" name="payment" className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">زين كاش / ماستر كارد</span>
              </label>
            </div>
          </div>
        </div>

        {/* Left Side: Order Summary */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
            <h3 className="text-lg font-extrabold text-gray-900 mb-6">ملخص الطلب</h3>
            
            {/* Items */}
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto custom-scrollbar">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                   <img src="https://via.placeholder.com/100" alt="" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 line-clamp-1">ايفون 15 برو ماكس</h4>
                  <p className="text-xs text-gray-500 mt-1">1 x 1,250,000</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>المجموع الفرعي</span>
                <span>1,250,000 د.ع</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>التوصيل</span>
                <span>5,000 د.ع</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 mt-4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-base font-extrabold text-gray-900">المجموع الكلي</span>
                <span className="text-xl font-black text-blue-600">1,255,000</span>
              </div>
              
              <button className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                تأكيد الطلب
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-4">
                بإتمام الطلب، أنت توافق على شروط وأحكام المتجر
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;