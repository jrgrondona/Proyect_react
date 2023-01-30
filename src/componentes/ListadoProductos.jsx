import './productos.css'
import * as API from '../servicios/servicio'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ListadoProductos() {
    const [Productos, setProductos] = useState([])
    useEffect(() => {
        API.getProductos().then(setProductos)
    }, [])
    return (
        <div className="card">
            <div className="card-header">
            <u>Listado de Productos</u>
            </div>
            <div className="card-body">
                <Link name="" id="" className="btn btn-primary" to={'/'} role="button">Cargar Producto</Link>
                <table class="table table-striped table-inverse table-responsive">
                    <thead class="thead-inverse">
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
                        </tr>
                    </thead>
                    {Productos.map((productos) => (
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
                                    <th>&nbsp;</th>
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