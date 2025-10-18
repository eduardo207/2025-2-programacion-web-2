import { Routes, Route, Link } from 'react-router-dom'
import User from './components/User';
import './App.css'

function App() {

  return (
    <>
    <nav className="flex flex-row gap-4 m-4">
      <Link to='/'>Inicio</Link>
      <Link to='/about'>Acerca de</Link>
      <Link to='/users/42'>Usuario 42</Link>
    </nav>

    <Routes>
      <Route path='/' element={<h1> Pagina de inicio </h1>} />
      <Route path='/about' element={<h1> Pagina de Acerca de... </h1>} />
      <Route path='/users/:id' element={<User />} />
      <Route path='*' element={<PaginaError />} />
    </Routes>
    </>
  )
}


function PaginaError() {
  return (
    <>
      <h1> Redireccion a login / mostrarle una pagina de error. </h1>
    </>
  )
}

export default App
