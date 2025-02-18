import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import Updates from '../components/Updates';
import PreFooterCTA from '../components/PreFooterCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Updates />
      <PreFooterCTA />
      <Footer />
    </div>
  );
}