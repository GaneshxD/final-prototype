import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558369178-6556d97855d0?auto=format&fit=crop&q=80"
          alt="Kathmandu traffic"
          className="w-full h-full object-cover opacity-10 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-blue-900/30 dark:from-blue-600/20 dark:to-blue-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Smart Traffic Analysis for Nepal's Roads
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Transform traffic management with AI-powered insights. Get accurate, real-time analysis for smarter urban planning and traffic optimization in Nepal.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/register" 
              className="bg-blue-600 dark:bg-neon-blue text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-neon-blue/90 transition-colors flex items-center"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/premium" 
              className="border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              See Premium Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}