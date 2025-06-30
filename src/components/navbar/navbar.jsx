import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import image1 from '../../assets/images/quatre.png';
import ThemeToggle from '../ui/ThemeToggle';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 dark:bg-black/60 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img 
              src={image1} 
              alt="4MyMind Logo" 
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
              whileHover={{ rotate: 5 }}
            />
            <motion.h1 
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              4 MY MIND
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-white transition-colors duration-300 hover:text-amber-300 ${
                  isActive(item.path) ? 'text-amber-300' : ''
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-300"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link
              to="/login"
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-yellow-300 to-amber-400 hover:from-yellow-400 hover:to-amber-500 text-amber-800 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Connexion
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-amber-300 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-white hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all duration-300 ${
                      isActive(item.path) ? 'text-amber-300 bg-white/10' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-yellow-300 to-amber-400 text-amber-800 font-semibold rounded-lg text-center transition-all duration-300"
                >
                  Connexion
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;