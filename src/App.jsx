import React from 'react';
import './App.css';  // Import the CSS file
import appStoreImage from '../public/appstore.webp'; // Replace with your image path
import playStoreImage from '../public/googleplay.webp'; // Replace with your image path
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Hero3 from './components/HEro3';
import Testimonials from './components/Testimonials';
import ContactUs from './components/Contact';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Hero3/>
      <Testimonials/>
      <ContactUs/>
    </div>
  );
};

export default LandingPage;
