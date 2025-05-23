import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';

const MoodTrackerPage = () => {
  const moods = [
    { emoji: "😊", label: "Heureux" },
    { emoji: "😌", label: "Calme" },
    { emoji: "😔", label: "Triste" },
    { emoji: "😰", label: "Anxieux" },
    { emoji: "😴", label: "Fatigué" }
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
          <h1 className="text-4xl font-alice text-center mb-8">Suivi de l'humeur</h1>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-hind-madurai mb-6">Comment vous sentez-vous aujourd'hui ?</h2>
            <div className="grid grid-cols-5 gap-4 mb-8">
              {moods.map((mood, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100"
                >
                  <span className="text-4xl mb-2">{mood.emoji}</span>
                  <span className="text-sm">{mood.label}</span>
                </motion.button>
              ))}
            </div>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="4"
              placeholder="Ajoutez une note à propos de votre journée..."
            ></textarea>
            <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Enregistrer
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default MoodTrackerPage;