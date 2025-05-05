import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useDarkMode } from '../hooks/useDarkMode';

export function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();
  
  return (
    <motion.button
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-300 text-xl" />
      ) : (
        <FaMoon className="text-violet text-xl" />
      )}
    </motion.button>
  );
} 