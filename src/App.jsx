import { useState } from 'react'
// import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Principal } from './componentes/Principal'
import { ListadoClientes } from './componentes/ListadoClientes'
import { AgregarClientes } from './componentes/AgregarClientes'
import { ListadoProductos } from './componentes/ListadoProductos'


function App() {
    return (
  <>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Sistema</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to={'/'}>Inicio</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Clientes
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to={'/cliente'}> Listado de Clientes </Link>
          <Link className="dropdown-item" to={'/AgregarClientes'}> Agregar Clientes </Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to={'/productos'}> Listado de Productos </Link>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>
<div className='container'>
    <Routes>
    <Route path='/' element={<Principal/>}></Route>
    <Route path='/cliente' element={<ListadoClientes/>}></Route>
    <Route path='/AgregarClientes' element={<AgregarClientes/>}></Route>
    <Route path='/productos' element={<ListadoProductos/>}></Route>
    </Routes>
</div>
 </>
  )
} 

export default App
