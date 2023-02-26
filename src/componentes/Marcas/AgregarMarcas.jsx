import { useRef } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'

export function AgregarMarcas() {
  const nombre_marca = useRef();
  
  const guardar_marca = () => {
    const nombre = nombre_marca.current.value;
    console.log('Datos ingresados son: ', nombre)

if (nombre_marca.current.value === "") {
       alert("Por favor, complete el campo.")
   return;
 }
  const datos_enviar = {
      nombre: nombre,
    };

    API.SaveMarca(datos_enviar);
    nombre_marca.current.value = null;
    alert('Se cargó correctamente la nueva marca')
  }
  return (
    <div className="card">
      <div className="card-header">
        Nueva Marca
      </div>
      <div className="card-body">
        <div className="form-group">
          <label for="">Nombre</label>
          <input type="text" ref={nombre_marca} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="card-body">
          <button onClick={guardar_marca} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/marcas'}><button type="button" className="btn btn-secondary">Volver a Marcas</button></Link>
        </div>
      </div>
      <div classNameName="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>

  )
}