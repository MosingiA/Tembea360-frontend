import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TopDestinations = () => {
  const { isDark } = useTheme();

  const localDestinations = [
    {
      id: 1,
      name: "Maasai Mara",
      location: "Kenya",
      rating: 4.9,
      price: "From $299",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Mount Kenya",
      location: "Kenya",
      rating: 4.8,
      price: "From $450",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Lamu Island",
      location: "Kenya",
      rating: 4.7,
      price: "From $199",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Diani Beach",
      location: "Kenya",
      rating: 4.6,
      price: "From $249",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    }
  ];

  const internationalDestinations = [
    {
      id: 1,
      name: "Serengeti",
      location: "Tanzania",
      rating: 4.9,
      price: "From $599",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Victoria Falls",
      location: "Zambia/Zimbabwe",
      rating: 4.8,
      price: "From $399",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Zanzibar",
      location: "Tanzania",
      rating: 4.7,
      price: "From $349",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Kruger Park",
      location: "South Africa",
      rating: 4.8,
      price: "From $499",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop"
    }
  ];

  const DestinationCard = ({ destination }) => (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}>
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-semibold text-gray-900">{destination.price}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {destination.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{destination.location}</span>
          </div>
          
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className={`ml-1 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {destination.rating}
            </span>
          </div>
        </div>
        
        <Link
          to="/booking"
          className="mt-4 w-full block text-center py-3 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Local Destinations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Top Destinations in Kenya
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Discover the most popular destinations in Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>

        {/* Top International Destinations */}
        <div>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Top International Destinations
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Explore amazing destinations across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;