import React from 'react';

const TourCard = ({ tour, onClick }) => (
  <div onClick={() => onClick(tour.id)} className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:-translate-y-1">
    <div className="relative h-48 overflow-hidden">
      <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
        {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
      </div>
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
        {tour.duration}
      </div>
    </div>
    <div className="p-5">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{tour.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{tour.location}</p>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{tour.description}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-sm">{tour.rating}</span>
          <span className="text-gray-500 text-xs">({tour.reviews} reviews)</span>
        </div>
        <span className="text-2xl font-bold text-emerald-600">${tour.price}</span>
      </div>
      <button className="w-full bg-emerald-600 text-white py-3 rounded-lg text-base font-medium hover:bg-emerald-700">View Details</button>
    </div>
  </div>
);

export default TourCard;