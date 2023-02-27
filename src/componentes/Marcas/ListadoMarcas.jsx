import * as API from '../../servicios/servicio'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ListadoMarcas() {
    const [Marcas, setMarcas] = useState([])
    const [mensajeError, setmensajeError] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('');

    useEffect(() => {
        API.getMarcas().then(setMarcas)
    }, [])

    const bajaMarcas = async (id)=>{
    const user = await API.BajaMarcas(id)
    
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
    
      const altaMarcas = async (id)=>{
        const user = await API.AltaMarcas(id)
    
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
                    <h3 className='letra_cliente'><u>Listado de Marcas</u></h3>
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
                    <Link name="" id="" className="btn btn-primary" to={'/AgregarMarcas'} role="button">Nueva Marca</Link>
                    <table class="table table-striped table-hover mt-1">
                        <thead class="thead-inverse">
                            <tr>
                                <th className='letra_cabecera'>Id cliente</th>
                                <th className='letra_cabecera'>Nombre</th>
                                <th className='letra_cabecera'>Estado</th>
                                <th className='letra_cabecera'>Fecha de Registro</th>
                                <th className='letra_cabecera'>Acciones</th>
                            </tr>
                        </thead>
                        {Marcas.map((m) => (
                            <tbody>
                                <tr>
                                    <td className='letra_tabla'>{m.id}</td>
                                    <td className='letra_tabla'>{m.nombre}</td>                                   
                                    <td className="letra_tabla"> 
                                      {
                                        (m.estado==1? 'Activo':'Baja')
                                      }
                                    </td>
                                    <td className='letra_tabla'>{m.tms}</td>
                                    <div className="btn-group" role="group" aria-label="">
                                    {(m.estado==1)?
                                        <button onClick={() => bajaMarcas(m.id)} type="button" className="btn btn-success">Dar de baja</button>
                                        :
                                        <button onClick={() => altaMarcas(m.id)} type="button" className="btn btn-danger">Dar de alta</button>
                                    }
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