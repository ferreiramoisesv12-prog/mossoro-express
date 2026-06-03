import React, { useState } from 'react';
import Login from './components/Login';
import Mapa from './components/Mapa';
import FormularioPedido from './components/FormularioPedido';
import ListaPedidos from './components/ListaPedidos';

function App() {
  const [tipoUsuario, setTipoUsuario] = useState(null);
  const [pedidos, setPedidos] = useState([]);

  const adicionarPedido = (novo) => setPedidos([novo, ...pedidos]);

  if (!tipoUsuario) {
    return <Login onLogin={setTipoUsuario} />;
  }

  return (
    <div className="min-h-screen bg-black text-neonCyan p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 uppercase text-neonPurple">
        Painel: {tipoUsuario === 'loja' ? 'Gestão da Loja' : 'Painel do Entregador'}
      </h1>

      {tipoUsuario === 'loja' && (
        <div className="w-full max-w-2xl flex flex-col items-center gap-6">
          <FormularioPedido aoAdicionarPedido={adicionarPedido} />
          <ListaPedidos pedidos={pedidos} />
        </div>
      )}

      {tipoUsuario === 'entregador' && (
        <div className="w-full max-w-2xl">
          <Mapa />
          <ListaPedidos pedidos={pedidos} />
        </div>
      )}

      <button 
        onClick={() => setTipoUsuario(null)} 
        className="mt-10 text-gray-500 underline text-sm"
      >
        Sair da conta
      </button>
    </div>
  );
}

export default App;