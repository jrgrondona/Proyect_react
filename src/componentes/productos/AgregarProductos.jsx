import { useRef } from 'react'
import { Link } from 'react-router-dom'
import * as API from '../../servicios/servicio'

export function AgregarProductos() {
  const nombre_producto = useRef();
  const descripcion_producto = useRef();
  const id_marca_producto = useRef();
  const precio_costo_producto = useRef();
  const precio_venta_producto = useRef();
  const stock_producto = useRef();

  const guardar_producto = () => {
    const nombre = nombre_producto.current.value;
    const descripcion = descripcion_producto.current.value;
    const id_marca = id_marca_producto.current.value;
    const precio_costo = precio_costo_producto.current.value;
    const precio_venta = precio_venta_producto.current.value;
    const stock = stock_producto.current.value;
    console.log('Datos ingresados son: ', nombre, descripcion, id_marca, precio_costo, precio_venta, stock)
    
    const datos_enviar = {
      nombre: nombre,
      descripcion: descripcion,
      id_marca: id_marca,
      precio_costo: precio_costo,
      precio_venta: precio_venta,
      stock: stock
    };

    API.SaveProducto(datos_enviar);
    nombre_producto.current.value = null;
    descripcion_producto.current.value = null;
    id_marca_producto.current.value = null;
    precio_costo_producto.current.value = null;
    precio_venta_producto.current.value = null;
    stock_producto.current.value = null;

    alert('Se cargó correctamente el producto')
  }
  return (
    <div className="card">
      <div className="card-header">
        Nuevo Producto
      </div>
      <div className="card-body">
        <div className="form-group">
          <label for="">Nombre</label>
          <input type="text" ref={nombre_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">Descripcion</label>
          <input type="text" ref={descripcion_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">Id Marca</label>
          <input type="text" ref={id_marca_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">Precio de Costo</label>
          <input type="text" ref={precio_costo_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">Precio de Venta</label>
          <input type="text" ref={precio_venta_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">Stock</label>
          <input type="text" ref={stock_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="card-body">
          <button onClick={guardar_producto} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/productos'}><button type="button" className="btn btn-secondary">Volver a Productos</button></Link>
        </div>
      </div>
      <div classNameName="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>

  )
}