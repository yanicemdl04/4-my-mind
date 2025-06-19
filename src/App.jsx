import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/accueil/HomePage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import LoginPage from './pages/login/LoginPage';
import SignInPage from './pages/login/SignInPage';
import ChatbotPage from './pages/chatbot/ChatbotPage';
import JournalPage from './pages/journal/JournalPage';
import ExercisesPage from './pages/exercises/ExercisesPage';
import MoodTrackerPage from './pages/mood-tracker/MoodTrackerPage';
import MenuPage from './pages/menu/MenuPage';
import NotFound from './pages/Notfound';
import Navigation from './pages/Navigation';
import CircularWithValueLabel from './components/screenloading/screen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un chargement de 2 secondes
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CircularWithValueLabel />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/exercises" element={<ExercisesPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/mood-tracker" element={<MoodTrackerPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;