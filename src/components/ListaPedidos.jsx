import React from 'react';

const ListaPedidos = ({ pedidos }) => (
  <div className="w-full max-w-sm mt-6">
    <h3 className="text-neonCyan font-bold uppercase mb-4 text-sm">Pedidos Recentes</h3>
    {pedidos.map(p => (
      <div key={p.id} className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-neonPurple mb-3">
        <p className="text-white font-bold">{p.loja}</p>
        <p className="text-gray-400 text-xs">Destino: {p.destino}</p>
      </div>
    ))}
  </div>
);

export default ListaPedidos;