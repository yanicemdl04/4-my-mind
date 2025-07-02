import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Heart,
  CheckCircle,
  Shield,
  Users,
  Zap
} from 'lucide-react';
import Navbar from '../../components/navbar/navbar';

const SignInPage = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Heart,
      title: 'Suivi personnalisé',
      description: 'Suivez votre humeur et vos progrès au quotidien'
    },
    {
      icon: Shield,
      title: 'Données sécurisées',
      description: 'Vos informations sont protégées et confidentielles'
    },
    {
      icon: Users,
      title: 'Communauté bienveillante',
      description: 'Rejoignez une communauté de soutien mutuel'
    },
    {
      icon: Zap,
      title: 'Outils efficaces',
      description: 'Accédez à des exercices validés scientifiquement'
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    setStep(1);
  };

  const handleBack = () => {
    setStep(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'inscription
    setTimeout(() => {
      setIsLoading(false);
      navigate('/menu');
    }, 1500);
  };

  const isStep1Valid = formData.firstName && formData.lastName && formData.email;
  const isStep2Valid = formData.password && formData.confirmPassword && 
                      formData.password === formData.confirmPassword && 
                      formData.acceptTerms;

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      
      <div className="container-airbnb pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-airbnb"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-dark-900 mb-2">
                Rejoignez 4MyMind
              </h1>
              <p className="text-dark-600">
                Créez votre compte et commencez votre parcours bien-être
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 0 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <div className={`w-16 h-1 rounded-full ${
                  step >= 1 ? 'bg-accent' : 'bg-gray-200'
                }`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= 1 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
              </div>
            </div>

            {/* Step 1: Personal Info */}
            {step === 0 && (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={(e) => { e.preventDefault(); handleNext(); }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-dark-900 mb-2">
                      Prénom
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="input-airbnb pl-10"
                        placeholder="Votre prénom"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-dark-900 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="input-airbnb"
                      placeholder="Votre nom"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-900 mb-2">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input-airbnb pl-10"
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!isStep1Valid}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <span>Continuer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.form>
            )}

            {/* Step 2: Password & Terms */}
            {step === 1 && (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-dark-900 mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      className="input-airbnb pl-10 pr-10"
                      placeholder="Créez un mot de passe"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 hover:text-dark-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-dark-900 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      id="confirmPassword"
                      className="input-airbnb pl-10 pr-10"
                      placeholder="Confirmez votre mot de passe"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 hover:text-dark-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-accent focus:ring-accent border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="acceptTerms" className="text-sm text-dark-600">
                    J'accepte les{' '}
                    <Link to="/terms" className="text-accent hover:text-primary-600">
                      conditions d'utilisation
                    </Link>{' '}
                    et la{' '}
                    <Link to="/privacy" className="text-accent hover:text-primary-600">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 btn-secondary"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    disabled={!isStep2Valid || isLoading}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Création...</span>
                      </>
                    ) : (
                      <>
                        <span>Créer mon compte</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}

            {/* Login link */}
            <div className="mt-8 text-center">
              <p className="text-dark-600">
                Déjà un compte ?{' '}
                <Link
                  to="/login"
                  className="text-accent hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-dark-900 mb-4">
                Pourquoi rejoindre 4MyMind ?
              </h2>
              <p className="text-lg text-dark-600">
                Découvrez tous les avantages de notre plateforme de bien-être mental
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-dark-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary-600/10 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-dark-900">
                  Gratuit pour commencer
                </h3>
              </div>
              <p className="text-dark-600">
                Accédez gratuitement aux fonctionnalités de base et découvrez 
                comment 4MyMind peut vous aider dans votre parcours bien-être.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;