import React, { useState } from 'react';
import { BookOpen, Mic, Camera, Save, Calendar, Heart, Sparkles, Edit3 } from 'lucide-react';

const JournalPage = () => {
  const [currentEntry, setCurrentEntry] = useState({
    title: '',
    content: ''
  });
  const [isRecording, setIsRecording] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const pastEntries = [
    {
      id: '1',
      date: '2024-01-15',
      title: 'Une journée pleine de gratitude',
      content: 'Aujourd\'hui j\'ai réalisé combien les petites choses comptent...',
      mood: 'joyful'
    },
    {
      id: '2',
      date: '2024-01-14',
      title: 'Réflexions du soir',
      content: 'Les défis d\'aujourd\'hui m\'ont appris quelque chose d\'important...',
      mood: 'thoughtful'
    },
    {
      id: '3',
      date: '2024-01-13',
      title: 'Moment de paix',
      content: 'La méditation de ce matin m\'a apporté une sérénité profonde...',
      mood: 'peaceful'
    }
  ];

  const floatingElements = [
    { id: 1, delay: '0s', size: 'w-3 h-3', position: 'top-10 left-10' },
    { id: 2, delay: '1s', size: 'w-2 h-2', position: 'top-20 right-20' },
    { id: 3, delay: '2s', size: 'w-4 h-4', position: 'top-40 left-1/4' },
    { id: 4, delay: '3s', size: 'w-2 h-2', position: 'top-60 right-1/3' },
    { id: 5, delay: '4s', size: 'w-3 h-3', position: 'bottom-40 left-20' }
  ];

  const handleSave = async () => {
    if (!currentEntry.title.trim() || !currentEntry.content.trim()) return;
    
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setCurrentEntry({ title: '', content: '' });
      }, 2000);
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        setCurrentEntry(prev => ({
          ...prev,
          content: prev.content + (prev.content ? ' ' : '') + 'Texte dicté ajouté...'
        }));
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden" style={{ backgroundColor: '#eacd5a' }}>
      {/* Floating animated elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.size} ${element.position} rounded-full animate-bounce opacity-60`}
          style={{ 
            backgroundColor: '#ffe60d',
            animationDelay: element.delay,
            animationDuration: '3s'
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-10 h-10" style={{ color: '#3c1f0c' }} />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center">
                <Edit3 className="w-4 h-4" style={{ color: '#3c1f0c' }} />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
            Exprime-toi
          </h1>
          <p className="text-xl mb-4" style={{ color: '#915a17' }}>
            Ton espace d'écriture libre et sécurisé
          </p>
          <p className="text-lg italic" style={{ color: '#daa520' }}>
            "Tu peux tout dire ici"
          </p>
        </div>

        {saved ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
              Ton entrée a été sauvegardée
            </h3>
            <p className="text-lg" style={{ color: '#915a17' }}>
              Merci d'avoir partagé tes pensées avec toi-même
            </p>
          </div>
        ) : (
          <>
            {/* Writing Area */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl border border-white/50">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Donne un titre à tes pensées..."
                  value={currentEntry.title}
                  onChange={(e) => setCurrentEntry(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full text-2xl font-bold bg-transparent border-none outline-none placeholder-amber-400"
                  style={{ color: '#3c1f0c' }}
                />
                <div className="flex items-center mt-2 text-sm" style={{ color: '#daa520' }}>
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date().toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder="Laisse tes pensées s'exprimer librement... Aucun jugement ici, juste toi et tes mots."
                  value={currentEntry.content}
                  onChange={(e) => setCurrentEntry(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full h-80 bg-transparent border-none outline-none resize-none text-lg leading-relaxed placeholder-amber-400"
                  style={{ color: '#3c1f0c' }}
                />
                
                {/* Floating sparkles */}
                <Sparkles className="absolute top-4 right-4 w-5 h-5 opacity-30 animate-pulse" style={{ color: '#ffe60d' }} />
                <Sparkles className="absolute bottom-10 left-6 w-4 h-4 opacity-20 animate-bounce" style={{ color: '#daa520', animationDelay: '1s' }} />
              </div>

              {/* Toolbar */}
              <div className="flex items-center justify-between pt-6 border-t border-amber-200">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleRecording}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      isRecording 
                        ? 'bg-red-100 text-red-600' 
                        : 'hover:bg-amber-100'
                    }`}
                    style={{ color: isRecording ? '#dc2626' : '#915a17' }}
                  >
                    <Mic className={`w-5 h-5 ${isRecording ? 'animate-pulse' : ''}`} />
                    <span className="text-sm font-medium">
                      {isRecording ? 'Arrêter' : 'Dicter'}
                    </span>
                  </button>

                  <button className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-amber-100 transition-colors duration-300">
                    <Camera className="w-5 h-5" style={{ color: '#915a17' }} />
                    <span className="text-sm font-medium" style={{ color: '#915a17' }}>
                      Photo
                    </span>
                  </button>
                </div>

                <button
                  onClick={handleSave}
                  disabled={isSaving || !currentEntry.title.trim() || !currentEntry.content.trim()}
                  className="flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#e3b62c', color: '#3c1f0c' }}
                  onMouseEnter={(e) => {
                    if (!isSaving && currentEntry.title.trim() && currentEntry.content.trim()) {
                      e.currentTarget.style.backgroundColor = '#ffe60d';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSaving) {
                      e.currentTarget.style.backgroundColor = '#e3b62c';
                    }
                  }}
                >
                  {isSaving ? (
                    <>
                      <div className="w-5 h-5 border-2 border-amber-800 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sauvegarde...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      <span>Sauvegarder</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Past Entries */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#3c1f0c' }}>
                Tes entrées précédentes
              </h2>
              
              <div className="space-y-4">
                {pastEntries.map((entry) => (
                  <div
                    key={entry.id}
                    className="p-6 bg-white/40 rounded-2xl hover:bg-white/60 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold group-hover:text-amber-700 transition-colors duration-300" style={{ color: '#3c1f0c' }}>
                        {entry.title}
                      </h3>
                      <span className="text-sm" style={{ color: '#daa520' }}>
                        {new Date(entry.date).toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#915a17' }}>
                      {entry.content.substring(0, 120)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Encouragement Message */}
        <div className="text-center mt-12 p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50">
          <Heart className="w-8 h-8 mx-auto mb-4 animate-pulse" style={{ color: '#daa520' }} />
          <p className="text-lg font-medium italic" style={{ color: '#3c1f0c' }}>
            "L'écriture est un voyage vers soi-même. Chaque mot compte."
          </p>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;