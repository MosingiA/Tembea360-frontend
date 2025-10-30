import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const FeaturedProfessionals = () => {
  const { isDark } = useTheme();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [allProfessionals, setAllProfessionals] = useState([]);

  const baseProfessionals = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Adventure Guide",
      location: "Nairobi, Kenya",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      price: "$50/day",
      category: "adventure"
    },
    {
      id: 2,
      name: "Michael Chen",
      specialty: "Wildlife Expert",
      location: "Maasai Mara",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      price: "$75/day",
      category: "wildlife"
    },
    {
      id: 3,
      name: "Emma Wilson",
      specialty: "Cultural Guide",
      location: "Lamu, Kenya",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      price: "$45/day",
      category: "cultural"
    },
    {
      id: 4,
      name: "David Kimani",
      specialty: "Mountain Guide",
      location: "Mount Kenya",
      rating: 4.7,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      price: "$60/day",
      category: "adventure"
    },
    {
      id: 5,
      name: "Grace Wanjiku",
      specialty: "Beach Guide",
      location: "Diani Beach",
      rating: 4.6,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      price: "$40/day",
      category: "beach"
    },
    {
      id: 6,
      name: "James Mwangi",
      specialty: "Safari Expert",
      location: "Amboseli",
      rating: 4.8,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      price: "$80/day",
      category: "wildlife"
    }
  ];

  useEffect(() => {
    let professionals = [...baseProfessionals];
    
    // Add current user if they're a professional
    if (user && user.userType === 'professional') {
      const userProfessional = {
        id: 'user',
        name: user.name,
        specialty: user.specialty || 'Tour Guide',
        location: user.location || 'Kenya',
        rating: 4.5,
        reviews: 0,
        image: user.profilePicture || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        price: '$50/day',
        category: user.specialty?.toLowerCase().includes('wildlife') ? 'wildlife' : 
                 user.specialty?.toLowerCase().includes('cultural') ? 'cultural' :
                 user.specialty?.toLowerCase().includes('adventure') ? 'adventure' : 'general',
        isCurrentUser: true
      };
      professionals.unshift(userProfessional);
    }
    
    setAllProfessionals(professionals);
  }, [user]);

  const specialties = ['All', 'Wildlife Expert', 'Adventure Guide', 'Cultural Guide', 'Beach Guide', 'Safari Expert', 'Mountain Guide'];
  
  const filteredProfessionals = selectedFilter === 'All' 
    ? allProfessionals 
    : allProfessionals.filter(prof => prof.specialty === selectedFilter);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3) % filteredProfessionals.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 + filteredProfessionals.length) % filteredProfessionals.length);
  };

  const getCurrentProfessionals = () => {
    const professionals = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % filteredProfessionals.length;
      if (filteredProfessionals[index]) {
        professionals.push(filteredProfessionals[index]);
      }
    }
    return professionals;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-rotate every 5 seconds
    
    return () => clearInterval(interval);
  }, [filteredProfessionals.length]);

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured Tour Guides
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Connect with experienced local guides who will make your journey unforgettable
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => {
                setSelectedFilter(specialty);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === specialty
                  ? 'bg-green-500 text-white'
                  : isDark
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300`}
          >
            <ChevronLeft className={isDark ? 'text-white' : 'text-gray-900'} size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300`}
          >
            <ChevronRight className={isDark ? 'text-white' : 'text-gray-900'} size={24} />
          </button>

          {/* Professionals Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-16">
            {getCurrentProfessionals().map((professional) => (
              <Link
                key={professional.id}
                to={`/tours?category=${professional.category}`}
                className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group block relative`}
              >
                {professional.isCurrentUser && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                    You
                  </div>
                )}
              <div className="relative">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">{professional.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {professional.name}
                </h3>
                
                <p className="text-green-500 font-medium mb-2">{professional.specialty}</p>
                
                <div className={`flex items-center mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{professional.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className={`ml-1 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {professional.rating}
                    </span>
                    <span className={`ml-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      ({professional.reviews} reviews)
                    </span>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate('/booking', {
                        state: {
                          selectedGuide: professional,
                          selectedDestination: {
                            id: `guide-${professional.id}`,
                            name: `${professional.specialty} with ${professional.name}`,
                            location: professional.location,
                            rating: professional.rating,
                            price: parseInt(professional.price.replace(/[^0-9]/g, '')),
                            image: professional.image,
                            description: `Professional ${professional.specialty.toLowerCase()} services in ${professional.location}`,
                            duration: "Custom duration"
                          }
                        }
                      });
                    }}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
              </Link>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(filteredProfessionals.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / 3) === index
                    ? 'bg-green-500'
                    : isDark
                    ? 'bg-gray-600'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Results Count */}
        <div className="text-center mt-6">
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing {filteredProfessionals.length} professional{filteredProfessionals.length !== 1 ? 's' : ''}
            {selectedFilter !== 'All' && ` specializing in ${selectedFilter}`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfessionals;