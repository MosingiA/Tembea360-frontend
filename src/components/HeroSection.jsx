import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <section className={`pt-16 min-h-screen flex items-center ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Discover Amazing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                {' '}Adventures
              </span>
            </h1>
            
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
              Explore breathtaking destinations, create unforgettable memories, and embark on the journey of a lifetime with Tembea360.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/explore"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Exploring
              </Link>
              <Link
                to="/tours"
                className={`px-8 py-4 border-2 ${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} rounded-xl font-semibold transition-all duration-300`}
              >
                View Tours
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl p-8`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Find Your Perfect Trip
              </h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="date"
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    />
                  </div>
                  
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                    <select className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
                      <option>Duration</option>
                      <option>1-3 days</option>
                      <option>4-7 days</option>
                      <option>1-2 weeks</option>
                      <option>2+ weeks</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Search Adventures
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;