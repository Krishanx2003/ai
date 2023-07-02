import React from 'react';

import pon from '../public/pon.png';
import Hero from '@/components/landing/Hero';
import CTA from '@/components/landing/CTA';
import Features from '@/components/landing/Features';
import VisualFeatures from '@/components/landing/VisualFeatures';
import FAQs from '@/components/landing/FAQs';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
     
     <Hero />
     <CTA />
     <Features />
     <VisualFeatures />
     <FAQs />
    </div>
  );
};

export default Home;
