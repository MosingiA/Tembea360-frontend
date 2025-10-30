import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Loader } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
// import { getKenyaTouringSites, getInternationalDestinations } from '../services/tourismAPI';

const TopDestinations = () => {
  const { isDark } = useTheme();
  const [kenyaDestinations, setKenyaDestinations] = useState([]);
  const [internationalDestinations, setInternationalDestinations] = useState([]);
  const [currentInternationalIndex, setCurrentInternationalIndex] = useState(0);
  const [currentKenyaIndex, setCurrentKenyaIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const kenyaDestinationsData = [
    { id: 1, name: "Maasai Mara National Reserve", location: "Narok County", rating: 4.9, price: 599, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801", description: "World-famous for the Great Migration", category: "Wildlife" },
    { id: 2, name: "Amboseli National Park", location: "Kajiado County", rating: 4.8, price: 450, image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0", description: "Best views of Mount Kilimanjaro", category: "Wildlife" },
    { id: 3, name: "Diani Beach", location: "Kwale County", rating: 4.7, price: 320, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", description: "Pristine white sand beaches", category: "Beach" },
    { id: 4, name: "Lake Nakuru National Park", location: "Nakuru County", rating: 4.6, price: 280, image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa", description: "Famous for flamingos and rhinos", category: "Wildlife" },
    { id: 5, name: "Tsavo National Parks", location: "Taita-Taveta County", rating: 4.5, price: 380, image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44", description: "Kenya's largest national park with red elephants", category: "Wildlife" },
    { id: 6, name: "Mount Kenya National Park", location: "Central Kenya", rating: 4.8, price: 520, image: "https://images.unsplash.com/photo-1605538883669-825200433431", description: "Africa's second highest peak", category: "Adventure" },
    { id: 7, name: "Lamu Old Town", location: "Lamu County", rating: 4.6, price: 250, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96", description: "UNESCO World Heritage Swahili culture", category: "Cultural" },
    { id: 8, name: "Hell's Gate National Park", location: "Nakuru County", rating: 4.4, price: 180, image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c", description: "Unique geothermal features and rock climbing", category: "Adventure" }
  ];

  const allKenyaSites = [
    { id: 1, name: "Maasai Mara National Reserve", location: "Narok County", rating: 4.9, price: 599, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801", description: "World-famous for the Great Migration", category: "Wildlife" },
    { id: 2, name: "Amboseli National Park", location: "Kajiado County", rating: 4.8, price: 450, image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0", description: "Best views of Mount Kilimanjaro", category: "Wildlife" },
    { id: 3, name: "Diani Beach", location: "Kwale County", rating: 4.7, price: 320, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", description: "Pristine white sand beaches", category: "Beach" },
    { id: 4, name: "Lake Nakuru National Park", location: "Nakuru County", rating: 4.6, price: 280, image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa", description: "Famous for flamingos and rhinos", category: "Wildlife" },
    { id: 5, name: "Tsavo National Parks", location: "Taita-Taveta County", rating: 4.5, price: 380, image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44", description: "Kenya's largest national park", category: "Wildlife" },
    { id: 6, name: "Mount Kenya National Park", location: "Central Kenya", rating: 4.8, price: 520, image: "https://images.unsplash.com/photo-1605538883669-825200433431", description: "Africa's second highest peak", category: "Adventure" },
    { id: 7, name: "Lamu Old Town", location: "Lamu County", rating: 4.6, price: 250, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96", description: "UNESCO World Heritage site", category: "Cultural" },
    { id: 8, name: "Hell's Gate National Park", location: "Nakuru County", rating: 4.4, price: 180, image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c", description: "Geothermal features", category: "Adventure" },
    { id: 9, name: "Samburu National Reserve", location: "Samburu County", rating: 4.7, price: 420, image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec", description: "Unique wildlife", category: "Wildlife" },
    { id: 10, name: "Mombasa Old Town", location: "Mombasa County", rating: 4.3, price: 200, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96", description: "Historic coastal city", category: "Cultural" },
    { id: 11, name: "Aberdare National Park", location: "Nyandarua County", rating: 4.5, price: 350, image: "https://images.unsplash.com/photo-1605538883669-825200433431", description: "Mountain forests", category: "Nature" },
    { id: 12, name: "Watamu Marine Park", location: "Kilifi County", rating: 4.6, price: 280, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", description: "Coral reefs", category: "Marine" },
    { id: 13, name: "Meru National Park", location: "Meru County", rating: 4.4, price: 320, image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44", description: "Elsa the lioness birthplace", category: "Wildlife" },
    { id: 14, name: "Lake Naivasha", location: "Nakuru County", rating: 4.5, price: 220, image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa", description: "Freshwater lake", category: "Nature" },
    { id: 15, name: "Kakamega Forest", location: "Kakamega County", rating: 4.3, price: 180, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", description: "Tropical rainforest", category: "Nature" },
    { id: 16, name: "Malindi Marine Park", location: "Kilifi County", rating: 4.4, price: 260, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", description: "Coral gardens", category: "Marine" },
    { id: 17, name: "Ol Pejeta Conservancy", location: "Laikipia County", rating: 4.8, price: 480, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801", description: "Rhino sanctuary", category: "Wildlife" },
    { id: 18, name: "Shimba Hills Reserve", location: "Kwale County", rating: 4.4, price: 300, image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44", description: "Coastal forests", category: "Nature" },
    { id: 19, name: "Chyulu Hills Park", location: "Makueni County", rating: 4.2, price: 250, image: "https://images.unsplash.com/photo-1605538883669-825200433431", description: "Green hills", category: "Nature" },
    { id: 20, name: "Kisite-Mpunguti Marine", location: "Kwale County", rating: 4.5, price: 290, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", description: "Dolphin watching", category: "Marine" },
    { id: 21, name: "Marsabit National Park", location: "Marsabit County", rating: 4.2, price: 380, image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44", description: "Desert oasis", category: "Wildlife" },
    { id: 22, name: "Arabuko Sokoke Forest", location: "Kilifi County", rating: 4.1, price: 150, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", description: "Coastal forest", category: "Nature" },
    { id: 23, name: "Ruma National Park", location: "Homa Bay County", rating: 4.0, price: 200, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801", description: "Roan antelope sanctuary", category: "Wildlife" },
    { id: 24, name: "Saiwa Swamp Park", location: "Trans-Nzoia County", rating: 4.0, price: 120, image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa", description: "Sitatunga habitat", category: "Nature" },
    { id: 25, name: "Kora National Park", location: "Tana River County", rating: 4.1, price: 280, image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44", description: "Lion sanctuary", category: "Wildlife" },
    { id: 26, name: "Ndere Island Park", location: "Siaya County", rating: 3.9, price: 180, image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa", description: "Lake Victoria island", category: "Nature" },
    { id: 27, name: "Central Island Park", location: "Turkana County", rating: 4.3, price: 450, image: "https://images.unsplash.com/photo-1605538883669-825200433431", description: "Volcanic island", category: "Adventure" },
    { id: 28, name: "South Island Park", location: "Turkana County", rating: 4.2, price: 420, image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa", description: "Crocodile breeding", category: "Wildlife" },
    { id: 29, name: "Nairobi National Park", location: "Nairobi County", rating: 4.4, price: 150, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801", description: "Urban wildlife park", category: "Wildlife" },
    { id: 30, name: "Karura Forest", location: "Nairobi County", rating: 4.2, price: 50, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", description: "Urban forest", category: "Nature" },
    { id: 31, name: "Menengai Crater", location: "Nakuru County", rating: 4.1, price: 100, image: "https://images.unsplash.com/photo-1605538883669-825200433431", description: "Volcanic crater", category: "Adventure" },
    { id: 32, name: "Fourteen Falls", location: "Machakos County", rating: 4.0, price: 80, image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa", description: "Scenic waterfalls", category: "Nature" },
    { id: 33, name: "Oloololo Escarpment", location: "Narok County", rating: 4.6, price: 200, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801", description: "Dramatic cliffs", category: "Adventure" },
    { id: 34, name: "Gedi Ruins", location: "Kilifi County", rating: 4.2, price: 120, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96", description: "Ancient Swahili ruins", category: "Cultural" },
    { id: 35, name: "Takwa Ruins", location: "Lamu County", rating: 4.0, price: 150, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96", description: "15th century settlement", category: "Cultural" },
    { id: 36, name: "Jumba la Mtwana", location: "Kilifi County", rating: 4.1, price: 100, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96", description: "Medieval ruins", category: "Cultural" },
    { id: 37, name: "Mida Creek", location: "Kilifi County", rating: 4.3, price: 80, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", description: "Mangrove boardwalk", category: "Nature" },
    { id: 38, name: "Haller Park", location: "Mombasa County", rating: 4.0, price: 60, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", description: "Nature park", category: "Nature" },
    { id: 39, name: "Nguuni Nature Sanctuary", location: "Mombasa County", rating: 4.1, price: 100, image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44", description: "Giraffes and ostriches", category: "Wildlife" },
    { id: 40, name: "Wasini Island", location: "Kwale County", rating: 4.4, price: 180, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", description: "Coral gardens", category: "Marine" }
  ];

  const allInternationalSites = [
    { id: 1, name: "Paris, France", location: "France", rating: 4.9, price: 1200, image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52", description: "City of Light" },
    { id: 2, name: "Tokyo, Japan", location: "Japan", rating: 4.8, price: 1500, image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf", description: "Modern metropolis" },
    { id: 3, name: "New York, USA", location: "USA", rating: 4.7, price: 1300, image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9", description: "City that never sleeps" },
    { id: 4, name: "London, UK", location: "UK", rating: 4.8, price: 1100, image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad", description: "Historic charm" },
    { id: 5, name: "Rome, Italy", location: "Italy", rating: 4.7, price: 950, image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5", description: "Eternal city" },
    { id: 6, name: "Barcelona, Spain", location: "Spain", rating: 4.6, price: 850, image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4", description: "Gaudi's masterpieces" },
    { id: 7, name: "Dubai, UAE", location: "UAE", rating: 4.5, price: 1000, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", description: "Luxury destination" },
    { id: 8, name: "Bangkok, Thailand", location: "Thailand", rating: 4.4, price: 700, image: "https://images.unsplash.com/photo-1563492065-1a83e8c0e8d6", description: "Temples and culture" },
    { id: 9, name: "Istanbul, Turkey", location: "Turkey", rating: 4.5, price: 650, image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b", description: "Bridge of cultures" },
    { id: 10, name: "Sydney, Australia", location: "Australia", rating: 4.6, price: 1400, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", description: "Harbor city" },
    { id: 11, name: "Amsterdam, Netherlands", location: "Netherlands", rating: 4.5, price: 900, image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017", description: "Canals and culture" },
    { id: 12, name: "Prague, Czech Republic", location: "Czech Republic", rating: 4.4, price: 600, image: "https://images.unsplash.com/photo-1541849546-216549ae216d", description: "Medieval architecture" },
    { id: 13, name: "Vienna, Austria", location: "Austria", rating: 4.6, price: 800, image: "https://images.unsplash.com/photo-1516550893923-42d407bd4ac2", description: "Imperial palaces" },
    { id: 14, name: "Santorini, Greece", location: "Greece", rating: 4.7, price: 750, image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff", description: "White buildings" },
    { id: 15, name: "Bali, Indonesia", location: "Indonesia", rating: 4.5, price: 650, image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1", description: "Tropical paradise" },
    { id: 16, name: "Marrakech, Morocco", location: "Morocco", rating: 4.3, price: 550, image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e", description: "Red city" },
    { id: 17, name: "Cape Town, South Africa", location: "South Africa", rating: 4.6, price: 700, image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99", description: "Table Mountain" },
    { id: 18, name: "Reykjavik, Iceland", location: "Iceland", rating: 4.4, price: 1200, image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e", description: "Northern lights" },
    { id: 19, name: "Kyoto, Japan", location: "Japan", rating: 4.8, price: 1100, image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", description: "Traditional temples" },
    { id: 20, name: "Machu Picchu, Peru", location: "Peru", rating: 4.9, price: 800, image: "https://images.unsplash.com/photo-1526392060635-9d6019884377", description: "Ancient citadel" },
    { id: 21, name: "Rio de Janeiro, Brazil", location: "Brazil", rating: 4.5, price: 750, image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325", description: "Christ the Redeemer" },
    { id: 22, name: "Cairo, Egypt", location: "Egypt", rating: 4.3, price: 600, image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e", description: "Pyramids" },
    { id: 23, name: "Mumbai, India", location: "India", rating: 4.2, price: 500, image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f", description: "Bollywood city" },
    { id: 24, name: "Singapore", location: "Singapore", rating: 4.6, price: 1000, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd", description: "Garden city" },
    { id: 25, name: "Lisbon, Portugal", location: "Portugal", rating: 4.4, price: 650, image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b", description: "Colorful tiles" },
    { id: 26, name: "Stockholm, Sweden", location: "Sweden", rating: 4.5, price: 950, image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11", description: "Archipelago city" },
    { id: 27, name: "Buenos Aires, Argentina", location: "Argentina", rating: 4.3, price: 700, image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849", description: "Tango capital" },
    { id: 28, name: "Seoul, South Korea", location: "South Korea", rating: 4.4, price: 900, image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf", description: "K-pop culture" },
    { id: 29, name: "Vancouver, Canada", location: "Canada", rating: 4.5, price: 1100, image: "https://images.unsplash.com/photo-1549890762-0a3f8933bc76", description: "Mountains and ocean" },
    { id: 30, name: "Zurich, Switzerland", location: "Switzerland", rating: 4.6, price: 1300, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", description: "Alpine lakes" }
  ];

  useEffect(() => {
    setKenyaDestinations(allKenyaSites);
    setInternationalDestinations(allInternationalSites);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (internationalDestinations.length > 0) {
      const interval = setInterval(() => {
        setCurrentInternationalIndex(prev => 
          (prev + 6) % internationalDestinations.length
        );
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [internationalDestinations]);

  useEffect(() => {
    if (kenyaDestinations.length > 0) {
      const interval = setInterval(() => {
        setCurrentKenyaIndex(prev => 
          (prev + 8) % kenyaDestinations.length
        );
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [kenyaDestinations]);

  const getCurrentInternationalDestinations = () => {
    if (internationalDestinations.length === 0) return [];
    return internationalDestinations.slice(currentInternationalIndex, currentInternationalIndex + 6);
  };

  const getCurrentKenyaDestinations = () => {
    if (kenyaDestinations.length === 0) return [];
    return kenyaDestinations.slice(currentKenyaIndex, currentKenyaIndex + 8);
  };

  const DestinationCard = ({ destination }) => (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}>
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-semibold text-gray-900">${destination.price || 'From $299'}</span>
        </div>
        {destination.category && (
          <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-xs font-semibold text-white">{destination.category}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {destination.name}
        </h3>
        
        {destination.description && (
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3 line-clamp-2`}>
            {destination.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <MapPin size={14} className="mr-1" />
            <span className="text-xs">{destination.location}</span>
          </div>
          
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={14} />
            <span className={`ml-1 text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {destination.rating}
            </span>
          </div>
        </div>
        
        <Link
          to="/booking"
          className="w-full block text-center py-2.5 bg-gradient-to-r from-green-400 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm"
        >
          Book Now
        </Link>
      </div>
    </div>
  );

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader className="animate-spin text-green-500" size={48} />
            <span className={`ml-4 text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Loading Kenya destinations...
            </span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className={`${isDark ? 'bg-red-900/20' : 'bg-red-50'} border border-red-200 rounded-lg p-4 mb-8`}>
            <p className={`${isDark ? 'text-red-300' : 'text-red-800'}`}>
              {error}. Showing cached destinations.
            </p>
          </div>
        )}

        {/* Top Kenya Destinations */}
        {!loading && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Top Destinations in Kenya
              </h2>
              <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                Discover 8 featured destinations from our collection of 40 Kenya sites
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getCurrentKenyaDestinations().map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        )}

        {/* Top International Destinations */}
        <div>
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Top International Destinations
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Explore 6 rotating destinations from our collection of 30 global sites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentInternationalDestinations().map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;