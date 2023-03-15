import { React } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import * as API from "../../servicios/servicio";

export function EditarProductos() {
  const { id } = useParams();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [id_marca, setId_marca] = useState('');
  const [precio_costo, setPrecio_costo] = useState('');
  const [precio_venta, setPrecio_venta] = useState('');
  const [estado, setEstado] = useState('');
  const [stock, setStock] = useState('');
  const [Error, setError] = useState("");


  useEffect(() => { trae_datos(id) }, []);

  const trae_datos = async () => {

    const datos = await API.getProductosById(id)
    console.log("datos que trae edicion", datos)
    setDescripcion(datos.descripcion)
    setNombre(datos.nombre)
    setId_marca(datos.id_marca)
    setPrecio_costo(datos.precio_costo)
    setPrecio_venta(datos.precio_venta)
    setEstado(datos.estado)
    setStock(datos.stock)

  }
  const editar_producto = () => {
    if (nombre.trim() === '' ||
    descripcion.trim() === '' ||
       id_marca.trim() === '' ||
       precio_costo.trim() === '' ||
       precio_venta.trim() === '' ||
       stock.trim() === '' ||
       estado.trim() === '') {
      setError(true);
      alert("No se permite enviar vacio en edicion");
      return;
    }
    const datos_enviar = {
      nombre: nombre,
      descripcion: descripcion,
      id_marca: id_marca,
      precio_costo: precio_costo,
      precio_venta: precio_venta,
      estado:estado,
      stock: stock
    };

    API.UpdateProducto(id, datos_enviar);

    setmensajeSuccess("se edito el producto correctamente")
    setTimeout(() => {
      setmensajeSuccess("")
      // window.location.reload(true)
      console.log("actualiza datos de los productos", datos_enviar)

    }, 2000)
  }


  return (

    <div className="card">
      <div className="card-header">
        Editar productos
      </div>
      {
        mensajeSuccess ?
          <div className="alert alert-success" role="alert">
            {mensajeSuccess}
          </div> : ""
      }
      <div className="card-body">
        <div className="form-group">
          <label >NOMBRE</label>
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >DESCRIPCION</label>
          <input type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >ID MARCA</label>
          <input type="text" value={id_marca} onChange={(event) => setId_marca(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >PRECIO DE COSTO</label>
          <input type="text" value={precio_costo} onChange={(event) => setPrecio_costo(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >PRECIO DE VENTA</label>
          <input type="text" value={precio_venta} onChange={(event) => setPrecio_venta(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >STOCK</label>
          <input type="text" value={stock} onChange={(event) => setStock(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="card-body">
          <button onClick={editar_producto} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/productos'}><button type="button" className="btn btn-secondary">Volver</button></Link>
        </div>
      </div>
      <div className="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>
  )
}