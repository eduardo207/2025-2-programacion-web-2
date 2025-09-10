import './App.css'
import Videojuego from './components/Videojuego'

function App() {

  return (
    <>
      <h2>Video juego para explicación de props y state en REACT</h2>
      <Videojuego personaje={"personaje2.png"} ejeXValor={350} ejeYValor={600} />
    </>
  )
}

export default App
