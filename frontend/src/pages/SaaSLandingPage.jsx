import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Layers, Globe, Zap } from 'lucide-react';

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
};

const SaaSLandingPage = ({ setPage }) => {
  const features = [
    { icon: BarChart, title: 'أنظمة داخلية', desc: 'كافة نظم الأتمتة والرقمنة لشركتك.' },
    { icon: Globe, title: 'المواقع الالكترونية', desc: 'إنشاء مواقع الكترونية بدومين مخصص.' },
    { icon: Zap, title: 'إنشاء التطبيقات', desc: 'من الفكرة إلى النشر على الستور.' },
  ];
  
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-32 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          نظام ألفا - لإدارة الشركات
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          منذ 1999 نظام يعمل مع مئات الشركات حول العالم. حلول متكاملة لإدارة متجرك، ومبيعاتك، وعملائك.
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button 
            onClick={() => setPage('store')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            تجربة المتجر
          </motion.button>
          <motion.button 
            onClick={() => setPage('dashboard')}
            className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            لوحة التحكم
          </motion.button>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            خدماتنا
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center"
                variants={featureVariants}
                custom={i}
              >
                <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full mb-4">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SaaSLandingPage;