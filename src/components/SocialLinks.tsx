import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';

export function SocialLinks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  
  return (
    <section className="section bg-white dark:bg-charcoal" id="social">
      <div className="container">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Retrouvez-moi en ligne
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            
            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 w-[200px] h-[180px]"
                variants={item}
                whileHover={{ scale: 1.05 }}
                aria-label={`Visit ${link.name}`}
              >
                <Icon className="text-5xl mb-4 text-violet" />
                <h3 className="font-semibold text-lg mb-2 text-center">{link.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{link.username}</p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 