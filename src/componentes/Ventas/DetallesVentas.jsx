import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as API from "../../servicios/servicio";

export function DetalleVentas() {
  const {id_ventas} = useParams();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direc_cliente, setDirecCliente] = useState("");
  const [nombre_producto, setNombreProducto] = useState("");
  const [cantidad, setcantidad] = useState("");
 

  useEffect(() => {trae_datos(id_ventas) }, []);

  const trae_datos = async () => {
    // event.preventDefault();
    const datos_ventas = await API.getVentasById(id_ventas)
    console.log(datos_ventas)
    setNombre(datos_ventas.nombre)
    setApellido(datos_ventas.apellido)
    setDirecCliente(datos_ventas.direc_cliente)
    setNombreProducto(datos_ventas.nombre_producto)
    setcantidad(datos_ventas.cantidad)
  };
  return (
    <>
    <div className="card">
      <div className="card-header">Detalle de Venta</div>
      {mensajeSuccess ? (
        <div class="alert alert-success" role="alert">
          {mensajeSuccess}
        </div>
      ) : (
        ""
      )}
      <div className="card-body">
      <div className="form-group">
          <label >NOMBRE</label>
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label >APELLIDO</label>
          <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label >DIRECCION</label>
          <input type="text" value={direc_cliente} onChange={(event) => setDirecCliente(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label >NOMBRE PRODUCTO</label>
          <input type="text" value={nombre_producto} onChange={(event) => setNombreProducto(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label >CANTIDAD</label>
          <input type="text" value={cantidad} onChange={(event) => setcantidad(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <Link to={"/ventas "}>
            <button type="button" className="btn btn-secondary">
              Volver
            </button>
          </Link>
        </div>
      </div>
      <div className="card-footer text-muted">Bazar Capicua</div>
    </div>
    </>
  );
}
