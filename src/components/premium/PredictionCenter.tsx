import React from 'react';
import { Clock, TrendingUp, RefreshCcw } from 'lucide-react';

const predictions = [
  { time: '15min', congestion: '45%', confidence: '95%' },
  { time: '30min', congestion: '62%', confidence: '89%' },
  { time: '1hr', congestion: '78%', confidence: '82%' },
];

export default function PredictionCenter() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Predictions</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Next hour forecast</p>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
          <RefreshCcw className="h-5 w-5" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {predictions.map((prediction) => (
          <div key={prediction.time} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600 dark:text-neon-blue" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">In {prediction.time}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Confidence: {prediction.confidence}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-blue-600 dark:text-neon-blue" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">{prediction.congestion}</span>
            </div>
          </div>
        ))}

        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-neon-blue px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm font-medium">
            View Detailed Forecast
          </button>
        </div>
      </div>
    </div>
  );
}