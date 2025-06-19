import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, Heart, Wind, Eye, Clock, CheckCircle } from 'lucide-react';

const ExercisesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const exercises = [
    {
      id: 'breathing-4-7-8',
      title: 'Respiration 4-7-8',
      description: 'Technique de respiration apaisante pour réduire le stress et favoriser la détente',
      duration: 300, // 5 minutes
      type: 'breathing',
      icon: Wind,
      color: '#daa520',
      bgColor: '#fef3c7'
    },
    {
      id: 'body-scan',
      title: 'Scan Corporel',
      description: 'Méditation guidée pour reconnecter avec ton corps et relâcher les tensions',
      duration: 600, // 10 minutes
      type: 'meditation',
      icon: Heart,
      color: '#915a17',
      bgColor: '#fde68a'
    },
    {
      id: 'peaceful-place',
      title: 'Lieu de Paix',
      description: 'Visualisation d\'un endroit sûr et apaisant pour retrouver la sérénité',
      duration: 480, // 8 minutes
      type: 'visualization',
      icon: Eye,
      color: '#e3b62c',
      bgColor: '#fed7aa'
    },
    {
      id: 'mindful-breathing',
      title: 'Respiration Consciente',
      description: 'Exercice simple de pleine conscience centré sur la respiration',
      duration: 420, // 7 minutes
      type: 'breathing',
      icon: Wind,
      color: '#ffe60d',
      bgColor: '#fff9c4'
    },
    {
      id: 'loving-kindness',
      title: 'Bienveillance',
      description: 'Méditation pour cultiver la compassion envers soi-même et les autres',
      duration: 540, // 9 minutes
      type: 'meditation',
      icon: Heart,
      color: '#daa520',
      bgColor: '#fef08a'
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying && selectedExercise && currentTime < selectedExercise.duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev + 1 >= selectedExercise.duration) {
            setIsPlaying(false);
            setIsCompleted(true);
            return selectedExercise.duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedExercise, currentTime]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 animate-pulse" style={{ color: '#3c1f0c' }} />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full animate-bounce"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
            Respire, Visualise, Relâche
          </h1>
          <p className="text-xl" style={{ color: '#daa520' }}>
            Ton espace de bien-être et de sérénité
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Exercise List */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#3c1f0c' }}>
              Exercices disponibles
            </h2>
            <div className="space-y-4">
              {exercises.map((exercise) => {
                const Icon = exercise.icon;
                const isSelected = selectedExercise?.id === exercise.id;
                
                return (
                  <button
                    key={exercise.id}
                    onClick={() => handleExerciseSelect(exercise)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      isSelected 
                        ? 'ring-2 ring-yellow-400 shadow-lg' 
                        : 'hover:shadow-md'
                    }`}
                    style={{ backgroundColor: exercise.bgColor }}
                  >
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: exercise.color + '40' }}
                      >
                        <Icon className="w-6 h-6" style={{ color: exercise.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2" style={{ color: '#3c1f0c' }}>
                          {exercise.title}
                        </h3>
                        <p className="text-sm mb-3" style={{ color: '#915a17' }}>
                          {exercise.description}
                        </p>
                        <div className="flex items-center text-sm" style={{ color: '#daa520' }}>
                          <Clock className="w-4 h-4 mr-1" />
                          {Math.floor(exercise.duration / 60)} min
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Player */}
          <div className="lg:col-span-2">
            {selectedExercise ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-200/50">
                {isCompleted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
                      Félicitations !
                    </h3>
                    <p className="text-xl mb-6" style={{ color: '#daa520' }}>
                      Tu as terminé "{selectedExercise.title}"
                    </p>
                    <p className="text-lg mb-8" style={{ color: '#915a17' }}>
                      Prends un moment pour ressentir les bienfaits de cet exercice
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
                      style={{ backgroundColor: '#e3b62c', color: '#3c1f0c' }}
                    >
                      Recommencer
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Exercise Info */}
                    <div className="text-center mb-8">
                      <div className="flex justify-center mb-4">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: selectedExercise.bgColor }}
                        >
                          <selectedExercise.icon className="w-8 h-8" style={{ color: selectedExercise.color }} />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
                        {selectedExercise.title}
                      </h2>
                      <p className="text-lg" style={{ color: '#daa520' }}>
                        {selectedExercise.description}
                      </p>
                    </div>

                    {/* Progress Circle */}
                    <div className="flex justify-center mb-8">
                      <div className="relative w-48 h-48">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="#eacd5a"
                            strokeWidth="8"
                            fill="none"
                            className="opacity-30"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="#ffe60d"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 45}`}
                            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                            className="transition-all duration-1000 ease-out"
                            style={{ filter: 'drop-shadow(0 0 8px #ffe60d)' }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold mb-1" style={{ color: '#3c1f0c' }}>
                              {formatTime(currentTime)}
                            </div>
                            <div className="text-sm" style={{ color: '#daa520' }}>
                              / {formatTime(selectedExercise.duration)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center space-x-6">
                      <button
                        onClick={handleReset}
                        className="p-4 rounded-full hover:bg-yellow-100 transition-colors duration-300"
                        style={{ color: '#915a17' }}
                      >
                        <RotateCcw className="w-6 h-6" />
                      </button>

                      <button
                        onClick={handlePlayPause}
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                        style={{ backgroundColor: '#e3b62c', color: '#3c1f0c' }}
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8" />
                        ) : (
                          <Play className="w-8 h-8 ml-1" />
                        )}
                      </button>

                      <button
                        className="p-4 rounded-full hover:bg-yellow-100 transition-colors duration-300"
                        style={{ color: '#915a17' }}
                      >
                        <Volume2 className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Breathing Guide */}
                    {selectedExercise.type === 'breathing' && isPlaying && (
                      <div className="mt-8 text-center">
                        <div className="text-2xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
                          Suis le rythme
                        </div>
                        <div 
                          className="w-24 h-24 mx-auto rounded-full transition-all duration-4000 ease-in-out"
                          style={{ 
                            backgroundColor: '#ffe60d',
                            transform: `scale(${Math.sin(currentTime * 0.5) * 0.3 + 1})`,
                            opacity: Math.sin(currentTime * 0.5) * 0.3 + 0.7
                          }}
                        />
                        <div className="mt-4 text-lg" style={{ color: '#daa520' }}>
                          {Math.sin(currentTime * 0.5) > 0 ? 'Inspire...' : 'Expire...'}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ) : (
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 text-center border border-yellow-200/50">
                <Heart className="w-16 h-16 mx-auto mb-6 opacity-50" style={{ color: '#daa520' }} />
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
                  Choisis un exercice
                </h2>
                <p className="text-lg" style={{ color: '#915a17' }}>
                  Sélectionne un exercice dans la liste pour commencer ton moment de bien-être
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-12 text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50">
          <Heart className="w-8 h-8 mx-auto mb-4 animate-pulse" style={{ color: '#daa520' }} />
          <blockquote className="text-xl font-medium italic mb-4" style={{ color: '#3c1f0c' }}>
            "La paix vient de l'intérieur. Ne la cherche pas à l'extérieur."
          </blockquote>
          <p className="text-lg" style={{ color: '#915a17' }}>
            Prends quelques minutes chaque jour pour te reconnecter avec toi-même
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;