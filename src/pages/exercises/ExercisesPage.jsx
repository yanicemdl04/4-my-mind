import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';

const ExercisesPage = () => {
  const exercises = [
    {
      title: "Méditation guidée",
      description: "Une séance de méditation de 10 minutes pour apaiser l'esprit",
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
    },
    {
      title: "Exercices de respiration",
      description: "Techniques de respiration pour gérer le stress",
      image: "https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg"
    },
    {
      title: "Relaxation musculaire",
      description: "Détente progressive de chaque groupe musculaire",
      image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-alice text-center mb-8">Exercices guidés</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercises.map((exercise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={exercise.image}
                  alt={exercise.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-hind-madurai mb-2">{exercise.title}</h3>
                  <p className="text-gray-600 mb-4">{exercise.description}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Commencer
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ExercisesPage;