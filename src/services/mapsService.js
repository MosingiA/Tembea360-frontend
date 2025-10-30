// Google Maps integration service

const GOOGLE_MAPS_API_KEY = 'your_google_maps_api_key';

export const initializeMap = (elementId, center, zoom = 10) => {
  if (window.google) {
    const map = new window.google.maps.Map(document.getElementById(elementId), {
      center: center,
      zoom: zoom,
    });
    return map;
  }
  return null;
};

export const addMarker = (map, position, title, info) => {
  if (window.google && map) {
    const marker = new window.google.maps.Marker({
      position: position,
      map: map,
      title: title,
    });

    if (info) {
      const infoWindow = new window.google.maps.InfoWindow({
        content: info,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    }

    return marker;
  }
  return null;
};

export const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};