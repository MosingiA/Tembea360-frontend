import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Loader } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getKenyaTouringSites, getInternationalDestinations } from '../services/tourismAPI';

const TopDestinations = () => {
  const { isDark } = useTheme();
  const [kenyaDestinations, setKenyaDestinations] = useState([]);
  const [internationalDestinations, setInternationalDestinations] = useState([]);
  const [currentInternationalIndex, setCurrentInternationalIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Comprehensive Kenya destinations data
  const kenyaDestinationsData = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      location: "Narok County, Kenya",
      rating: 4.9,
      price: "From $299",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
      description: "Famous for the Great Migration and Big Five wildlife",
      category: "Wildlife"
    },
    {
      id: 2,
      name: "Mount Kenya National Park",
      location: "Central Kenya",
      rating: 4.8,
      price: "From $450",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431?w=400&h=300&fit=crop",
      description: "Africa's second highest mountain with diverse ecosystems",
      category: "Adventure"
    },
    {
      id: 3,
      name: "Lamu Old Town",
      location: "Lamu County, Kenya",
      rating: 4.7,
      price: "From $199",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "UNESCO World Heritage Site with Swahili culture",
      category: "Cultural"
    },
    {
      id: 4,
      name: "Diani Beach",
      location: "Kwale County, Kenya",
      rating: 4.6,
      price: "From $249",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      description: "Pristine white sand beach with coral reefs",
      category: "Beach"
    },
    {
      id: 5,
      name: "Amboseli National Park",
      location: "Kajiado County, Kenya",
      rating: 4.8,
      price: "From $350",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop",
      description: "Spectacular views of Mount Kilimanjaro and elephants",
      category: "Wildlife"
    },
    {
      id: 6,
      name: "Samburu National Reserve",
      location: "Samburu County, Kenya",
      rating: 4.7,
      price: "From $320",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
      description: "Unique wildlife including Grevy's zebra and reticulated giraffe",
      category: "Wildlife"
    },
    {
      id: 7,
      name: "Lake Nakuru National Park",
      location: "Nakuru County, Kenya",
      rating: 4.5,
      price: "From $180",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop",
      description: "Famous for flamingos and rhino sanctuary",
      category: "Wildlife"
    },
    {
      id: 8,
      name: "Tsavo National Parks",
      location: "Eastern Kenya",
      rating: 4.6,
      price: "From $280",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
      description: "Kenya's largest national park with red elephants",
      category: "Wildlife"
    }
  ];

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        const [kenyaSites, internationalSites] = await Promise.all([
          getKenyaTouringSites(),
          getInternationalDestinations()
        ]);
        
        console.log('Kenya sites loaded:', kenyaSites.length);
        console.log('International sites loaded:', internationalSites.length);
        
        setKenyaDestinations(kenyaSites.slice(0, 8));
        setInternationalDestinations(internationalSites);
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err);
        setError('Failed to fetch destinations');
        setKenyaDestinations(kenyaDestinationsData);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  useEffect(() => {
    if (internationalDestinations.length > 0) {
      const interval = setInterval(() => {
        setCurrentInternationalIndex(prev => 
          (prev + 6) % internationalDestinations.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [internationalDestinations]);

  const getCurrentInternationalDestinations = () => {
    return internationalDestinations.slice(currentInternationalIndex, currentInternationalIndex + 6);
  };

  const DestinationCard = ({ destination }) => (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}>
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-semibold text-gray-900">${destination.price || 'From $299'}</span>
        </div>
        {destination.category && (
          <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-xs font-semibold text-white">{destination.category}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {destination.name}
        </h3>
        
        {destination.description && (
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3 line-clamp-2`}>
            {destination.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <MapPin size={14} className="mr-1" />
            <span className="text-xs">{destination.location}</span>
          </div>
          
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={14} />
            <span className={`ml-1 text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {destination.rating}
            </span>
          </div>
        </div>
        
        <Link
          to="/booking"
          className="w-full block text-center py-2.5 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm"
        >
          Book Now
        </Link>
      </div>
    </div>
  );

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-green-500" size={48} />
            <span className={`ml-4 text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Loading Kenya destinations...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className={`${isDark ? 'bg-red-900/20' : 'bg-red-50'} border border-red-200 rounded-lg p-4 mb-8`}>
            <p className={`${isDark ? 'text-red-300' : 'text-red-800'}`}>
              {error}. Showing cached destinations.
            </p>
          </div>
        )}

        {/* Top Kenya Destinations */}
        {!loading && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Top Destinations in Kenya
              </h2>
              <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Discover 8 featured destinations from our collection of 40 Kenya sites
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kenyaDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        )}

        {/* Top International Destinations */}
        <div>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Top International Destinations
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Explore 6 rotating destinations from our collection of 30 global sites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentInternationalDestinations().map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;