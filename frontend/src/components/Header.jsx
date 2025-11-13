import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ChevronDown, Globe, Sun, Moon, Menu, X, Search, ShoppingCart, User } from 'lucide-react';

// Helper: Icon Component
const Icon = ({ Svg, size = 20, className = "" }) => (
  <Svg size={size} className={`inline-block ${className}`} />
);

const Header = ({ dir, setDir, toggleDarkMode, isDarkMode, setPage }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLang = dir === 'rtl' ? 'AR' : 'EN';
  const isRTL = dir === 'rtl';

  const navLinks = [
    { name: isRTL ? 'الرئيسية' : 'Home', page: 'store' },
    { name: isRTL ? 'المتجر' : 'Store', page: 'store' }, // Both link to store for now
    { name: isRTL ? 'لوحة التحكم' : 'Dashboard', page: 'dashboard' },
    { name: isRTL ? 'عنا' : 'About', page: 'landing' }, // Link to landing
  ];

  return (
    <header className="sticky top-0 z-50 shadow-sm" dir={dir}>
      {/* Top Bar */}
      <div className="bg-surface dark:bg-gray-800 text-xs text-text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <div className="flex gap-4 md:gap-6">
            <span className="flex items-center gap-1.5"><Icon Svg={Phone} size={14} /> 0771 222 2894</span>
            <span className="hidden md:flex items-center gap-1.5"><Icon Svg={Mail} size={14} /> support@boxsmart.com</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="hover:text-primary dark:hover:text-primary-300">
              <Icon Svg={isDarkMode ? Sun : Moon} size={16} />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1.5 hover:text-primary dark:hover:text-primary-300"
              >
                <Icon Svg={Globe} size={16} />
                <span>{currentLang}</span>
                <Icon Svg={ChevronDown} size={16} />
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full end-0 mt-2 w-32 bg-canvas dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border dark:border-gray-700"
                  >
                    <button
                      onClick={() => { setDir('ltr'); setIsLangMenuOpen(false); }}
                      className="block w-full text-start px-4 py-2 text-sm text-text-primary dark:text-gray-300 hover:bg-surface dark:hover:bg-gray-700"
                    >
                      English (LTR)
                    </button>
                    <button
                      onClick={() => { setDir('rtl'); setIsLangMenuOpen(false); }}
                      className="block w-full text-start px-4 py-2 text-sm text-text-primary dark:text-gray-300 hover:bg-surface dark:hover:bg-gray-700"
                    >
                      العربية (RTL)
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-canvas dark:bg-gray-900 border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button onClick={() => setPage('landing')} className="text-2xl font-bold text-primary dark:text-primary-400">
              BOX COMPANY
            </button>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8">
              {navLinks.map(link => (
                <button
                  key={link.page}
                  onClick={() => setPage(link.page)}
                  className="font-medium text-text-secondary hover:text-primary dark:hover:text-primary-300 transition duration-150"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-text-secondary hover:text-primary dark:hover:text-primary-300"><Icon Svg={Search} /></button>
              <button className="text-text-secondary hover:text-primary dark:hover:text-primary-300"><Icon Svg={ShoppingCart} /></button>
              <button 
                onClick={() => setPage('landing')} 
                className="text-text-secondary hover:text-primary dark:hover:text-primary-300"
              >
                <Icon Svg={User} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-primary dark:text-gray-300"
              >
                {isMobileMenuOpen ? <Icon Svg={X} size={24} /> : <Icon Svg={Menu} size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-canvas dark:bg-gray-900 shadow-lg absolute top-[104px] inset-x-0 z-40 border-b dark:border-gray-700"
          >
            <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
              {navLinks.map(link => (
                <button
                  key={link.page}
                  onClick={() => {
                    setPage(link.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isRTL ? 'text-right' : 'text-left'} text-text-primary dark:text-gray-300 hover:bg-surface dark:hover:bg-gray-800`}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex items-center justify-around pt-4 border-t dark:border-gray-700">
                <button className="text-text-secondary hover:text-primary dark:hover:text-primary-300"><Icon Svg={Search} /></button>
                <button className="text-text-secondary hover:text-primary dark:hover:text-primary-300"><Icon Svg={ShoppingCart} /></button>
                <button 
                  onClick={() => {
                    setPage('landing');
                    setIsMobileMenuOpen(false);
                  }} 
                  className="text-text-secondary hover:text-primary dark:hover:text-primary-300"
                >
                  <Icon Svg={User} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;