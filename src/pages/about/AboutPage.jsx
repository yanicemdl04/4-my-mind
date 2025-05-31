import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import AnimatedSection from '../../assets/AnimatedSection.jsx';
import AboutImage1 from '../../assets/images/four-afican.jpg';
import AboutImage2 from '../../assets/images/medium-shot.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
      <AnimatedSection>
          <h1 className="text-5xl font-bold text-center mb-12 text-blue-800">
            À propos de <span className="text-blue-600">4 My Mind</span>
          </h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg font-light mb-6 text-gray-700 leading-relaxed">
              Chez <span className="font-semibold text-blue-600">4 My Mind</span>, nous croyons que le bien-être mental est essentiel pour une vie épanouie.
              Notre plateforme est conçue pour vous offrir des outils modernes, des ressources fiables, et un soutien bienveillant pour vous accompagner dans votre parcours.
            </p>
            <p className="text-lg font-light mb-6 text-gray-700 leading-relaxed">
              Nous nous engageons à rendre le soutien psychologique accessible à tous, grâce à une approche innovante et humaine.
              Ensemble, construisons un avenir où la santé mentale est une priorité pour chacun.
            </p>
          </div>
        </AnimatedSection>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <AnimatedSection>
            <img
              src={AboutImage1}
              alt="Bien-être mental"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
            <img
              src={AboutImage2}
              alt="Soutien psychologique"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </AnimatedSection>

        </div>
      </div>

      <AnimatedSection>

        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Rejoignez notre communauté
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Ensemble, faisons de la santé mentale une priorité. Découvrez nos outils, nos ressources, et notre soutien dès aujourd'hui.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            En savoir plus
          </button>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default AboutPage;