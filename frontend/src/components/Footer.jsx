import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Icon = ({ Svg }) => (
  <motion.a 
    href="#" 
    className="text-gray-400 hover:text-white"
    whileHover={{ scale: 1.2, y: -2 }}
  >
    <Svg size={20} />
  </motion.a>
);

const Footer = ({ dir }) => {
  const isRTL = dir === 'rtl';

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div className="col-span-1 md:col-span-2">
            <h5 className="text-xl font-bold text-white mb-4">{isRTL ? 'شركة INBOX' : 'INBOX COMPANY'}</h5>
            <p className="text-sm leading-relaxed text-gray-400">
              {isRTL 
                ? 'متجرك الأول في العراق لتقديم خدمات الويب والسحابة والاستضافات الإلكترونية.' 
                : 'Your first store in Iraq to provide web, cloud, and hosting services.'}
            </p>
             <div className="flex space-x-4 rtl:space-x-reverse mt-6">
              <Icon Svg={Facebook} />
              <Icon Svg={Twitter} />
              <Icon Svg={Instagram} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">{isRTL ? 'روابط سريعة' : 'Quick Links'}</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{isRTL ? 'اتصل بالدعم' : 'Contact Support'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{isRTL ? 'المميزات' : 'Features'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{isRTL ? 'كن شريكاً' : 'Become a Partner'}</a></li>
            </ul>
          </div>

          {/* Column 3: Site Pages */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">{isRTL ? 'وجهات الموقع' : 'Site Pages'}</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{isRTL ? 'أفرعنا' : 'Our Branches'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{isRTL ? 'تواصل معنا' : 'Contact Us'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{isRTL ? 'سياسة الاستخدام' : 'Usage Policy'}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            {isRTL 
              ? '© 2025 شركة داخل الصندوق. جميع الحقوق محفوظة.' 
              : '© 2025 Inbox Company. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;