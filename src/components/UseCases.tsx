import React, { useState } from 'react';
import { Building2, Car, Ambulance } from 'lucide-react';

const useCases = [
  {
    id: 'urban',
    icon: <Building2 className="h-6 w-6" />,
    title: 'Urban Planning',
    description: 'Optimize city infrastructure and development based on comprehensive traffic analysis.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80'
  },
  {
    id: 'transport',
    icon: <Car className="h-6 w-6" />,
    title: 'Transportation',
    description: 'Improve public transit routes and reduce congestion with real-time traffic insights.',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80'
  },
  {
    id: 'emergency',
    icon: <Ambulance className="h-6 w-6" />,
    title: 'Emergency Services',
    description: 'Optimize emergency response routes and reduce response times with predictive analytics.',
    image: 'https://images.unsplash.com/photo-1517358232530-e95b57b2a892?auto=format&fit=crop&q=80'
  }
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('urban');
  const activeCase = useCases.find(uc => uc.id === activeTab);

  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Industry Applications</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Discover how BATO transforms different sectors</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="flex flex-col space-y-2">
              {useCases.map(useCase => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveTab(useCase.id)}
                  className={`flex items-center p-4 rounded-lg transition-all ${
                    activeTab === useCase.id
                      ? 'bg-blue-50 dark:bg-neon-pink/10 border border-blue-500 dark:border-neon-pink text-gray-900 dark:text-white'
                      : 'bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-500 dark:hover:border-neon-blue'
                  }`}
                >
                  <span className={`${
                    activeTab === useCase.id ? 'text-blue-600 dark:text-neon-pink' : 'text-blue-500 dark:text-neon-blue'
                  }`}>
                    {useCase.icon}
                  </span>
                  <span className="ml-3 font-medium">{useCase.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            {activeCase && (
              <div className="bg-white dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img
                    src={activeCase.image}
                    alt={activeCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{activeCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{activeCase.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}