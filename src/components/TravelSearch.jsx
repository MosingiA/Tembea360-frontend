import React, { useState } from 'react';
import { Search, MapPin, Star, Hotel } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TravelSearch = () => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Mock search results
    setSearchResults({
      hotels: [
        {
          id: 1,
          name: `${searchQuery} Safari Lodge`,
          rating: 4.5,
          price: 350,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          location: searchQuery,
          description: `Luxury accommodation in ${searchQuery}`
        }
      ]
    });
  };

  return (
    <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Travel Search
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Find hotels and activities for your destination
          </p>
        </div>

        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 mb-8`}>
          <form onSubmit={handleSearch}>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations..."
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {searchResults && (
          <div>
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Results for "{searchQuery}"
            </h2>
            
            {searchResults.hotels?.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.hotels.map((hotel) => (
                  <div key={hotel.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {hotel.name}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                        {hotel.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          <MapPin size={14} className="mr-1" />
                          <span className="text-xs">{hotel.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="text-yellow-400 fill-current" size={14} />
                          <span className={`ml-1 text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {hotel.rating}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          ${hotel.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelSearch;