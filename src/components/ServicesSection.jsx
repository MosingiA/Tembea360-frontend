import React from 'react';
import { Camera, Map, Users, Shield, Clock, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ServicesSection = () => {
  const { isDark } = useTheme();

  const services = [
    {
      icon: Map,
      title: "Guided Tours",
      description: "Expert local guides to show you hidden gems and share fascinating stories"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning moments with professional photography guidance"
    },
    {
      icon: Users,
      title: "Group Adventures",
      description: "Join like-minded travelers for unforgettable group experiences"
    },
    {
      icon: Shield,
      title: "Safe Travel",
      description: "Your safety is our priority with comprehensive insurance coverage"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help during your journey"
    },
    {
      icon: Award,
      title: "Premium Experience",
      description: "Luxury accommodations and exclusive access to unique destinations"
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Why Choose Tembea360?
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            We provide comprehensive travel services to make your adventure seamless and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`${isDark ? 'bg-gray-900' : 'bg-white'} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="text-white" size={32} />
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;