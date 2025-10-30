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
      price: 599
    },
    {
      id: 2,
      name: "Amboseli National Park",
      location: "Kajiado County",
      description: "Best views of Mount Kilimanjaro",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0",
      rating: 4.8,
      price: 450
    },
    {
      id: 3,
      name: "Diani Beach",
      location: "Kwale County",
      description: "Pristine white sand beaches",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      rating: 4.7,
      price: 320
    },
    {
      id: 4,
      name: "Lake Nakuru National Park",
      location: "Nakuru County",
      description: "Famous for flamingos and rhinos",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
      rating: 4.6,
      price: 280
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