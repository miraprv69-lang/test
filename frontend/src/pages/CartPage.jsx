import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine, RiArrowRightLine } from 'react-icons/ri';

const hasItems = true; // Mock state

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-black text-gray-900 mb-12">سلة التسوق</h1>
      
      {hasItems ? (
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Cart Items List */}
          <div className="flex-grow space-y-6">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-32 h-32 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                  <img src="https://via.placeholder.com/150" alt="Product" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-extrabold text-gray-900">ايفون 13 برو ماكس</h3>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <RiDeleteBinLine className="text-xl" />
                      </button>
                    </div>
                    <p className="text-gray-500 font-medium mt-1">اللون: أزرق سييرا | السعة: 256GB</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                     <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-1">
                        <button className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-white rounded-lg shadow-sm transition-all">-</button>
                        <span className="w-4 text-center font-bold text-gray-900">1</span>
                        <button className="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-white rounded-lg shadow-sm transition-all">+</button>
                     </div>
                     <p className="text-2xl font-black text-primary">1,250,000</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24">
              <h2 className="text-xl font-black text-gray-900 mb-6">ملخص الطلب</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>المجموع الفرعي</span>
                  <span className="text-gray-900 font-bold">2,500,000 د.ع</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>التوصيل</span>
                  <span className="text-green-600 font-bold">مجاني</span>
                </div>
                <div className="h-px bg-gray-100 my-4"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-extrabold text-gray-900">الإجمالي</span>
                  <span className="text-2xl font-black text-primary">2,500,000</span>
                </div>
              </div>

              <Link
                to="/store/checkout"
                className="w-full py-4 bg-primary text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
              >
                إتمام الشراء
                <RiArrowRightLine className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              
              <div className="mt-6 flex justify-center gap-4 text-gray-300 text-2xl">
                 {/* Payment Icons Placeholders */}
                 <div className="w-10 h-6 bg-gray-100 rounded"></div>
                 <div className="w-10 h-6 bg-gray-100 rounded"></div>
                 <div className="w-10 h-6 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="text-center py-32">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
            <RiShoppingBagLine className="text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">سلتك فارغة</h2>
          <p className="text-gray-500 mb-8">يبدو أنك لم تضف أي منتجات بعد</p>
          <Link to="/store" className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
            تصفح المنتجات
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;