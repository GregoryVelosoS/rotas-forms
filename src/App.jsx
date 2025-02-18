// Importa o css
import './App.css'

// Importa o componente Outlet do react-router-dom
import { Outlet, Link } from 'react-router-dom'

import NavBar from './components/NavBar'

function App() {
  return (
    <>
        <NavBar />
          <Outlet />  {/* Outlet é onde os componentes filhos das rotas são renderizados */}
          <Link to="/">Home</Link>
        <h1>Footer</h1>
    </>
  )
}

export default App

