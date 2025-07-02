import React from "react";
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { text: "Accueil", path: "/" },
        { text: "À propos", path: "/about" },
        { text: "Exercices", path: "/exercises" },
        { text: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Outils",
      links: [
        { text: "Suivi d'humeur", path: "/mood-tracker" },
        { text: "Journal", path: "/journal" },
        { text: "Méditation", path: "/exercises" },
        { text: "Support", path: "/contact" },
      ]
    },
    {
      title: "Légal",
      links: [
        { text: "Politique de confidentialité", path: "/privacy" },
        { text: "Conditions d'utilisation", path: "/terms" },
        { text: "Mentions légales", path: "/legal" },
        { text: "Cookies", path: "/cookies" },
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, text: "contact@4mymind.com" },
    { icon: Phone, text: "+33 1 23 45 67 89" },
    { icon: MapPin, text: "Paris, France" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-dark-900 text-white">
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-accent to-primary-600 py-16">
        <div className="container-airbnb">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Prêt à commencer votre parcours bien-être ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Rejoignez des milliers de personnes qui ont déjà transformé leur vie 
              grâce à nos outils de bien-être mental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signin"
                className="bg-white text-accent hover:bg-gray-50 font-medium px-8 py-4 rounded-xl transition-all duration-200 shadow-card hover:shadow-card-hover transform hover:scale-105"
              >
                Créer un compte gratuit
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-accent font-medium px-8 py-4 rounded-xl transition-all duration-200"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="container-airbnb py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary-600 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">4MyMind</h3>
                <p className="text-sm text-gray-400">Bien-être mental</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre plateforme de confiance pour cultiver le bien-être mental 
              et développer une relation saine avec vos émotions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <Icon className="w-4 h-4 text-accent" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Restez connecté à votre bien-être
              </h4>
              <p className="text-gray-300">
                Recevez nos conseils, exercices et actualités directement dans votre boîte mail.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-dark-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
              />
              <button className="btn-primary whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-airbnb py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 4MyMind. Tous droits réservés.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-dark-800 hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;