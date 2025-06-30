import React from 'react';
import { Home, MessageCircle, Heart, BookOpen, Brain, Settings, LogOut } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'menu', icon: Home, label: 'Accueil', color: '#e3b62c' },
    { id: 'moodtracker', icon: Heart, label: 'Humeur', color: '#daa520' },
    { id: 'journal', icon: BookOpen, label: 'Journal', color: '#915a17' },
    { id: 'exercises', icon: Brain, label: 'Exercices', color: '#eacd5a' },
    { id: 'contact', icon: MessageCircle, label: 'Contact', color: '#ffe60d' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-yellow-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4" style={{ color: '#3c1f0c' }} />
              </div>
              <span className="text-xl font-bold" style={{ color: '#3c1f0c' }}>
                Bien-être
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-yellow-100 shadow-sm' 
                        : 'hover:bg-yellow-50'
                    }`}
                    style={{ 
                      color: isActive ? '#3c1f0c' : '#915a17'
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
              <Settings className="w-5 h-5" style={{ color: '#915a17' }} />
            </button>
            <button className="p-2 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
              <LogOut className="w-5 h-5" style={{ color: '#915a17' }} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;