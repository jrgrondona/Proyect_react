import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'
import swal from "sweetalert2"
export function AgregarProveedor() {
  const nombre_proveedor = useRef();
  const cuil_proveedor = useRef();
  const id_productos_proveedor = useRef();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [mensajeError, setmensajeError] = useState("");

  const guardar_proveedor = async () => {
    const nombre = nombre_proveedor.current.value;
    const cuil = cuil_proveedor.current.value;
    const id_productos = id_productos_proveedor.current.value;
    console.log('Datos ingresados son: ', nombre, cuil, id_productos)

    if (nombre_proveedor.current.value === "" ||
      cuil_proveedor.current.value === "" ||
      id_productos_proveedor.current.value === "") {
        swal.fire({
          icon: 'error',
          title: "Por favor complete todos los campos requeridos",
          showConfirmButton: false,
          timer: 3000
        });
      return;
    }
    const datos_enviar = {
      nombre: nombre,
      cuil: cuil,
      id_productos: id_productos
    };

    const user = await API.SaveProveedor(datos_enviar);
    if (user.status) {
      swal.fire({
        icon: 'success',
        title: "Proveedor creado correctamente",
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
        Nuevo Proveedor
      </div>
      <div className="card-body">
        <div className="form-group">
          <label for="">Nombre</label>
          <input type="text" ref={nombre_proveedor} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">Cuil</label>
          <input type="text" ref={cuil_proveedor} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">Id Producto</label>
          <input type="text" ref={id_productos_proveedor} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="card-body">
          <button onClick={guardar_proveedor} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/proveedor'}><button type="button" className="btn btn-secondary">Volver </button></Link>
        </div>
      </div>
      <div className="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>
  )
}