import { useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Rastreador = ({ pedidoId }) => {
  useEffect(() => {
    if (!pedidoId) return;

    // Inicia o monitoramento de GPS
    const watcher = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        updateDoc(doc(db, "pedidos", pedidoId), {
          localizacaoEntregador: { lat: latitude, lng: longitude }
        });
      },
      (err) => console.error("Erro no GPS:", err),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, [pedidoId]);

  return null;
};

export default Rastreador;