import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Principal } from './componentes/Panel/Principal'
import { ListadoClientes } from './componentes/clientes/ListadoClientes'
import { AgregarClientes } from './componentes/clientes/AgregarClientes'
import { ListadoProductos } from './componentes/productos/ListadoProductos'
import { Login } from './componentes/login/Login'
import { Registro } from './componentes/login/Registro'
import { Menu } from './componentes/Panel/Menu'
import { useEffect } from 'react'
import { ListadoUsuarios } from './componentes/usuarios/ListadoUsuarios'
import { ListadoMarcas } from './componentes/Marcas/ListadoMarcas'
import { AgregarMarcas } from './componentes/Marcas/AgregarMarcas'
import { AgregarProductos } from './componentes/productos/AgregarProductos'

function App() {
  const [usuario, setUsuario] = useState('');
  
  useEffect(() => {
  const usuarioLogueado = JSON.parse(localStorage.getItem('usuario')) 
  if (usuarioLogueado){
    setUsuario(usuarioLogueado)
    console.log('usuario logueado',usuarioLogueado)
  } 
},[])

    return (
<>
{
  !usuario?
    <>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/registro' element={<Registro/>}></Route>
      </Routes>
  
    </>:
     <div className='container'>
      <Menu/>    
         <Routes>
         <Route path='/' element={<Principal/>}></Route>
         <Route path='/cliente' element={<ListadoClientes/>}></Route>
         <Route path='/AgregarClientes' element={<AgregarClientes/>}></Route>
         <Route path='/productos' element={<ListadoProductos/>}></Route>
         <Route path='/AgregarProductos' element={<AgregarProductos/>}></Route>
         <Route path='/usuarios' element={<ListadoUsuarios/>}></Route>
         <Route path='/marcas' element={<ListadoMarcas/>}></Route>
         <Route path='/AgregarMarcas' element={<AgregarMarcas/>}></Route>
         </Routes>
     </div>
    }
 </>
  )
} 

export default App
