import React, { useState } from 'react';
import { Phone, Mail, Globe, Moon, Sun, Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // <-- THIS IS THE FIX

// Reusable component for animated nav links
const MotionLink = ({ children, onClick }) => (
  <motion.button
    onClick={onClick}
    className="relative font-medium text-gray-700 dark:text-gray-300"
    whileHover="hover"
  >
    {children}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
      variants={{
        initial: { scaleX: 0 },
        hover: { scaleX: 1 }
      }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
);

const Header = ({ dir, setDir, isDarkMode, setIsDarkMode, setPage }) => {
  const isRTL = dir === 'rtl';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleDir = () => setDir(dir === 'ltr' ? 'rtl' : 'ltr');
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: isRTL ? 'الرئيسية' : 'SaaS Home', page: 'landing' },
    { name: isRTL ? 'المتجر' : 'Store', page: 'store' },
    { name: isRTL ? 'لوحة التحكم' : 'Dashboard', page: 'dashboard' }
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm text-gray-800 dark:text-gray-200 sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400">
        <div className="container mx-auto px-4 py-1.5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Phone size={14} />
              <span>0771 222 2894</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Mail size={14} />
              <span>support@boxsmart.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleDir} className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
              <Globe size={14} />
              <span>{isRTL ? 'English' : 'العربية'}</span>
            </button>
            <button onClick={toggleDarkMode} className="hover:text-blue-500 transition-colors">
              {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer" 
          onClick={() => setPage('landing')}
        >
          INBOX COMPANY
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <MotionLink key={link.page} onClick={() => setPage(link.page)}>
              {link.name}
            </MotionLink>
          ))}
          <motion.div whileHover={{ scale: 1.05 }}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors shadow-lg">
              {isRTL ? 'تسجيل الدخول' : 'Sign In'}
            </button>
          </motion.div>
          <div className="flex items-center gap-4 border-s border-gray-200 dark:border-gray-700 ps-4">
            <Search size={20} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 cursor-pointer" />
            <User size={20} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 cursor-pointer" />
            <ShoppingCart size={20} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
        
        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 dark:text-gray-300">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              {navLinks.map(link => (
                <button
                  key={link.page}
                  onClick={() => { setPage(link.page); setIsMobileMenuOpen(false); }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-start dark:text-gray-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;