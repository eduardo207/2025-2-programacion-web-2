import { Routes, Route, Outlet, NavLink } from 'react-router-dom'
import User from './components/User';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<h1> Pagina de inicio </h1>} />
          <Route path="about" element={<h1> Pagina de Acerca de... </h1>} />
          <Route path="user/:id" element={<User />} />
        </Route>
        <Route path='*' element={<PaginaError />} />
      </Routes>
    </>
  )
}

function DashboardLayout() {
  return (
    <>
      <header>
        <NavLink to='/'>Inicio</NavLink> |
        <NavLink to='/about'>Acerca de</NavLink> |
        <NavLink to='/user/1'>Usuario</NavLink>
      </header>
      <main className='mt-6'>
        <Outlet />
      </main>
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
