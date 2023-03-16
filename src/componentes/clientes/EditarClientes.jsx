import { React } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import * as API from "../../servicios/servicio";

export function EditarClientes() {
  const { id } = useParams();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [estado, setEstado] = useState('');
  const [tel, setTel] = useState('');
  const [direc, setDirec] = useState('');
  const [Error, setError] = useState("");

  useEffect(() => { trae_datos(id) }, []);

  const trae_datos = async () => {

    const datos = await API.getClientesById(id)
    console.log("datos que trae edicion", datos)
    setApellido(datos.apellido)
    setNombre(datos.nombre)
    setTel(datos.tel)
    setDirec(datos.direc)
    setEstado(datos.estado)

  }
  const editar_cliente = () => {

    if (nombre.trim() === '' ||
       apellido.trim() === '' ||
       estado.trim() === '' ||
       direc.trim() === '' ||
       tel.trim() === '') {
      setError(true);
      swal.fire({
        icon: "error",
        title: "Por favor complete todos los campos requeridos",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
       }
    const datos_enviar = {
      nombre: nombre,
      apellido: apellido,
      estado: estado,
      tel: tel,
      direc: direc,
    };

    API.UpdateCliente(id, datos_enviar);

    swal.fire({
      icon: "success",
      title: "se edito el cliente correctamente",
      showConfirmButton: false,
      timer: 2500,
    });
    setTimeout(() => {
      setmensajeSuccess("")
      // window.location.reload(true)
      console.log("actualiza datos cliente", datos_enviar)

    }, 2000)
  }


  return (

    <div className="card">
      <div className="card-header">
        Editar Cliente
      </div>
      {
        mensajeSuccess ?
          <div className="alert alert-success" role="alert">
            {mensajeSuccess}
          </div> : ""
      }
      <div className="card-body">
        <div className="form-group">
          <label >Nombre</label>
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >Apellido</label>
          <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >Telefono</label>
          <input type="text" value={tel} onChange={(event) => setTel(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >Direccion</label>
          <input type="text" value={direc} onChange={(event) => setDirec(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="card-body">
          <button onClick={editar_cliente} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/cliente'}><button type="button" className="btn btn-secondary">Volver a Clientes</button></Link>
        </div>
      </div>
      <div className="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>


  )
}