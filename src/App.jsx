import React from 'react';
import Mapa from './components/Mapa';
import CalculadoraFrete from './components/CalculadoraFrete';
import FormularioPedido from './components/FormularioPedido';

function App() {
  return (
    <div className="min-h-screen bg-black text-neonCyan font-sans p-6 flex flex-col items-center">
      
      {/* Cabeçalho */}
      <header className="w-full flex justify-center items-center border-b border-neonPurple pb-4 mb-6">
        <h1 className="text-3xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">
          Mossoró Express
        </h1>
      </header>

      {/* Container Principal */}
      <div className="w-full max-w-2xl flex flex-col items-center">
        
        {/* Área do Mapa */}
        <div className="w-full border border-neonPurple/30 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(112,0,255,0.2)] mb-6">
          <Mapa />
        </div>

        {/* Área de Ações */}
        <div className="w-full flex flex-col items-center gap-6">
          <FormularioPedido />
          <CalculadoraFrete />
        </div>

      </div>

      {/* Rodapé */}
      <footer className="mt-10 mb-4 text-xs text-gray-500 uppercase tracking-widest">
        Sistema Central Mossoró v1.0
      </footer>
      
    </div>
  );
}

export default App;