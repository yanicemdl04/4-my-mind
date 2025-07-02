import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smile, 
  Frown, 
  Meh, 
  Zap, 
  Coffee, 
  Moon, 
  Sun, 
  Cloud, 
  Heart, 
  TrendingUp,
  Plus,
  Calendar,
  BarChart3
} from 'lucide-react';
import Navbar from '../../components/navbar/navbar';

const MoodTrackerPage = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [intensity, setIntensity] = useState(3);
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const moods = [
    { id: 'joyful', label: 'Joyeux', icon: Smile, color: '#10B981', bgColor: '#ECFDF5' },
    { id: 'calm', label: 'Calme', icon: Sun, color: '#F59E0B', bgColor: '#FFFBEB' },
    { id: 'neutral', label: 'Neutre', icon: Meh, color: '#6B7280', bgColor: '#F9FAFB' },
    { id: 'tired', label: 'Fatigué', icon: Coffee, color: '#8B5CF6', bgColor: '#F5F3FF' },
    { id: 'stressed', label: 'Stressé', icon: Zap, color: '#EF4444', bgColor: '#FEF2F2' },
    { id: 'sad', label: 'Triste', icon: Cloud, color: '#3B82F6', bgColor: '#EFF6FF' },
    { id: 'anxious', label: 'Anxieux', icon: Heart, color: '#EC4899', bgColor: '#FDF2F8' },
    { id: 'peaceful', label: 'Paisible', icon: Moon, color: '#06B6D4', bgColor: '#F0F9FF' }
  ];

  const pastMoods = [
    { id: '1', date: '2024-01-15', mood: 'joyful', intensity: 4, note: 'Belle journée au parc' },
    { id: '2', date: '2024-01-14', mood: 'calm', intensity: 5, note: 'Méditation matinale' },
    { id: '3', date: '2024-01-13', mood: 'neutral', intensity: 3, note: 'Journée normale' },
    { id: '4', date: '2024-01-12', mood: 'tired', intensity: 2, note: 'Peu de sommeil' },
    { id: '5', date: '2024-01-11', mood: 'joyful', intensity: 4, note: 'Sortie entre amis' },
    { id: '6', date: '2024-01-10', mood: 'peaceful', intensity: 5, note: 'Weekend relaxant' },
    { id: '7', date: '2024-01-09', mood: 'stressed', intensity: 3, note: 'Deadline au travail' }
  ];

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId);
  };

  const handleSubmit = async () => {
    if (!selectedMood) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedMood(null);
        setIntensity(3);
        setNote('');
      }, 2000);
    }, 1000);
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
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-600 rounded-2xl flex items-center justify-center shadow-airbnb">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Suivi de l'humeur
          </h1>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Suivez votre bien-être émotionnel au quotidien et identifiez les tendances
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Timeline Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="card-airbnb sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-dark-900">Historique</h3>
                <BarChart3 className="w-5 h-5 text-dark-400" />
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {pastMoods.slice(0, 5).map((entry, index) => {
                  const mood = moods.find(m => m.id === entry.mood);
                  if (!mood) return null;
                  
                  const Icon = mood.icon;
                  
                  return (
                    <motion.div
                      key={entry.id}
                      variants={itemVariants}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: mood.bgColor }}
                      >
                        <Icon className="w-5 h-5" style={{ color: mood.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-dark-900">{mood.label}</p>
                        <p className="text-xs text-dark-500">
                          {new Date(entry.date).toLocaleDateString('fr-FR', { 
                            day: 'numeric', 
                            month: 'short' 
                          })}
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full mx-0.5 ${
                              i < entry.intensity ? 'opacity-100' : 'opacity-30'
                            }`}
                            style={{ backgroundColor: mood.color }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-green-600 animate-bounce-gentle" />
                </div>
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  Humeur enregistrée !
                </h3>
                <p className="text-lg text-dark-600">
                  Merci d'avoir partagé votre état émotionnel
                </p>
              </motion.div>
            ) : (
              <motion.div 
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Add Mood Button */}
                <motion.div 
                  className="flex justify-between items-center"
                  variants={itemVariants}
                >
                  <div>
                    <h2 className="text-2xl font-bold text-dark-900">Aujourd'hui</h2>
                    <p className="text-dark-600 flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date().toLocaleDateString('fr-FR', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Ajouter une humeur</span>
                  </button>
                </motion.div>

                {/* Mood Selection Grid */}
                <motion.div 
                  className="card-airbnb"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-dark-900 mb-6">
                    Comment vous sentez-vous ?
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {moods.map((mood) => {
                      const Icon = mood.icon;
                      const isSelected = selectedMood === mood.id;
                      
                      return (
                        <motion.button
                          key={mood.id}
                          onClick={() => handleMoodSelect(mood.id)}
                          className={`group relative p-6 rounded-2xl transition-all duration-200 hover-lift ${
                            isSelected 
                              ? 'ring-2 ring-accent shadow-card-hover' 
                              : 'hover:shadow-card'
                          }`}
                          style={{ 
                            backgroundColor: isSelected ? mood.color + '20' : mood.bgColor,
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-center">
                            <Icon 
                              className={`w-8 h-8 mx-auto mb-3 transition-all duration-200 ${
                                isSelected ? 'scale-110' : 'group-hover:scale-105'
                              }`}
                              style={{ color: mood.color }}
                            />
                            <span 
                              className="text-sm font-medium"
                              style={{ color: isSelected ? mood.color : '#374151' }}
                            >
                              {mood.label}
                            </span>
                          </div>
                          
                          {isSelected && (
                            <motion.div 
                              className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              <span className="text-xs font-bold text-white">✓</span>
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {selectedMood && (
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Intensity Slider */}
                      <div>
                        <label className="block text-lg font-medium text-dark-900 mb-4">
                          Intensité : {intensity}/5
                        </label>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-dark-500">Faible</span>
                          <input
                            type="range"
                            min="1"
                            max="5"
                            value={intensity}
                            onChange={(e) => setIntensity(Number(e.target.value))}
                            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            style={{
                              background: `linear-gradient(to right, #00B2FF 0%, #00B2FF ${(intensity-1)*25}%, #E5E7EB ${(intensity-1)*25}%, #E5E7EB 100%)`
                            }}
                          />
                          <span className="text-sm text-dark-500">Forte</span>
                        </div>
                      </div>

                      {/* Note */}
                      <div>
                        <label className="block text-lg font-medium text-dark-900 mb-4">
                          Note personnelle (optionnel)
                        </label>
                        <textarea
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          placeholder="Qu'est-ce qui influence votre humeur aujourd'hui ?"
                          className="input-airbnb resize-none"
                          rows={3}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <button
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Enregistrement...</span>
                            </span>
                          ) : (
                            'Enregistrer'
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTrackerPage;