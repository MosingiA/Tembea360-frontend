import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const { isDark } = useTheme();

  return (
    <section className={`pt-16 min-h-screen flex items-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            {/* Text Section */}
            <div className="space-y-6">
              <h1
                className={`text-4xl lg:text-5xl font-normal leading-tight ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Find your next adventure in
                <span className="text-blue-600 font-medium">
                  {' '}Kenya
                </span>
              </h1>

              <p
                className={`text-lg ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } max-w-lg`}
              >
                Discover amazing destinations, book tours, and create unforgettable memories
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/tours"
                  className={`px-6 py-3 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'} rounded-full text-sm font-medium hover:shadow-md transition-all duration-200`}
                >
                  Tours
                </Link>
                <Link
                  to="/explore"
                  className={`px-6 py-3 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'} rounded-full text-sm font-medium hover:shadow-md transition-all duration-200`}
                >
                  Destinations
                </Link>
                <Link
                  to="/booking"
                  className={`px-6 py-3 ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'} rounded-full text-sm font-medium hover:shadow-md transition-all duration-200`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="lg:col-span-2">
            <div
              className={`${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } rounded-2xl border shadow-lg p-6`}
            >
              <div className="space-y-4">
                {/* Main Search Input */}
                <div className="relative">
                  <Search
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search destinations, tours..."
                    className={`w-full pl-12 pr-4 py-4 text-lg border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      isDark
                        ? 'bg-gray-700 text-white placeholder-gray-400'
                        : 'bg-gray-50 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>

                {/* Quick Filters */}
                <div className="flex flex-wrap gap-2">
                  <button className={`px-4 py-2 text-sm rounded-full border ${
                    isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}>
                    <Calendar size={16} className="inline mr-2" />
                    Any dates
                  </button>
                  <button className={`px-4 py-2 text-sm rounded-full border ${
                    isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}>
                    <MapPin size={16} className="inline mr-2" />
                    All locations
                  </button>
                </div>

                {/* Search Button */}
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Search
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