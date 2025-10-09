import { useReducer } from 'react';
import './App.css'

type State = {
  contador: number,
  historial: string[],
}

type Action = {
  type: string
}

function reducer(state: State, action: Action): State {
  console.log(action.type);
  switch(action.type){
    case 'INC':
      return {
        ...state,
        contador: state.contador + 1,
        historial: [...state.historial, 'INC'],
      };  
      break;
    case 'DEC':
      return {
        ...state,
        contador: state.contador - 1,
        historial: [...state.historial, 'DEC'],
      };
      break;
  }
}

function App() {
  // Utilización de useReducer
  // Declaración de objeto inicial
  const initialState:State = {
    contador: 0,
    historial: []
  }

  // Utilizando un state (Solo es ejemplo para ver la diferencia)
  // const [miEstado, setMiEstado] = useState<State>(initialState)

  // Declaración del useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Ejemplo de la utilización de useReducer</h1>
      <br />
      <h1>{state.contador}</h1>
      <br />
      <div className="flex flex-row gap-4">
        <button className="btn btn-primary" onClick={() => dispatch({type:'INC'})}>
          INCREMENTAR
        </button>
        <button className="btn btn-primary" onClick={() => dispatch({type:'DEC'})}>
          DECREMENTAR
        </button>
      </div>
    </>
  )
}

export default App
