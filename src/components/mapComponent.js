import React from 'react';
import { useGoogleMaps } from 'react-hook-google-maps';

const companyPlace = { lat: 52.40632298398924, lng: 16.917750243450183 };
const MapGoogleComponent = () => {
  const { ref, map, google } = useGoogleMaps(
    'AIzaSyAFybTSGmBZJXGqcBjB0vBOKZXDuE9m9vk',
    {
      center: companyPlace,
      zoom: 15,
      mapId: '1b77a3ccaa04c012',
    },
  );
  if (map) {
    new google.maps.Marker({ position: companyPlace, map });
  }

  return <div ref={ref} style={{ width: '100%', height: '100%', zIndex: 0 }} />;
};

export default MapGoogleComponent;
