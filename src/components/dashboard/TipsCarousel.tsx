import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';

const tips = [
  {
    title: 'Optimal Camera Placement',
    description: 'Position cameras at a 45-degree angle for best traffic capture results.',
  },
  {
    title: 'Time Your Analysis',
    description: 'Analyze during peak hours (7-9 AM, 4-6 PM) for most valuable insights.',
  },
  {
    title: 'Regular Updates',
    description: 'Update your analysis every 30 minutes during high-traffic periods.',
  },
];

export default function TipsCarousel() {
  const [currentTip, setCurrentTip] = useState(0);

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length);
  };

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + tips.length) % tips.length);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-2 mb-4">
        <Lightbulb className="h-5 w-5 text-blue-600 dark:text-neon-blue" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Pro Tips</h2>
      </div>

      <div className="relative">
        <div className="min-h-[100px]">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            {tips[currentTip].title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {tips[currentTip].description}
          </p>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={prevTip}
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex space-x-2">
            {tips.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  index === currentTip
                    ? 'bg-blue-600 dark:bg-neon-blue'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextTip}
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}