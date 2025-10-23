import React from 'react';
import { MapPin, Star, Clock, Users, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const DestinationCard = ({ destination, onBook, onViewDetails }) => {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}>
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            destination.featured 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
              : isDark ? 'bg-gray-700 text-gray-300' : 'bg-white/90 text-gray-700'
          }`}>
            {destination.featured ? 'Featured' : destination.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-semibold text-gray-900">{destination.price}</span>
        </div>
        <div className="absolute bottom-4 right-4">
          <button 
            onClick={() => onViewDetails?.(destination)}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <Camera className="text-gray-700" size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {destination.name}
          </h3>
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className={`ml-1 text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {destination.rating}
            </span>
          </div>
        </div>
        
        <div className={`flex items-center mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{destination.location}</span>
        </div>
        
        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4 line-clamp-2`}>
          {destination.description}
        </p>
        
        <div className="flex items-center justify-between mb-6 text-sm">
          <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <Clock size={14} className="mr-1" />
            <span>{destination.duration}</span>
          </div>
          
          <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <Users size={14} className="mr-1" />
            <span>{destination.groupSize}</span>
          </div>
          
          {destination.difficulty && (
            <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <span className={`px-2 py-1 rounded text-xs ${
                destination.difficulty === 'Easy' 
                  ? 'bg-green-100 text-green-800' 
                  : destination.difficulty === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {destination.difficulty}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => onViewDetails?.(destination)}
            className={`flex-1 py-3 border rounded-lg font-semibold transition-all duration-300 ${
              isDark 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            View Details
          </button>
          <button 
            onClick={() => onBook?.(destination)}
            className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Book Now
          </button>
        </div>
        
        {destination.highlights && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {destination.highlights.slice(0, 3).map((highlight, index) => (
                <span 
                  key={index}
                  className={`px-2 py-1 text-xs rounded-full ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {highlight}
                </span>
              ))}
              {destination.highlights.length > 3 && (
                <span className={`px-2 py-1 text-xs rounded-full ${
                  isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                }`}>
                  +{destination.highlights.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationCard;