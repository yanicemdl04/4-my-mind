import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/accueil/HomePage';
import ChatbotPage from './pages/chatbot/ChatbotPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import LoginPage from './pages/login/LoginPage';
import SignInPage from './pages/SignIn/SignInPage';
import JournalPage from './pages/journal/JournalPage';
import ExercisesPage from './pages/exercises/ExercisesPage';
import MoodTrackerPage from './pages/mood-tracker/MoodTrackerPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/exercises" element={<ExercisesPage />} />
      <Route path="/mood-tracker" element={<MoodTrackerPage />} />
      <Route path="*" element={<div>Page non trouvée</div>} />
    </Routes>
  );
};

export default App;