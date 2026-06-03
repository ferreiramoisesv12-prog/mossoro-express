import React, { useState } from 'react';

const CalculadoraFrete = () => {
  const [distancia, setDistancia] = useState(5); // Distância em KM

  const calcularPreco = () => {
    const hora = new Date().getHours();
    const taxaBase = 7.00; // Preço base em Reais
    const precoPorKm = 2.00;
    
    // Regra: Entre 18h e 23h, taxa de 30% de pico
    const multiplicador = (hora >= 18 && hora <= 23) ? 1.3 : 1.0;
    
    const total = (taxaBase + (distancia * precoPorKm)) * multiplicador;
    return total.toFixed(2);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl border border-neonPurple mt-6">
      <h3 className="text-neonCyan font-bold uppercase mb-4">Estimativa de Ganho</h3>
      <div className="text-4xl text-white font-black">R$ {calcularPreco()}</div>
      <p className="text-gray-400 text-sm mt-2">
        Baseado na distância de {distancia}km e horário atual.
      </p>
    </div>
  );
};

export default CalculadoraFrete;