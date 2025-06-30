import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Heart, Send, User, AtSign, FileText } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    requestCall: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 pt-20">
      {/* Header avec illustration d'écoute empathique */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-100 to-amber-100 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-amber-200/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Heart className="w-12 h-12 text-amber-800 animate-pulse" style={{ color: '#3c1f0c' }} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center shadow-md">
                  <MessageCircle className="w-4 h-4" style={{ color: '#daa520' }} />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: '#3c1f0c' }}>
              Parle-nous
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-6" style={{ color: '#daa520' }}>
              Nous sommes là pour t'écouter
            </p>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#915a17' }}>
              Ton bien-être nous tient à cœur. N'hésite pas à nous faire part de tes questions, préoccupations ou simplement à partager ce qui te préoccupe. Chaque message est important.
            </p>
          </div>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-yellow-200/50 overflow-hidden">
          <div className="px-8 py-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#3c1f0c' }}>
                  Merci pour ton message
                </h3>
                <p className="text-lg" style={{ color: '#daa520' }}>
                  Nous avons bien reçu ton message et nous te répondrons très bientôt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Nom et Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold mb-3" style={{ color: '#3c1f0c' }}>
                      Ton prénom
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#daa520' }} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg placeholder-amber-400"
                        style={{ backgroundColor: '#eacd5a', color: '#3c1f0c' }}
                        placeholder="Comment t'appelles-tu ?"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold mb-3" style={{ color: '#3c1f0c' }}>
                      Ton email
                    </label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#daa520' }} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg placeholder-amber-400"
                        style={{ backgroundColor: '#eacd5a', color: '#3c1f0c' }}
                        placeholder="ton.email@exemple.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Sujet */}
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-semibold mb-3" style={{ color: '#3c1f0c' }}>
                    Sujet de ton message
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#daa520' }} />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg placeholder-amber-400"
                      style={{ backgroundColor: '#eacd5a', color: '#3c1f0c' }}
                      placeholder="De quoi aimerais-tu parler ?"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold mb-3" style={{ color: '#3c1f0c' }}>
                    Ton message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-6 w-5 h-5" style={{ color: '#daa520' }} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg placeholder-amber-400 resize-none"
                      style={{ backgroundColor: '#eacd5a', color: '#3c1f0c' }}
                      placeholder="Partage ce qui te préoccupe... Nous sommes là pour t'écouter sans jugement."
                      required
                    />
                  </div>
                </div>

                {/* Option d'appel */}
                <div className="flex items-center space-x-4 p-6 rounded-2xl" style={{ backgroundColor: '#f7f3e9' }}>
                  <input
                    type="checkbox"
                    id="requestCall"
                    name="requestCall"
                    checked={formData.requestCall}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-2 border-yellow-400 text-yellow-500 focus:ring-yellow-400 focus:ring-2"
                  />
                  <label htmlFor="requestCall" className="flex items-center text-lg font-medium cursor-pointer" style={{ color: '#3c1f0c' }}>
                    <Phone className="w-5 h-5 mr-3" style={{ color: '#daa520' }} />
                    J'aimerais être rappelé(e) pour en discuter
                  </label>
                </div>

                {/* Message d'encouragement */}
                <div className="text-center py-4">
                  <p className="text-lg font-medium italic" style={{ color: '#daa520' }}>
                    "Tu peux tout dire ici. Ton courage à nous écrire est déjà un premier pas."
                  </p>
                </div>

                {/* Bouton d'envoi */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-12 py-4 text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ 
                      backgroundColor: '#e3b62c', 
                      color: '#3c1f0c',
                    }}
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
                    <span className="flex items-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-amber-800 border-t-transparent rounded-full animate-spin mr-3"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                          Envoyer mon message
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Section d'informations supplémentaires */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm border border-yellow-200/50">
            <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" style={{ color: '#3c1f0c' }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#3c1f0c' }}>
              Écoute bienveillante
            </h3>
            <p style={{ color: '#915a17' }}>
              Nous t'écoutons sans jugement, dans un espace sûr et confidentiel.
            </p>
          </div>

          <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm border border-yellow-200/50">
            <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" style={{ color: '#3c1f0c' }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#3c1f0c' }}>
              Réponse rapide
            </h3>
            <p style={{ color: '#915a17' }}>
              Nous nous engageons à te répondre dans les 24h maximum.
            </p>
          </div>

          <div className="text-center p-6 bg-white/60 rounded-2xl backdrop-blur-sm border border-yellow-200/50">
            <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6" style={{ color: '#3c1f0c' }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: '#3c1f0c' }}>
              Accompagnement personnalisé
            </h3>
            <p style={{ color: '#915a17' }}>
              Chaque personne est unique, notre soutien s'adapte à tes besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;