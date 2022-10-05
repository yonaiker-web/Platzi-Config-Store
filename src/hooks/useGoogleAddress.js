import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAddress = (location) => {
  //direccion del mapa
  const [map, setMap] = useState(null);

  const params = 'api_key=bb34f943a0e64332a8931eb38066fcc2';

  //const API = `https://api.positionstack.com/v1/forward`;
  const API = `https://ipgeolocation.abstractapi.com/v1/?${params}`;

  useEffect(async () => {
    try {
      const response = await axios.get(API);

      console.log(response.data);
      setMap(response.data);
    } catch (error) {
      console.log('error api', error);
    }
  }, []);

  return map;
};

export default useGoogleAddress;
