import React from 'react';
import { Heart, BookOpen, Brain, MessageCircle, TrendingUp, Calendar, Users, Award } from 'lucide-react';

const MenuPage = ({ onPageChange }) => {
  const mainServices = [
    {
      id: 'moodtracker',
      title: 'Mon Humeur du Jour',
      description: 'Suivre et comprendre tes émotions quotidiennes',
      icon: Heart,
      gradient: 'from-yellow-200 to-amber-300',
      stats: '7 jours de suivi'
    },
    {
      id: 'journal',
      title: 'Exprime-toi',
      description: 'Écris tes pensées dans un espace sûr et privé',
      icon: BookOpen,
      gradient: 'from-amber-200 to-yellow-400',
      stats: '12 entrées ce mois'
    },
    {
      id: 'exercises',
      title: 'Respire, Visualise, Relâche',
      description: 'Exercices de méditation et de bien-être mental',
      icon: Brain,
      gradient: 'from-yellow-300 to-amber-400',
      stats: '5 exercices disponibles'
    },
    {
      id: 'contact',
      title: 'Parle-nous',
      description: 'Nous sommes là pour t\'écouter et t\'accompagner',
      icon: MessageCircle,
      gradient: 'from-amber-300 to-yellow-500',
      stats: 'Réponse sous 24h'
    }
  ];

  const quickStats = [
    { icon: TrendingUp, label: 'Progression', value: '+15%', color: '#daa520' },
    { icon: Calendar, label: 'Jours actifs', value: '12', color: '#915a17' },
    { icon: Users, label: 'Communauté', value: '2.3k', color: '#e3b62c' },
    { icon: Award, label: 'Objectifs', value: '3/5', color: '#ffe60d' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10" style={{ color: '#3c1f0c' }} />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
            Mon Espace Bien-être
          </h1>
          <p className="text-xl" style={{ color: '#daa520' }}>
            Bienvenue dans ton sanctuaire de sérénité
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-yellow-200/50 text-center">
                <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: stat.color }} />
                <div className="text-2xl font-bold" style={{ color: '#3c1f0c' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: '#915a17' }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onPageChange(service.id)}
                className={`group relative overflow-hidden bg-gradient-to-br ${service.gradient} rounded-3xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-yellow-200/50`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" style={{ color: '#3c1f0c' }} />
                    </div>
                    <div className="text-sm font-medium px-3 py-1 bg-white/30 rounded-full" style={{ color: '#3c1f0c' }}>
                      {service.stats}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#3c1f0c' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed" style={{ color: '#915a17' }}>
                    {service.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-sm font-medium" style={{ color: '#3c1f0c' }}>
                    <span>Commencer</span>
                    <div className="ml-2 w-5 h-5 rounded-full bg-white/30 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-12 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-6 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              </div>
            );
          })}
        </div>

        {/* Inspirational Quote */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50">
          <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6" style={{ color: '#3c1f0c' }} />
          </div>
          <blockquote className="text-2xl font-medium italic mb-4" style={{ color: '#3c1f0c' }}>
            "Prendre soin de soi n'est pas un luxe, c'est une nécessité."
          </blockquote>
          <p className="text-lg" style={{ color: '#daa520' }}>
            Chaque petit pas compte dans ton parcours vers le bien-être
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;