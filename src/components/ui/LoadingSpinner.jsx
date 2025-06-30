import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <Heart className="w-8 h-8 text-amber-800" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-2"
        >
          4 My Mind
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-amber-600 dark:text-amber-400"
        >
          Chargement de votre espace bien-être...
        </motion.p>
        
        <motion.div
          className="flex justify-center mt-4 space-x-1"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-2 h-2 bg-amber-400 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;