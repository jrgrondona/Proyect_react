import { useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicio';

export function AgregarVentas() {
  const id_cliente_ventas = useRef();
  const id_producto_ventas = useRef();
  const Cantidad_ventas = useRef();

  const guardar_venta = () => {
    const id_cliente = id_cliente_ventas.current.value;
    const id_producto = id_producto_ventas.current.value;
    const Cantidad = Cantidad_ventas.current.value;
    console.log('Datos ingresados son: ', id_cliente, id_producto, Cantidad);

    if (
      id_cliente_ventas.current.value === '' ||
      id_producto_ventas.current.value === '' ||
      Cantidad_ventas.current.value === ''
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const datos_enviar = {
      id_cliente: id_cliente,
      id_producto: id_producto,
      Cantidad: Cantidad,
    };
    API.SaveVentas(datos_enviar)
      .then((res) => {
        if (res.status === 200) {
          alert('Se cargó correctamente la venta');
          id_cliente_ventas.current.value = '';
          id_producto_ventas.current.value = '';
          Cantidad_ventas.current.value = '';
        } else {
          alert('No posee stock suficiente o el cliente no existe');
        }
      });
  };
  return (
    <div className="card">
      <div className="card-header">
        Nueva Venta
      </div>
      <div className="card-body">
        <div className="form-group">
          <label for="">ID CLIENTE</label>
          <input type="text" ref={id_cliente_ventas} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">ID PRODUCTO</label>
          <input type="text" ref={id_producto_ventas} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="form-group">
          <label for="">CANTIDAD</label>
          <input type="text" ref={Cantidad_ventas} name="" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="card-body">
          <button onClick={guardar_venta} type="button" className="btn btn-primary">Guardar</button>
          <Link to={'/ventas'}><button type="button" className="btn btn-secondary">Volver </button></Link>
        </div>
      </div>
      <div classNameName="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>
  )
}

