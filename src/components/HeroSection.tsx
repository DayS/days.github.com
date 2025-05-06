import { motion } from 'framer-motion';
import { IoIosArrowDown, IoIosCode, IoIosBuild, IoMdHammer, IoIosApps, IoMdLaptop, IoIosCog, IoIosOptions, IoIosCreate, IoIosBrowsers } from 'react-icons/io';
import { useEffect, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';

// Blueprint line component
const BlueprintLine = () => {
  // Random position and size
  const isHorizontal = Math.random() > 0.5;
  const length = Math.random() * 200 + 100;
  const thickness = Math.random() * 1.5 + 1;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  
  // Random appearance timing
  const delay = Math.random() * 10;
  const duration = Math.random() * 4 + 3;
  
  return (
    <motion.div
      className="absolute bg-blue-300/40 dark:bg-blue-200/50"
      style={{
        height: isHorizontal ? `${thickness}px` : `${length}px`,
        width: isHorizontal ? `${length}px` : `${thickness}px`,
        left: `${posX}%`,
        top: `${posY}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.8, 0],
        scale: [0.3, 1, 0.3],
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

// Measurement line with text
const MeasurementLine = () => {
  const isHorizontal = Math.random() > 0.5;
  // Constrain positions to avoid edge artifacts
  const length = Math.random() * 150 + 100;
  const posX = Math.random() * 60 + 20; // Keep further from edges
  const posY = Math.random() * 60 + 20; // Keep further from edges
  const measurement = Math.floor(Math.random() * 500) + 100;
  const delay = Math.random() * 15;
  
  // Prevent rendering text that would appear off-screen
  const isSafePosition = posX > 15 && posX < 85 && posY > 15 && posY < 85;
  
  const lineStyle = {
    height: isHorizontal ? '1px' : `${length}px`,
    width: isHorizontal ? `${length}px` : '1px',
    left: `${posX}%`,
    top: `${posY}%`,
  };
  
  const textStyle = {
    [isHorizontal ? 'left' : 'top']: '50%',
    [isHorizontal ? 'top' : 'left']: `${isHorizontal ? -20 : 0}px`,
    transform: isHorizontal ? 'translateX(-50%)' : 'translateY(-50%) rotate(90deg)',
    transformOrigin: 'center left',
    pointerEvents: 'none' as const, // Type assertion to fix TypeScript error
  };
  
  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.9, 0] }}
      transition={{
        repeat: Infinity,
        duration: 6,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      <div className="bg-blue-300/60 dark:bg-blue-200/60 absolute" style={lineStyle}></div>
      {isSafePosition && (
        <div 
          className="absolute font-mono text-blue-400/80 dark:text-blue-200/80 text-xs whitespace-nowrap"
          style={textStyle}
        >
          {measurement}mm
        </div>
      )}
    </motion.div>
  );
};

// Blueprint Circle component
const BlueprintCircle = () => {
  const size = Math.random() * 100 + 50;
  const posX = Math.random() * 90;
  const posY = Math.random() * 90;
  const delay = Math.random() * 10;
  const duration = Math.random() * 5 + 4;
  
  return (
    <motion.div
      className="absolute rounded-full border-2 border-blue-300/30 dark:border-blue-200/40"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        left: `${posX}%`,
        top: `${posY}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.7, 0],
        scale: [0.3, 1, 0.3],
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

// Symbol component (code, tools, etc)
const CreationSymbol = () => {
  // Array of symbols representing different aspects of creation
  const symbols = [
    <IoIosCode />, // Code
    <IoIosBrowsers />, // Code brackets
    <IoIosBuild />, // Building/Woodworking
    <IoMdHammer />, // Building
    <IoIosOptions />, // Tools
    <IoIosApps />, // Mobile
    <IoMdLaptop />, // Computer
    <IoIosCog />, // Engineering
    <IoIosCreate />, // Design/Drafting
  ];
  
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  const size = Math.random() * 24 + 16;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const opacity = Math.random() * 0.25 + 0.15;
  const rotation = Math.random() * 360;
  const delay = Math.random() * 20;
  const duration = Math.random() * 15 + 10;
  
  return (
    <motion.div
      className="absolute text-cyan-200/50 dark:text-cyan-100/60 flex items-center justify-center"
      style={{
        fontSize: `${size}px`,
        left: `${posX}%`,
        top: `${posY}%`,
        opacity: opacity,
        rotate: `${rotation}deg`,
      }}
      animate={{ 
        opacity: [opacity, opacity * 2, opacity],
        rotate: `${rotation + 10}deg`,
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      {symbol}
    </motion.div>
  );
};

// Grid dot component for blueprint effect
const GridDot = () => {
  const posX = Math.floor(Math.random() * 20) * 5;
  const posY = Math.floor(Math.random() * 20) * 5;
  const delay = Math.random() * 5;
  
  return (
    <motion.div
      className="absolute bg-blue-300/40 dark:bg-blue-200/40 rounded-full"
      style={{
        height: "3px",
        width: "3px",
        left: `${posX}%`,
        top: `${posY}%`,
      }}
      animate={{ 
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

// Memoized background component that won't re-render when language changes
const AnimatedBackground = memo(() => {
  const [elements, setElements] = useState<number[]>([]);
  
  useEffect(() => {
    // Create background elements
    setElements(Array.from({ length: 100 }, (_, i) => i));
  }, []);
  
  return (
    <div className="absolute inset-0 z-0">
      <motion.div 
        className="w-full h-full bg-gradient-to-r from-[#1E3A8A] to-[#172554] bg-size-200"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          opacity: [0.9, 1, 0.9]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: 'easeInOut'
        }}
      />
      
      {/* Blueprint grid dots */}
      {elements.slice(0, 100).map((index) => (
        <GridDot key={`dot-${index}`} />
      ))}
      
      {/* Blueprint lines */}
      {elements.slice(0, 25).map((index) => (
        <BlueprintLine key={`line-${index}`} />
      ))}
      
      {/* Blueprint circles */}
      {elements.slice(0, 10).map((index) => (
        <BlueprintCircle key={`circle-${index}`} />
      ))}
      
      {/* Measurement lines */}
      {elements.slice(0, 15).map((index) => (
        <MeasurementLine key={`measurement-${index}`} />
      ))}
      
      {/* Creation symbols */}
      {elements.slice(0, 15).map((index) => (
        <CreationSymbol key={`symbol-${index}`} />
      ))}
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export function HeroSection() {
  const { t } = useTranslation();
  
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
    <section className="min-h-screen relative flex flex-col justify-center items-center px-4 overflow-hidden">
      <AnimatedBackground />
      
      <div className="container relative z-10 max-w-4xl text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.description')}
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
            {t('hero.buttons.projects')}
          </motion.button>
          
          <motion.button
            onClick={sendEmail}
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.buttons.contact')}
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