import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/images/group-people.jpg';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/menu');
  };

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-hind-madurai text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-field"
                placeholder="Ton adresse email ✨"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-hind-madurai text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-field"
                placeholder="Ton mot de passe secret 🔒"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="form-field"
              style={{ background: 'gold', color: '#000', fontWeight: 600 }}
            >
              Se connecter
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Pas encore de compte ?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-800">
                S'inscrire
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
      <div className="right">
        <img
          src={image}
          alt="Illustration"
          style={{ width: '100%', height: '100vh', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;