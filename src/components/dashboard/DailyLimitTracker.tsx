import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUploadStore } from '../../stores/useUploadStore';

export default function DailyLimitTracker() {
  const { uploadsToday } = useUploadStore();
  const total = 5;
  const percentage = (uploadsToday / total) * 100;
  const remaining = total - uploadsToday;

  // Calculate time until reset
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const msUntilReset = tomorrow.getTime() - now.getTime();
  const hoursUntilReset = Math.floor(msUntilReset / (1000 * 60 * 60));
  const minutesUntilReset = Math.floor((msUntilReset % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Daily Usage</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {uploadsToday}/{total} analyses used today
          </p>
        </div>
        <AlertCircle className="h-5 w-5 text-blue-600 dark:text-neon-blue" />
      </div>

      <div className="mt-4">
        <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 dark:bg-neon-blue rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          {remaining > 0 
            ? `${remaining} analyses remaining`
            : 'Daily limit reached'
          }
          {' • '}
          Resets in {hoursUntilReset}h {minutesUntilReset}m
        </p>
      </div>

      <Link
        to="/premium"
        className="mt-4 w-full bg-blue-50 dark:bg-neon-blue/10 text-blue-600 dark:text-neon-blue px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-neon-blue/20 transition-colors text-sm font-medium inline-block text-center"
      >
        Upgrade for Unlimited Analysis
      </Link>
    </div>
  );
}