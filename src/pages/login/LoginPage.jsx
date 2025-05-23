import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-4xl font-alice text-center mb-8">Connexion</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-hind-madurai text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-hind-madurai text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-hind-madurai hover:bg-blue-700 transition-colors"
            >
              Se connecter
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Pas encore de compte ?{' '}
            <Link to="/register" className="text-blue-600 hover:text-blue-800">
              S'inscrire
            </Link>
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;