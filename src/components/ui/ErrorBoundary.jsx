import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-amber-800 mb-4">
              Oups ! Une erreur s'est produite
            </h1>
            
            <p className="text-amber-600 mb-6">
              Nous nous excusons pour ce désagrément. Veuillez rafraîchir la page ou réessayer plus tard.
            </p>
            
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-300 to-amber-400 hover:from-yellow-400 hover:to-amber-500 text-amber-800 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;