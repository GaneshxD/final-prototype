import React from 'react';
import { Filter, Save, Download, Play } from 'lucide-react';

export default function AnalysisBuilder() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Custom Analysis Builder</h2>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Range
            </label>
            <select className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white">
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Custom range</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Location
            </label>
            <select className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white">
              <option>All locations</option>
              <option>Downtown</option>
              <option>Highway 101</option>
              <option>West Bridge</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Metrics
            </label>
            <select className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white">
              <option>All metrics</option>
              <option>Traffic density</option>
              <option>Average speed</option>
              <option>Vehicle types</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
            <Filter className="h-4 w-4" />
            <span>More Filters</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
            <Save className="h-4 w-4" />
            <span>Save Query</span>
          </button>

          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>

          <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 dark:bg-neon-blue text-white rounded-lg hover:bg-blue-700 dark:hover:bg-neon-blue/90">
            <Play className="h-4 w-4" />
            <span>Run Analysis</span>
          </button>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Configure your analysis parameters and click "Run Analysis" to generate insights
          </p>
        </div>
      </div>
    </div>
  );
}