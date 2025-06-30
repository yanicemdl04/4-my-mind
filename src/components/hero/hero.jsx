import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './hero.css';

const Hero = ({ heroCount, setHeroCount, heroData }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="hero-design">
      <motion.div 
        className="hero-text"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={heroCount} // Force re-animation on hero change
      >
        <motion.p variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-4">
          {heroData.text1 || "Texte par défaut 1"}
        </motion.p>
        <motion.p variants={itemVariants} className="text-xl md:text-2xl">
          {heroData.text2 || "Texte par défaut 2"}
        </motion.p>
      </motion.div>

      <motion.div 
        className="hero-explore"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <p>Explorez plus</p>
        <ArrowRight className="w-6 h-6" />
      </motion.div>

      <motion.div 
        className="hero-dots-play"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ul className="hero-dots">
          {[0, 1, 2, 3].map((index) => (
            <motion.li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? "hero-dot orange" : "hero-dot"}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Hero;