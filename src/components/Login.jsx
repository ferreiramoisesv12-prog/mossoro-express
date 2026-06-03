import React from 'react';

const Login = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <h1 className="text-4xl font-black text-neonCyan mb-8">Mossoró Express</h1>
      <div className="w-full max-w-sm flex flex-col gap-4">
        <button 
          onClick={() => onLogin('loja')} 
          className="bg-neonPurple p-4 rounded-xl text-white font-bold hover:bg-purple-700"
        >
          Entrar como Loja
        </button>
        <button 
          onClick={() => onLogin('entregador')} 
          className="bg-neonCyan p-4 rounded-xl text-black font-bold hover:bg-cyan-400"
        >
          Entrar como Entregador
        </button>
      </div>
    </div>
  );
};

export default Login;