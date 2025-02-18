import React from 'react';
import { CheckCircle, AlertCircle, Database, Cloud, Cpu } from 'lucide-react';

const services = [
  { name: 'API Gateway', status: 'operational', icon: Cloud },
  { name: 'Database', status: 'operational', icon: Database },
  { name: 'ML Pipeline', status: 'operational', icon: Cpu },
  { name: 'Analytics', status: 'degraded', icon: AlertCircle },
];

export default function SystemStatus() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">System Status</h2>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <service.icon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {service.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {service.status === 'operational' ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-green-500">Operational</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                    <span className="text-sm text-yellow-500">Degraded</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm font-medium">
            View System Metrics
          </button>
        </div>
      </div>
    </div>
  );
}