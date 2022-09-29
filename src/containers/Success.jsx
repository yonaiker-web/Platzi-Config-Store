import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0]?.address);
  if (!location) {
    return null;
  }
  console.log('location', location);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
