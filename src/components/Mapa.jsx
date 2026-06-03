import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  // Coordenadas centrais de Mossoró, RN
  const position = [-5.1889, -37.3483]; 

  return (
    <div className="h-64 w-full rounded-xl overflow-hidden border border-neonPurple mb-6">
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          // Use o estilo 'alidade_smooth_dark' para combinar com o seu tema Neon
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=f3c38717-89ec-422c-80b3-33260dc3330b"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        />
      </MapContainer>
    </div>
  );
};

export default Mapa;