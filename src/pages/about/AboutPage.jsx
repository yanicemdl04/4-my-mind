import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-alice text-center mb-8">À propos de 4 My Mind</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg font-libre-franklin mb-6 text-gray-700">
              4 My Mind est une plateforme dédiée au bien-être mental, conçue pour vous accompagner dans votre parcours vers une meilleure santé mentale.
            </p>
            <p className="text-lg font-libre-franklin mb-6 text-gray-700">
              Notre mission est de rendre le soutien psychologique accessible à tous, à travers des outils innovants et une approche bienveillante.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;