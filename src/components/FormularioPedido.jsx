import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";

const FormularioPedido = () => {
  const [dados, setDados] = useState({ loja: '', destino: '', ref: '', telefone: '', troco: '' });

  const enviar = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "pedidos"), { ...dados, status: 'Pendente', criadoEm: new Date() });
    setDados({ loja: '', destino: '', ref: '', telefone: '', troco: '' });
  };

  return (
    <form onSubmit={enviar} className="bg-slate-900 p-6 rounded-2xl border border-neonPurple w-full max-w-sm">
      <h3 className="text-neonCyan font-bold uppercase mb-4 text-sm">Dados da Entrega</h3>
      <input className="w-full bg-black border border-neonPurple p-2 rounded-lg mb-2 text-white text-sm" placeholder="Loja (Origem)" value={dados.loja} onChange={(e) => setDados({...dados, loja: e.target.value})} />
      <input className="w-full bg-black border border-neonPurple p-2 rounded-lg mb-2 text-white text-sm" placeholder="Endereço de Destino" value={dados.destino} onChange={(e) => setDados({...dados, destino: e.target.value})} />
      <input className="w-full bg-black border border-neonPurple p-2 rounded-lg mb-2 text-white text-sm" placeholder="Ponto de Referência" value={dados.ref} onChange={(e) => setDados({...dados, ref: e.target.value})} />
      <input className="w-full bg-black border border-neonPurple p-2 rounded-lg mb-2 text-white text-sm" placeholder="Telefone Cliente" value={dados.telefone} onChange={(e) => setDados({...dados, telefone: e.target.value})} />
      <input className="w-full bg-black border border-neonPurple p-2 rounded-lg mb-4 text-white text-sm" placeholder="Troco p/?" value={dados.troco} onChange={(e) => setDados({...dados, troco: e.target.value})} />
      <button className="w-full bg-neonCyan text-black py-2 rounded-lg font-bold">Lançar no Sistema</button>
    </form>
  );
};

export default FormularioPedido;