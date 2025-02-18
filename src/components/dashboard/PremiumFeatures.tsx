import React from 'react';
import { Zap, BarChart, Clock, Map } from 'lucide-react';

const features = [
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Deep dive into traffic patterns with AI-powered insights and predictions.',
  },
  {
    icon: Clock,
    title: 'Real-time Monitoring',
    description: 'Get instant alerts and updates on traffic conditions as they happen.',
  },
  {
    icon: Map,
    title: 'Custom Reports',
    description: 'Generate detailed reports with custom parameters and visualizations.',
  },
];

export default function PremiumFeatures() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-blue-200 dark:border-gray-600">
      <div className="flex items-center space-x-2 mb-6">
        <Zap className="h-6 w-6 text-blue-600 dark:text-neon-blue" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Premium Features</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white dark:bg-gray-800/50 rounded-lg p-4 border border-blue-200 dark:border-gray-600"
          >
            <feature.icon className="h-6 w-6 text-blue-600 dark:text-neon-blue mb-3" />
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-600 dark:bg-neon-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-neon-blue/90 transition-colors">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}