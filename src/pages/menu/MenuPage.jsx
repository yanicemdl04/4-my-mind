import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Brain, MessageCircle, TrendingUp, Calendar, Users, Award } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const { addNotification } = useNotification();
  const navigate = useNavigate();

  const mainServices = [
    {
      id: 'mood-tracker',
      title: 'Mon Humeur du Jour',
      description: 'Suivre et comprendre tes émotions quotidiennes',
      icon: Heart,
      gradient: 'from-yellow-200 to-amber-300',
      stats: '7 jours de suivi',
      path: '/mood-tracker'
    },
    {
      id: 'journal',
      title: 'Exprime-toi',
      description: 'Écris tes pensées dans un espace sûr et privé',
      icon: BookOpen,
      gradient: 'from-amber-200 to-yellow-400',
      stats: '12 entrées ce mois',
      path: '/journal'
    },
    {
      id: 'exercises',
      title: 'Respire, Visualise, Relâche',
      description: 'Exercices de méditation et de bien-être mental',
      icon: Brain,
      gradient: 'from-yellow-300 to-amber-400',
      stats: '5 exercices disponibles',
      path: '/exercises'
    },
    {
      id: 'contact',
      title: 'Parle-nous',
      description: 'Nous sommes là pour t\'écouter et t\'accompagner',
      icon: MessageCircle,
      gradient: 'from-amber-300 to-yellow-500',
      stats: 'Réponse sous 24h',
      path: '/contact'
    }
  ];

  const quickStats = [
    { icon: TrendingUp, label: 'Progression', value: '+15%', color: '#daa520' },
    { icon: Calendar, label: 'Jours actifs', value: '12', color: '#915a17' },
    { icon: Users, label: 'Communauté', value: '2.3k', color: '#e3b62c' },
    { icon: Award, label: 'Objectifs', value: '3/5', color: '#ffe60d' }
  ];

  const handleServiceClick = (service) => {
    addNotification({
      type: 'info',
      title: 'Navigation',
      message: `Redirection vers ${service.title}...`
    });
    navigate(service.path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-amber-800" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-800 dark:text-amber-200">
            Mon Espace Bien-être
          </h1>
          <p className="text-xl text-amber-600 dark:text-amber-400">
            Bienvenue dans ton sanctuaire de sérénité
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 border border-yellow-200/50 dark:border-gray-700/50 text-center hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: stat.color }} />
                <div className="text-2xl font-bold text-amber-800 dark:text-amber-200">
                  {stat.value}
                </div>
                <div className="text-sm text-amber-600 dark:text-amber-400">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className={`group relative overflow-hidden bg-gradient-to-br ${service.gradient} dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 cursor-pointer border border-yellow-200/50 dark:border-gray-600/50`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-amber-800 dark:text-amber-200" />
                    </motion.div>
                    <div className="text-sm font-medium px-3 py-1 bg-white/30 dark:bg-gray-800/30 rounded-full text-amber-800 dark:text-amber-200">
                      {service.stats}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-amber-800 dark:text-amber-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed text-amber-700 dark:text-amber-300 mb-6">
                    {service.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center text-sm font-medium text-amber-800 dark:text-amber-200"
                    whileHover={{ x: 5 }}
                  >
                    <span>Commencer</span>
                    <div className="ml-2 w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
                      →
                    </div>
                  </motion.div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-12 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-6 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div 
          className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50 dark:border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div 
            className="w-12 h-12 bg-yellow-200 dark:bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4"
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <Heart className="w-6 h-6 text-amber-800 dark:text-amber-200" />
          </motion.div>
          <blockquote className="text-2xl font-medium italic mb-4 text-amber-800 dark:text-amber-200">
            "Prendre soin de soi n'est pas un luxe, c'est une nécessité."
          </blockquote>
          <p className="text-lg text-amber-600 dark:text-amber-400">
            Chaque petit pas compte dans ton parcours vers le bien-être
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;