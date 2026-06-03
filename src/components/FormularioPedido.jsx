import React, { useState } from 'react';

const FormularioPedido = ({ aoAdicionarPedido }) => {
  const [loja, setLoja] = useState('');
  const [destino, setDestino] = useState('');

  const registrarPedido = (e) => {
    e.preventDefault();
    if (!loja || !destino) return;
    
    const novoPedido = { id: Date.now(), loja, destino, status: 'Pendente' };
    aoAdicionarPedido(novoPedido); // Envia o pedido para a lista
    setLoja('');
    setDestino('');
  };

  return (
    <form onSubmit={registrarPedido} className="bg-slate-900 p-6 rounded-2xl border border-neonPurple w-full max-w-sm">
      <h3 className="text-neonCyan font-bold uppercase mb-4 text-sm">Nova Entrega Comercial</h3>
      <input className="w-full bg-black border border-neonPurple p-2 rounded-lg mb-2 text-white text-sm" placeholder="Loja (Origem)" value={loja} onChange={(e) => setLoja(e.target.value)} />
      <input className="w-full bg-black border border-neonPurple p-2 rounded-lg mb-4 text-white text-sm" placeholder="Endereço de Destino" value={destino} onChange={(e) => setDestino(e.target.value)} />
      <button className="w-full bg-neonCyan text-black py-2 rounded-lg font-bold hover:shadow-[0_0_10px_#00f2ff]">Confirmar</button>
    </form>
  );
};

export default FormularioPedido;