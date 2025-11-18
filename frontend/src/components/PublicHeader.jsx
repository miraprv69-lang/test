import React from 'react';
import { Link } from 'react-router-dom';

const PublicHeader = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <Link to="/landing" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
             <span className="text-white font-black text-lg">B</span>
          </div>
          <span className="text-2xl font-black text-gray-900 tracking-tighter">INBOX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="#" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">الخدمات</Link>
          <Link to="#" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">المنتجات</Link>
          <Link to="#" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">الأسعار</Link>
          <Link to="#" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">أفرعنا</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
            تسجيل الدخول
          </Link>
          <Link to="/signup" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl shadow-md hover:bg-blue-700 transition-colors">
            ابدأ مجاناً
          </Link>
        </div>

      </div>
    </header>
  );
};

export default PublicHeader;