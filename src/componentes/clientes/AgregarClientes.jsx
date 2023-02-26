import { useRef } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'

export function AgregarClientes() {
  const nombre_cliente = useRef();
  const apellido_cliente = useRef();
  const estado_cliente = useRef();

    const guardar_cliente = () => {
    const nombre = nombre_cliente.current.value;
    const apellido = apellido_cliente.current.value;
    const estado = estado_cliente.current.value;
    console.log('Datos ingresados son: ', nombre, apellido, estado)
    
if (nombre_cliente.current.value === "" || 
     apellido_cliente.current.value === "" || 
      estado_cliente.current.value === "") {
        alert("Por favor, complete todos los campos.")
    return;
  }
      const datos_enviar = {
      nombre: nombre,
      apellido: apellido,
      estado: estado
    };

    API.SaveCliente(datos_enviar);
    nombre_cliente.current.value = null;
    apellido_cliente.current.value = null;
    estado_cliente.current.value = null;
    alert('Se cargó correctamente el cliente')
  }
  return (
    <div className="card">
      <div className="card-header">
        Nuevo Cliente
      </div>
      <form className="card-body">
        <div className="form-group">
          <label htmlFor="">Nombre</label>
          <input type="text" ref={nombre_cliente} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="">Apellido</label>
          <input type="text" ref={apellido_cliente} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="">Estado</label>
          <input type="text" ref={estado_cliente} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="card-body">
          <button onClick={guardar_cliente} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/cliente'}><button type="button" className="btn btn-secondary">Volver</button></Link>
        </div>
      </form>
      <div classNameName="card-footer text-muted">
        Bazar Capicua
      </div>
      </div>
  )
}