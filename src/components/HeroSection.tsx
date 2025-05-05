import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const sendEmail = () => {
    window.location.href = 'mailto:contact@damienvilleneuve.com';
  };
  
  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center px-4">
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="w-full h-full bg-gradient-to-r from-violet-dark to-cyan-dark bg-size-200"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            opacity: [0.7, 0.8, 0.7]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: 'easeInOut'
          }}
        />
      </div>
      
      <div className="container relative z-10 max-w-4xl text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Full‑stack product engineer building mobile apps, websites & AI‑powered services.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Je conçois des apps mobiles, sites web, back‑ends, infra réseau et j'explore la GenAI pour accélérer l'innovation produit.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets
          </motion.button>
          
          <motion.button
            onClick={sendEmail}
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <IoIosArrowDown className="text-white text-3xl" />
      </motion.div>
    </section>
  );
} 