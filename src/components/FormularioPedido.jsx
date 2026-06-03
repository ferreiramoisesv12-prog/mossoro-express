import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";

const FormularioPedido = () => {
  const [loja, setLoja] = useState('');
  const [destino, setDestino] = useState('');

  const registrarPedido = async (e) => {
    e.preventDefault();
    if (!loja || !destino) return;
    
    try {
      await addDoc(collection(db, "pedidos"), {
        loja,
        destino,
        status: 'Pendente',
        criadoEm: new Date()
      });
      setLoja('');
      setDestino('');
    } catch (e) {
      console.error("Erro ao salvar: ", e);
    }
  };

  return (
    <form onSubmit={registrarPedido} className="bg-slate-900 p-6 rounded-2xl border border-neonPurple w-full max-w-sm">
      <h3 className="text-neonCyan font-bold uppercase mb-4 text-sm">Nova Entrega</h3>
      <input className="w-full bg-black border border-neonPurple p-2 rounded-lg mb-2 text-white text-sm" placeholder="Loja" value={loja} onChange={(e) => setLoja(e.target.value)} />
      <input className="w-full bg-black border border-neonPurple p-2 rounded-lg mb-4 text-white text-sm" placeholder="Destino" value={destino} onChange={(e) => setDestino(e.target.value)} />
      <button className="w-full bg-neonCyan text-black py-2 rounded-lg font-bold">Confirmar</button>
    </form>
  );
};

export default FormularioPedido;