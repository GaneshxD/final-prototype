import React from 'react';
import { Activity, BarChart, Clock, Zap, Shield } from 'lucide-react';

const metrics = [
  {
    name: 'Traffic Status',
    value: 'Moderate',
    trend: '-12%',
    trendDown: true,
    description: 'Average congestion across all monitored areas',
    icon: Activity,
  },
  {
    name: 'Prediction Accuracy',
    value: '94.8%',
    trend: '+2.3%',
    trendDown: false,
    description: 'Last 24 hours prediction accuracy',
    icon: BarChart,
  },
  {
    name: 'API Usage',
    value: '842K',
    trend: '+15.4%',
    trendDown: false,
    description: 'API calls in the last 24 hours',
    icon: Zap,
  },
  {
    name: 'Response Time',
    value: '124ms',
    trend: '-8ms',
    trendDown: true,
    description: 'Average API response time',
    icon: Clock,
  },
  {
    name: 'System Health',
    value: '99.99%',
    trend: 'Optimal',
    trendDown: null,
    description: 'All systems operational',
    icon: Shield,
  },
];

export default function PremiumMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.name}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-neon-blue transition-all"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.name}</p>
              <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
            </div>
            <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <metric.icon className="h-6 w-6 text-blue-600 dark:text-neon-blue" />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">{metric.description}</p>
            {metric.trend && (
              <p
                className={`text-sm font-medium ${
                  metric.trendDown === null
                    ? 'text-gray-500 dark:text-gray-400'
                    : metric.trendDown
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-blue-600 dark:text-neon-blue'
                }`}
              >
                {metric.trend}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}