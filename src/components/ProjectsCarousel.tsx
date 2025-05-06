import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles to fix pagination dots
import './ProjectsCarousel.css';

export function ProjectsCarousel() {
  const { t } = useTranslation();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  
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
      
      <div className="relative px-12 md:px-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: '.swiper-pagination',
          }}
          onInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="swiper-container py-8"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="py-4">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination mt-8"></div>
        </Swiper>
        
        <motion.button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
          whileHover={{ 
            backgroundColor: "#f3f4f6",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous project"
        >
          <FaChevronLeft className="text-violet text-xl" />
        </motion.button>
        
        <motion.button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
          whileHover={{ 
            backgroundColor: "#f3f4f6",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next project"
        >
          <FaChevronRight className="text-violet text-xl" />
        </motion.button>
      </div>
    </div>
  );
} 