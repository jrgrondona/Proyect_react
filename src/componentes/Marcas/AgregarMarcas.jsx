import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'

export function AgregarMarcas() {
  const nombre_marca = useRef();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [mensajeError, setmensajeError] = useState("");

  const guardar_marca = async () => {
    const nombre = nombre_marca.current.value;
    console.log('Datos ingresados son: ', nombre)

    if (nombre_marca.current.value === "") {
      swal.fire( {
        icon: 'error',
        title: "Por favor complete todos los campos requeridos",
        showConfirmButton: false,
        timer: 3000
      });
      return;
    }
    const datos_enviar = {
      nombre: nombre,
    };

    const user = await API.SaveMarca(datos_enviar);
    if (user.status) {
      swal.fire({
        icon: 'success',
        title: "Marca creada correctamente",
        showConfirmButton: false,
        timer: 2500
      });
      setTimeout(() => {
        setmensajeSuccess("");
        window.location.reload(true);
      }, 3000);
    } else {
      setmensajeError(user.mensaje);
      setTimeout(() => {
        setmensajeError("");
        window.location.reload(false);
      }, 3000);

    }
  }
  return (
    <div className="card">
      {
        mensajeError ?
          <div className="alert alert-danger" role="alert">
            {mensajeError}
          </div> : ''
      }
      {
        mensajeSuccess ?
          <div className="alert alert-success" role="alert">
            {mensajeSuccess}
          </div> : ''
      }
      <div className="card-header">
        Nueva Marca
      </div>
      <div className="card-body">
        <div className="form-group">
          <label for="">Nombre</label>
          <input type="text" ref={nombre_marca} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
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