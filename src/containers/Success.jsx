import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css';
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const map = useGoogleAddress();

  //console.log('namebuyer', buyer);
  //console.log('location', location);

  if (!map) {
    return (
      <div className="">
        Debe permitir el acceso a tu ubicacion
        <button>Permitir</button>
      </div>
    );
  }

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="">
          <Map data={map} />
        </div>
      </div>
    </div>
  );
};

export default Success;
