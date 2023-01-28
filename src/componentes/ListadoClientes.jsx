import './clientes.css'
import * as API from '../servicios/servicio'
import { useState, useEffect } from 'react'


export function ListadoClientes() {
    const [Clientes, setClientes] = useState([])
    useEffect(()=>{
        API.getClientes().then(setClientes)
    },[])
    return (
        <>
        <div className="card">
           <div className="card-header">
           <h3 className='letra_cliente'><u>Listado de Clientes</u></h3>
         </div>
         <div className="card-body">
        <table className="table">
        <thead>
            <tr>
                <th className='letra_cabecera'>Id cliente</th>
                <th className='letra_cabecera'>Nombre</th>
                <th className='letra_cabecera'>Apellido</th>
                <th className='letra_cabecera'>Estado</th>
                <th className='letra_cabecera'>Fecha de Registro</th>
                <th className='letra_cabecera'>Acciones</th>
            </tr>
        </thead>
        {Clientes.map((c)=>(
            <tbody>
            <tr>
                <td className='letra_tabla'>{c.id}</td>
                <td className='letra_tabla'>{c.nombre}</td>
                <td className='letra_tabla'>{c.apellido}</td>
                <td className='letra_tabla'>{c.estado}</td>
                <td className='letra_tabla'>{c.tms}</td>
                <div className="btn-group" role="group" aria-label="">
                    <button type="button" className="btn btn-primary">Editar</button>
                    <button type="button" className="btn btn-danger">Eliminar</button>
                   </div>
                <td></td>
            </tr>
            </tbody>
        ))}         
         </table>
                <div className="card-footer text-muted">
                    Bazar Capicua
                </div>
            </div>
        </div>
        </>
        )
    }