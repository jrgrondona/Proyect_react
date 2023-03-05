import React from "react";
import '../Panel/principal.css'

export function Principal() {
  return (
    <>
      <div className="App">
        <h3 className="letra_principal">Bienvenido !!!</h3>
        <h6 className="letra_principal">Contenido del sistema</h6>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr className="bg-secondary">
              <th scope="col">Tabla Cliente</th>
              <th scope="col">Tabla Productos</th>
              <th scope="col">Tabla Usuarios</th>
              <th scope="col">Tabla Proveedores</th>
              <th scope="col">Tabla Marcas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alta</td>
              <td>Alta</td>
              <td>Alta</td>
              <td>Alta</td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Baja</td>
              <td>Baja</td>
              <td>Baja</td>
              <td>Baja</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Crear</td>
              <td>Crear</td>
              <td>Crear</td>
              <td>Crear</td>
              <td>Crear</td>
            </tr>
            <tr>
              <td>Listar</td>
              <td>Listar</td>
              <td>Listar</td>
              <td>Listar</td>
              <td>Listar</td>
            </tr>
            <tr>
              <td>editar</td>
              <td>editar</td>
              <td>Falta el editar</td>
              <td>Falta el editar</td>
              <td>editar</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
} 
