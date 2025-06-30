import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-amber-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      <motion.div
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-gray-700" />
        ) : (
          <Sun className="w-4 h-4 text-amber-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;