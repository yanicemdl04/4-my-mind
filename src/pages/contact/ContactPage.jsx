import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send, 
  User, 
  AtSign, 
  FileText,
  Clock,
  CheckCircle
} from 'lucide-react';
import Navbar from '../../components/navbar/navbar';

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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@4mymind.com',
      description: 'Réponse sous 24h'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      description: 'Lun-Ven 9h-18h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: '123 Rue du Bien-être',
      description: 'Paris, France'
    }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: 'Écoute bienveillante',
      description: 'Nous vous écoutons sans jugement, dans un espace sûr et confidentiel.'
    },
    {
      icon: Clock,
      title: 'Réponse rapide',
      description: 'Nous nous engageons à vous répondre dans les 24h maximum.'
    },
    {
      icon: CheckCircle,
      title: 'Accompagnement personnalisé',
      description: 'Chaque personne est unique, notre soutien s\'adapte à vos besoins.'
    }
  ];

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
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          requestCall: false
        });
      }, 3000);
    }, 1500);
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
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent/10">
        <div className="container-airbnb">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-airbnb">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
              Parle-nous
            </h1>
            <p className="text-xl text-dark-600 mb-8">
              Nous sommes là pour t'écouter et t'accompagner dans ton parcours vers le bien-être
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-airbnb py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div 
                className="card-airbnb text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-dark-900 mb-4">
                  Message envoyé !
                </h3>
                <p className="text-lg text-dark-600">
                  Nous avons bien reçu votre message et vous répondrons très bientôt.
                </p>
              </motion.div>
            ) : (
              <motion.div 
                className="card-airbnb"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  className="text-3xl font-bold text-dark-900 mb-8"
                  variants={itemVariants}
                >
                  Envoyez-nous un message
                </motion.h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom et Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-900 mb-2">
                        Votre nom
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="input-airbnb pl-10"
                          placeholder="Votre nom complet"
                          required
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-900 mb-2">
                        Votre email
                      </label>
                      <div className="relative">
                        <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="input-airbnb pl-10"
                          placeholder="votre.email@exemple.com"
                          required
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Sujet */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-900 mb-2">
                      Sujet
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="input-airbnb pl-10"
                        placeholder="De quoi souhaitez-vous parler ?"
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-900 mb-2">
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="input-airbnb resize-none"
                      placeholder="Partagez ce qui vous préoccupe... Nous sommes là pour vous écouter."
                      required
                    />
                  </motion.div>

                  {/* Option d'appel */}
                  <motion.div 
                    variants={itemVariants}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <input
                      type="checkbox"
                      id="requestCall"
                      name="requestCall"
                      checked={formData.requestCall}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-accent focus:ring-accent border-gray-300 rounded"
                    />
                    <label htmlFor="requestCall" className="flex items-center text-dark-700 cursor-pointer">
                      <Phone className="w-4 h-4 mr-2 text-dark-500" />
                      J'aimerais être rappelé(e) pour en discuter
                    </label>
                  </motion.div>

                  {/* Bouton d'envoi */}
                  <motion.div 
                    variants={itemVariants}
                    className="flex justify-end"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <motion.div 
              className="card-airbnb"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-dark-900 mb-6">
                Informations de contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-900">{info.title}</h4>
                        <p className="text-dark-600">{info.value}</p>
                        <p className="text-sm text-dark-500">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="card-airbnb"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-dark-900 mb-6">
                Notre engagement
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-dark-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-dark-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;