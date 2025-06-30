import React, { useState } from 'react';
import { Smile, Frown, Meh, Zap, Coffee, Moon, Sun, Cloud, Heart, TrendingUp } from 'lucide-react';

const MoodTrackerPage = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [intensity, setIntensity] = useState(3);
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const moods = [
    { id: 'joyful', label: 'Joyeux', icon: Smile, color: '#ffe60d', bgColor: '#fff9c4' },
    { id: 'calm', label: 'Calme', icon: Sun, color: '#daa520', bgColor: '#fef3c7' },
    { id: 'neutral', label: 'Neutre', icon: Meh, color: '#915a17', bgColor: '#fde68a' },
    { id: 'tired', label: 'Fatigué', icon: Coffee, color: '#eacd5a', bgColor: '#fef08a' },
    { id: 'stressed', label: 'Stressé', icon: Zap, color: '#e3b62c', bgColor: '#fed7aa' },
    { id: 'sad', label: 'Triste', icon: Cloud, color: '#915a17', bgColor: '#e5e7eb' },
    { id: 'anxious', label: 'Anxieux', icon: Heart, color: '#daa520', bgColor: '#fecaca' },
    { id: 'peaceful', label: 'Paisible', icon: Moon, color: '#ffe60d', bgColor: '#ddd6fe' }
  ];

  const pastMoods = [
    { id: '1', date: '2024-01-15', mood: 'joyful', intensity: 4, icon: 'Smile' },
    { id: '2', date: '2024-01-14', mood: 'calm', intensity: 5, icon: 'Sun' },
    { id: '3', date: '2024-01-13', mood: 'neutral', intensity: 3, icon: 'Meh' },
    { id: '4', date: '2024-01-12', mood: 'tired', intensity: 2, icon: 'Coffee' },
    { id: '5', date: '2024-01-11', mood: 'joyful', intensity: 4, icon: 'Smile' },
    { id: '6', date: '2024-01-10', mood: 'peaceful', intensity: 5, icon: 'Moon' },
    { id: '7', date: '2024-01-09', mood: 'stressed', intensity: 3, icon: 'Zap' }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Heart className="w-10 h-10" style={{ color: '#3c1f0c' }} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
            Mon Humeur du Jour
          </h1>
          <p className="text-xl" style={{ color: '#daa520' }}>
            Comment te sens-tu aujourd'hui ?
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
              Merci d'avoir partagé ton humeur !
            </h3>
            <p className="text-lg" style={{ color: '#daa520' }}>
              Ton bien-être nous tient à cœur. Continue comme ça !
            </p>
          </div>
        ) : (
          <>
            {/* Mood Selection */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-yellow-200/50">
              <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#3c1f0c' }}>
                Choisis ton humeur
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {moods.map((mood) => {
                  const Icon = mood.icon;
                  const isSelected = selectedMood === mood.id;
                  
                  return (
                    <button
                      key={mood.id}
                      onClick={() => handleMoodSelect(mood.id)}
                      className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                        isSelected 
                          ? 'scale-105 shadow-lg ring-2 ring-yellow-400' 
                          : 'hover:shadow-md'
                      }`}
                      style={{ 
                        backgroundColor: isSelected ? mood.color : mood.bgColor,
                        borderColor: mood.color
                      }}
                    >
                      <div className="text-center">
                        <Icon 
                          className={`w-8 h-8 mx-auto mb-3 transition-all duration-300 ${
                            isSelected ? 'animate-bounce' : 'group-hover:scale-110'
                          }`}
                          style={{ color: isSelected ? '#3c1f0c' : mood.color }}
                        />
                        <span 
                          className="text-sm font-medium"
                          style={{ color: isSelected ? '#3c1f0c' : '#915a17' }}
                        >
                          {mood.label}
                        </span>
                      </div>
                      
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-xs font-bold" style={{ color: '#3c1f0c' }}>✓</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedMood && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Intensity Slider */}
                  <div>
                    <label className="block text-lg font-semibold mb-4" style={{ color: '#3c1f0c' }}>
                      Intensité de ton humeur : {intensity}/5
                    </label>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm" style={{ color: '#915a17' }}>Faible</span>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={intensity}
                        onChange={(e) => setIntensity(Number(e.target.value))}
                        className="flex-1 h-3 bg-yellow-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #ffe60d 0%, #ffe60d ${(intensity-1)*25}%, #eacd5a ${(intensity-1)*25}%, #eacd5a 100%)`
                        }}
                      />
                      <span className="text-sm" style={{ color: '#915a17' }}>Forte</span>
                    </div>
                  </div>

                  {/* Note */}
                  <div>
                    <label className="block text-lg font-semibold mb-4" style={{ color: '#3c1f0c' }}>
                      Une note pour toi-même ? (optionnel)
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Qu'est-ce qui influence ton humeur aujourd'hui ?"
                      className="w-full p-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-all duration-300 resize-none"
                      style={{ backgroundColor: '#eacd5a', color: '#3c1f0c' }}
                      rows={3}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50"
                      style={{ backgroundColor: '#e3b62c', color: '#3c1f0c' }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = '#ffe60d';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = '#e3b62c';
                        }
                      }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <div className="w-5 h-5 border-2 border-amber-800 border-t-transparent rounded-full animate-spin mr-3"></div>
                          Enregistrement...
                        </span>
                      ) : (
                        'Enregistrer mon humeur'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Timeline */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-yellow-200/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold" style={{ color: '#3c1f0c' }}>
                  Tes humeurs passées
                </h2>
                <TrendingUp className="w-6 h-6" style={{ color: '#daa520' }} />
              </div>
              
              <div className="flex space-x-4 overflow-x-auto pb-4">
                {pastMoods.map((entry, index) => {
                  const mood = moods.find(m => m.id === entry.mood);
                  if (!mood) return null;
                  
                  const Icon = mood.icon;
                  
                  return (
                    <div
                      key={entry.id}
                      className="flex-shrink-0 text-center p-4 rounded-2xl transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: mood.bgColor, minWidth: '120px' }}
                    >
                      <div className="text-xs mb-2" style={{ color: '#915a17' }}>
                        {new Date(entry.date).toLocaleDateString('fr-FR', { 
                          day: 'numeric', 
                          month: 'short' 
                        })}
                      </div>
                      <Icon className="w-8 h-8 mx-auto mb-2" style={{ color: mood.color }} />
                      <div className="text-sm font-medium" style={{ color: '#3c1f0c' }}>
                        {mood.label}
                      </div>
                      <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full mx-0.5 ${
                              i < entry.intensity ? 'opacity-100' : 'opacity-30'
                            }`}
                            style={{ backgroundColor: mood.color }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MoodTrackerPage;