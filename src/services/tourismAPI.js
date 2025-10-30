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
    },
    {
      id: 21,
      name: "Marsabit National Park",
      location: "Marsabit County",
      description: "Desert oasis with elephants",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44",
      rating: 4.2,
      price: 380,
      duration: "3-5 days",
      groupSize: "2-8 people"
    },
    {
      id: 22,
      name: "Arabuko Sokoke Forest",
      location: "Kilifi County",
      description: "Coastal forest with rare birds",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      rating: 4.1,
      price: 150,
      duration: "1 day",
      groupSize: "2-12 people"
    },
    {
      id: 23,
      name: "Ruma National Park",
      location: "Homa Bay County",
      description: "Last sanctuary for roan antelope",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      rating: 4.0,
      price: 200,
      duration: "1-2 days",
      groupSize: "2-10 people"
    },
    {
      id: 24,
      name: "Saiwa Swamp National Park",
      location: "Trans-Nzoia County",
      description: "Sitatunga antelope habitat",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      rating: 4.0,
      price: 120,
      duration: "1 day",
      groupSize: "2-8 people"
    },
    {
      id: 25,
      name: "Kora National Park",
      location: "Tana River County",
      description: "George Adamson's lion sanctuary",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44",
      rating: 4.1,
      price: 280,
      duration: "2-3 days",
      groupSize: "3-8 people"
    },
    {
      id: 26,
      name: "Ndere Island National Park",
      location: "Siaya County",
      description: "Lake Victoria island sanctuary",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      rating: 3.9,
      price: 180,
      duration: "1-2 days",
      groupSize: "2-12 people"
    },
    {
      id: 27,
      name: "Central Island National Park",
      location: "Turkana County",
      description: "Volcanic island in Lake Turkana",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431",
      rating: 4.3,
      price: 450,
      duration: "2-4 days",
      groupSize: "2-6 people"
    },
    {
      id: 28,
      name: "South Island National Park",
      location: "Turkana County",
      description: "Crocodile breeding ground",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      rating: 4.2,
      price: 420,
      duration: "2-3 days",
      groupSize: "2-8 people"
    },
    {
      id: 29,
      name: "Nairobi National Park",
      location: "Nairobi County",
      description: "Wildlife park near city center",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      rating: 4.4,
      price: 150,
      duration: "Half day",
      groupSize: "1-20 people"
    },
    {
      id: 30,
      name: "Karura Forest",
      location: "Nairobi County",
      description: "Urban forest with waterfalls",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      rating: 4.2,
      price: 50,
      duration: "Half day",
      groupSize: "1-15 people"
    },
    {
      id: 31,
      name: "Menengai Crater",
      location: "Nakuru County",
      description: "Second largest volcanic crater",
      image: "https://images.unsplash.com/photo-1605538883669-825200433431",
      rating: 4.1,
      price: 100,
      duration: "Half day",
      groupSize: "2-20 people"
    },
    {
      id: 32,
      name: "Fourteen Falls",
      location: "Machakos County",
      description: "Scenic waterfalls on Athi River",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      rating: 4.0,
      price: 80,
      duration: "Half day",
      groupSize: "2-25 people"
    },
    {
      id: 33,
      name: "Oloololo Escarpment",
      location: "Narok County",
      description: "Dramatic cliffs overlooking Mara",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      rating: 4.6,
      price: 200,
      duration: "1 day",
      groupSize: "2-12 people"
    },
    {
      id: 34,
      name: "Gedi Ruins",
      location: "Kilifi County",
      description: "Ancient Swahili town ruins",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      rating: 4.2,
      price: 120,
      duration: "Half day",
      groupSize: "1-15 people"
    },
    {
      id: 35,
      name: "Takwa Ruins",
      location: "Lamu County",
      description: "15th century Swahili settlement",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      rating: 4.0,
      price: 150,
      duration: "Half day",
      groupSize: "2-10 people"
    },
    {
      id: 36,
      name: "Jumba la Mtwana",
      location: "Kilifi County",
      description: "Medieval Swahili ruins by the sea",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      rating: 4.1,
      price: 100,
      duration: "Half day",
      groupSize: "1-12 people"
    },
    {
      id: 37,
      name: "Mida Creek",
      location: "Kilifi County",
      description: "Mangrove boardwalk and bird watching",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      rating: 4.3,
      price: 80,
      duration: "Half day",
      groupSize: "2-15 people"
    },
    {
      id: 38,
      name: "Haller Park",
      location: "Mombasa County",
      description: "Rehabilitated quarry nature park",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      rating: 4.0,
      price: 60,
      duration: "Half day",
      groupSize: "1-20 people"
    },
    {
      id: 39,
      name: "Nguuni Nature Sanctuary",
      location: "Mombasa County",
      description: "Giraffes and ostriches near coast",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44",
      rating: 4.1,
      price: 100,
      duration: "Half day",
      groupSize: "2-15 people"
    },
    {
      id: 40,
      name: "Wasini Island",
      location: "Kwale County",
      description: "Coral gardens and dhow sailing",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      rating: 4.4,
      price: 180,
      duration: "1 day",
      groupSize: "2-20 people"
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
    },
    {
      id: 11,
      name: "Amsterdam, Netherlands",
      country: "Netherlands",
      description: "Canals, museums, and cycling culture",
      image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017",
      rating: 4.5,
      visitors: "5M annually",
      price: 900
    },
    {
      id: 12,
      name: "Prague, Czech Republic",
      country: "Czech Republic",
      description: "Medieval architecture and beer culture",
      image: "https://images.unsplash.com/photo-1541849546-216549ae216d",
      rating: 4.4,
      visitors: "5M annually",
      price: 600
    },
    {
      id: 13,
      name: "Vienna, Austria",
      country: "Austria",
      description: "Imperial palaces and classical music",
      image: "https://images.unsplash.com/photo-1516550893923-42d407bd4ac2",
      rating: 4.6,
      visitors: "4M annually",
      price: 800
    },
    {
      id: 14,
      name: "Santorini, Greece",
      country: "Greece",
      description: "White-washed buildings and sunsets",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
      rating: 4.7,
      visitors: "2M annually",
      price: 750
    },
    {
      id: 15,
      name: "Bali, Indonesia",
      country: "Indonesia",
      description: "Tropical paradise with temples",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
      rating: 4.5,
      visitors: "6M annually",
      price: 650
    },
    {
      id: 16,
      name: "Marrakech, Morocco",
      country: "Morocco",
      description: "Red city with vibrant souks",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
      rating: 4.3,
      visitors: "3M annually",
      price: 550
    },
    {
      id: 17,
      name: "Cape Town, South Africa",
      country: "South Africa",
      description: "Table Mountain and wine regions",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
      rating: 4.6,
      visitors: "2M annually",
      price: 700
    },
    {
      id: 18,
      name: "Reykjavik, Iceland",
      country: "Iceland",
      description: "Northern lights and geysers",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
      rating: 4.4,
      visitors: "2M annually",
      price: 1200
    },
    {
      id: 19,
      name: "Kyoto, Japan",
      country: "Japan",
      description: "Traditional temples and gardens",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
      rating: 4.8,
      visitors: "5M annually",
      price: 1100
    },
    {
      id: 20,
      name: "Machu Picchu, Peru",
      country: "Peru",
      description: "Ancient Incan citadel in the clouds",
      image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      rating: 4.9,
      visitors: "1M annually",
      price: 800
    },
    {
      id: 21,
      name: "Rio de Janeiro, Brazil",
      country: "Brazil",
      description: "Christ the Redeemer and beaches",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
      rating: 4.5,
      visitors: "2M annually",
      price: 750
    },
    {
      id: 22,
      name: "Cairo, Egypt",
      country: "Egypt",
      description: "Pyramids and ancient wonders",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
      rating: 4.3,
      visitors: "3M annually",
      price: 600
    },
    {
      id: 23,
      name: "Mumbai, India",
      country: "India",
      description: "Bollywood and colonial architecture",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
      rating: 4.2,
      visitors: "5M annually",
      price: 500
    },
    {
      id: 24,
      name: "Singapore",
      country: "Singapore",
      description: "Garden city with modern marvels",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
      rating: 4.6,
      visitors: "19M annually",
      price: 1000
    },
    {
      id: 25,
      name: "Lisbon, Portugal",
      country: "Portugal",
      description: "Colorful tiles and tram rides",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
      rating: 4.4,
      visitors: "4M annually",
      price: 650
    },
    {
      id: 26,
      name: "Stockholm, Sweden",
      country: "Sweden",
      description: "Archipelago and Nordic design",
      image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11",
      rating: 4.5,
      visitors: "3M annually",
      price: 950
    },
    {
      id: 27,
      name: "Buenos Aires, Argentina",
      country: "Argentina",
      description: "Tango and European architecture",
      image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849",
      rating: 4.3,
      visitors: "3M annually",
      price: 700
    },
    {
      id: 28,
      name: "Seoul, South Korea",
      country: "South Korea",
      description: "K-pop culture and palaces",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      rating: 4.4,
      visitors: "13M annually",
      price: 900
    },
    {
      id: 29,
      name: "Vancouver, Canada",
      country: "Canada",
      description: "Mountains meet ocean cityscape",
      image: "https://images.unsplash.com/photo-1549890762-0a3f8933bc76",
      rating: 4.5,
      visitors: "10M annually",
      price: 1100
    },
    {
      id: 30,
      name: "Zurich, Switzerland",
      country: "Switzerland",
      description: "Alpine lakes and luxury shopping",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      rating: 4.6,
      visitors: "3M annually",
      price: 1300
    }
  ];
  
  return Promise.resolve(destinations);
};