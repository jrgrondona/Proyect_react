import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'

export function AgregarClientes() {
  const nombre_cliente = useRef();
  const apellido_cliente = useRef();
  const tel_cliente = useRef();
  const direc_cliente = useRef();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [mensajeError, setmensajeError] = useState("");


  const guardar_cliente = async () => {
    const nombre = nombre_cliente.current.value;
    const apellido = apellido_cliente.current.value;
    const tel = tel_cliente.current.value;
    const direc = direc_cliente.current.value;
    console.log('Datos ingresados son: ', nombre, apellido, tel, direc)

    if (nombre_cliente.current.value === "" ||
      apellido_cliente.current.value === "" ||
      tel_cliente.current.value === "" ||
      direc_cliente.current.value === "") {
        swal.fire( {
          icon: 'error',
          title: "Por favor complete todos los campos requeridos",
          showConfirmButton: false,
          timer: 3000
        })
      return;
    }
    const datos_enviar = {
      nombre: nombre,
      apellido: apellido,
      tel: tel,
      direc: direc

    };

    const user = await API.SaveCliente(datos_enviar);
    if (user.status) {
      swal.fire({
        icon: 'success',
        title: "Cliente creado correctamente",
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
          <label htmlFor="">Telefono</label>
          <input type="text" ref={tel_cliente} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="">Direccion</label>
          <input type="text" ref={direc_cliente} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
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