import * as API from '../../servicios/servicio'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ListadoProveedores() {
    const [Proveedores, setProveedores] = useState([])
    const [mensajeError, setmensajeError] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('');

    useEffect(() => {
        API.getProveedores().then(setProveedores)
    }, [])

    const bajaProveedor = async (id)=>{
    const user = await API.BajaProveedor(id)
    
            if(user.status){
      
            setmensajeError(user.mensaje)
            setTimeout(()=>{
                setmensajeError('')
                window.location.reload(true) 
    
            }, 2000)
         }else{
              setmensajeError(user.mensaje)
              setTimeout(()=>{
                  setmensajeError('')
              }, 2000)
            }
      }
    
      const altaProveedor = async (id)=>{
        const user = await API.AltaProveedor(id)
    
            if(user.status){
      
            setmensajeSuccess(user.mensaje)
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.reload(true) 
    
            }, 2000)
         }else{
              setmensajeSuccess(user.mensaje)
              setTimeout(()=>{
                  setmensajeSuccess('')
              }, 2000)
            }
      }   
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className='text-center'><u>Listado de Proveedores</u></h3>
                </div>
                {
                    mensajeError?
                    <div className="alert alert-warning" role="alert">
                    {mensajeError}
                    </div>:''      
                }
                {
                    mensajeSuccess?
                    <div className="alert alert-success" role="alert">
                    {mensajeSuccess}
                    </div>:''      
                }
                <div className="card-body">
                    <Link name="" id="" className="btn btn-primary" to={'/AgregarProveedor'} role="button">Nuevo Proveedor</Link>
                    <table class="table table-striped table-hover mt-1">
                        <thead class="thead-inverse">
                            <tr className='bg-secondary'>
                                <th className='letra_cabecera'>Id Proveedor</th>
                                <th className='letra_cabecera'>Nombre</th>
                                <th className='letra_cabecera'>Cuil</th>
                                <th className='letra_cabecera'>Estado</th>
                                <th className='letra_cabecera'>Fecha de Registro</th>
                                <th className='letra_cabecera'>Id Productos</th>
                                <th className='letra_cabecera'>Acciones</th>
                            </tr>
                        </thead>
                        {Proveedores.map((p) => (
                            <tbody>
                                <tr>
                                    <td className='letra_tabla'>{p.id}</td>
                                    <td className='letra_tabla'>{p.nombre}</td>
                                    <td className='letra_tabla'>{p.cuil}</td>
                                    <td className="letra_tabla"> 
                                      {
                                        (p.estado==1? 'Activo':'Baja')
                                      }
                                    </td>
                                    <td className='letra_tabla'>{p.fecha_de_carga}</td>
                                    <td className='letra_tabla'>{p.id_productos}</td>
                                    <div className="btn-group" role="group" aria-label="">
                                    {(p.estado==1)?
                                        <><Link to={`/EditarProveedor/${p.id}`}>
                                        <button type="button" className="btn btn-warning">
                                            Editar
                                        </button>
                                    </Link>
                                        <button onClick={() => bajaProveedor(p.id)} type="button" className="btn btn-success">Dar de baja</button></>
                                        :
                                        <button onClick={() => altaProveedor(p.id)} type="button" className="btn btn-danger">Dar de alta</button>
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
        </>
    )
}