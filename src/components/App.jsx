import React from 'react';
import { useState } from 'react';
import '../assets/App.css'

//msg inicial
function App() {
  const valorIncial = "Olá, tudo bem?";
  const [mensagem, setMensagem] = useState(valorIncial); 

//muda a msg
  const mudarMensagem = () => {
    setMensagem("Ótimo!");
  };
  const resetar = () => {
    setMensagem(valorIncial)
  };

  return (
    <>
      <div>
        <div className='msg'>
        <h1 className='msg-texto'>{mensagem}</h1>
        </div>
        <div className='areabutao'>
          <button onClick={mudarMensagem} className='butao'>Sim, estou bem!</button>
          <button onClick={resetar} className='resetar'>Resetar</button>
        </div>
      </div>
    </>
  );
}

export default App;