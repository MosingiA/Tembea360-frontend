import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #059669, #047857)', padding: '60px 20px', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '0 0 15px 0' }}>Discover Amazing Tours</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>Explore Kenya's breathtaking landscapes and wildlife with our expertly guided tours</p>
      </div>

      {/* Filters */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', marginBottom: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'end' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#495057' }}>Search Tours</label>
              <input type="text" placeholder="Search by name or location..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '100%', padding: '12px 16px', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#495057' }}>Category</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ width: '100%', padding: '12px 16px', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', backgroundColor: 'white' }}>
                {categories.map(cat => <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#495057' }}>Price Range</label>
              <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} style={{ width: '100%', padding: '12px 16px', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem', backgroundColor: 'white' }}>
                {priceRanges.map(range => <option key={range.value} value={range.value}>{range.label}</option>)}
              </select>
            </div>
            <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); setPriceRange('all'); }} style={{ padding: '12px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500' }}>Clear Filters</button>
          </div>
        </div>

        {/* Results */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#212529', margin: 0 }}>
            {filteredTours.length} {filteredTours.length === 1 ? 'Tour' : 'Tours'} Found
          </h2>
        </div>

        {/* Tours Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '25px' }}>
          {filteredTours.map(tour => (
            <div key={tour.id} onClick={() => handleTourClick(tour.id)} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s', ':hover': { transform: 'translateY(-5px)' } }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img src={tour.image} alt={tour.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>
                  {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
                </div>
                <div style={{ position: 'absolute', bottom: '15px', left: '15px', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>
                  {tour.duration}
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '600', margin: '0 0 8px 0', color: '#212529' }}>{tour.title}</h3>
                <p style={{ color: '#6c757d', fontSize: '0.9rem', margin: '0 0 8px 0' }}>{tour.location}</p>
                <p style={{ color: '#495057', fontSize: '0.9rem', lineHeight: '1.4', margin: '0 0 15px 0' }}>{tour.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#ffc107', fontSize: '0.9rem' }}>{tour.rating}</span>
                    <span style={{ color: '#6c757d', fontSize: '0.85rem' }}>({tour.reviews} reviews)</span>
                  </div>
                  <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#059669' }}>${tour.price}</span>
                </div>
                <button style={{ width: '100%', backgroundColor: '#059669', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '1rem', fontWeight: '500', cursor: 'pointer' }}>View Details</button>
              </div>
            </div>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#6c757d', margin: '0 0 10px 0' }}>No tours found</h3>
            <p style={{ color: '#6c757d', margin: 0 }}>Try adjusting your search criteria or browse all tours</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tours;