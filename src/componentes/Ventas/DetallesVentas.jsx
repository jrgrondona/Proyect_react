import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as API from "../../servicios/servicio";

export function DetalleVentas() {
  const { id_ventas } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direc, setDirecCliente] = useState("");
  const [tel, setTel] = useState("");
  const [nombre_producto, setNombreProducto] = useState("");
  const [cantidad, setcantidad] = useState("");
  const [precio_venta, setPrecioVenta] = useState("");
  const [Total, setTotal] = useState("");


  useEffect(() => { trae_datos(id_ventas) }, []);

  const trae_datos = async () => {
    const datos_ventas = await API.getVentasById(id_ventas)
    console.log(datos_ventas)
    setNombre(datos_ventas.nombre)
    setApellido(datos_ventas.apellido)
    setDirecCliente(datos_ventas.direc)
    setTel(datos_ventas.tel)
    setNombreProducto(datos_ventas.nombre_producto)
    setcantidad(datos_ventas.cantidad)
    setPrecioVenta(datos_ventas.precio_venta)
    setTotal(datos_ventas.Total)
  };
  return (
    <>
      <div className="table-responsive">
        <div className="card-header">
          &nbsp;
          <h3 className='text-center'><u>Detalle de Ventas</u></h3>
        </div>
        <div className="card-body">
          <table className="table table-striped table-hover mt-1">
            <thead className="thead-inverse">
              <tr className='bg-secondary'>
                <th className='letra_cabecera'>NOMBRE</th>
                <th className='letra_cabecera'>APELLIDO</th>
                <th className='letra_cabecera'>DIRECCION</th>
                <th className='letra_cabecera'>TELEFONO</th>
                <th className='letra_cabecera'>PRODUCTO</th>
                <th className='letra_cabecera'>CANTIDAD UN.</th>
                <th className='letra_cabecera'>PRECIO UN.</th>
                <th className='letra_cabecera'>PAGO TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='letra_tabla'>{nombre}</td>
                <td className='letra_tabla'>{apellido}</td>
                <td className='letra_tabla'>{direc}</td>
                <td className='letra_tabla'>{tel}</td>
                <td className='letra_tabla'>{nombre_producto}</td>
                <td className='letra_tabla'>{cantidad}</td>
                <td className='letra_tabla'>${precio_venta},00</td>
                <td className='letra_tabla'>${Total},00</td>
              </tr>

            </tbody>
            <Link name="" id="" className="btn btn-primary" to={'/ventas'} role="button">Volver a Ventas</Link>
          </table>
        </div>
      </div>
    </>
  );
}
