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
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96 overflow-hidden">
        <img src={tour.images[currentImage]} alt={tour.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-bold mb-3">{tour.title}</h1>
          <p className="text-lg mb-3 opacity-90">{tour.location}</p>
          <div className="flex items-center gap-4">
            <span>{tour.rating} ({tour.reviews} reviews)</span>
            <span>{tour.duration}</span>
          </div>
        </div>
        <div className="absolute bottom-5 right-8 flex gap-2">
          {tour.images.map((_, i) => (
            <button key={i} onClick={() => setCurrentImage(i)} className={`w-3 h-3 rounded-full border-none cursor-pointer ${currentImage === i ? 'bg-white' : 'bg-white/50'}`} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-8 mb-6 shadow-lg">
            <h2 className="text-3xl font-semibold mb-5 text-gray-900">About This Tour</h2>
            <p className="text-base leading-relaxed text-gray-700 mb-6">{tour.description}</p>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Tour Highlights</h3>
            <ul className="list-none p-0 mb-6">
              {tour.highlights.map((highlight, i) => (
                <li key={i} className="py-2 text-gray-700 text-sm">{highlight}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">What's Included</h3>
            <div className="flex flex-wrap gap-3">
              {tour.includes.map((item, i) => (
                <span key={i} className="bg-blue-50 text-blue-600 px-3 py-2 rounded-full text-sm font-medium">{item}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Your Guide</h3>
            <div className="flex items-center gap-4">
              <div className="w-15 h-15 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">{tour.guide.name.charAt(0)}</div>
              <div>
                <h4 className="mb-1 text-lg font-semibold text-gray-900">{tour.guide.name}</h4>
                <p className="mb-1 text-sm text-gray-600">{tour.guide.experience} experience</p>
                <p className="mb-1 text-sm text-gray-600">Speaks: {tour.guide.languages}</p>
                <span className="text-sm text-emerald-600">{tour.guide.rating} rating</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl p-6 shadow-xl sticky top-5">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-emerald-600">${tour.price}</span>
              <span className="text-base text-gray-600 ml-1">per person</span>
            </div>

            <div className="mb-5">
              <label className="block font-medium mb-2 text-gray-700">Select Date</label>
              <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full p-3 border-2 border-gray-200 rounded-lg text-base" />
            </div>

            <div className="mb-6">
              <label className="block font-medium mb-2 text-gray-700">Number of Guests</label>
              <div className="flex items-center gap-4">
                <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-10 h-10 border-2 border-gray-200 rounded-lg bg-white cursor-pointer text-xl">-</button>
                <span className="text-xl font-semibold min-w-8 text-center">{guests}</span>
                <button onClick={() => setGuests(guests + 1)} className="w-10 h-10 border-2 border-gray-200 rounded-lg bg-white cursor-pointer text-xl">+</button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-5 mb-5">
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">${tour.price} x {guests} guests</span>
                <span className="font-semibold">${tour.price * guests}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-emerald-600">${tour.price * guests}</span>
              </div>
            </div>

            <button onClick={handleBooking} className="w-full bg-emerald-600 text-white py-4 rounded-lg text-lg font-semibold cursor-pointer mb-4 hover:bg-emerald-700">Book Now</button>
            <p className="text-sm text-gray-600 text-center">Free cancellation up to 24 hours before the tour</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;