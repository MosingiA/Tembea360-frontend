import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MapPin, Clock, Users, Star, Calendar, Camera, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tourdetails = () => {
  const { isDark } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);

  // Sample tour data (in real app, this would come from props or API)
  const tour = {
    id: 1,
    name: "Maasai Mara Safari Adventure",
    location: "Maasai Mara National Reserve, Kenya",
    rating: 4.9,
    reviewCount: 127,
    duration: "4 days, 3 nights",
    groupSize: "2-8 people",
    price: 599,
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop"
    ],
    description: "Experience the Great Migration and witness incredible wildlife in their natural habitat. This 4-day safari adventure takes you deep into the heart of the Maasai Mara, where you'll encounter the Big Five and immerse yourself in the rich culture of the Maasai people.",
    highlights: [
      "Witness the Great Migration (seasonal)",
      "Spot the Big Five animals",
      "Visit a traditional Maasai village",
      "Professional wildlife photography guidance",
      "Luxury tented accommodation",
      "All meals and beverages included"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and First Game Drive",
        description: "Arrive at the Maasai Mara and check into your luxury tented camp. After lunch, embark on your first game drive to spot wildlife and get oriented with the reserve."
      },
      {
        day: 2,
        title: "Full Day Safari Experience",
        description: "Early morning and evening game drives with a break for lunch at camp. Visit the Mara River and witness the dramatic river crossings (seasonal)."
      },
      {
        day: 3,
        title: "Cultural Experience and Wildlife",
        description: "Morning visit to a traditional Maasai village to learn about their culture and traditions. Afternoon game drive focusing on photography opportunities."
      },
      {
        day: 4,
        title: "Final Game Drive and Departure",
        description: "Final morning game drive and breakfast in the bush before departing back to Nairobi."
      }
    ],
    includes: [
      "Luxury tented accommodation",
      "All meals and beverages",
      "Professional safari guide",
      "Game drives in 4x4 vehicle",
      "Park entrance fees",
      "Cultural village visit",
      "Airport transfers"
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Gratuities",
      "Alcoholic beverages"
    ],
    guide: {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      rating: 4.9,
      experience: "8 years",
      specialties: ["Wildlife Photography", "Big Five Tracking", "Cultural Tours"],
      bio: "Sarah is a passionate wildlife expert with over 8 years of experience guiding safaris in Kenya. She specializes in wildlife photography and has an exceptional ability to track the Big Five."
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % tour.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + tour.images.length) % tour.images.length);
  };

  const calculateTotal = () => {
    return tour.price * guests;
  };

  return (
    <div className={`min-h-screen pt-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="relative mb-8">
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <img
              src={tour.images[currentImageIndex]}
              alt={tour.name}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {tour.images.length}
            </div>
            
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Heart size={20} />
              </button>
              <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
          
          {/* Thumbnail Strip */}
          <div className="flex space-x-2 mt-4 overflow-x-auto">
            {tour.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <img src={image} alt={`${tour.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tour Header */}
            <div>
              <h1 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {tour.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{tour.location}</span>
                </div>
                
                <div className="flex items-center">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className={`ml-1 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {tour.rating}
                  </span>
                  <span className={`ml-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    ({tour.reviewCount} reviews)
                  </span>
                </div>
                
                <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <Clock size={16} className="mr-1" />
                  <span className="text-sm">{tour.duration}</span>
                </div>
                
                <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <Users size={16} className="mr-1" />
                  <span className="text-sm">{tour.groupSize}</span>
                </div>
              </div>
              
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {tour.description}
              </p>
            </div>

            {/* Highlights */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6`}>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Tour Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Detailed Itinerary
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((day, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {day.day}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Day {day.day}: {day.title}
                      </h3>
                      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included/Excluded */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  What's Included
                </h3>
                <ul className="space-y-2">
                  {tour.includes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6`}>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  What's Not Included
                </h3>
                <ul className="space-y-2">
                  {tour.excludes.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tour Guide */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6`}>
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Your Tour Guide
              </h2>
              <div className="flex items-start space-x-4">
                <img
                  src={tour.guide.image}
                  alt={tour.guide.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {tour.guide.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className={`ml-1 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {tour.guide.rating}
                      </span>
                    </div>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                    {tour.guide.experience} experience
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tour.guide.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs rounded-full ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                    {tour.guide.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg p-6 sticky top-24`}>
              <div className="text-center mb-6">
                <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  ${tour.price}
                </span>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  /person
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Select Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 text-gray-400" size={20} />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} pt-4 mb-6`}>
                <div className="flex justify-between mb-2">
                  <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                    ${tour.price} x {guests} guests
                  </span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>
                    ${calculateTotal()}
                  </span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>Total</span>
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>
                    ${calculateTotal()}
                  </span>
                </div>
              </div>

              <Link
                to="/booking"
                className="w-full block text-center py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Book Now
              </Link>

              <p className={`text-xs text-center mt-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Free cancellation up to 24 hours before the tour
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourdetails;