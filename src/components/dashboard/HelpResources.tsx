import React from 'react';
import { BookOpen, Video, MessageCircle, FileText } from 'lucide-react';

const resources = [
  {
    icon: BookOpen,
    title: 'Getting Started Guide',
    description: 'Learn the basics of traffic analysis',
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step visual guides',
  },
  {
    icon: MessageCircle,
    title: 'Live Support',
    description: 'Get help from our experts',
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Detailed feature guides',
  },
];

export default function HelpResources() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Help & Resources</h2>

      <div className="space-y-4">
        {resources.map((resource) => (
          <button
            key={resource.title}
            className="w-full flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left"
          >
            <resource.icon className="h-5 w-5 text-blue-600 dark:text-neon-blue mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">{resource.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">{resource.description}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm font-medium flex items-center justify-center">
          <MessageCircle className="h-4 w-4 mr-2" />
          Contact Support
        </button>
      </div>
    </div>
  );
}