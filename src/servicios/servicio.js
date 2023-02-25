const API_URL = 'http://localhost:3300';

/// get de los cliente ///
export async function getClientes() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await fetch(`${API_URL}/cliente`, requestOptions);
        const data = await response.json();
        console.log(data)
        return data;

    } catch (error) {
        console.log('Error en el servidor', error)
    }
}
/// agregar clientes por POST///
export function SaveCliente(datos_enviar) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos_enviar)
    }
    fetch(`${API_URL}/cliente`, requestOptions)
}
/// baja de cliente ///
export async function BajaCliente(id) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(`${API_URL}/bajacliente/${id}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}
//// Alta cliente //// 
export async function AltaCliente(id) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(`${API_URL}/altacliente/${id}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}
/// get de productos ///
export async function getProductos() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await fetch(`${API_URL}/productos`, requestOptions);
        const data = await response.json();
        console.log(data)
        return data;

    } catch (error) {
        console.log('Error en el servidor es :', error)
    }
}
//// Agregar Producto ////
export function SaveProducto(datos_enviar) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos_enviar)
    }
    fetch(`${API_URL}/agregarproductos`, requestOptions)
}
/// LOGIN ///
export async function Login(datos_enviar) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos_enviar)
    };
    try {
        const response = await fetch(`${API_URL}/login`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}
//// REGISTROS DE NUEVOS USUARIOS ////  
export async function Registro(datos_enviar) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos_enviar)
    };
    try {
        const response = await fetch(`${API_URL}/registro`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}
/// get de usuarios /// 
export async function getUsuarios() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await fetch(`${API_URL}/usuarios`, requestOptions);
        const data = await response.json();
        console.log(data)
        return data;

    } catch (error) {
        console.log('Error en el servidor', error)
    }
}
/// baja usuario por id ///
export async function BajaUsuario(id_usuario) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(`${API_URL}/bajausuario/${id_usuario}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}
//// dar de alta un usuarios //// 
export async function AltaUsuario(id_usuario) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(`${API_URL}/altausuario/${id_usuario}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}
/// Marcas ///
export async function getMarcas() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const response = await fetch(`${API_URL}/marcas`, requestOptions);
        const data = await response.json();
        console.log(data)
        return data;

    } catch (error) {
        console.log('Error en el servidor', error)
    }
}
/// baja marca por id ///
export async function BajaMarcas(id) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(`${API_URL}/bajamarca/${id}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}
//// dar de alta una marca //// 
export async function AltaMarcas(id) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(`${API_URL}/altamarca/${id}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}
/// Agregar Marcas ///
export function SaveMarca(datos_enviar) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos_enviar)
    }
    fetch(`${API_URL}/AgregarMarcas`, requestOptions)
}
//// Obtener listado de proveedores ////
export async function getProveedores() {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(`${API_URL}/proveedor`, requestOptions);
        const data = await response.json();
        console.log(data)
        return data;

    } catch (error) {
        console.log('Error en el servidor', error)
    }

}
//// Agregar Proveedores ////
export function SaveProveedor(datos_enviar) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(datos_enviar)
    }
    fetch(`${API_URL}/agregarproveedor`, requestOptions)
}
/// baja proveedor por id ///
export async function BajaProveedor(id) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(`${API_URL}/bajaproveedor/${id}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}
//// alta proveedor por id //// 
export async function AltaProveedor(id) {
    const token = JSON.parse(localStorage.getItem('token'));
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const response = await fetch(`${API_URL}/altaproveedor/${id}`, requestOptions)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (e) {
        console.log('Error en el servidor')
    }
}