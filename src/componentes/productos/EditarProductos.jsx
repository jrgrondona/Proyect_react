import { React } from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import * as API from "../../servicios/servicio";


export function EditarProductos(){
  const {id_productos} = useParams();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [nombre,setNombre] = useState('');
  const [descripcion,setDescripcion] = useState('');
//   const [estado,setEstado] = useState('');
  
 useEffect(() => {trae_datos(id_productos)}, []);

 const trae_datos = async ()=>{
  
  const datos = await API.getProductosById(id_productos)
  console.log("datos que trae edicion",datos)
  setDescripcion(datos.descripcion)
  setNombre(datos.nombre)
//   setEstado(datos.estado)

 }
 const editar_producto = () => {
  const datos_enviar = {
    nombre:nombre,
    apellido:apellido,
    estado:estado
  };
  
  API.UpdateProducto(id_productos,datos_enviar);
  
  setmensajeSuccess("se edito el producto correctamente")
  setTimeout(()=>{
    setmensajeSuccess("")
    // window.location.reload(true)
    console.log("actualiza datos de los productos",datos_enviar)

  },2000)
 }


  return (

     <div className="card">
      <div className="card-header">
        Editar productos 
      </div>
      {
        mensajeSuccess?
        <div className="alert alert-success" role="alert">
          {mensajeSuccess}
          </div>:""
      }
      <div className="card-body">
        <div className="form-group">
          <label >Nombre</label>
          <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label >Descripcion</label>
          <input type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" />
          <small id="helpId" className="text-muted"></small>
        </div>
        
        <div className="card-body">
          <button onClick={editar_producto} type="button" className="btn btn-primary">Editar</button>
          <Link to={'/producto'}><button type="button" className="btn btn-secondary">Volver a Productos</button></Link>
        </div>
      </div>
      <div className="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>

    
  )
}