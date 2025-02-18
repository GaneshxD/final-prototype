import React from 'react';
import { LineChart, Clock, Zap } from 'lucide-react';

const features = [
  {
    icon: <LineChart className="h-8 w-8 text-blue-600 dark:text-neon-blue" />,
    title: "Advanced Analytics",
    description: "Get detailed insights into traffic patterns with our AI-powered analysis engine."
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600 dark:text-neon-blue" />,
    title: "Real-time Monitoring",
    description: "Monitor traffic conditions in real-time with instant updates and alerts."
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600 dark:text-neon-blue" />,
    title: "Quick Implementation",
    description: "Set up and start analyzing traffic patterns in minutes, not days."
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose TrafficAI?</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Powerful features to transform your traffic management</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-lg dark:hover:border-neon-blue transition-all bg-white dark:bg-gray-800/50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-gray-800 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}