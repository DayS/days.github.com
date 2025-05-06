import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';

export function ProjectsCarousel() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith('fr') ? 'fr' : 'en';
  
  return (
    <div className="relative" id="projects">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('projects.title')}
      </motion.h2>
      
      <div className="space-y-16 md:space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={project.id}
              className="py-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {/* Images Section */}
                <div className="w-full md:w-3/5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.images.map((image, imgIndex) => (
                      <motion.div 
                        key={imgIndex}
                        className="overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img 
                          src={image} 
                          alt={`${project.title[currentLang]} - screenshot ${imgIndex + 1}`} 
                          className="w-full h-auto object-contain max-h-[400px]"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-1">{project.title[currentLang]}</h3>
                  <p className="text-lg font-medium text-violet mb-3">{project.tagline[currentLang]}</p>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description[currentLang]}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary self-start"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('projects.viewProject')}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 