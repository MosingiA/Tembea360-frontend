import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import DestinationCard from './DestinationCard';

const Tours = () => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const tours = [
    {
      id: 1,
      name: "Maasai Mara Safari Adventure",
      location: "Maasai Mara, Kenya",
      rating: 4.9,
      duration: "4 days",
      groupSize: "2-8 people",
      price: "$599",
      category: "Safari",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
      description: "Experience the Great Migration and witness incredible wildlife in their natural habitat with expert guides.",
      highlights: ["Big Five", "Great Migration", "Cultural Visit", "Photography"],
      featured: true
    },
    {
      id: 2,
      name: "Mount Kenya Climbing Expedition",
      location: "Mount Kenya, Kenya",
      rating: 4.8,
      duration: "6 days",
      groupSize: "4-6 people",
      price: "$899",
      category: "Adventure",
      difficulty: "Hard",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431?w=600&h=400&fit=crop",
      description: "Challenge yourself with Africa's second-highest peak and stunning alpine scenery.",
      highlights: ["Mountain Climbing", "Alpine Lakes", "Unique Flora", "Sunrise Views"]
    },
    {
      id: 3,
      name: "Lamu Cultural Heritage Tour",
      location: "Lamu Island, Kenya",
      rating: 4.7,
      duration: "3 days",
      groupSize: "1-12 people",
      price: "$399",
      category: "Cultural",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      description: "Discover the rich Swahili culture and UNESCO World Heritage architecture.",
      highlights: ["UNESCO Site", "Swahili Culture", "Traditional Dhow", "Local Cuisine"]
    },
    {
      id: 4,
      name: "Diani Beach Relaxation",
      location: "Diani Beach, Kenya",
      rating: 4.6,
      duration: "5 days",
      groupSize: "2-10 people",
      price: "$499",
      category: "Beach",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      description: "Relax on pristine white sand beaches with crystal clear waters and water sports.",
      highlights: ["White Sand Beach", "Water Sports", "Coral Reef", "Sunset Cruise"]
    },
    {
      id: 5,
      name: "Samburu National Reserve",
      location: "Samburu, Kenya",
      rating: 4.8,
      duration: "4 days",
      groupSize: "2-8 people",
      price: "$699",
      category: "Safari",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop",
      description: "Explore the unique wildlife of northern Kenya including rare species not found elsewhere.",
      highlights: ["Rare Wildlife", "Samburu Culture", "Ewaso River", "Unique Species"]
    },
    {
      id: 6,
      name: "Hell's Gate National Park",
      location: "Naivasha, Kenya",
      rating: 4.5,
      duration: "2 days",
      groupSize: "2-15 people",
      price: "$299",
      category: "Adventure",
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&h=400&fit=crop",
      description: "Cycle through dramatic landscapes and explore geothermal features in this unique park.",
      highlights: ["Cycling Safari", "Rock Climbing", "Geothermal Springs", "Gorge Walking"]
    }
  ];

  const categories = ['All', 'Safari', 'Adventure', 'Cultural', 'Beach'];
  const priceRanges = ['All', 'Under $300', '$300-$500', '$500-$700', 'Over $700'];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tour.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== 'All') {
      const price = parseInt(tour.price.replace('$', ''));
      switch (priceRange) {
        case 'Under $300':
          matchesPrice = price < 300;
          break;
        case '$300-$500':
          matchesPrice = price >= 300 && price <= 500;
          break;
        case '$500-$700':
          matchesPrice = price >= 500 && price <= 700;
          break;
        case 'Over $700':
          matchesPrice = price > 700;
          break;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleBookTour = (tour) => {
    console.log('Booking tour:', tour);
    // Navigate to booking page or open booking modal
  };

  const handleViewDetails = (tour) => {
    console.log('Viewing tour details:', tour);
    // Navigate to tour details page
  };

  return (
    <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Discover Amazing Tours
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Choose from our carefully curated selection of tours and experiences
          </p>
        </div>

        {/* Filters */}
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 mb-8`}>
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search tours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="relative">
              <SlidersHorizontal className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-center">
              <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {filteredTours.length} tours found
              </span>
            </div>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <DestinationCard
              key={tour.id}
              destination={tour}
              onBook={handleBookTour}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <div className={`text-6xl mb-4 ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>🔍</div>
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              No tours found
            </h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Try adjusting your search criteria or browse all tours
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setPriceRange('All');
              }}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;