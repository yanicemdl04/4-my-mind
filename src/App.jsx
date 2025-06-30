import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ScrollToTop from './components/ui/ScrollToTop';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Lazy loading des pages
const HomePage = lazy(() => import('./pages/accueil/HomePage'));
const ChatbotPage = lazy(() => import('./pages/chatbot/ChatbotPage'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));
const LoginPage = lazy(() => import('./pages/login/LoginPage'));
const SignInPage = lazy(() => import('./pages/login/SignInPage'));
const JournalPage = lazy(() => import('./pages/journal/JournalPage'));
const ExercisesPage = lazy(() => import('./pages/exercises/ExercisesPage'));
const MoodTrackerPage = lazy(() => import('./pages/mood-tracker/MoodTrackerPage'));
const MenuPage = lazy(() => import('./pages/menu/MenuPage'));

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <NotificationProvider>
          <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
            <Suspense fallback={<LoadingSpinner />}>
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
                <Route path="/menu" element={<MenuPage />} />
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-amber-800 dark:text-amber-200 mb-4">
                        Page non trouvée
                      </h1>
                      <p className="text-lg text-amber-600 dark:text-amber-400">
                        La page que vous cherchez n'existe pas.
                      </p>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
            <ScrollToTop />
          </div>
        </NotificationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;