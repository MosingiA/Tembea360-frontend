import React, { useEffect, useRef } from 'react';
import { loadGoogleMapsScript, initializeMap, addMarker } from '../services/mapsService';

const MapComponent = ({ destinations = [], center = { lat: -1.286389, lng: 36.817223 } }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        await loadGoogleMapsScript();
        
        if (mapRef.current) {
          mapInstance.current = initializeMap('map', center);
          
          // Add markers for destinations
          destinations.forEach(destination => {
            if (destination.coordinates) {
              addMarker(
                mapInstance.current,
                destination.coordinates,
                destination.name,
                `<div><h3>${destination.name}</h3><p>${destination.description}</p></div>`
              );
            }
          });
        }
      } catch (error) {
        console.error('Failed to load Google Maps:', error);
      }
    };

    initMap();
  }, [destinations, center]);

  return (
    <div 
      id="map" 
      ref={mapRef}
      className="w-full h-96 rounded-lg shadow-lg"
      style={{ minHeight: '400px' }}
    />
  );
};

export default MapComponent;