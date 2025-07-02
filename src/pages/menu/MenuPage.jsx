import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  BookOpen, 
  Brain, 
  MessageCircle, 
  TrendingUp, 
  Calendar, 
  Users, 
  Award,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';

const MenuPage = () => {
  const { addNotification } = useNotification();
  const navigate = useNavigate();

  const mainServices = [
    {
      id: 'mood-tracker',
      title: 'Suivi d\'Humeur',
      description: 'Suivez et comprenez vos émotions quotidiennes avec des outils personnalisés',
      icon: Heart,
      gradient: 'from-pink-100 to-rose-200',
      stats: '7 jours de suivi',
      path: '/mood-tracker',
      color: '#EC4899'
    },
    {
      id: 'journal',
      title: 'Journal Personnel',
      description: 'Exprimez vos pensées dans un espace sûr et privé, entièrement confidentiel',
      icon: BookOpen,
      gradient: 'from-blue-100 to-indigo-200',
      stats: '12 entrées ce mois',
      path: '/journal',
      color: '#3B82F6'
    },
    {
      id: 'exercises',
      title: 'Exercices Guidés',
      description: 'Méditation, respiration et relaxation pour cultiver votre bien-être',
      icon: Brain,
      gradient: 'from-purple-100 to-violet-200',
      stats: '15 exercices disponibles',
      path: '/exercises',
      color: '#8B5CF6'
    },
    {
      id: 'contact',
      title: 'Support & Écoute',
      description: 'Notre équipe est là pour vous accompagner dans votre parcours',
      icon: MessageCircle,
      gradient: 'from-green-100 to-emerald-200',
      stats: 'Réponse sous 24h',
      path: '/contact',
      color: '#10B981'
    }
  ];

  const quickStats = [
    { icon: TrendingUp, label: 'Progression', value: '+15%', color: '#00B2FF' },
    { icon: Calendar, label: 'Jours actifs', value: '12', color: '#10B981' },
    { icon: Users, label: 'Communauté', value: '2.3k', color: '#EC4899' },
    { icon: Award, label: 'Objectifs', value: '3/5', color: '#F59E0B' }
  ];

  const recentActivity = [
    { type: 'mood', title: 'Humeur enregistrée', time: 'Il y a 2h', color: '#EC4899' },
    { type: 'journal', title: 'Nouvelle entrée journal', time: 'Hier', color: '#3B82F6' },
    { type: 'exercise', title: 'Méditation terminée', time: 'Il y a 3 jours', color: '#8B5CF6' }
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
    <div className="min-h-screen bg-light">
      <Navbar />
      
      <div className="container-airbnb pt-8 pb-16">
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
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary-600 rounded-3xl flex items-center justify-center shadow-airbnb">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>
          <h1 className="text-5xl font-bold text-dark-900 mb-4">
            Bonjour, <span className="text-gradient">Sarah</span> 👋
          </h1>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Bienvenue dans votre espace personnel de bien-être mental. 
            Comment vous sentez-vous aujourd'hui ?
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
                className="card-airbnb text-center hover-lift"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: stat.color + '20' }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold text-dark-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-600">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Services */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-dark-900">
                Vos outils bien-être
              </h2>
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
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
                    className={`card-airbnb hover-lift cursor-pointer group bg-gradient-to-br ${service.gradient} border-0`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-200"
                      >
                        <Icon className="w-7 h-7" style={{ color: service.color }} />
                      </div>
                      <div className="text-xs font-medium px-3 py-1 bg-white/60 rounded-full text-dark-700">
                        {service.stats}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-dark-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-dark-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <motion.div 
                      className="flex items-center text-dark-800 font-medium group-hover:text-dark-900"
                      whileHover={{ x: 5 }}
                    >
                      <span>Commencer</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <motion.div 
              className="card-airbnb"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-dark-900 mb-6">
                Activité récente
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: activity.color }}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-dark-900">
                        {activity.title}
                      </p>
                      <p className="text-xs text-dark-500">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Daily Quote */}
            <motion.div 
              className="card-airbnb bg-gradient-to-br from-accent/10 to-primary-600/10 border-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">
                  Citation du jour
                </h3>
                <blockquote className="text-dark-700 italic mb-4">
                  "La paix vient de l'intérieur. Ne la cherchez pas à l'extérieur."
                </blockquote>
                <p className="text-sm text-dark-600">
                  — Bouddha
                </p>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="card-airbnb"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-lg font-bold text-dark-900 mb-4">
                Actions rapides
              </h3>
              <div className="space-y-3">
                <button className="w-full btn-secondary text-left flex items-center space-x-3">
                  <Heart className="w-4 h-4 text-accent" />
                  <span>Enregistrer mon humeur</span>
                </button>
                <button className="w-full btn-secondary text-left flex items-center space-x-3">
                  <Brain className="w-4 h-4 text-accent" />
                  <span>Méditation rapide (5 min)</span>
                </button>
                <button className="w-full btn-secondary text-left flex items-center space-x-3">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span>Nouvelle entrée journal</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;