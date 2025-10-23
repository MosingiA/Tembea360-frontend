import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TestimonialsSection = () => {
  const { isDark } = useTheme();

  const testimonials = [
    {
      name: "David Martinez",
      location: "Spain",
      rating: 5,
      text: "Tembea360 made my Kenya safari absolutely incredible. The guides were knowledgeable and the experience was beyond my expectations!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      location: "Canada",
      rating: 5,
      text: "The cultural tours in Lamu were fascinating. I learned so much about the local history and traditions. Highly recommend!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      location: "Australia",
      rating: 5,
      text: "Professional service, amazing destinations, and unforgettable memories. Tembea360 exceeded all my expectations!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            What Our Travelers Say
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Real experiences from real travelers who chose Tembea360 for their adventures
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${isDark ? 'bg-gray-900' : 'bg-white'} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative`}
            >
              <Quote className="text-green-500 mb-4" size={32} />
              
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
              
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;