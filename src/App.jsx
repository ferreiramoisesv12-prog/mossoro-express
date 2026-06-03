import React, { useState } from 'react';
import Mapa from './components/Mapa';
import CalculadoraFrete from './components/CalculadoraFrete';
import FormularioPedido from './components/FormularioPedido';
import ListaPedidos from './components/ListaPedidos';

function App() {
  const [pedidos, setPedidos] = useState([]);

  const adicionarPedido = (novo) => setPedidos([novo, ...pedidos]);

  return (
    <div className="min-h-screen bg-black text-neonCyan font-sans p-6 flex flex-col items-center">
      <header className="w-full max-w-2xl border-b border-neonPurple pb-4 mb-6 text-center">
        <h1 className="text-3xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Mossoró Express</h1>
      </header>

      <div className="w-full max-w-2xl flex flex-col items-center gap-6">
        <Mapa />
        <FormularioPedido aoAdicionarPedido={adicionarPedido} />
        <ListaPedidos pedidos={pedidos} />
        <CalculadoraFrete />
      </div>
    </div>
  );
}

export default App;