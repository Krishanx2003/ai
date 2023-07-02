import React from 'react';

import pon from '../public/pon.png';
import Hero from '@/components/About/Hero';
import Features from '@/components/About/features';
import FeaturesBlocks from '@/components/About/features-block';
import Testimonials from '@/components/About/testimonial';

const About = () => {
  return (
    <div>
     
     <Hero />
     <Features />
     <FeaturesBlocks />
     <Testimonials />
    </div>
  );
};

export default About;
