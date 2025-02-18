import React from 'react';
import { BarChart, PieChart } from 'lucide-react';

export default function BasicInsights() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Basic Traffic Insights</h2>
        <button className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
          <PieChart className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Traffic Density Chart */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Traffic Density by Time</h3>
          <div className="h-48 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            <div className="h-full flex items-end justify-between space-x-2">
              {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((height, index) => (
                <div key={index} className="flex-1">
                  <div
                    style={{ height: '0%' }}
                    className="bg-blue-500 dark:bg-neon-blue rounded-t transition-all hover:bg-blue-600 dark:hover:bg-neon-pink"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
          </div>
        </div>

        {/* Vehicle Distribution */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Vehicle Distribution</h3>
          <div className="space-y-3">
            {[
              { type: 'Cars', percentage: 0 },
              { type: 'Trucks', percentage: 0 },
              { type: 'Buses', percentage: 0 },
              { type: 'Others', percentage: 0 },
            ].map((vehicle) => (
              <div key={vehicle.type}>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                  <span>{vehicle.type}</span>
                  <span>{vehicle.percentage}%</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 dark:bg-neon-blue rounded-full"
                    style={{ width: `${vehicle.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button className="text-blue-600 dark:text-neon-blue hover:text-blue-700 dark:hover:text-neon-pink transition-colors text-sm font-medium">
          View Detailed Analysis (Premium)
        </button>
      </div>
    </div>
  );
}