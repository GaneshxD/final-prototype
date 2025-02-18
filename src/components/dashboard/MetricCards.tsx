import React from 'react';
import { Image, Activity, Clock, BarChart as ChartBar } from 'lucide-react';
import { useAnalyticsStore } from '../../stores/useAnalyticsStore';
import { useUploadStore } from '../../stores/useUploadStore';

export default function MetricCards() {
  const { imagesAnalyzed, averageCongestion, recentCongestionLevel } = useAnalyticsStore();
  const { uploadsToday } = useUploadStore();
  const maxUploads = 5;
  const remainingUploads = maxUploads - uploadsToday;

  const metrics = [
    {
      name: 'Images Analyzed',
      value: imagesAnalyzed.toString(),
      description: 'Last 30 days',
      icon: Image,
      trend: imagesAnalyzed > 0 ? '+1' : '0',
      trendUp: imagesAnalyzed > 0,
    },
    {
      name: 'Average Congestion',
      value: `${averageCongestion}%`,
      description: 'All analyses',
      icon: Activity,
      trend: averageCongestion > 0 ? `${averageCongestion}%` : '0%',
      trendUp: averageCongestion > 50,
    },
    {
      name: 'Recent Congestion Level',
      value: recentCongestionLevel,
      description: 'Last analysis',
      icon: Clock,
      trend: parseInt(recentCongestionLevel) > 70 ? 'High' : parseInt(recentCongestionLevel) > 40 ? 'Medium' : 'Low',
      trendUp: null,
    },
    {
      name: 'Remaining Analyses',
      value: remainingUploads.toString(),
      description: 'Resets daily',
      icon: ChartBar,
      trend: `${uploadsToday}/${maxUploads} used today`,
      trendUp: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.name}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-neon-blue transition-all"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{metric.name}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
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
                  metric.trendUp === null
                    ? 'text-gray-500 dark:text-gray-400'
                    : metric.trendUp
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
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