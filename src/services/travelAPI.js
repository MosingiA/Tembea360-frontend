// Travel API service for fetching accommodation and travel data
// Since Google Travel doesn't provide public API, we'll use alternative travel APIs

const RAPIDAPI_KEY = process.env.VITE_RAPIDAPI_KEY || 'demo-key';
const BOOKING_API_KEY = process.env.VITE_BOOKING_API_KEY || 'demo-key';

// Alternative travel APIs that can be used
const TRAVEL_APIS = {
  // Booking.com API (via RapidAPI)
  BOOKING: 'https://booking-com.p.rapidapi.com/v1',
  // Hotels.com API (via RapidAPI)  
  HOTELS: 'https://hotels-com-provider.p.rapidapi.com/v2',
  // Amadeus Travel API
  AMADEUS: 'https://test.api.amadeus.com/v1',
  // Skyscanner API
  SKYSCANNER: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices'
};

// Mock travel data for all destinations
const mockTravelData = {
  'Maasai Mara National Reserve': {
    hotels: [{ id: 1, name: 'Mara Serena Safari Lodge', rating: 4.5, price: 450, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', amenities: ['Pool', 'Restaurant', 'Safari Tours'], location: 'Maasai Mara', description: 'Luxury safari lodge' }],
    activities: [{ name: 'Game Drive', price: 80, duration: '3 hours' }]
  },
  'Amboseli National Park': {
    hotels: [{ id: 2, name: 'Amboseli Serena Lodge', rating: 4.4, price: 420, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d', amenities: ['Pool', 'Restaurant'], location: 'Amboseli', description: 'Kilimanjaro views' }],
    activities: [{ name: 'Elephant Watching', price: 60, duration: '2 hours' }]
  },
  'Diani Beach': {
    hotels: [{ id: 3, name: 'Diani Reef Resort', rating: 4.6, price: 280, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9', amenities: ['Beach', 'Pool'], location: 'Diani Beach', description: 'Beachfront resort' }],
    activities: [{ name: 'Snorkeling', price: 40, duration: '2 hours' }]
  },
  'Lake Nakuru National Park': {
    hotels: [{ id: 4, name: 'Lake Nakuru Lodge', rating: 4.3, price: 320, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', amenities: ['Restaurant', 'Tours'], location: 'Nakuru', description: 'Flamingo viewing lodge' }],
    activities: [{ name: 'Bird Watching', price: 50, duration: '2 hours' }]
  },
  'Tsavo National Parks': {
    hotels: [{ id: 5, name: 'Tsavo Safari Camp', rating: 4.2, price: 350, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4', amenities: ['Restaurant', 'Game Drives'], location: 'Tsavo', description: 'Red elephant country' }],
    activities: [{ name: 'Game Drive', price: 70, duration: '3 hours' }]
  },
  'Mount Kenya National Park': {
    hotels: [{ id: 6, name: 'Mount Kenya Lodge', rating: 4.5, price: 480, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d', amenities: ['Restaurant', 'Hiking'], location: 'Mount Kenya', description: 'Mountain lodge' }],
    activities: [{ name: 'Mountain Hiking', price: 100, duration: '4 hours' }]
  },
  'Lamu Old Town': {
    hotels: [{ id: 7, name: 'Lamu Heritage Hotel', rating: 4.4, price: 220, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9', amenities: ['Cultural Tours', 'Restaurant'], location: 'Lamu', description: 'Historic Swahili architecture' }],
    activities: [{ name: 'Cultural Tour', price: 45, duration: '2 hours' }]
  },
  "Hell's Gate National Park": {
    hotels: [{ id: 8, name: 'Hells Gate Camp', rating: 4.1, price: 180, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4', amenities: ['Adventure', 'Restaurant'], location: 'Nakuru', description: 'Geothermal adventure' }],
    activities: [{ name: 'Rock Climbing', price: 60, duration: '3 hours' }]
  }
};

// Fetch accommodation data for a destination
export const getAccommodationData = async (destinationName) => {
  try {
    // For demo purposes, return mock data
    // In production, you would make API calls to booking platforms
    
    if (mockTravelData[destinationName]) {
      return {
        success: true,
        data: mockTravelData[destinationName]
      };
    }
    
    // Fallback for destinations not in mock data
    return {
      success: true,
      data: {
        hotels: [{
          id: Math.random(),
          name: `${destinationName} Lodge`,
          rating: 4.2,
          price: 250,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          amenities: ['Restaurant', 'Tours'],
          location: destinationName,
          description: `Accommodation in ${destinationName}`
        }],
        activities: [{ name: 'Guided Tour', price: 50, duration: '2 hours' }]
      }
    };
  } catch (error) {
    console.error('Error fetching accommodation data:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Fetch flight data (mock implementation)
export const getFlightData = async (origin, destination, date) => {
  try {
    // Mock flight data
    return {
      success: true,
      data: {
        flights: [
          {
            id: 1,
            airline: 'Kenya Airways',
            price: 450,
            duration: '2h 30m',
            departure: '08:00',
            arrival: '10:30',
            aircraft: 'Boeing 737'
          },
          {
            id: 2,
            airline: 'Safarilink',
            price: 380,
            duration: '1h 45m',
            departure: '14:00',
            arrival: '15:45',
            aircraft: 'Cessna 208'
          }
        ]
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Fetch travel packages
export const getTravelPackages = async (destinationName) => {
  try {
    return {
      success: true,
      data: {
        packages: [
          {
            id: 1,
            name: `${destinationName} Adventure Package`,
            duration: '3 days / 2 nights',
            price: 650,
            includes: ['Accommodation', 'Meals', 'Game Drives', 'Transport'],
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801'
          },
          {
            id: 2,
            name: `${destinationName} Luxury Package`,
            duration: '5 days / 4 nights',
            price: 1200,
            includes: ['Luxury Lodge', 'All Meals', 'Private Guide', 'Transfers'],
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
          }
        ]
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Search function similar to Google Travel
export const searchTravel = async (query, filters = {}) => {
  try {
    const { type = 'all', priceRange, rating, amenities } = filters;
    
    // Mock search results
    const searchResults = {
      hotels: [
        {
          id: 1,
          name: `${query} Safari Lodge`,
          type: 'hotel',
          rating: 4.5,
          price: 350,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          location: query,
          description: `Luxury accommodation in ${query}`
        }
      ],
      activities: [
        {
          id: 1,
          name: `${query} Tour`,
          type: 'activity',
          rating: 4.3,
          price: 80,
          image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
          duration: '3 hours',
          description: `Guided tour of ${query}`
        }
      ],
      packages: [
        {
          id: 1,
          name: `${query} Complete Package`,
          type: 'package',
          rating: 4.7,
          price: 850,
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
          duration: '4 days / 3 nights',
          description: `All-inclusive package for ${query}`
        }
      ]
    };
    
    return {
      success: true,
      data: searchResults,
      query,
      filters
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

// Get destination details with travel information
export const getDestinationTravelInfo = async (destinationId) => {
  try {
    const accommodationData = await getAccommodationData(destinationId);
    const packageData = await getTravelPackages(destinationId);
    
    return {
      success: true,
      data: {
        accommodation: accommodationData.data,
        packages: packageData.data,
        weather: {
          temperature: '25°C',
          condition: 'Sunny',
          humidity: '65%'
        },
        bestTimeToVisit: 'June - October',
        currency: 'KES',
        language: 'English, Swahili'
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

export default {
  getAccommodationData,
  getFlightData,
  getTravelPackages,
  searchTravel,
  getDestinationTravelInfo
};