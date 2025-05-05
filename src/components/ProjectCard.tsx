import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, tagline, description, images, technologies, url } = project;
  
  return (
    <motion.div 
      className="flex flex-col xl:flex-row gap-8 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="xl:w-3/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg shadow-lg flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={image} 
                alt={`${title} - screenshot ${index + 1}`} 
                className="w-full h-auto object-contain max-h-[400px]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="xl:w-2/5 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-lg font-medium text-violet mb-3">{tagline}</p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {url && (
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary self-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Voir le projet
          </motion.a>
        )}
      </div>
    </motion.div>
  );
} 