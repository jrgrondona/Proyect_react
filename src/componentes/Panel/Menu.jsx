import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Menu() {
  const [usuario, setUsuario] = useState('')
  const logout = async (event) => {
    setUsuario('')
    window.localStorage.removeItem('usuario')
    window.location.reload(true);
    window.location.assign('/');

  }
  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'))
    if (usuarioLogueado) {
      console.log(usuarioLogueado.datos[0].apellido_nombre)
      setUsuario(usuarioLogueado.datos[0].apellido_nombre)
      console.log('usuario logueado', usuarioLogueado)
    }
  }, [])
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">CapiCua</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={'/'}>Inicio</Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to={'/cliente'}>Clientes</Link>
          </li>

                    <li className="nav-item active">
            <Link className="nav-link" to={'/usuarios'}>Usuarios</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Productos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to={'/productos'}> Listado de Productos </Link>
              <Link className="dropdown-item" to={'/ventas'}> Listado de Ventas </Link>
            </div>
          </li>
                    <li className="nav-item active">
            <Link className="nav-link" to={'/marcas'}>Marcas</Link>
          </li>
                    <li className="nav-item active">
            <Link className="nav-link" to={'/proveedor'}>Proveedores</Link>
          </li>
        </ul>
      </div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="letra_principal" href="#"> Hola,  {usuario}</a>
        </li>
        <li className="nav-item active">
        <button type="button" onClick={logout} className="btn btn-outline-danger">Salir</button>

        </li>
     </ul>
    </nav>
  )
}