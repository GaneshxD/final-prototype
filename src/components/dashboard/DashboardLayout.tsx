import React from 'react';
import { Activity, Search, Bell, ChevronDown, Upload, History, FileText, HelpCircle, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetricCards from './MetricCards';
import QuickUpload from './QuickUpload';
import RecentAnalysis from './RecentAnalysis';
import BasicInsights from './BasicInsights';
import DailyLimitTracker from './DailyLimitTracker';
import TipsCarousel from './TipsCarousel';
import PremiumFeatures from './PremiumFeatures';
import HelpResources from './HelpResources';

const navigation = [
  { name: 'Dashboard', icon: Activity, current: true },
  { name: 'Image Upload', icon: Upload, current: false },
  { name: 'Analysis History', icon: History, current: false },
  { name: 'My Reports', icon: FileText, current: false },
  { name: 'Help Center', icon: HelpCircle, current: false },
];

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-600 dark:text-neon-blue" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">TrafficAI</span>
            </div>

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search analyses, reports..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-neon-blue text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                to="/premium"
                className="bg-blue-600 dark:bg-neon-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-neon-blue/90 transition-colors"
              >
                Upgrade to Premium
              </Link>
              
              <button className="relative p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white dark:ring-gray-800" />
              </button>

              <button className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=32&h=32&q=80"
                  alt="User"
                  className="h-8 w-8 rounded-full"
                />
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-14">
            {navigation.map((item) => (
              <button
                key={item.name}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  item.current
                    ? 'border-blue-500 dark:border-neon-blue text-blue-600 dark:text-neon-blue'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <MetricCards />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <QuickUpload />
            <RecentAnalysis />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BasicInsights />
            <div className="space-y-8">
              <DailyLimitTracker />
              <TipsCarousel />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PremiumFeatures />
            </div>
            <HelpResources />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 TrafficAI. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
              <button className="hover:text-gray-900 dark:hover:text-white">Feedback</button>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}