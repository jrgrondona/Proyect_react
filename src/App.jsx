import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Principal } from './componentes/Panel/Principal'
import { ListadoClientes } from './componentes/clientes/ListadoClientes'
import { AgregarClientes } from './componentes/clientes/AgregarClientes'
import { EditarClientes } from './componentes/clientes/EditarClientes'
import { ListadoProductos } from './componentes/productos/ListadoProductos'
import { Login } from './componentes/login/Login'
import { Registro } from './componentes/login/Registro'
import { Menu } from './componentes/Panel/Menu'
import { useEffect } from 'react'
import { ListadoUsuarios } from './componentes/usuarios/ListadoUsuarios'
import { ListadoMarcas } from './componentes/Marcas/ListadoMarcas'
import { AgregarMarcas } from './componentes/Marcas/AgregarMarcas'
import { EditarMarcas } from './componentes/Marcas/EditarMarcas'
import { AgregarProductos } from './componentes/productos/AgregarProductos'
import { EditarProductos } from './componentes/productos/EditarProductos'
import { ListadoProveedores } from './componentes/Proveedores/ListadoProveedores'
import { AgregarProveedor } from './componentes/Proveedores/AgregarProveedores'
import { EditarProveedor } from './componentes/Proveedores/EditarProveedores'
import { ListadoVentas } from './componentes/Ventas/ListadoVentas'
import { AgregarVentas } from './componentes/Ventas/AgregarVentas'

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
         <Route path='/editarclientes/:id' element={<EditarClientes/>}></Route>

         <Route path='/productos' element={<ListadoProductos/>}></Route>
         <Route path='/AgregarProductos' element={<AgregarProductos/>}></Route>
         <Route path='/EditarProductos/:id' element={<EditarProductos/>}></Route>

         <Route path='/ventas' element={<ListadoVentas/>}></Route>
         <Route path='/AgregarVentas' element={<AgregarVentas/>}></Route>

         <Route path='/usuarios' element={<ListadoUsuarios/>}></Route>

         <Route path='/marcas' element={<ListadoMarcas/>}></Route>
         <Route path='/AgregarMarcas' element={<AgregarMarcas/>}></Route>
         <Route path='/EditarMarcas/:id' element={<EditarMarcas/>}></Route>
         
         <Route path='/proveedor' element={<ListadoProveedores/>}></Route>

         <Route path='/editarproveedor/:id' element={<EditarProveedor/>}></Route>

         <Route path='/AgregarProveedor' element={<AgregarProveedor/>}></Route>

         </Routes>
        
     </div>
    }
 </>
  )
} 

export default App
