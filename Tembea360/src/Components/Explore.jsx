import React from "react";
import DestinationCard from "./DestinationCard";

const Explore = () => {
  const popularDestinations = [
    {
      name: "Mombasa",
      description:
        "Explore sun-soaked beaches, vibrant Swahili culture, and centuries of coastal history.",
      image: "https://source.unsplash.com/random/800x600/?mombasa,beach",
    },
    {
      name: "Maasai Mara",
      description:
        "Witness nature’s grand spectacle with breathtaking safaris and endless plains.",
      image: "https://source.unsplash.com/random/800x600/?maasai,mara",
    },
    {
      name: "Nabiyotum Crater",
      description:
        "Marvel at this rare volcanic wonder on the edge of Lake Turkana — a dramatic landscape shaped by time.",
      image: "https://source.unsplash.com/random/800x600/?turkana,crater",
    },
    {
      name: "Mount Kenya",
      description:
        "Conquer Kenya’s highest peak and experience stunning alpine views and forest trails.",
      image: "https://source.unsplash.com/random/800x600/?mount,kenya",
    },
  ];

  const internationalDestinations = [
    {
      name: "Paris, France",
      description:
        "The city of lights — where art, culture and cuisine come alive in every corner.",
      image: "https://source.unsplash.com/random/800x600/?paris,france",
    },
    {
      name: "Mount Fuji, Japan",
      description:
        "Experience Japan’s most iconic peak — a perfect blend of natural wonder and cultural heritage.",
      image: "https://source.unsplash.com/random/800x600/?mount,fuji",
    },
    {
      name: "Venice, Italy",
      description:
        "Glide through dreamy canals, marvel at Renaissance architecture, and savor every sunset.",
      image: "https://source.unsplash.com/random/800x600/?venice,italy",
    },
    {
      name: "Chiang Mai, Thailand",
      description:
        "A city of temples and tranquility — experience lush mountains and vibrant markets.",
      image: "https://source.unsplash.com/random/800x600/?chiangmai,thailand",
    },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Popular Destinations
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {popularDestinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
        Top International Destinations
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {internationalDestinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
