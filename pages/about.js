import React from 'react';
import Header from '../components/Header';
import pon from '../public/pon.png';

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-10 mt-8 flex flex-col lg:flex-row items-center lg:items-stretch">
        <img src={pon} alt="Profile" className="rounded-full w-64 h-64 lg:mr-10 mb-6 lg:mb-0" />
        <div className="lg:flex-1">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-7 mb-4">
            Welcome to AiHubPro, your number one source for all things artificial intelligence. We're dedicated to giving you the very best of AI news, insights, and resources, with a focus on accuracy, depth, and practicality.
          </p>
          <p className="text-lg leading-7 mb-4">
            Founded in 2021 by a team of AI enthusiasts, AiHubPro has come a long way from its beginnings. When we first started out, our passion for AI drove us to start our own blog, and gave us the impetus to turn hard work and inspiration into to a booming online resource.
          </p>
          <p className="text-lg leading-7 mb-4">
            We hope you enjoy our website as much as we enjoy offering our services to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
