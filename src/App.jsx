import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import Login from './components/Login';
import FormularioPedido from './components/FormularioPedido';
import ListaPedidos from './components/ListaPedidos';
import Mapa from './components/Mapa';
import Rastreador from './components/Rastreador';

function App() {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [pedidoAtivoId, setPedidoAtivoId] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "pedidos"), orderBy("criadoEm", "desc"));
    return onSnapshot(q, (snapshot) => {
      setPedidos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const aceitarEntrega = async (id) => {
    await updateDoc(doc(db, "pedidos", id), { status: 'Em Rota' });
    setPedidoAtivoId(id);
  };

  if (!tipoUsuario) return <Login onLogin={setTipoUsuario} />;

  return (
    <div className="min-h-screen bg-black text-neonCyan p-6 flex flex-col items-center">
      <h1 className="text-2xl font-black uppercase text-neonPurple mb-6">Mossoró Express</h1>
      
      {tipoUsuario === 'loja' && (
        <div className="w-full max-w-sm">
          <FormularioPedido />
          <h3 className="text-neonCyan mt-6 mb-2">Monitoramento</h3>
          {pedidos.filter(p => p.status === 'Em Rota').map(p => (
            <div key={p.id} className="bg-slate-900 p-4 rounded-lg mb-2">
              <p className="text-white text-sm">Destino: {p.destino}</p>
              <Mapa pedidoAtivo={p} />
            </div>
          ))}
        </div>
      )}

      {tipoUsuario === 'entregador' && (
        <div className="w-full max-w-sm">
          {!pedidoAtivoId ? (
            <ListaPedidos pedidos={pedidos} onAceitar={aceitarEntrega} />
          ) : (
            <>
              <Mapa pedidoAtivo={pedidos.find(p => p.id === pedidoAtivoId)} />
              <Rastreador pedidoId={pedidoAtivoId} />
              <button onClick={() => setPedidoAtivoId(null)} className="w-full bg-red-900 py-3 rounded-lg mt-4 font-bold">Finalizar Entrega</button>
            </>
          )}
        </div>
      )}
      <button onClick={() => setTipoUsuario(null)} className="mt-10 text-gray-500 underline text-xs">Sair</button>
    </div>
  );
}

export default App;