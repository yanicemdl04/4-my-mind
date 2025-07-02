import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Heart, 
  Wind, 
  Eye, 
  Clock,
  CheckCircle,
  Filter,
  Search,
  Star
} from 'lucide-react';
import Navbar from '../../components/navbar/navbar';

const ExercisesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'Tous les exercices' },
    { id: 'breathing', label: 'Respiration' },
    { id: 'meditation', label: 'Méditation' },
    { id: 'visualization', label: 'Visualisation' },
    { id: 'relaxation', label: 'Relaxation' }
  ];

  const exercises = [
    {
      id: 'breathing-4-7-8',
      title: 'Respiration 4-7-8',
      description: 'Technique de respiration apaisante pour réduire le stress et favoriser la détente',
      duration: 300,
      category: 'breathing',
      difficulty: 'Débutant',
      rating: 4.8,
      icon: Wind,
      color: '#10B981',
      bgColor: '#ECFDF5',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      id: 'body-scan',
      title: 'Scan Corporel',
      description: 'Méditation guidée pour reconnecter avec votre corps et relâcher les tensions',
      duration: 600,
      category: 'meditation',
      difficulty: 'Intermédiaire',
      rating: 4.9,
      icon: Heart,
      color: '#EF4444',
      bgColor: '#FEF2F2',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      id: 'peaceful-place',
      title: 'Lieu de Paix',
      description: 'Visualisation d\'un endroit sûr et apaisant pour retrouver la sérénité',
      duration: 480,
      category: 'visualization',
      difficulty: 'Débutant',
      rating: 4.7,
      icon: Eye,
      color: '#8B5CF6',
      bgColor: '#F5F3FF',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      id: 'mindful-breathing',
      title: 'Respiration Consciente',
      description: 'Exercice simple de pleine conscience centré sur la respiration',
      duration: 420,
      category: 'breathing',
      difficulty: 'Débutant',
      rating: 4.6,
      icon: Wind,
      color: '#06B6D4',
      bgColor: '#F0F9FF',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      id: 'loving-kindness',
      title: 'Bienveillance',
      description: 'Méditation pour cultiver la compassion envers soi-même et les autres',
      duration: 540,
      category: 'meditation',
      difficulty: 'Intermédiaire',
      rating: 4.8,
      icon: Heart,
      color: '#EC4899',
      bgColor: '#FDF2F8',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      id: 'progressive-relaxation',
      title: 'Relaxation Progressive',
      description: 'Technique de relaxation musculaire pour libérer les tensions physiques',
      duration: 720,
      category: 'relaxation',
      difficulty: 'Débutant',
      rating: 4.5,
      icon: Heart,
      color: '#F59E0B',
      bgColor: '#FFFBEB',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    }
  ];

  const filteredExercises = exercises.filter(exercise => {
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    if (isCompleted) {
      setCurrentTime(0);
      setIsCompleted(false);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setIsCompleted(false);
  };

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
    setCurrentTime(0);
    setIsPlaying(false);
    setIsCompleted(false);
  };

  const progress = selectedExercise ? (currentTime / selectedExercise.duration) * 100 : 0;

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
          <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-airbnb">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-dark-900 mb-4">
            Exercices de Bien-être
          </h1>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Découvrez notre collection d'exercices guidés pour cultiver la paix intérieure 
            et améliorer votre bien-être mental
          </p>
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
                placeholder="Rechercher un exercice..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-airbnb pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-dark-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-airbnb min-w-0"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Exercise List */}
          <div className="lg:col-span-2">
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredExercises.map((exercise) => {
                const Icon = exercise.icon;
                const isSelected = selectedExercise?.id === exercise.id;
                
                return (
                  <motion.div
                    key={exercise.id}
                    variants={itemVariants}
                    onClick={() => handleExerciseSelect(exercise)}
                    className={`card-airbnb hover-lift cursor-pointer group ${
                      isSelected ? 'ring-2 ring-accent' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                      <img
                        src={exercise.image}
                        alt={exercise.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div 
                        className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: exercise.bgColor }}
                      >
                        <Icon className="w-5 h-5" style={{ color: exercise.color }} />
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{Math.floor(exercise.duration / 60)} min</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-dark-900 group-hover:text-accent transition-colors duration-200">
                          {exercise.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-sm text-dark-500">
                          <Star className="w-4 h-4 fill-current text-yellow-400" />
                          <span>{exercise.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-dark-600 text-sm line-clamp-2">
                        {exercise.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-dark-600 rounded-lg">
                          {exercise.difficulty}
                        </span>
                        <span className="text-xs text-dark-500 capitalize">
                          {exercise.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Empty State */}
            {filteredExercises.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Heart className="w-16 h-16 text-dark-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-dark-900 mb-4">
                  Aucun exercice trouvé
                </h3>
                <p className="text-dark-600">
                  Essayez de modifier vos critères de recherche
                </p>
              </motion.div>
            )}
          </div>

          {/* Player */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {selectedExercise ? (
                <div className="card-airbnb">
                  {isCompleted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-dark-900 mb-4">
                        Exercice terminé !
                      </h3>
                      <p className="text-dark-600 mb-6">
                        Prenez un moment pour ressentir les bienfaits
                      </p>
                      <button
                        onClick={handleReset}
                        className="btn-primary"
                      >
                        Recommencer
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Exercise Info */}
                      <div className="text-center mb-6">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                          style={{ backgroundColor: selectedExercise.bgColor }}
                        >
                          <selectedExercise.icon className="w-6 h-6" style={{ color: selectedExercise.color }} />
                        </div>
                        <h3 className="text-xl font-bold text-dark-900 mb-2">
                          {selectedExercise.title}
                        </h3>
                        <p className="text-dark-600 text-sm">
                          {selectedExercise.description}
                        </p>
                      </div>

                      {/* Progress Circle */}
                      <div className="flex justify-center mb-6">
                        <div className="relative w-32 h-32">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              stroke="#E5E7EB"
                              strokeWidth="8"
                              fill="none"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              stroke="#00B2FF"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 45}`}
                              strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                              className="transition-all duration-1000 ease-out"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold text-dark-900">
                                {formatTime(currentTime)}
                              </div>
                              <div className="text-xs text-dark-500">
                                / {formatTime(selectedExercise.duration)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-center space-x-4">
                        <button
                          onClick={handleReset}
                          className="p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                        >
                          <RotateCcw className="w-5 h-5 text-dark-500" />
                        </button>

                        <button
                          onClick={handlePlayPause}
                          className="w-12 h-12 bg-accent hover:bg-primary-600 rounded-xl flex items-center justify-center transition-all duration-200 shadow-card hover:shadow-card-hover"
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 text-white" />
                          ) : (
                            <Play className="w-6 h-6 text-white ml-1" />
                          )}
                        </button>

                        <button className="p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                          <Volume2 className="w-5 h-5 text-dark-500" />
                        </button>
                      </div>

                      {/* Breathing Guide */}
                      {selectedExercise.category === 'breathing' && isPlaying && (
                        <div className="mt-6 text-center">
                          <div className="text-lg font-medium text-dark-900 mb-4">
                            Suivez le rythme
                          </div>
                          <div 
                            className="w-16 h-16 mx-auto rounded-full transition-all duration-4000 ease-in-out"
                            style={{ 
                              backgroundColor: selectedExercise.color + '40',
                              transform: `scale(${Math.sin(currentTime * 0.5) * 0.3 + 1})`,
                            }}
                          />
                          <div className="mt-4 text-dark-600">
                            {Math.sin(currentTime * 0.5) > 0 ? 'Inspirez...' : 'Expirez...'}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ) : (
                <div className="card-airbnb text-center py-12">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-dark-300" />
                  <h3 className="text-lg font-semibold text-dark-900 mb-2">
                    Choisissez un exercice
                  </h3>
                  <p className="text-dark-600">
                    Sélectionnez un exercice pour commencer votre session
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;