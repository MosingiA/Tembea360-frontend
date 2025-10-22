import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [currentImage, setCurrentImage] = useState(0);

  const tour = {
    title: 'Maasai Mara Safari Adventure',
    location: 'Maasai Mara National Reserve, Kenya',
    price: 1200,
    duration: '5 Days, 4 Nights',
    rating: 4.8,
    reviews: 124,
    images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800', 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800', 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800'],
    description: 'Experience the breathtaking wildlife of Maasai Mara with our expert guides. Witness the Great Migration, spot the Big Five, and immerse yourself in Maasai culture.',
    highlights: ['Game drives with professional guides', 'Luxury tented accommodation', 'Cultural visit to Maasai village', 'Hot air balloon safari (optional)', 'All meals and transfers included'],
    includes: ['Accommodation', 'All Meals', 'Transport', 'Guide', 'Park Fees'],
    guide: { name: 'Samuel Kiprop', experience: '8 years', languages: 'English, Swahili, Maasai', rating: 4.9 }
  };

  const handleBooking = () => {
    if (!selectedDate) { alert('Please select a date'); return; }
    navigate('/booking', { state: { tour, date: selectedDate, guests, totalPrice: tour.price * guests } });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <img src={tour.images[currentImage]} alt={tour.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))' }}></div>
        <div style={{ position: 'absolute', bottom: '30px', left: '30px', color: 'white' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 10px 0' }}>{tour.title}</h1>
          <p style={{ fontSize: '1.1rem', margin: '0 0 10px 0', opacity: 0.9 }}>{tour.location}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span>{tour.rating} ({tour.reviews} reviews)</span>
            <span>{tour.duration}</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '20px', right: '30px', display: 'flex', gap: '8px' }}>
          {tour.images.map((_, i) => (
            <button key={i} onClick={() => setCurrentImage(i)} style={{ width: '12px', height: '12px', borderRadius: '50%', border: 'none', backgroundColor: currentImage === i ? 'white' : 'rgba(255,255,255,0.5)', cursor: 'pointer' }} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
        <div>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '30px', marginBottom: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '20px', color: '#212529' }}>About This Tour</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#495057', marginBottom: '25px' }}>{tour.description}</p>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#212529' }}>Tour Highlights</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0' }}>
              {tour.highlights.map((highlight, i) => (
                <li key={i} style={{ padding: '8px 0', color: '#495057', fontSize: '0.95rem' }}>{highlight}</li>
              ))}
            </ul>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#212529' }}>What's Included</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {tour.includes.map((item, i) => (
                <span key={i} style={{ backgroundColor: '#e7f3ff', color: '#0066cc', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>{item}</span>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '15px', color: '#212529' }}>Your Guide</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#059669', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>{tour.guide.name.charAt(0)}</div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', fontWeight: '600', color: '#212529' }}>{tour.guide.name}</h4>
                <p style={{ margin: '0 0 3px 0', fontSize: '0.9rem', color: '#6c757d' }}>{tour.guide.experience} experience</p>
                <p style={{ margin: '0 0 3px 0', fontSize: '0.9rem', color: '#6c757d' }}>Speaks: {tour.guide.languages}</p>
                <span style={{ fontSize: '0.9rem', color: '#059669' }}>{tour.guide.rating} rating</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', position: 'sticky', top: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#059669' }}>${tour.price}</span>
              <span style={{ fontSize: '1rem', color: '#6c757d', marginLeft: '5px' }}>per person</span>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#495057' }}>Select Date</label>
              <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} style={{ width: '100%', padding: '12px', border: '2px solid #e9ecef', borderRadius: '8px', fontSize: '1rem' }} />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#495057' }}>Number of Guests</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button onClick={() => setGuests(Math.max(1, guests - 1))} style={{ width: '40px', height: '40px', border: '2px solid #e9ecef', borderRadius: '8px', backgroundColor: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>-</button>
                <span style={{ fontSize: '1.2rem', fontWeight: '600', minWidth: '30px', textAlign: 'center' }}>{guests}</span>
                <button onClick={() => setGuests(guests + 1)} style={{ width: '40px', height: '40px', border: '2px solid #e9ecef', borderRadius: '8px', backgroundColor: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>+</button>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '20px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ color: '#6c757d' }}>${tour.price} x {guests} guests</span>
                <span style={{ fontWeight: '600' }}>${tour.price * guests}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '600' }}>
                <span>Total</span>
                <span style={{ color: '#059669' }}>${tour.price * guests}</span>
              </div>
            </div>

            <button onClick={handleBooking} style={{ width: '100%', backgroundColor: '#059669', color: 'white', padding: '15px', borderRadius: '8px', border: 'none', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '15px' }}>Book Now</button>
            <p style={{ fontSize: '0.85rem', color: '#6c757d', textAlign: 'center', margin: 0 }}>Free cancellation up to 24 hours before the tour</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;