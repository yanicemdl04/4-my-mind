import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, User, Bell } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/exercises', label: 'Exercices' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar-airbnb"
    >
      <div className="container-airbnb">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-accent to-primary-600 rounded-xl flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5 text-white" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="hidden sm:block"
            >
              <h1 className="text-xl font-bold text-dark-900">4MyMind</h1>
              <p className="text-xs text-dark-500 -mt-1">Bien-être mental</p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive(item.path) 
                    ? 'text-accent bg-primary-50' 
                    : 'text-dark-600 hover:text-dark-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            
            <button className="p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200 relative">
              <Bell className="w-5 h-5 text-dark-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></span>
            </button>
            
            <Link
              to="/login"
              className="hidden md:flex items-center space-x-2 btn-primary"
            >
              <User className="w-4 h-4" />
              <span>Connexion</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200"
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
              className="md:hidden border-t border-gray-200 py-4"
            >
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      isActive(item.path) 
                        ? 'text-accent bg-primary-50' 
                        : 'text-dark-600 hover:text-dark-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block mx-4 mt-4 btn-primary text-center"
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