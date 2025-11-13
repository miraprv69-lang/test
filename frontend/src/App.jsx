import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Import our pages and components
// (These paths match your file structure - NOW WITH EXTENSIONS)
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CustomerStorePage from './pages/CustomerStorePage.jsx';
import SaasLandingPage from './pages/SaasLandingPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

// Main App: This is our router and layout manager
export default function App() {
  const [page, setPage] = useState('landing'); // 'landing', 'store', 'dashboard'
  const [dir, setDir] = useState('rtl'); // 'rtl' or 'ltr'
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set document direction (for Arabic/English)
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = dir === 'rtl' ? 'ar' : 'en';
  }, [dir]);

  // Set dark mode class on the <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Simple router to render the correct page
  const renderPage = () => {
    let PageComponent;
    switch (page) {
      case 'landing':
        PageComponent = SaasLandingPage;
        break;
      case 'store':
        PageComponent = CustomerStorePage;
        break;
      case 'dashboard':
        PageComponent = DashboardPage;
        break;
      default:
        PageComponent = SaasLandingPage;
    }
    
    // Pass all necessary props to the active page
    return <PageComponent setPage={setPage} dir={dir} />;
  };

  return (
    <div className={`flex flex-col min-h-screen ${dir} bg-white dark:bg-gray-950`}>
      <Header
        dir={dir}
        setDir={setDir}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        setPage={setPage}
      />
      
      {/* Animated Page Content */}
      <main className="flex-grow">
        {/* AnimatePresence handles the exit/enter animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page} // <-- This tells Framer when the page changes
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer dir={dir} />
    </div>
  );
}