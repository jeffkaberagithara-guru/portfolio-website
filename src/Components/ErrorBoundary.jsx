import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black px-6">
          <div className="text-center max-w-md">
            <p className="text-orange-500 font-bold text-5xl mb-4">Oops</p>
            <p className="text-gray-300 text-lg mb-2">Something went wrong loading this page.</p>
            <p className="text-gray-500 text-sm mb-8">Please refresh to try again.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-transform duration-200 hover:scale-105"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
