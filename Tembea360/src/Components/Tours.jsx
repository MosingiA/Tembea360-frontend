import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TourCard from './TourCard';
import './Tours.css';

function Tours() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const tours = [
    { id: 1, title: 'Maasai Mara Safari Adventure', location: 'Maasai Mara', price: 1200, duration: '5 days', rating: 4.8, reviews: 124, category: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400', description: 'Experience the Great Migration and Big Five in Kenya\'s most famous reserve.' },
    { id: 2, title: 'Mount Kenya Hiking Expedition', location: 'Mount Kenya', price: 800, duration: '4 days', rating: 4.6, reviews: 89, category: 'adventure', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400', description: 'Challenge yourself with Africa\'s second highest peak and stunning alpine scenery.' },
    { id: 3, title: 'Diani Beach Paradise', location: 'Diani Beach', price: 600, duration: '3 days', rating: 4.7, reviews: 156, category: 'beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400', description: 'Relax on pristine white sand beaches with crystal clear waters.' },
    { id: 4, title: 'Amboseli Elephant Safari', location: 'Amboseli', price: 950, duration: '3 days', rating: 4.9, reviews: 203, category: 'safari', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400', description: 'Get up close with elephants against the backdrop of Mount Kilimanjaro.' },
    { id: 5, title: 'Lake Nakuru Flamingo Tour', location: 'Lake Nakuru', price: 450, duration: '2 days', rating: 4.5, reviews: 67, category: 'wildlife', image: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=400', description: 'Witness thousands of flamingos in their natural habitat.' },
    { id: 6, title: 'Tsavo East Adventure', location: 'Tsavo East', price: 750, duration: '4 days', rating: 4.4, reviews: 92, category: 'safari', image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400', description: 'Explore Kenya\'s largest national park and see the famous red elephants.' },
    { id: 7, title: 'Lamu Island Cultural Tour', location: 'Lamu Island', price: 550, duration: '3 days', rating: 4.6, reviews: 78, category: 'cultural', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', description: 'Discover Swahili culture and UNESCO World Heritage architecture.' },
    { id: 8, title: 'Hell\'s Gate Cycling Safari', location: 'Hell\'s Gate', price: 350, duration: '1 day', rating: 4.3, reviews: 45, category: 'adventure', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400', description: 'Cycle through dramatic landscapes and spot wildlife on foot.' }
  ];

  const categories = ['all', 'safari', 'adventure', 'beach', 'wildlife', 'cultural'];
  const priceRanges = [{ label: 'All Prices', value: 'all' }, { label: 'Under $500', value: 'low' }, { label: '$500 - $1000', value: 'mid' }, { label: 'Over $1000', value: 'high' }];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || (priceRange === 'low' && tour.price < 500) || (priceRange === 'mid' && tour.price >= 500 && tour.price <= 1000) || (priceRange === 'high' && tour.price > 1000);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleTourClick = (tourId) => {
    navigate(`/tour-details/${tourId}`);
  };

  return (
    <div className="tours-container">
      {/* Header */}
      <div className="tours-header">
        <h1 className="tours-title">Discover Amazing Tours</h1>
        <p className="tours-subtitle">Explore Kenya's breathtaking landscapes and wildlife with our expertly guided tours</p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto py-10 px-5">
        <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-end">
            <div>
              <label className="block font-medium mb-2 text-gray-700">Search Tours</label>
              <input type="text" placeholder="Search by name or location..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-lg text-base" />
            </div>
            <div>
              <label className="block font-medium mb-2 text-gray-700">Category</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-lg text-base bg-white">
                {categories.map(cat => <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2 text-gray-700">Price Range</label>
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-lg text-base bg-white">
                {priceRanges.map(range => <option key={range.value} value={range.value}>{range.label}</option>)}
              </select>
            </div>
            <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); setPriceRange('all'); }} className="px-5 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600">Clear Filters</button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-gray-900">
            {filteredTours.length} {filteredTours.length === 1 ? 'Tour' : 'Tours'} Found
          </h2>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} onClick={handleTourClick} />
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-16 px-5">
            <h3 className="text-2xl text-gray-500 mb-3">No tours found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or browse all tours</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tours;