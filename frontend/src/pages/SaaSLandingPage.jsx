import React from 'react';
import { motion } from 'framer-motion';

// This is the beautiful login/router page from your Figma screenshot
// `Screenshot 2025-11-13 175529.jpg`

const SaaSLandingPage = ({ setPage, dir }) => {
  const isRTL = dir === 'rtl';

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-144px)]" dir={dir}>
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full">
        {/* Placeholder for the abstract blue/orange 3D art */}
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-white text-4xl font-bold p-8 text-center"
          >
            {isRTL ? 'نظام بوكس المتكامل' : 'The Complete Box System'}
          </motion.div>
        </div>
      </div>
      
      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 bg-canvas dark:bg-gray-900 flex items-center justify-center p-8 md:p-16">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Logo Placeholder */}
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4-8-4V7l8-4 8 4z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-text-primary dark:text-white mb-2">
            {isRTL ? 'أهلاً و سهلاً!' : 'Welcome!'}
          </h1>
          <p className="text-lg text-text-secondary text-center mb-8">
            {isRTL ? 'أختر وجهتك لتسجيل الدخول' : 'Choose your destination to log in'}
          </p>
          
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-surface dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 shadow-sm cursor-pointer"
              onClick={() => setPage('dashboard')}
            >
              <h2 className="text-xl font-semibold text-text-primary dark:text-white mb-1">
                {isRTL ? 'إدارة متجرك الالكتروني' : 'Manage Your E-Store'}
              </h2>
              <p className="text-text-secondary">
                {isRTL ? 'تسجيل الدخول لادارة متجرك' : 'Log in to your store dashboard'}
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-surface dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700 shadow-sm cursor-pointer"
              onClick={() => alert('Server control panel not implemented yet.')}
            >
              <h2 className="text-xl font-semibold text-text-primary dark:text-white mb-1">
                {isRTL ? 'لوحة تحكم السيرفر' : 'Server Control Panel'}
              </h2>
              <p className="text-text-secondary">
                {isRTL ? 'تسجيل الدخول للوحة التحكم الخاصة' : 'Log in to your hosting control panel'}
              </p>
            </motion.div>
          </div>
          
          <p className="text-center text-text-secondary text-sm mt-8">
            {isRTL ? 'غير متأكد؟ ' : "Not sure? "}
            <a href="#" className="text-primary hover:underline">{isRTL ? 'تواصل مع الدعم' : 'Contact Support'}</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SaaSLandingPage;