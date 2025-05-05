import { motion } from 'framer-motion';

export function AboutSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">À propos</h2>
          <p className="text-xl leading-relaxed mb-8">
            Je suis Damien Villeneuve, ingénieur full‑stack basé à Nantes. Je conçois des 
            apps mobiles, sites web, back‑ends, infra réseau et j'explore la GenAI pour 
            accélérer l'innovation produit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div 
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Mobile</h3>
              <p>Développement d'applications mobiles natives et cross-platform</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Web</h3>
              <p>Création de sites et applications web modernes et réactives</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">AI</h3>
              <p>Intégration de services d'intelligence artificielle dans les produits</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 