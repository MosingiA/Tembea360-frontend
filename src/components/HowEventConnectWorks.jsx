import React from 'react';
import { Search, Calendar, MapPin, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HowEventConnectWorks = () => {
  const { isDark } = useTheme();

  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Browse through our curated collection of amazing destinations and experiences"
    },
    {
      icon: Calendar,
      title: "Plan",
      description: "Choose your dates, customize your itinerary, and select your preferred guide"
    },
    {
      icon: MapPin,
      title: "Book",
      description: "Secure your adventure with our easy booking system and flexible payment options"
    },
    {
      icon: Camera,
      title: "Experience",
      description: "Embark on your journey and create unforgettable memories that last a lifetime"
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            How Tembea360 Works
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Your journey to amazing adventures is just four simple steps away
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`flex items-center justify-center w-20 h-20 mx-auto ${isDark ? 'bg-gray-800' : 'bg-gray-100'} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-green-500" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-400 to-green-700 opacity-30"></div>
                  )}
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowEventConnectWorks;