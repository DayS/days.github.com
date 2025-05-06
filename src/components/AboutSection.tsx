import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function AboutSection() {
  const { t } = useTranslation();
  
  return (
    <section className="section bg-gray-100 dark:bg-gray-900" id="about">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('about.title')}</h2>
          <p className="text-xl leading-relaxed mb-8">
            {t('about.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div 
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{t('about.cards.mobile.title')}</h3>
              <p>{t('about.cards.mobile.description')}</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{t('about.cards.web.title')}</h3>
              <p>{t('about.cards.web.description')}</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{t('about.cards.ai.title')}</h3>
              <p>{t('about.cards.ai.description')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 