import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state if an error occurs
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error details (optional)
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-6">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong.</h1>
          <p className="text-lg mb-2">We encountered an unexpected error.</p>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

