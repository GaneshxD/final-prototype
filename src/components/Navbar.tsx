import React from 'react';
import { Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  if (isAuthPage) return null;

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark-100/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Activity className="h-8 w-8 text-neon-blue dark:text-neon-pink" />
              <span className="ml-2 text-xl font-bold gradient-text">BATO</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-pink transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-pink transition-colors">Pricing</a>
            <a href="#docs" className="text-gray-600 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-pink transition-colors">Documentation</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <Link 
              to="/login" 
              className="text-gray-600 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-pink transition-colors px-3 py-2"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-neon-blue dark:bg-neon-pink text-white px-4 py-2 rounded-lg hover:shadow-neon-glow dark:hover:shadow-neon-pink-glow transition-all"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}