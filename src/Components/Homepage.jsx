import React from 'react';
import { useTheme } from '../context/ThemeContext';
import HeroSection from '../components/HeroSection';
import SubscriptionPlans from '../components/SubscriptionPlans';
import ServicesSection from '../components/ServicesSection';
import FeaturedProfessionals from '../components/FeaturedProfessionals';
import TestimonialsSection from '../components/TestimonialsSection';
import HowTembea360Works from '../components/HowTembea360Works';
import TopDestinations from '../components/TopDestinations';
import Footer from '../components/Footer';

const Homepage = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <HeroSection />
      <FeaturedProfessionals />
      <TopDestinations />
      <ServicesSection />
      <SubscriptionPlans />
      <TestimonialsSection />
      <HowTembea360Works />
      <Footer />
    </div>
  );
};

export default Homepage;
