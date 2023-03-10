import * as API from '../../servicios/servicio'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ListadoDetalles() {
    const [detalles, setDetalles] = useState([])

    useEffect(() => {
        API.getTotalDetalles().then(setDetalles)
    }, [])
    return (
        <>
            <div className="table-responsive">
                <div className="card-header">
                    &nbsp;
                    <h3 className='text-center'><u>Total Ventas</u></h3>
                </div>
                <div className="table-responsive">
                    <table class="table table-striped table-hover mt-1">
                        <thead class="thead-inverse">
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
                        {detalles.map((d) => (
                            <tbody>
                                <tr>
                                    <td className='letra_tabla'>{d.nombre}</td>
                                    <td className='letra_tabla'>{d.apellido}</td>
                                    <td className='letra_tabla'>{d.direc}</td>
                                    <td className='letra_tabla'>{d.tel}</td>
                                    <td className='letra_tabla'>{d.nombre_producto}</td>
                                    <td className='letra_tabla'>{d.cantidad}</td>
                                    <td className='letra_tabla'>${d.precio_venta},00</td>
                                    <td className='letra_tabla'>${d.Total},00</td>
                                </tr>
                            </tbody>
                        ))}
                        <Link name="" id="" className="btn btn-primary" to={'/ventas'} role="button">Volver a Ventas</Link>
                    </table>
                    <div className="card-footer text-muted">
                        Bazar Capicua
                    </div>
                </div>
            </div>
        </>
    )
}
