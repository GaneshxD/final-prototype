import React from 'react';
import { Layers, ZoomIn, ZoomOut, Clock } from 'lucide-react';

export default function TrafficMap() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Real-time Traffic Map</h2>
      </div>
      
      <div className="relative h-[500px] bg-gray-100 dark:bg-gray-700">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
          alt="Map"
          className="w-full h-full object-cover opacity-50"
        />
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <ZoomIn className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <ZoomOut className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <Layers className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Time Slider */}
        <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            <Clock className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <input
              type="range"
              className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
              min="0"
              max="100"
              defaultValue="100"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}