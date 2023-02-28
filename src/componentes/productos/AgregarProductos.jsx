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

    if (nombre_producto.current.value === "" ||
      descripcion_producto.current.value === "" ||
      id_marca_producto.current.value === "" ||
      precio_costo_producto.current.value === "" ||
      precio_venta_producto.current.value === "" ||
      stock_producto.current.value === "") {
      alert("Por favor, complete todos los campos.")
      return;
    }
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
    <div className="card-2">
      <div className="card-header">
      <h5 className='letra_titulo'>Nuevo Producto</h5>  
      </div>
      <div className="card-body">
        <div className="form-group">
          <label for="" className='letra_titulo'>Nombre</label>
          <input type="text" ref={nombre_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="" className='letra_titulo'>Descripcion</label>
          <input type="text" ref={descripcion_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="" className='letra_titulo'>Id Marca</label>
          <input type="text" ref={id_marca_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="" className='letra_titulo'>Precio de Costo</label>
          <input type="text" ref={precio_costo_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="" className='letra_titulo'>Precio de Venta</label>
          <input type="text" ref={precio_venta_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="" className='letra_titulo'>Stock</label>
          <input type="text" ref={stock_producto} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="card-body">
          <button onClick={guardar_producto} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/productos'}><button type="button" className="btn btn-secondary">Volver a Productos</button></Link>
        </div>
      </div>
      <div className="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>
 )
}