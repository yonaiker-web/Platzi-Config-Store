import React, { useRef, useMemo, useState } from 'react';
//import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ data }) => {
  const mapStyles = {
    height: '80vh',
    width: '100%',
  };

  const [position, setPosition] = useState([data.latitude, data.longitude]);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  console.log('position', position);

  return (
    // <LoadScript googleMapsApiKey="AIzaSyBDNouXTZj2GaL0Az7Ak10iIna2xx4Z88Y">
    //   <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCener}>
    //     <Marker position={defaultCener} />
    //   </GoogleMap>
    // </LoadScript>

    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={mapStyles}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        draggable
        eventHandlers={eventHandlers}
        ref={markerRef}
      >
        <Popup>{data.name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
