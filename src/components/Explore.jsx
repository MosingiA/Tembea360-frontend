import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Star, Clock, Users } from 'lucide-react';
import { getKenyaTouringSites, getInternationalDestinations } from '../services/tourismAPI';

const Explore = () => {
  const { isDark } = useTheme();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const kenyaSites = await getKenyaTouringSites();
        setDestinations(kenyaSites);
      } catch (error) {
        console.error('Failed to load destinations:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadDestinations();
  }, []);

  const fallbackDestinations = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      location: "Kenya",
      rating: 4.9,
      duration: "3-5 days",
      groupSize: "2-12 people",
      price: "$299",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
      description: "Experience the Great Migration and witness incredible wildlife in their natural habitat."
    }
  ];

  return (
    <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Explore Destinations
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Discover amazing places and create unforgettable memories with our curated experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(destinations.length > 0 ? destinations : fallbackDestinations).map((destination) => (
            <div
              key={destination.id}
              className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">${destination.price || '299'}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {destination.name}
                </h3>
                
                <div className={`flex items-center mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{destination.location || 'Kenya'}</span>
                </div>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className={`ml-1 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {destination.rating}
                    </span>
                  </div>
                  
                  <div className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Clock size={14} className="mr-1" />
                    <span>{destination.duration || '3-5 days'}</span>
                  </div>
                  
                  <div className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Users size={14} className="mr-1" />
                    <span>{destination.groupSize || '2-12 people'}</span>
                  </div>
                </div>
                
                <Link
                  to="/booking"
                  state={{ selectedDestination: destination }}
                  className="w-full block text-center py-3 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;