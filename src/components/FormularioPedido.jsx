import React, { useState } from 'react';

const FormularioPedido = () => {
  const [loja, setLoja] = useState('');
  const [destino, setDestino] = useState('');

  const registrarPedido = (e) => {
    e.preventDefault();
    alert(`Pedido confirmado para: ${loja} com destino a ${destino}`);
  };

  return (
    <form onSubmit={registrarPedido} className="bg-slate-900 p-6 rounded-2xl border border-neonPurple mt-6 w-full max-w-sm">
      <h3 className="text-neonCyan font-bold uppercase mb-4">Nova Entrega Comercial</h3>
      
      <input 
        className="w-full bg-black border border-neonPurple p-3 rounded-xl mb-3 text-white placeholder-gray-500"
        placeholder="Nome da Loja (Origem)"
        value={loja}
        onChange={(e) => setLoja(e.target.value)}
      />
      
      <input 
        className="w-full bg-black border border-neonPurple p-3 rounded-xl mb-4 text-white placeholder-gray-500"
        placeholder="Endereço de Destino"
        value={destino}
        onChange={(e) => setDestino(e.target.value)}
      />
      
      <button className="w-full bg-neonCyan text-black py-3 rounded-xl font-bold hover:shadow-[0_0_15px_#00f2ff]">
        Confirmar Retirada
      </button>
    </form>
  );
};

export default FormularioPedido;