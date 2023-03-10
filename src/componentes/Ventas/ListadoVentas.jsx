import * as API from "../../servicios/servicio";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function ListadoVentas() {
  const [Ventas, setVentas] = useState([]);
  const [mensajeError, setmensajeError] = useState("");
  const [mensajeSuccess, setmensajeSuccess] = useState("");

  useEffect(() => {
    API.getVentas().then(setVentas);
  }, []);
  const deleteVentas = async (id_ventas) => {
    if (
      window.confirm(
        "¿Está seguro de que desea ELIMINAR este registro? ESTA ACCION ELIMINA DE LA BASE DE DATOS"
      )
    ) {
      const user = await API.DeleteVenta(id_ventas);
      if (user.status) {
        setmensajeError(user.mensaje);
        setTimeout(() => {
          setmensajeError("");
          window.location.reload(true);
        }, 2000);
      } else {
        setmensajeSuccess(user.mensaje);
        setTimeout(() => {
          setmensajeSuccess("");
          window.location.reload(true);
        }, 2000);
      }
    }
  };
  return (
    <>
      <div className="table-responsive">
        <div className="card-header">
          &nbsp;
          <h3 className="text-center">
            <u>Listado de Ventas</u>
          </h3>
        </div>
        {mensajeError ? (
          <div className="alert alert-warning" role="alert">
            {mensajeError}
          </div>
        ) : (
          ""
        )}
        {mensajeSuccess ? (
          <div className="alert alert-success" role="alert">
            {mensajeSuccess}
          </div>
        ) : (
          ""
        )}
        <div className="card-body ">
          <Link
            name=""
            id=""
            className="btn btn-primary"
            to={"/AgregarVentas"}
            role="button"
          >
            Nueva Venta
          </Link>
          &nbsp;
          <Link
            name=""
            id=""
            className="btn btn-info"
            to={"/TodoVentas"}
            role="button"
          >
            Ver Detalles
          </Link>
          <table className="table table-striped table-hover mt-1">
            <thead className="thead-inverse">
              <tr className="bg-secondary">
                <th className="letra_cabecera">Id Venta</th>
                <th className="letra_cabecera">Id cliente</th>
                <th className="letra_cabecera">Id Producto</th>
                <th className="letra_cabecera">Cantidad</th>
                <th className="letra_cabecera">Estado</th>
                <th className="letra_cabecera">Fecha de Registro</th>
                <th className="letra_cabecera">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {Ventas.map((v) => (
                <tr key={v.id_ventas}>
                  <td className="letra_tabla">{v.id_ventas}</td>
                  <td className="letra_tabla">{v.id_cliente}</td>
                  <td className="letra_tabla">{v.id_producto}</td>
                  <td className="letra_tabla">{v.Cantidad}</td>
                  <td className="letra_tabla">
                    {v.Estado === 1 ? "Activo" : "Activo"}
                  </td>
                  <td className="letra_tabla">{v.fecha_de_carga}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="">
                      <button
                        onClick={() => deleteVentas(v.id_ventas)}
                        type="button"
                        className="btn btn-danger btn-sm"
                      >
                        Borrar
                      </button>
                      <Link to={`/detallesVentas/${v.id_ventas}`}>
                        <button type="button" class="btn btn-info">
                          Ver
                        </button>
                      </Link>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label=""
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="card-footer text-muted">Bazar Capicua</div>
        </div>
      </div>
    </>
  );
}
``;
