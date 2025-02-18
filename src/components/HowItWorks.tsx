import React from 'react';
import { Upload, BarChart3, Zap } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Three simple steps to transform your traffic analysis</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Upload Step */}
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-6 mx-auto w-48 h-48 flex items-center justify-center">
              <Upload className="w-16 h-16 text-blue-600 dark:text-neon-blue" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Upload Footage</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Connect your cameras or upload video footage</p>
            <button className="text-blue-600 dark:text-neon-blue hover:text-blue-700 dark:hover:text-neon-pink transition-colors font-medium">
              Learn More
            </button>
          </div>

          {/* Analysis Step */}
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-6 mx-auto w-48 h-48 flex items-center justify-center">
              <BarChart3 className="w-16 h-16 text-blue-600 dark:text-neon-blue" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI Analysis</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Our AI processes and analyzes traffic patterns</p>
            <button className="text-blue-600 dark:text-neon-blue hover:text-blue-700 dark:hover:text-neon-pink transition-colors font-medium">
              Learn More
            </button>
          </div>

          {/* Results Step */}
          <div className="text-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-6 mx-auto w-48 h-48 flex items-center justify-center">
              <Zap className="w-16 h-16 text-blue-600 dark:text-neon-blue" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Results</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Receive detailed insights and recommendations</p>
            <button className="text-blue-600 dark:text-neon-blue hover:text-blue-700 dark:hover:text-neon-pink transition-colors font-medium">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Free</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">✓</span>
                Basic Analysis
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-neon-blue/10 rounded-xl p-6 border border-blue-200 dark:border-neon-blue">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Premium</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="mr-2">✓</span>
                Advanced Analytics
              </li>
            </ul>
            <button className="mt-4 w-full bg-blue-600 dark:bg-neon-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-neon-blue/90 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}