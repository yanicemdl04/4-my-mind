import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page non trouvée | 4MyMind</title>
        <meta name="description" content="Page non trouvée - 4MyMind" />
      </Helmet>
      
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center px-4">
          <h1 className="text-9xl font-extrabold text-primary mb-4 drop-shadow-lg">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Page non trouvée
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors inline-flex items-center shadow"
          >
            <FaHome size={18} className="mr-2" />
            Retour à l'accueil
          </button>
        </div>
      </section>
    </>
  );
};

export default Notfound;