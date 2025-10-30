import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const GuideSubscriptionPlans = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    // Store selected plan in localStorage for payment page
    localStorage.setItem('selectedPlan', JSON.stringify(plan));
    navigate('/payment');
  };

  const plans = [
    {
      name: "Starter Guide",
      price: "$49",
      period: "/month",
      features: [
        "Create up to 5 tour listings",
        "Basic profile customization",
        "Customer messaging system",
        "Payment processing",
        "Mobile app access"
      ],
      popular: false,
      hoverColor: "from-blue-400 to-blue-600"
    },
    {
      name: "Professional Guide",
      price: "$99",
      period: "/month",
      features: [
        "Unlimited tour listings",
        "Advanced profile features",
        "Priority customer support",
        "Analytics dashboard",
        "Marketing tools",
        "Commission-free bookings"
      ],
      popular: true,
      hoverColor: "from-green-400 to-green-600"
    },
    {
      name: "Elite Guide",
      price: "$199",
      period: "/month",
      features: [
        "All Professional features",
        "Featured listing placement",
        "Personal account manager",
        "Custom branding options",
        "API access",
        "White-label solutions"
      ],
      popular: false,
      hoverColor: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <div className={`min-h-screen pt-16 ${isDark ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900' : 'bg-gradient-to-br from-cyan-100 via-pink-100 to-purple-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Professional Guide Subscriptions
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Choose the perfect plan to showcase your expertise and grow your tour guide business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
              } ${
                hoveredPlan === index 
                  ? `shadow-2xl -translate-y-2 bg-gradient-to-br ${plan.hoverColor}` 
                  : isDark ? 'bg-gray-800' : 'bg-white'
              }`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              onClick={() => handlePlanSelect(plan)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-400 to-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-4 ${
                  hoveredPlan === index ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${
                    hoveredPlan === index ? 'text-white' : isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`${
                    hoveredPlan === index ? 'text-gray-100' : isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`mr-3 ${
                        hoveredPlan === index ? 'text-white' : 'text-green-500'
                      }`} size={20} />
                      <span className={`${
                        hoveredPlan === index ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlanSelect(plan);
                  }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-400 to-green-700 text-white hover:shadow-lg hover:from-green-500 hover:to-green-800'
                      : isDark
                      ? 'bg-gray-700 text-white hover:bg-gray-600 hover:shadow-md'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md'
                  } ${
                    hoveredPlan === index ? 'scale-105' : ''
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideSubscriptionPlans;