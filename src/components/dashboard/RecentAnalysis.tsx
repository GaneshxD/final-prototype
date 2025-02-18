import React from 'react';
import { MoreVertical, ArrowRight } from 'lucide-react';
import { useAnalyticsStore } from '../../stores/useAnalyticsStore';

export default function RecentAnalysis() {
  const { recentAnalyses } = useAnalyticsStore();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Analysis</h2>
        <button className="text-blue-600 dark:text-neon-blue hover:text-blue-700 dark:hover:text-neon-pink transition-colors flex items-center text-sm">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Image</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Date/Time</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Congestion</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Vehicles</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400"></th>
            </tr>
          </thead>
          <tbody>
            {recentAnalyses.map((analysis) => (
              <tr
                key={analysis.id}
                className="border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <img
                    src={analysis.thumbnail}
                    alt={`Analysis ${analysis.id}`}
                    className="h-8 w-8 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                  {analysis.date}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      parseInt(analysis.congestion) > 70
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                        : parseInt(analysis.congestion) > 40
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                    }`}
                  >
                    {analysis.congestion}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                  {analysis.vehicleCount}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}