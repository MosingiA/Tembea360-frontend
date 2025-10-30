// Tourism API services for Kenya and international destinations

// Kenya tourism data
export const getKenyaTouringSites = async () => {
  const kenyaSites = [
    {
      id: 1,
      name: "Maasai Mara National Reserve",
      location: "Narok County",
      description: "World-famous for the Great Migration",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      rating: 4.9,
      price: 599,
      duration: "3-5 days",
      groupSize: "2-12 people"
    },
    {
      id: 2,
      name: "Amboseli National Park",
      location: "Kajiado County",
      description: "Best views of Mount Kilimanjaro",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0",
      rating: 4.8,
      price: 450,
      duration: "2-4 days",
      groupSize: "4-10 people"
    },
    {
      id: 3,
      name: "Diani Beach",
      location: "Kwale County",
      description: "Pristine white sand beaches",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      rating: 4.7,
      price: 320,
      duration: "2-7 days",
      groupSize: "1-15 people"
    },
    {
      id: 4,
      name: "Lake Nakuru National Park",
      location: "Nakuru County",
      description: "Famous for flamingos and rhinos",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      rating: 4.6,
      price: 280,
      duration: "1-3 days",
      groupSize: "2-8 people"
    },
    {
      id: 5,
      name: "Tsavo National Parks",
      location: "Taita-Taveta County",
      description: "Kenya's largest national park with red elephants",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44",
      rating: 4.5,
      price: 380,
      duration: "3-6 days",
      groupSize: "4-12 people"
    },
    {
      id: 6,
      name: "Mount Kenya National Park",
      location: "Central Kenya",
      description: "Africa's second highest peak",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431",
      rating: 4.8,
      price: 520,
      duration: "4-7 days",
      groupSize: "2-6 people"
    },
    {
      id: 7,
      name: "Lamu Old Town",
      location: "Lamu County",
      description: "UNESCO World Heritage Swahili culture",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      rating: 4.6,
      price: 250,
      duration: "2-4 days",
      groupSize: "1-10 people"
    },
    {
      id: 8,
      name: "Hell's Gate National Park",
      location: "Nakuru County",
      description: "Unique geothermal features and rock climbing",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c",
      rating: 4.4,
      price: 180,
      duration: "1-2 days",
      groupSize: "2-15 people"
    }
  ];
  
  return Promise.resolve(kenyaSites);
};

// International popular destinations
export const getInternationalDestinations = async () => {
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      country: "France",
      description: "City of Light and Romance",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52",
      rating: 4.9,
      visitors: "15M annually"
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      country: "Japan", 
      description: "Modern metropolis meets tradition",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      rating: 4.8,
      visitors: "14M annually"
    },
    {
      id: 3,
      name: "New York City, USA",
      country: "United States",
      description: "The city that never sleeps",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      rating: 4.7,
      visitors: "13M annually"
    },
    {
      id: 4,
      name: "London, England",
      country: "United Kingdom",
      description: "Historic charm meets modern culture",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      rating: 4.8,
      visitors: "12M annually"
    }
  ];
  
  return Promise.resolve(destinations);
};