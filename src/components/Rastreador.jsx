import { useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Rastreador = ({ pedidoId }) => {
  useEffect(() => {
    if (!pedidoId) return;
    const watcher = navigator.geolocation.watchPosition(
      (pos) => {
        updateDoc(doc(db, "pedidos", pedidoId), {
          localizacaoEntregador: { lat: pos.coords.latitude, lng: pos.coords.longitude }
        });
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );
    return () => navigator.geolocation.clearWatch(watcher);
  }, [pedidoId]);
  return null;
};

export default Rastreador;