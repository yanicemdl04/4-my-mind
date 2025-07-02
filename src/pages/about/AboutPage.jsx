import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, Users, ArrowRight, Mail } from 'lucide-react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Nous créons un espace sûr et sans jugement où chacun peut s\'exprimer librement et trouver du soutien.',
      color: '#EF4444'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Démocratiser l\'accès aux outils de bien-être mental et accompagner chaque personne dans son parcours.',
      color: '#00B2FF'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'Un monde où la santé mentale est une priorité et où chacun dispose des ressources pour s\'épanouir.',
      color: '#10B981'
    }
  ];

  const stats = [
    { number: '10k+', label: 'Utilisateurs actifs' },
    { number: '50k+', label: 'Sessions de méditation' },
    { number: '95%', label: 'Satisfaction utilisateur' },
    { number: '24/7', label: 'Support disponible' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
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
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold text-dark-900 mb-6">
                À propos de{' '}
                <span className="text-gradient">4MyMind</span>
              </h1>
              <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                Nous croyons que le bien-être mental est essentiel pour une vie épanouie. 
                Notre plateforme offre des outils modernes et un soutien bienveillant pour 
                vous accompagner dans votre parcours vers l'équilibre émotionnel.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary flex items-center space-x-2">
                  <span>Commencer maintenant</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="btn-secondary">
                  En savoir plus
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
                  alt="Bien-être mental"
                  className="w-full h-96 object-cover rounded-3xl shadow-airbnb"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-accent/20 to-primary-600/20 rounded-3xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-airbnb">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-airbnb">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              Nos valeurs fondamentales
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Chaque décision que nous prenons est guidée par ces principes qui définissent 
              notre approche du bien-être mental.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="card-airbnb text-center hover-lift group"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: value.color + '20' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-dark-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-airbnb">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-dark-900 mb-6">
              Une équipe passionnée
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Psychologues, développeurs et designers unis par la même mission : 
              rendre le bien-être mental accessible à tous.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Notre équipe"
                className="w-full h-80 object-cover rounded-3xl shadow-airbnb"
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-dark-900">
                Expertise et empathie
              </h3>
              <p className="text-lg text-dark-600 leading-relaxed">
                Notre équipe multidisciplinaire combine expertise scientifique et 
                approche humaine pour créer des solutions qui font vraiment la différence 
                dans la vie de nos utilisateurs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-dark-600">Psychologues cliniciens certifiés</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-dark-600">Développeurs spécialisés en santé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-dark-600">Designers UX/UI experts</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-primary-600">
        <div className="container-airbnb">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Rejoignez notre communauté
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Ensemble, faisons de la santé mentale une priorité. 
              Découvrez nos outils et notre soutien dès aujourd'hui.
            </p>
            <button className="bg-white text-accent hover:bg-gray-50 font-medium px-8 py-4 rounded-xl transition-all duration-200 shadow-card hover:shadow-card-hover transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <Mail className="w-5 h-5" />
              <span>Nous contacter</span>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;