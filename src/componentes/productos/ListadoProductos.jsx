import './productos.css'
import * as API from '../../servicios/servicio'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ListadoProductos() {
    const [Productos, setProductos] = useState([]);
    const [mensajeError, setmensajeError] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('');
    
    // Buscador de Productos //
    const [Buscar, setBuscar] = useState('');

    const Buscador = (e) => {
        setBuscar(e.target.value)
        console.log(e.target.value)
    }
    let resultado = []
    if (!Buscar) {
        resultado = Productos
    } else {
        resultado = Productos.filter((dato) =>
            dato.nombre.toLowerCase().includes(Buscar.toLowerCase())
        )
    }
    useEffect(() => {
        API.getProductos().then(setProductos)

    }, [])
    const bajaProducto = async (id) => {
        const user = await API.BajaProducto(id)

        if (user.status) {

            setmensajeError(user.mensaje)
            setTimeout(() => {
                setmensajeError('')
                window.location.reload(true)

            }, 2000)
        } else {
            setmensajeError(user.mensaje)
            setTimeout(() => {
                setmensajeError('')
            }, 2000)
        }
    }

    const altaProducto = async (id) => {
        const user = await API.AltaProducto(id)

        if (user.status) {

            setmensajeSuccess(user.mensaje)
            setTimeout(() => {
                setmensajeSuccess('')
                window.location.reload(true)

            }, 2000)
        } else {
            setmensajeSuccess(user.mensaje)
            setTimeout(() => {
                setmensajeSuccess('')
            }, 2000)
        }
    }
    return (
        <div className=''>
            <div className="card-header">
            </div>
            {
                mensajeError ?
                    <div className="alert alert-warning" role="alert">
                        {mensajeError}
                    </div> : ''
            }
            {
                mensajeSuccess ?
                    <div className="alert alert-success" role="alert">
                        {mensajeSuccess}
                    </div> : ''
            }
            &nbsp;
            <div className='form-group col-3'>
                <input value={Buscar} onChange={Buscador} type='text' placeholder='Buscar por Nombre' className='form-control' />
                <label for="floatingSearch" className='text-white'>BUSCADOR DE PRODUCTOS</label>
            </div>
            <div className="card-body">
                <h2 className='letra_titulo text-center'><u>Listado de Productos</u></h2>
                <Link nameName="" id="" className="btn btn-primary" to={'/AgregarProductos'} role="button">Cargar Producto</Link>
                <table className="table table-striped table-hover mt-1">
                    <thead className="thead-inverse">
                        <tr className='bg-secondary'>
                            <th className='letra_cabecera'>Id producto</th>
                            <th className='letra_cabecera'>Nombre</th>
                            <th className='letra_cabecera'>Descripción</th>
                            <th className='letra_cabecera'>Precio_u</th>
                            <th className='letra_cabecera'>P_venta</th>
                            <th className='letra_cabecera'>Ganancia</th>
                            <th className='letra_cabecera'>Id Marca</th>
                            <th className='letra_cabecera'>Estado</th>
                            <th className='letra_cabecera'>Stock</th>
                            <th className='letra_cabecera'>Fecha de Carga</th>
                            <th className='letra_cabecera'>Acciones</th>
                        </tr>
                    </thead>
                    {resultado.map((productos) => (
                        <tbody>
                            <tr key={productos.id}>
                                <td className='letra_tabla'>{productos.id}</td>
                                <td className='letra_tabla'>{productos.nombre}</td>
                                <td className='letra_tabla'>{productos.descripcion}</td>
                                <td className='letra_tabla'>$ {productos.precio_costo},00</td>
                                <td className='letra_tabla'>$ {productos.precio_venta},00</td>
                                <td className='letra_tabla'>$ {productos.Ganancia},00</td>
                                <td className='letra_tabla'>{productos.id_marca}</td>
                                <td className="letra_tabla">
                                    {
                                        (productos.estado == 1 ? 'Activo' : 'Baja')
                                    }
                                </td>
                                <td className='letra_tabla'>{productos.stock}</td>
                                <td className='letra_tabla'>{productos.fecha_de_carga}</td>
                                <div className="btn-group" role="group" aria-label="">
                                    {(productos.estado == 1) ?
                                        <button onClick={() => bajaProducto(productos.id)} type="button" className="btn btn-success">Dar de baja</button>
                                        :
                                        <button onClick={() => altaProducto(productos.id)} type="button" className="btn btn-danger">Dar de alta</button>
                                    }
                                </div>
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