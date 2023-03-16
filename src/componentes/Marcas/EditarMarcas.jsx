import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as API from "../../servicios/servicio";

export function EditarMarcas() {
  const { id } = useParams();
  const [mensajeSuccess, setmensajeSuccess] = useState("");
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const [Error, setError] = useState("");


  useEffect(() => { trae_datos(id) }, []);

  const trae_datos = async () => {
    const datos_marca = await API.getMarcaById(id)
    console.log(datos_marca)
    setNombre(datos_marca.nombre)
    setEstado(datos_marca.estado)
  };

  ///// esto evita que se cargue la edición en vacio //// 
  const editar_marca = () => {
    if (nombre.trim() === '' || estado.trim() === '') {
      setError(true);
      alert("No se permite enviar vacio en edicion");
      return;
    }
    /////// hasta aca //////

    const datos_enviar = {
      nombre: nombre,
      estado: estado
    };
    API.UpdateMarcas(id, datos_enviar);

    setmensajeSuccess("Se Edito la marca");
    setTimeout(() => {
      setmensajeSuccess("");
      window.location.reload(true)
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
            <label for="">NOMBRE</label>
            <input
              type="text"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
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
            <button
              onClick={editar_marca}
              type="button"
              className="btn btn-primary"
            >
              Guardar
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
