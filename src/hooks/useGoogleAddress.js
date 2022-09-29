import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAddress = (location) => {
  //direccion del mapa
  const [map, setMap] = useState(null);

  const params = {
    access_key: '9afeea871b58f845aa308280d7b83964',
    query: location,
  };

  const API = `http://api.positionstack.com/v1/forward`;

  useEffect(async () => {
    const response = await axios(API, { params });
    console.log('API', API);
    console.log('response', response.data);
    setMap(response.data.data[0]);
  }, []);

  return map;
};

export default useGoogleAddress;
