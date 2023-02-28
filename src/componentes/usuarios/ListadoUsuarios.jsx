import * as API from '../../servicios/servicio'
import { useState, useEffect } from 'react'

export function ListadoUsuarios() {
    const [Usuarios, setUsuarios] = useState([])
    const [mensajeError, setmensajeError] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('');

    useEffect(() => {
        API.getUsuarios().then(setUsuarios)
    }, [])


    const bajaUsuario = async (id_usuario)=>{
    const user = await API.BajaUsuario(id_usuario)

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

  const altaUsuario = async (id_usuario)=>{
    const user = await API.AltaUsuario(id_usuario)

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
                    <h3 className='text-center'><u>Listado de Usuarios</u></h3>
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
                    <table className="table table-striped table-hover">
                        <thead className="thead-inverse">
                            <tr className='bg-dark'>
                                <th className='text-white'>Id</th>
                                <th className='text-white'>Nombre de usuario</th>
                                <th className='text-white'>Apellido y nombre</th>
                                <th className='text-white'>Estado</th>
                                <th className='text-white'>Acciones</th>
                            </tr>
                        </thead>
                        {Usuarios.map((u) => (
                            <tbody>
                                <tr key={u.id_usuario}>

                                    <td className='letra_tabla'>{u.id_usuario}</td>
                                    <td className='letra_tabla'>{u.username}</td>
                                    <td className='letra_tabla'>{u.apellido_nombre}</td>
                                    <td className="letra_tabla badge-success"> 
                                      {
                                        (u.estado==1? 'Activo':'Baja')
                                      }
                                    </td>
                                    <div className="btn-group" role="group" aria-label="">
                                    {(u.estado==1)?
                                        <button onClick={() => bajaUsuario(u.id_usuario)} type="button" className="btn btn-success">Dar de baja</button>
                                        :
                                        <button onClick={() => altaUsuario(u.id_usuario)} type="button" className="btn btn-danger">Dar de alta</button>
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