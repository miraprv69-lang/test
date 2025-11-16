import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CustomerStorePage from './pages/CustomerStorePage.jsx';
import SaasLandingPage from './pages/SaaSLandingPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, filter: 'blur(4px)', y: 20 },
  in: { opacity: 1, filter: 'blur(0px)', y: 0 },
  out: { opacity: 0, filter: 'blur(4px)', y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

export default function App() {
  const [page, setPage] = useState('landing');
  const [dir, setDir] = useState('rtl');
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark as per your screenshots

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = dir === 'rtl' ? 'ar' : 'en';
  }, [dir]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const renderPage = () => {
    let PageComponent;
    switch (page) {
      case 'landing': PageComponent = SaasLandingPage; break;
      case 'store': PageComponent = CustomerStorePage; break;
      case 'dashboard': PageComponent = DashboardPage; break;
      default: PageComponent = SaasLandingPage;
    }
    return <PageComponent setPage={setPage} dir={dir} isDarkMode={isDarkMode} />;
  };

  return (
    <div className={`flex flex-col min-h-screen ${dir} bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200`}>
      <Header
        dir={dir}
        setDir={setDir}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        setPage={setPage}
      />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
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