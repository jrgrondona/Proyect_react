import { React } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import * as API from "../../servicios/servicio";

export function EditarProveedor() {
  const { id } = useParams();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [nombre, setNombre] = useState('');
  const [cuil, setCuil] = useState('');
  const [id_productos, setId_Productos] = useState('');
  const [estado, setEstado] = useState('');


  useEffect(() => { trae_datos(id) }, []);

  const trae_datos = async () => {

    const datos = await API.getProveedorById(id)
    console.log("datos que trae edicion", datos)

    setNombre(datos.nombre)
    setId_Productos(datos.id_productos)
    setEstado(datos.estado)
    setCuil(datos.cuil)
  }

  const editar_proveedor = () => {
    if (!nombre || !cuil || !id_productos) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }
    if (isNaN(Number(cuil)) || isNaN(Number(id_productos))) {
      alert('Por favor ingrese valores numéricos');
      return;
    }
    const datos_enviar = {
      nombre: nombre,
      id_productos: id_productos,
      estado: estado,
      cuil: cuil,
    };

    API.UpdateProveedor(id, datos_enviar);

    setmensajeSuccess("se edito el producto correctamente")
    setTimeout(() => {
      setmensajeSuccess("")
      window.location.reload(true)
      console.log("actualiza datos de los productos", datos_enviar)

    }, 2000)
  }


  return (

    <div className="card">
      <div className="card-header">
        Editar Proveedor
      </div>
      {
        mensajeSuccess ?
          <div className="alert alert-success" role="alert">
            {mensajeSuccess}
          </div> : ""
      }
      <div className="card-body" >
        <div className="form-group">
          <label >NOMBRE</label>
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >CUIL</label>
          <input type="text" value={cuil} onChange={(event) => setCuil(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >ID PRODUCTO</label>
          <input type="text" value={id_productos}

            onChange={(event) => setId_Productos(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />


          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="card-body">
          <button onClick={editar_proveedor} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/proveedor'}><button type="button" className="btn btn-secondary">Volver</button></Link>
        </div>
      </div>
      <div className="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>
  )
}