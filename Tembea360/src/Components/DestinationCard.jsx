import React from "react";

const DestinationCard = ({ name, description, image }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg group bg-white transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-sm text-gray-200 mb-3">{description}</p>
        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
