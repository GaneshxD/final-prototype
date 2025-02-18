import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PreFooterCTA() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 dark:from-neon-pink/20 dark:to-neon-blue/20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <Zap className="h-12 w-12 text-blue-600 dark:text-neon-pink mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Traffic Management?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of organizations already using TrafficAI to optimize their traffic flow and make data-driven decisions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/register"
              className="bg-blue-600 dark:bg-neon-pink text-white px-8 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-neon-pink/90 transition-colors flex items-center"
            >
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button
              onClick={() => window.location.href = 'mailto:sales@trafficai.com'}
              className="border border-blue-500 dark:border-neon-blue text-blue-600 dark:text-neon-blue px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-neon-blue/10 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}