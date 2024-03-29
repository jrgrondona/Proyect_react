const API_URL = "http://localhost:3300";

/// get de los cliente ///
export async function getClientes() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/cliente`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error en el servidor", error);
  }
}
/// agregar clientes por POST///
export function SaveCliente(datos_enviar) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos_enviar),
  };
  return fetch(`${API_URL}/cliente`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
/// baja de cliente ///
export async function BajaCliente(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/bajacliente/${id}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
//// Alta cliente ////
export async function AltaCliente(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/altacliente/${id}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
//// Buscador de clientes /////
export async function BuscarClientes(filtros) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(filtros),
  };
  const response = await fetch(`${API_URL}/buscar_clientes`, requestOptions);
  const data = await response.json();
  return data;
}
// lista clientes por id para la edicion
export async function getClientesById(id) {
  const token = JSON.parse(localStorage.getItem("token"));

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/cliente/${id}`, requestOptions);
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log("Error en el servidor", error);
  }

}
// gurda los datos editados de clientes metodo PUT
export function UpdateCliente(id, nombre, apellido, tel, direc, estado) {
  const token = JSON.parse(localStorage.getItem("token"));

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(nombre, apellido, tel, direc, estado),
  };
  fetch(`${API_URL}/cliente/${id}`, requestOptions);
}

/// get de productos ///
export async function getProductos() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/productos`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error en el servidor es :", error);
  }
}
//// Agregar Producto ////
export function SaveProducto(datos_enviar) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos_enviar),
  };
  return fetch(`${API_URL}/agregarproductos`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
//// baja de producto ////
export async function BajaProducto(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/bajaproducto/${id}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
//// Alta producto ////
export async function AltaProducto(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/altaproducto/${id}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
// lista productos por id para la edicion
export async function getProductosById(id) {
  const token = JSON.parse(localStorage.getItem("token"));

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/productos/${id}`, requestOptions);
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log("Error en el servidor", error);
  }

}
// gurda los datos editados de productos metodo PUT
export function UpdateProducto(id, nombre, descripcion, id_marca, precio_costo, precio_venta, estado, stock) {
  const token = JSON.parse(localStorage.getItem("token"));

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(nombre, descripcion, id_marca, precio_costo, precio_venta, estado, stock),
  };
  fetch(`${API_URL}/productos/${id}`, requestOptions);
}
/// LOGIN ///
export async function Login(datos_enviar) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos_enviar),
  };
  try {
    const response = await fetch(`${API_URL}/login`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
//// REGISTROS DE NUEVOS USUARIOS ////
export async function Registro(datos_enviar) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos_enviar),
  };
  try {
    const response = await fetch(`${API_URL}/registro`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
/// get de usuarios ///
export async function getUsuarios() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/usuarios`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error en el servidor", error);
  }
}
/// baja usuario por id ///
export async function BajaUsuario(id_usuario) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/bajausuario/${id_usuario}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
//// dar de alta un usuarios ////
export async function AltaUsuario(id_usuario) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/altausuario/${id_usuario}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
/// Marcas ///
export async function getMarcas() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/marcas`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error en el servidor", error);
  }
}
// // trae las marcas por id
export async function getMarcaById(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/marcas/${id}`, requestOptions);
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log("Error en el servidor", error);
  }
}
// guarda los datos editados de marcas metodo PUT
export function UpdateMarcas(id, nombre, estado) {
  const token = JSON.parse(localStorage.getItem("token"));

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(nombre, estado),
  };
  fetch(`${API_URL}/marcas/${id}`, requestOptions);
}
/// baja marca por id ///
export async function BajaMarcas(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/bajamarca/${id}`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
//// dar de alta una marca ////
export async function AltaMarcas(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/altamarca/${id}`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
/// Agregar Marcas ///
export function SaveMarca(datos_enviar) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos_enviar),
  };
  return fetch(`${API_URL}/AgregarMarcas`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
//// Obtener listado de proveedores ////
export async function getProveedores() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/proveedor`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error en el servidor", error);
  }
}
//// Agregar Proveedores ////
export function SaveProveedor(datos_enviar) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos_enviar),
  };
  return fetch(`${API_URL}/agregarproveedor`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
//   };
//   fetch(`${API_URL}/agregarproveedor`, requestOptions);
// }
/// baja proveedor por id ///
export async function BajaProveedor(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/bajaproveedor/${id}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
//// alta proveedor por id ////
export async function AltaProveedor(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/altaproveedor/${id}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
// // trae las proveedores por id
export async function getProveedorById(id) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/proveedor/${id}`, requestOptions);
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log("Error en el servidor", error);
  }
}
// guarda los datos editados del proveedor metodo PUT
export function UpdateProveedor(id, nombre, cuil, estado, id_productos) {
  const token = JSON.parse(localStorage.getItem("token"));

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(nombre, cuil, estado, id_productos),
  };
  fetch(`${API_URL}/proveedor/${id}`, requestOptions);
}
///// trae ventas realizadas ////
export async function getVentas() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/ventas`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error en el servidor", error);
  }
}
///// registra ventas /////
export function SaveVentas(datos_enviar) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(datos_enviar),
  };
  return fetch(`${API_URL}/ventas`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
}
///// ELIMINA LOS REGISTRO DE LA BASE DE DATOS ////
export async function DeleteVenta(id_ventas) {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      `${API_URL}/delete/${id_ventas}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error en el servidor");
  }
}
////// trae detalles de ventas /////
export async function getVentasById(id_ventas) {
  const token = JSON.parse(localStorage.getItem("token"));

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/ventas/${id_ventas}`, requestOptions);
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log("Error en el servidor", error);
  }

}
////// TRAE TODOS LOS DETALLES DE VENTAS //////
export async function getTotalDetalles() {
  const token = JSON.parse(localStorage.getItem("token"));
  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${API_URL}/todo_ventas`, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error en el servidor", error);
  }
}