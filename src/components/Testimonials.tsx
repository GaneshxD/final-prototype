import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "TrafficAI has revolutionized how we manage traffic flow in our city. The real-time insights are invaluable.",
    author: "Sarah Chen",
    role: "Urban Planning Director",
    organization: "Smart City Initiative",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "The predictive analytics have helped us reduce emergency response times by 30%. A game-changer for public safety.",
    author: "Michael Rodriguez",
    role: "Emergency Services Coordinator",
    organization: "Metro Safety Department",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "Implementation was smooth, and the results were immediate. Our traffic optimization has never been better.",
    author: "Emily Watson",
    role: "Transportation Manager",
    organization: "Regional Transit Authority",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ff1f7122,#00d4ff22)] dark:opacity-50 opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Trusted by leading organizations worldwide</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-neon-blue transition-colors">
              <Quote className="h-8 w-8 text-blue-600 dark:text-neon-pink mb-4" />
              <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium">{testimonial.author}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 dark:text-neon-blue text-sm">{testimonial.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}