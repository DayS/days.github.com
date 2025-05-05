import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaHandshake, FaRobot } from 'react-icons/fa';

export function BeappCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FF6D3B] to-[#FF8F3B]">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vous avez un projet numérique ambitieux ?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            En tant que directeur technique et ingénieur sénior chez Beapp, je vous mets en relation avec une équipe d'experts passionnés
          </p>
        </motion.div>

        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/3">
              <motion.img 
                src="/images/beapp-logo.svg" 
                alt="Beapp Logo" 
                className="h-20 md:h-24 mb-6 mx-auto lg:mx-0"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                De l'idée à la réalité
              </motion.h3>
              <motion.p 
                className="text-white/90 text-lg mb-6 text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Agence d'expertise digitale spécialisé dans la conception, le développement et le déploiement de solutions IA, mobiles et web sur-mesure.
              </motion.p>
              
              <div className="text-center lg:text-left">
                <motion.a
                  href="https://beapp.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-[#FF6D3B] font-bold hover:bg-gray-100 inline-flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Découvrir Beapp
                </motion.a>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white/10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <FaLightbulb className="text-white text-3xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2 text-center">Conseil & Stratégie</h4>
                <p className="text-white/80 text-sm text-center">Expertise en conception de produits et stratégie digitale</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <FaRocket className="text-white text-3xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2 text-center">Développement</h4>
                <p className="text-white/80 text-sm text-center">Applications performantes utilisant les dernières technologies</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <FaHandshake className="text-white text-3xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2 text-center">Accompagnement</h4>
                <p className="text-white/80 text-sm text-center">Support continu et évolution de vos solutions digitales</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <FaRobot className="text-white text-3xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2 text-center">Intelligence Artificielle</h4>
                <p className="text-white/80 text-sm text-center">Solutions innovantes utilisant les dernières avancées en IA</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 