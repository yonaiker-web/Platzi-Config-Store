import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAddress = () => {
  //direccion del mapa
  const [map, setMap] = useState(null);

  const handlePosition = (position) => {
    console.log(position.coords);
    setMap(position.coords);
  };

  useEffect(async () => {
    try {
      navigator.geolocation.getCurrentPosition(handlePosition);
    } catch (error) {
      console.log('error api', error);
    }
  }, []);

  return map;
};

export default useGoogleAddress;
