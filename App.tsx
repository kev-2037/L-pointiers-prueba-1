import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Destinations from './components/Destinations';
import Web3Section from './components/Web3Section';
import AIConcierge from './components/AIConcierge';
import Testimonials from './components/Testimonials';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 antialiased bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Destinations />
        <Web3Section />
        <AIConcierge />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
