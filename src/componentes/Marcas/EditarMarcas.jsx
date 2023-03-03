import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as API from "../../servicios/servicio";

export function EditarMarcas() {
  const { id} = useParams();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [marca, setMarca] = useState("");
  const [estado, setEstado] = useState("");
 

  useEffect(() => {trae_datos(id);}, []);

  const trae_datos = async () => {
    // event.preventDefault();
    const datos_marca = await API.getMarcaById(id);
    console.log(datos_marca);
    setMarca(datos_marca.marca);
    setEstado(datos_marca.estado);
  };

  const editar_marca = () => {
    const datos_enviar = {
      nombre: marca,
      estado: estado,
    };
    API.UpdateMarcas(id, datos_enviar);
    // nombre_marca.current.value=null;

    setmensajeSuccess("Se Edito la marca");
    setTimeout(() => {
      setmensajeSuccess("");
      
      console.log("actualiza datos Marcas", datos_enviar);
    }, 2000);
  };
  return (
    <>
    <div className="card">
      <div className="card-header">Edicion de la marca</div>
      {mensajeSuccess ? (
        <div class="alert alert-success" role="alert">
          {mensajeSuccess}
        </div>
      ) : (
        ""
      )}
      <div className="card-body">
        <div className="form-group">
          <label for="">Nombre de la marca</label>
          <input
            type="text"
            value={marca}
            onChange={(event) => setMarca(event.target.value)}
            name=""
            id=""
            className="form-control"
            
            aria-describedby="helpId"
          />
          <small id="helpId" className="text-muted">
            &nbsp;
          </small>
        </div>{" "}
        <div className="form-group">
          <label>Estado</label>{" "}
          <input
            type="text"
            value={estado}
            onChange={(event) => setEstado(event.target.value)}
            name=""
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
          />
          <small id="helpId" className="text-muted"></small>{" "}
        </div>
        <div className="form-group">
          <button
            onClick={editar_marca}
            type="button"
            className="btn btn-primary"
          >
            Editar
          </button>
          <Link to={"/marcas "}>
            <button type="button" className="btn btn-secondary">
              Volver al listado
            </button>
          </Link>
        </div>
      </div>
      <div className="card-footer text-muted">Bazar Capicua</div>
    </div>
    </>
  );
}
