import { useState, useEffect, useMemo, useCallback } from 'react'
import './App.css'

function App() {
  // Variables para Ejemplo de useState
  const [count, setCount] = useState(0);

  // Variables para Ejemplo de useEffect
  const [cronometro, setCronometro] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCronometro((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Variables para ejemplo de useMemo (Cuadrado de un número)
  const squaredNumber = useMemo(() => {
    console.log('Calculando el cuadrado...');
    return count * count;
  }, [count]);

  // Variables para ejemplo de useCallback (Función para imprimir un hola mundo)
  const printHello = useCallback(() => {
    console.log('Hola Mundo');
  }, []);

  // Ejemplo sin useCallback
  const printHello2 = () => {
    console.log('Hola Mundo 2');
  };

  return (
    <>
      <div className="card">
        <p>
          Ejemplo de contador utilizando useState en React con TypeScript
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
          Ejemplo de useEffect en React con TypeScript
        </p>
        <h2>
          {cronometro}
        </h2>

        <p>
          Ejemplo de useMemo para el cuadrado de un número en React con TypeScript
        </p>
        <h2>
          {squaredNumber}
        </h2>

        <p>
          Ejemplo de use callback con funcion de hola mundo
        </p>
        <button onClick={printHello}>
          usar usecallback
        </button>

        <p>
          Ejemplo de funcion de hola mundo sin usar callback
        </p>
        <button onClick={printHello2}>
          no usar usecallback
        </button>

      </div>
    </>
  )
}

export default App
