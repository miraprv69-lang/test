import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookFill, RiTwitterFill, RiInstagramLine, RiLinkedinFill } from 'react-icons/ri';

const PublicFooter = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-black mb-4 tracking-tight">BOX COMPANY</h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              شريكك الاستراتيجي في النجاح الرقمي. نقدم حلولاً تقنية متكاملة لبناء تجارتك الإلكترونية بأحدث التقنيات وأفضل أداء.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="#" className="hover:text-white transition-colors">عن الشركة</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">الخدمات</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">الأسعار</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
             <ul className="space-y-3 text-gray-400">
               <li dir="ltr">support@boxcompany.com</li>
               <li dir="ltr">+964 770 123 4567</li>
               <li>بغداد، العراق - المنصور</li>
             </ul>
             <div className="flex gap-4 mt-6">
               <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"><RiFacebookFill /></a>
               <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors"><RiTwitterFill /></a>
               <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors"><RiInstagramLine /></a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Box Company. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;