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
    },
    {
      id: 9,
      name: "Samburu National Reserve",
      location: "Samburu County",
      description: "Unique wildlife and Samburu culture",
      image: "https://images.unsplash.com/photo-1564760290292-23341e4df6ec",
      rating: 4.7,
      price: 420,
      duration: "3-5 days",
      groupSize: "2-10 people"
    },
    {
      id: 10,
      name: "Mombasa Old Town",
      location: "Mombasa County",
      description: "Historic coastal city with Fort Jesus",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      rating: 4.3,
      price: 200,
      duration: "1-3 days",
      groupSize: "1-20 people"
    },
    {
      id: 11,
      name: "Aberdare National Park",
      location: "Nyandarua County",
      description: "Mountain forests and waterfalls",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431",
      rating: 4.5,
      price: 350,
      duration: "2-4 days",
      groupSize: "3-8 people"
    },
    {
      id: 12,
      name: "Watamu Marine Park",
      location: "Kilifi County",
      description: "Coral reefs and marine life",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      rating: 4.6,
      price: 280,
      duration: "1-4 days",
      groupSize: "2-12 people"
    },
    {
      id: 13,
      name: "Meru National Park",
      location: "Meru County",
      description: "Elsa the lioness birthplace",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44",
      rating: 4.4,
      price: 320,
      duration: "2-4 days",
      groupSize: "2-10 people"
    },
    {
      id: 14,
      name: "Lake Naivasha",
      location: "Nakuru County",
      description: "Freshwater lake with hippos and birds",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      rating: 4.5,
      price: 220,
      duration: "1-3 days",
      groupSize: "2-15 people"
    },
    {
      id: 15,
      name: "Kakamega Forest",
      location: "Kakamega County",
      description: "Last remnant of tropical rainforest",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      rating: 4.3,
      price: 180,
      duration: "1-2 days",
      groupSize: "3-12 people"
    },
    {
      id: 16,
      name: "Malindi Marine Park",
      location: "Kilifi County",
      description: "Pristine coral gardens and beaches",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      rating: 4.4,
      price: 260,
      duration: "1-3 days",
      groupSize: "2-10 people"
    },
    {
      id: 17,
      name: "Ol Pejeta Conservancy",
      location: "Laikipia County",
      description: "Rhino sanctuary and Big Five",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      rating: 4.8,
      price: 480,
      duration: "2-4 days",
      groupSize: "2-8 people"
    },
    {
      id: 18,
      name: "Shimba Hills National Reserve",
      location: "Kwale County",
      description: "Coastal forests and elephant sanctuary",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44",
      rating: 4.4,
      price: 300,
      duration: "1-3 days",
      groupSize: "2-12 people"
    },
    {
      id: 19,
      name: "Chyulu Hills National Park",
      location: "Makueni County",
      description: "Green hills and lava tube caves",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431",
      rating: 4.2,
      price: 250,
      duration: "2-3 days",
      groupSize: "3-10 people"
    },
    {
      id: 20,
      name: "Kisite-Mpunguti Marine Park",
      location: "Kwale County",
      description: "Dolphin watching and snorkeling",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      rating: 4.5,
      price: 290,
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
      visitors: "15M annually",
      price: 1200
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      country: "Japan", 
      description: "Modern metropolis meets tradition",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      rating: 4.8,
      visitors: "14M annually",
      price: 1500
    },
    {
      id: 3,
      name: "New York City, USA",
      country: "United States",
      description: "The city that never sleeps",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      rating: 4.7,
      visitors: "13M annually",
      price: 1300
    },
    {
      id: 4,
      name: "London, England",
      country: "United Kingdom",
      description: "Historic charm meets modern culture",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      rating: 4.8,
      visitors: "12M annually",
      price: 1100
    },
    {
      id: 5,
      name: "Rome, Italy",
      country: "Italy",
      description: "Eternal city of ancient wonders",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
      rating: 4.7,
      visitors: "10M annually",
      price: 950
    },
    {
      id: 6,
      name: "Barcelona, Spain",
      country: "Spain",
      description: "Gaudi's architectural masterpieces",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
      rating: 4.6,
      visitors: "9M annually",
      price: 850
    },
    {
      id: 7,
      name: "Dubai, UAE",
      country: "United Arab Emirates",
      description: "Luxury and modern marvels",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      rating: 4.5,
      visitors: "8M annually",
      price: 1000
    },
    {
      id: 8,
      name: "Bangkok, Thailand",
      country: "Thailand",
      description: "Temples, street food, and culture",
      image: "https://images.unsplash.com/photo-1563492065-1a83e8c0e8d6",
      rating: 4.4,
      visitors: "8M annually",
      price: 700
    },
    {
      id: 9,
      name: "Istanbul, Turkey",
      country: "Turkey",
      description: "Bridge between Europe and Asia",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
      rating: 4.5,
      visitors: "7M annually",
      price: 650
    },
    {
      id: 10,
      name: "Sydney, Australia",
      country: "Australia",
      description: "Harbor city with iconic opera house",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      rating: 4.6,
      visitors: "6M annually",
      price: 1400
    }
  ];
  
  return Promise.resolve(destinations);
};