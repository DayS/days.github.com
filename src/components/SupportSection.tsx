import { motion } from 'framer-motion';
import { supportLink } from '../data/socialLinks';
import { useTranslation } from 'react-i18next';

export function SupportSection() {
  const { t } = useTranslation();
  const Icon = supportLink.icon;
  
  return (
    <section className="section bg-gray-100 dark:bg-gray-900" id="support">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="text-5xl mx-auto mb-4 text-yellow-500" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('support.title')}</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {t('support.description')}
            </p>
            
            <motion.a
              href={supportLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="mr-2" />
              {t('support.items.buyMeACoffee')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 