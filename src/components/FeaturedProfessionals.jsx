import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FeaturedProfessionals = () => {
  const { isDark } = useTheme();

  const professionals = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Adventure Guide",
      location: "Nairobi, Kenya",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      price: "$50/day"
    },
    {
      id: 2,
      name: "Michael Chen",
      specialty: "Wildlife Expert",
      location: "Maasai Mara",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      price: "$75/day"
    },
    {
      id: 3,
      name: "Emma Wilson",
      specialty: "Cultural Guide",
      location: "Lamu, Kenya",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      price: "$45/day"
    }
  ];

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured Tour Guides
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Connect with experienced local guides who will make your journey unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional) => (
            <div
              key={professional.id}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
            >
              <div className="relative">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">{professional.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {professional.name}
                </h3>
                
                <p className="text-blue-500 font-medium mb-2">{professional.specialty}</p>
                
                <div className={`flex items-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{professional.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className={`ml-1 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {professional.rating}
                    </span>
                    <span className={`ml-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      ({professional.reviews} reviews)
                    </span>
                  </div>
                  
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfessionals;