import { motion } from 'framer-motion';

export function BeappCTA() {
  return (
    <section className="py-16 bg-[#FF6D3B]">
      <div className="container">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 md:mb-0">
            <motion.img 
              src="/images/beapp-logo.svg" 
              alt="Beapp Logo" 
              className="h-16 md:h-20 mb-4"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Découvrez Beapp
            </motion.h3>
            <motion.p 
              className="text-white/90 text-lg max-w-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Une équipe passionnée créant des solutions digitales innovantes
            </motion.p>
          </div>
          
          <motion.a
            href="https://beapp.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-[#FF6D3B] font-bold hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrez Beapp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 