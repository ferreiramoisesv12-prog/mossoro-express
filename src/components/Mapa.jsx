import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrige o ícone padrão do Leaflet que costuma sumir
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Mapa = ({ pedidoAtivo }) => {
  const center = [-5.1889, -37.3483]; // Mossoró
  const position = pedidoAtivo?.localizacaoEntregador 
    ? [pedidoAtivo.localizacaoEntregador.lat, pedidoAtivo.localizacaoEntregador.lng] 
    : center;

  return (
    <div className="h-64 w-full rounded-xl overflow-hidden border border-neonPurple mb-6">
      <MapContainer center={position} zoom={14} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_f3c38717-89ec-422c-80b3-33260dc3330b"
        />
        {pedidoAtivo?.localizacaoEntregador && <Marker position={position} />}
      </MapContainer>
    </div>
  );
};

export default Mapa;