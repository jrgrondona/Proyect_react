import './productos.css'
import * as API from '../servicios/servicio'
import { useState, useEffect } from 'react'

export function ListadoProductos() {
    const [Productos, setProductos] = useState([])
    useEffect(()=>{
        API.getProductos().then(setProductos)
    },[])
    return (
        <div className="card">
          <div className="card-header">
           <h3 className='letra_cliente'><u>Listado de Productos</u></h3>
          </div>
          <div className="card-body">
          <table className="table">
        <thead>
            <tr>
                <th className='letra_cabecera'>Id producto</th>
                <th className='letra_cabecera'>Nombre</th>
                <th className='letra_cabecera'>Descripción</th>
                <th className='letra_cabecera'>Precio costo</th>
                <th className='letra_cabecera'>Precio venta</th>
                <th className='letra_cabecera'>Estado</th>
                <th className='letra_cabecera'>Stock</th>
                <th className='letra_cabecera'>Fecha de Carga</th>
                <th className='letra_cabecera'>Acciones</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        {Productos.map((productos)=>(
            <tbody>
            <tr>
                <td className='letra_tabla'>{productos.id}</td>
                <td className='letra_tabla'>{productos.nombre}</td>
                <td className='letra_tabla'>{productos.descripcion}</td>
                <td className='letra_tabla'>$ {productos.precio_costo},00</td>
                <td className='letra_tabla'>$ {productos.precio_venta},00</td>
                <td className='letra_tabla'>{productos.estado}</td>
                <td className='letra_tabla'>{productos.stock}</td>
                <td className='letra_tabla'>{productos.tms}</td>
                <div className="btn-group" role="group" aria-label="">
                    <button type="button" className="btn btn-primary">Editar</button>
                    <button type="button" className="btn btn-danger">Eliminar</button>
                </div>
                <td>&nbsp;</td>
            </tr>
            </tbody>
        ))}         
        </table>
                <div className="card-footer text-muted">
                    Bazar Capicua
                </div>
             </div>
        </div>
        )
    }