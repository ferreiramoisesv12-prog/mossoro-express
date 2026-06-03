import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import Login from './components/Login';
import FormularioPedido from './components/FormularioPedido';
import ListaPedidos from './components/ListaPedidos';
import Mapa from './components/Mapa';

function App() {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "pedidos"), orderBy("criadoEm", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPedidos(lista);
    });
    return () => unsub();
  }, []);

  if (!tipoUsuario) return <Login onLogin={setTipoUsuario} />;

  return (
    <div className="min-h-screen bg-black text-neonCyan p-6 flex flex-col items-center">
      <h1 className="text-2xl font-black uppercase text-neonPurple mb-6">Mossoró Express</h1>
      
      {/* VISÃO DA LOJA: Apenas Formulário */}
      {tipoUsuario === 'loja' && (
        <div className="w-full max-w-sm">
          <FormularioPedido />
        </div>
      )}

      {/* VISÃO DO ENTREGADOR: Apenas Lista e Mapa */}
      {tipoUsuario === 'entregador' && (
        <div className="w-full max-w-sm">
          <Mapa />
          <ListaPedidos pedidos={pedidos} />
        </div>
      )}

      <button onClick={() => setTipoUsuario(null)} className="mt-10 text-gray-500 underline text-sm">Sair</button>
    </div>
  );
}

export default App;