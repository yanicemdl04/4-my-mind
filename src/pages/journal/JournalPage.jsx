import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Plus, 
  Search, 
  Filter, 
  Calendar,
  Edit3,
  Trash2,
  Eye,
  Heart,
  Smile,
  Meh,
  Frown
} from 'lucide-react';
import Navbar from '../../components/navbar/navbar';

const JournalPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [newEntry, setNewEntry] = useState({ title: '', content: '', mood: 'neutral' });

  const journalEntries = [
    {
      id: 1,
      title: 'Une journée pleine de gratitude',
      content: 'Aujourd\'hui j\'ai réalisé combien les petites choses comptent. Le sourire d\'un inconnu, le café du matin, la lumière dorée du coucher de soleil...',
      date: '2024-01-15',
      mood: 'happy',
      readTime: '3 min'
    },
    {
      id: 2,
      title: 'Réflexions du soir',
      content: 'Les défis d\'aujourd\'hui m\'ont appris quelque chose d\'important sur moi-même. Parfois, il faut accepter que tout ne se passe pas comme prévu...',
      date: '2024-01-14',
      mood: 'thoughtful',
      readTime: '5 min'
    },
    {
      id: 3,
      title: 'Moment de paix',
      content: 'La méditation de ce matin m\'a apporté une sérénité profonde. J\'ai senti mon esprit se calmer et mes pensées s\'apaiser...',
      date: '2024-01-13',
      mood: 'peaceful',
      readTime: '2 min'
    },
    {
      id: 4,
      title: 'Défi personnel',
      content: 'Aujourd\'hui j\'ai fait quelque chose qui me faisait peur. Parler en public n\'est jamais facile pour moi, mais j\'ai réussi...',
      date: '2024-01-12',
      mood: 'proud',
      readTime: '4 min'
    },
    {
      id: 5,
      title: 'Journée difficile',
      content: 'Parfois les journées sont plus dures que d\'autres. Aujourd\'hui était l\'une d\'entre elles, mais j\'ai appris à être bienveillant envers moi-même...',
      date: '2024-01-11',
      mood: 'sad',
      readTime: '6 min'
    },
    {
      id: 6,
      title: 'Nouvelle découverte',
      content: 'J\'ai découvert un nouveau livre qui m\'a complètement captivé. Il parle de résilience et de croissance personnelle...',
      date: '2024-01-10',
      mood: 'excited',
      readTime: '3 min'
    }
  ];

  const moodIcons = {
    happy: { icon: Smile, color: '#10B981', bg: '#ECFDF5' },
    sad: { icon: Frown, color: '#EF4444', bg: '#FEF2F2' },
    neutral: { icon: Meh, color: '#6B7280', bg: '#F9FAFB' },
    thoughtful: { icon: BookOpen, color: '#8B5CF6', bg: '#F5F3FF' },
    peaceful: { icon: Heart, color: '#06B6D4', bg: '#F0F9FF' },
    proud: { icon: Smile, color: '#F59E0B', bg: '#FFFBEB' },
    excited: { icon: Smile, color: '#EC4899', bg: '#FDF2F8' }
  };

  const filters = [
    { id: 'all', label: 'Toutes les entrées' },
    { id: 'recent', label: 'Récentes' },
    { id: 'happy', label: 'Moments joyeux' },
    { id: 'thoughtful', label: 'Réflexions' }
  ];

  const filteredEntries = journalEntries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'recent' && new Date(entry.date) > new Date('2024-01-13')) ||
                         entry.mood === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleNewEntry = () => {
    setShowNewEntry(true);
  };

  const handleSaveEntry = () => {
    // Logique de sauvegarde
    setShowNewEntry(false);
    setNewEntry({ title: '', content: '', mood: 'neutral' });
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
          className="flex flex-col md:flex-row md:items-center justify-between mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-600 rounded-2xl flex items-center justify-center shadow-card">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-dark-900">
                Mon Journal
              </h1>
              <p className="text-dark-600">
                Votre espace d'expression personnelle
              </p>
            </div>
          </div>
          
          <button
            onClick={handleNewEntry}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Nouvelle entrée</span>
          </button>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="card-airbnb mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Rechercher dans vos entrées..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-airbnb pl-10"
              />
            </div>
            
            {/* Filters */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-dark-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="input-airbnb min-w-0"
              >
                {filters.map(filter => (
                  <option key={filter.id} value={filter.id}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* New Entry Modal */}
        {showNewEntry && (
          <motion.div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-6">Nouvelle entrée</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Titre
                  </label>
                  <input
                    type="text"
                    value={newEntry.title}
                    onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                    className="input-airbnb"
                    placeholder="Donnez un titre à votre entrée..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Contenu
                  </label>
                  <textarea
                    value={newEntry.content}
                    onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                    className="input-airbnb resize-none"
                    rows={8}
                    placeholder="Exprimez vos pensées..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-dark-900 mb-2">
                    Humeur
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {Object.entries(moodIcons).map(([mood, config]) => {
                      const Icon = config.icon;
                      return (
                        <button
                          key={mood}
                          onClick={() => setNewEntry({...newEntry, mood})}
                          className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                            newEntry.mood === mood 
                              ? 'border-accent bg-primary-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Icon className="w-6 h-6 mx-auto" style={{ color: config.color }} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <button
                  onClick={() => setShowNewEntry(false)}
                  className="flex-1 btn-secondary"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSaveEntry}
                  className="flex-1 btn-primary"
                >
                  Sauvegarder
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Journal Entries Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredEntries.map((entry) => {
            const moodConfig = moodIcons[entry.mood];
            const MoodIcon = moodConfig.icon;
            
            return (
              <motion.div
                key={entry.id}
                variants={itemVariants}
                className="card-airbnb hover-lift group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: moodConfig.bg }}
                  >
                    <MoodIcon className="w-5 h-5" style={{ color: moodConfig.color }} />
                  </div>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <Eye className="w-4 h-4 text-dark-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <Edit3 className="w-4 h-4 text-dark-500" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-lg transition-colors duration-200">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-dark-900 mb-3 line-clamp-2">
                  {entry.title}
                </h3>
                
                <p className="text-dark-600 mb-4 line-clamp-3">
                  {entry.content}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-dark-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(entry.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <span>{entry.readTime}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-16 h-16 text-dark-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Aucune entrée trouvée
            </h3>
            <p className="text-dark-600 mb-8">
              {searchTerm || selectedFilter !== 'all' 
                ? 'Essayez de modifier vos critères de recherche'
                : 'Commencez votre journal en créant votre première entrée'
              }
            </p>
            <button
              onClick={handleNewEntry}
              className="btn-primary"
            >
              Créer ma première entrée
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default JournalPage;