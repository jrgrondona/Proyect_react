import './productos.css'
import * as API from '../../servicios/servicio'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ListadoProductos() {
    const [Productos, setProductos] = useState([]);
    // Buscador de Productos //
    const [Buscar, setBuscar] = useState('');

    const Buscador = (e) => {
        setBuscar(e.target.value)
        console.log(e.target.value)
    }
    let resultado = []
    if(!Buscar){
        resultado = Productos
    }else{
        resultado = Productos.filter((dato) =>
        dato.nombre.toLowerCase().includes(Buscar.toLowerCase())
        )
    }
    useEffect(() => {
        API.getProductos().then(setProductos)

    }, [])
    return (
        <div className=''>
           
            <div className="card-header">
            <h4 className='letra_titulo'>Listado de Productos</h4>
         </div>
         <h6></h6>
         <div className='form-group col-3'> 
         <input value={Buscar} onChange={Buscador} type='text' placeholder='Buscar por Nombre' className='form-control'/>
         <label for="floatingSearch">Buscador</label>
         </div>
         <div className="card-body">
                <Link nameName="" id="" className="btn btn-primary" to={'/AgregarProductos'} role="button">Cargar Producto</Link>
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th className='letra_cabecera'>Id producto</th>
                            <th className='letra_cabecera'>Nombre</th>
                            <th className='letra_cabecera'>Descripción</th>
                            <th className='letra_cabecera'>Precio_u</th>
                            <th className='letra_cabecera'>P_venta</th>
                            <th className='letra_cabecera'>Ganancia</th>
                            <th className='letra_cabecera'>Id Marca</th>
                            <th className='letra_cabecera'>Estado</th>
                            <th className='letra_cabecera'>Cantidad</th>
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
                                <td className='letra_tabla'>{productos.estado}</td>
                                <td className='letra_tabla'>{productos.cantidad}</td>
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