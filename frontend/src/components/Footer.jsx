import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

// Helper: Icon Component
const Icon = ({ Svg, size = 20, className = "" }) => (
  <Svg size={size} className={`inline-block ${className}`} />
);

const Footer = ({ dir }) => {
  const isRTL = dir === 'rtl';
  return (
    <footer className="bg-text-primary text-gray-300" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">BOX COMPANY</h3>
            <p className="text-gray-400">
              {isRTL ? 'الحل المتكامل لمتجرك الإلكتروني في العراق.' : 'Your all-in-one e-commerce solution in Iraq.'}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{isRTL ? 'روابط سريعة' : 'Quick Links'}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">{isRTL ? 'الرئيسية' : 'Home'}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{isRTL ? 'المتجر' : 'Store'}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{isRTL ? 'لوحة التحكم' : 'Dashboard'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{isRTL ? 'تابعنا' : 'Follow Us'}</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white"><Icon Svg={Facebook} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Icon Svg={Twitter} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Icon Svg={Instagram} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {isRTL ? 'شركة بوكس. جميع الحقوق محفوظة.' : 'Box Company. All rights reserved.'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;