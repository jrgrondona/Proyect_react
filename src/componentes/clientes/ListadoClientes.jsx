import './clientes.css'
import * as API from '../../servicios/servicio'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ListadoClientes() {
    const [Clientes, setClientes] = useState([])
    const [mensajeError, setmensajeError] = useState('');
    const [mensajeSuccess, setmensajeSuccess] = useState('');

    //// Nuevo filtro 
    const [nombre, setNombre] = useState([]);
    const [apellido, setApellido] = useState([]);


    useEffect(() => {
        API.getClientes().then(setClientes)
    }, [])

    const bajaCliente = async (id) => {
        const user = await API.BajaCliente(id)

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

    const altaCliente = async (id) => {
        const user = await API.AltaCliente(id)

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
    const buscar_cliente = () => {

        const filtros = {
            nombre: nombre,
            apellido: apellido,
        };
        API.BuscarClientes(filtros).then(setClientes);
    }
    const limpiar_filtros = () => {
        setNombre('')
        setApellido('')
        API.getClientes().then(setClientes)

    }
    return (
        <>
            <div className="card-responsive">
                <div className="card-header">
                    <h6 className='text-white'>Busqueda de Cliente</h6>
                </div>
                <div className="card-body">
                    <div className='row'>
                        <div className='col-3'>
                            <label className='text-white'>Nombre</label>
                            <input
                                id='nombre'
                                className='form-control'
                                value={nombre}
                                onChange={(event) => setNombre(event.target.value)}
                            />
                        </div>
                        <div className='col-3'>
                            <label className='text-white'>Apellido</label>
                            <input
                                id='apellido'
                                className='form-control'
                                value={apellido}
                                onChange={(event) => setApellido(event.target.value)}
                            />
                        </div>

                    </div>
                    <div className='row mt-3'>
                        <div className='col-2' >
                            <button onClick={buscar_cliente} className='btn btn-primary'>Buscar</button>
                            &nbsp;
                            <button onClick={limpiar_filtros} className='btn btn-dark'>Limpiar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-header">
                <h3 className='letra_cliente text-center'><u>Listado de Clientes</u></h3>
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
            <div className="table-responsive">
                <Link name="" id="" className="btn btn-primary" to={'/AgregarClientes'} role="button">Agregar cliente</Link>
                <table className="table table-hover table-striped mt-1">
                    <thead className="thead-inverse">
                        <tr className='bg-secondary'>
                            <th className='letra_cabecera'>Id cliente</th>
                            <th className='letra_cabecera'>Nombre</th>
                            <th className='letra_cabecera'>Apellido</th>
                            <th className='letra_cabecera'>Telefono</th>
                            <th className='letra_cabecera'>Direccion</th>
                            <th className='letra_cabecera'>Estado</th>
                            <th className='letra_cabecera'>Fecha de Registro</th>
                            <th className='letra_cabecera'>Acciones</th>
                        </tr>
                    </thead>
                    {Clientes.map((c) => (
                        <tbody>
                            <tr>
                                <td className='letra_tabla'>{c.id}</td>
                                <td className='letra_tabla'>{c.nombre}</td>
                                <td className='letra_tabla'>{c.apellido}</td>
                                <td className='letra_tabla'>{c.tel}</td>
                                <td className='letra_tabla'>{c.direc}</td>
                                <td className="letra_tabla">
                                    {
                                        (c.estado == 1 ? 'Activo' : 'Baja')
                                    }
                                </td>
                                <td className='letra_tabla'>{c.fecha_de_carga}</td>
                                <div className="btn-group" role="group" aria-label="">
                    {c.estado == 1 ? (
                      <>
                        <Link to={`/EditarClientes/${c.id}`}>
                          <button type="button" className="btn btn-warning">
                            Editar
                          </button>
                        </Link>
                        <button
                          onClick={() => bajaCliente(c.id)}
                          type="button"
                          className="btn btn-success"
                        >
                          Dar de baja
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => altaCliente(c.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Dar de alta
                      </button>
                    )}
                  </div>
                            </tr>
                        </tbody>
                    ))}
                </table>
                <div className="card-footer text-muted">
                    Bazar Capicua
                </div>
            </div>
        </>
    )
}