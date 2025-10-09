import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState<string>('bg-red-500');
  const [contador, setContador] = useState<number>(5);
  const [tiempo, setTiempo] = useState<number>(5);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(prev => prev - 1);
      if (contador === 1){
        setContador(tiempo);
        switch(color){
          case 'bg-red-500':
            setColor('bg-green-500');
            break;
          case 'bg-green-500':
            setColor('bg-yellow-500');
            break;
          case 'bg-yellow-500':
            setColor('bg-red-500');
            break;
        }
      }
    },1000);
    return () => clearInterval(intervalo);
  },[contador, tiempo, color]);

  const setTiempoSemaforo = (segundos: number) =>{
    setTiempo(segundos);
    setContador(segundos);
    setColor('bg-red-500');
  }

  return (
    <>
      <div className="flex flex row gap-4">    
        <div className="bg-gray-500 flex flex-col items-center p-5 rounded-[10px] gap-3">
          <div className="bg-gray-800 text-white flex flex-row items-center p-2 rounded-[10px]">
            {contador} sec
          </div>
          <div className={`w-25 h-25 rounded-full ${color === 'bg-red-500'?'bg-red-500':'bg-red-100'}`} />
          <div className={`w-25 h-25 rounded-full ${color === 'bg-yellow-500'?'bg-yellow-500':'bg-yellow-100'}`} />
          <div className={`w-25 h-25 rounded-full ${color === 'bg-green-500'?'bg-green-500':'bg-green-100'}`} />
        </div>
        <div className="flex flex-col gap-5">
          <button className="btn btn-primary" onClick={() => setTiempoSemaforo(5)}>
            5 segundos
          </button>
          <button className="btn btn-primary" onClick={() => setTiempoSemaforo(10)}>
            10 segundos
          </button>
        </div>
      </div>
    </>
  )
}

export default App
