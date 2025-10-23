import React from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SubscriptionPlans = () => {
  const { isDark } = useTheme();

  const plans = [
    {
      name: "Explorer",
      price: "$29",
      period: "/month",
      features: [
        "Access to basic tours",
        "Community support",
        "Mobile app access",
        "Basic travel insurance"
      ],
      popular: false
    },
    {
      name: "Adventurer",
      price: "$59",
      period: "/month",
      features: [
        "All Explorer features",
        "Premium tours access",
        "Priority booking",
        "24/7 customer support",
        "Comprehensive travel insurance",
        "Photography workshops"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      features: [
        "All Adventurer features",
        "Unlimited tour access",
        "Personal travel consultant",
        "Luxury accommodations",
        "Private group tours",
        "Custom itinerary planning"
      ],
      popular: false
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Adventure Plan
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Select the perfect plan for your travel needs and start exploring today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-400 to-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-green-500 mr-3" size={20} />
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-400 to-green-700 text-white hover:shadow-lg'
                      : isDark
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;