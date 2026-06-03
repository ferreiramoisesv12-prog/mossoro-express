import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import Login from './components/Login';
import FormularioPedido from './components/FormularioPedido';
import ListaPedidos from './components/ListaPedidos';
import Mapa from './components/Mapa';
import Rastreador from './components/Rastreador'; // O componente que criamos

function App() {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [pedidoAtivoId, setPedidoAtivoId] = useState(null); // ID do pedido que o entregador aceitou

  useEffect(() => {
    const q = query(collection(db, "pedidos"), orderBy("criadoEm", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setPedidos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  if (!tipoUsuario) return <Login onLogin={setTipoUsuario} />;

  return (
    <div className="min-h-screen bg-black text-neonCyan p-6 flex flex-col items-center">
      <h1 className="text-2xl font-black uppercase text-neonPurple mb-6">Mossoró Express</h1>
      
      {/* VISÃO DA LOJA */}
      {tipoUsuario === 'loja' && (
        <div className="w-full max-w-sm">
          <FormularioPedido />
          <h3 className="text-neonCyan mt-6 mb-2">Acompanhar Entregas</h3>
          {pedidos.filter(p => p.status === 'Em Rota').map(p => (
            <div key={p.id} className="bg-slate-900 p-4 rounded-lg mb-2">
              <p className="text-white">Pedido p/ {p.destino}</p>
              {p.localizacaoEntregador && <p className="text-xs text-green-400">Entregador em movimento!</p>}
            </div>
          ))}
        </div>
      )}

      {/* VISÃO DO ENTREGADOR */}
      {tipoUsuario === 'entregador' && (
        <div className="w-full max-w-sm">
          {!pedidoAtivoId ? (
            <ListaPedidos pedidos={pedidos} onAceitar={(id) => setPedidoAtivoId(id)} />
          ) : (
            <>
              <Mapa />
              <Rastreador pedidoId={pedidoAtivoId} />
              <button 
                onClick={() => setPedidoAtivoId(null)}
                className="w-full bg-red-900 text-white py-2 rounded-lg mt-4"
              >
                Finalizar Entrega
              </button>
            </>
          )}
        </div>
      )}

      <button onClick={() => setTipoUsuario(null)} className="mt-10 text-gray-500 underline text-sm">Sair</button>
    </div>
  );
}

export default App;