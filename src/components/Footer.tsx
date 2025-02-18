import React from 'react';
import { Activity, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Activity className="h-8 w-8 text-blue-600 dark:text-neon-pink" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">BATO</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Transforming Nepal's traffic management with AI-powered insights and real-time analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Use Cases</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">API Reference</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-neon-blue text-gray-900 dark:text-white"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 dark:bg-neon-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-neon-blue/90 transition-colors flex items-center justify-center"
              >
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © 2024 BATO. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-neon-blue transition-colors">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}