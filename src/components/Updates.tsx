import React from 'react';
import { ArrowRight } from 'lucide-react';

const updates = [
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
    title: 'New AI Algorithm Improves Accuracy by 40%',
    excerpt: 'Our latest update brings significant improvements to traffic prediction accuracy.',
    date: 'Oct 15, 2023'
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    title: 'Introducing Real-Time Congestion Alerts',
    excerpt: 'Stay ahead of traffic with instant notifications and alternative route suggestions.',
    date: 'Oct 10, 2023'
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    title: 'API Integration Now Available',
    excerpt: 'Connect TrafficAI with your existing systems using our new API endpoints.',
    date: 'Oct 5, 2023'
  }
];

export default function Updates() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Updates</h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Stay current with TrafficAI developments</p>
          </div>
          <button className="flex items-center text-blue-600 dark:text-neon-blue hover:text-blue-700 dark:hover:text-neon-pink transition-colors">
            View All Updates
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <div key={index} className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-neon-blue transition-colors">
              <div className="aspect-video">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-blue-600 dark:text-neon-pink text-sm mb-2">{update.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{update.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{update.excerpt}</p>
                <button className="text-blue-600 dark:text-neon-blue hover:text-blue-700 dark:hover:text-neon-pink transition-colors flex items-center">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}