import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  
  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };
  
  return (
    <div className="fixed top-4 right-20 z-50 flex gap-2">
      <motion.button
        className={`px-2 py-1 rounded ${language.startsWith('en') ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
        onClick={() => changeLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
      
      <motion.button
        className={`px-2 py-1 rounded ${language.startsWith('fr') ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
        onClick={() => changeLanguage('fr')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        FR
      </motion.button>
    </div>
  );
} 