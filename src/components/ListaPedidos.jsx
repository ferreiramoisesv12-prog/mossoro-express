import React from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const ListaPedidos = ({ pedidos, usuarioLogado }) => {
  
  const aceitarPedido = async (id) => {
    await updateDoc(doc(db, "pedidos", id), {
      status: 'Em Rota',
      entregador: 'Entregador Ativo' // Você pode salvar o nome do entregador aqui
    });
  };

  return (
    <div className="w-full max-w-sm mt-6">
      <h3 className="text-neonCyan font-bold uppercase mb-4 text-sm">Pedidos Disponíveis</h3>
      {pedidos.filter(p => p.status === 'Pendente').map(p => (
        <div key={p.id} className="bg-slate-900/80 p-4 rounded-xl border border-neonPurple mb-3 shadow-lg">
          <p className="text-white font-bold text-lg">{p.loja}</p>
          <p className="text-neonCyan text-sm">Destino: {p.destino}</p>
          <p className="text-gray-300 text-xs mt-1">Ref: {p.ref}</p>
          <button 
            onClick={() => aceitarPedido(p.id)}
            className="w-full mt-3 bg-neonPurple text-white py-2 rounded-lg font-bold hover:bg-purple-600"
          >
            ACEITAR ENTREGA
          </button>
        </div>
      ))}
      
      {/* Lista de pedidos que o entregador já pegou */}
      <h3 className="text-gray-500 font-bold uppercase mt-8 mb-4 text-sm">Meus Pedidos em Rota</h3>
      {pedidos.filter(p => p.status === 'Em Rota').map(p => (
        <div key={p.id} className="bg-slate-800 p-4 rounded-xl border border-gray-600 mb-3 opacity-70">
          <p className="text-gray-400 font-bold">{p.loja} - Em Rota</p>
        </div>
      ))}
    </div>
  );
};

export default ListaPedidos;