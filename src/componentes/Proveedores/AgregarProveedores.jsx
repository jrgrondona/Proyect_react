import { useRef } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'

export function AgregarProveedor() {
  const nombre_proveedor = useRef();
  const cuil_proveedor = useRef();
  const id_productos_proveedor = useRef();

  const guardar_proveedor = () => {
    const nombre = nombre_proveedor.current.value;
    const cuil = cuil_proveedor.current.value;
    const id_productos = id_productos_proveedor.current.value;
    console.log('Datos ingresados son: ', nombre, cuil, id_productos)
    
    const datos_enviar = {
      nombre: nombre,
      cuil: cuil,
      id_productos: id_productos
    };

    API.SaveProveedor(datos_enviar);
    nombre_proveedor.current.value = null;
    cuil_proveedor.current.value = null;
    id_productos_proveedor.current.value = null;
    alert('Se cargó correctamente el proveedor')
  }
  return (
    <div className="card">
      <div className="card-header">
        Nuevo Proveedor
      </div>
      <div className="card-body">
        <div className="form-group">
          <label for="">Nombre</label>
          <input type="text" ref={nombre_proveedor} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">Cuil</label>
          <input type="text" ref={cuil_proveedor} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">Id Producto</label>
          <input type="text" ref={id_productos_proveedor} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="card-body">
          <button onClick={guardar_proveedor} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/proveedor'}><button type="button" className="btn btn-secondary">Volver a Proveedores</button></Link>
        </div>
      </div>
      <div classNameName="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>
  )
}