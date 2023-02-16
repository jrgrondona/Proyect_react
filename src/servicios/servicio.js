const API_URL='http://localhost:3300';

/// get de los cliente ///
export async function getClientes(){

    try{
    const response = await fetch(`${API_URL}/cliente`);
    const data= await response.json();
    console.log(data)
    return data;

    }catch(error){
     console.log('Error en el servidor', error)
    }
}
/// agregar clientes por POST///
export function SaveCliente(datos_enviar){
    const requestOptions={
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(datos_enviar)
    }
       fetch(`${API_URL}/cliente`, requestOptions)
}
/// baja de cliente ///
export async function BajaCliente(id){
    const requestOptions={
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        }
};
 try{
    const response = await fetch(`${API_URL}/bajacliente/${id}`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
} catch(e){
    console.log('Error en el servidor')
 }
}
//// Alta cliente //// 
export async function AltaCliente(id){
    const requestOptions={
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        }
};
 try{
    const response = await fetch(`${API_URL}/altacliente/${id}`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
} catch(e){
    console.log('Error en el servidor')
 }
}
/// get de productos ///
export async function getProductos(){

    try{
    const response = await fetch(`${API_URL}/productos`);
    const data= await response.json();
    console.log(data)
    return data;

    }catch(error){
     console.log('Error en el servidor es :', error)
    }
}
//// Agregar Producto ////
export function SaveProducto(datos_enviar){
    const requestOptions={
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(datos_enviar)
    }
       fetch(`${API_URL}/agregarproductos`, requestOptions)
}
/// LOGIN ///
export async function Login(datos_enviar){
    const requestOptions={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos_enviar)
};
 try{
    const response = await fetch(`${API_URL}/login`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
} catch(e){
    console.log('Error en el servidor')
 }
}
//// REGISTROS DE NUEVOS USUARIOS ////  
export async function Registro(datos_enviar){
    const requestOptions={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos_enviar)
};
 try{
    const response = await fetch(`${API_URL}/registro`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
} catch(e){
    console.log('Error en el servidor')
 }
}
/// get de usuarios /// 
export async function getUsuarios(){

    try{
    const response = await fetch(`${API_URL}/usuarios`);
    const data= await response.json();
    console.log(data)
    return data;

    }catch(error){
     console.log('Error en el servidor', error)
    }
}
/// baja usuario por id ///
export async function BajaUsuario(id_usuario){
    const requestOptions={
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        }
};
 try{
    const response = await fetch(`${API_URL}/bajausuario/${id_usuario}`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
} catch(e){
    console.log('Error en el servidor')
 }
}
//// dar de alta un usuarios //// 
export async function AltaUsuario(id_usuario){
    const requestOptions={
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        }
};
 try{
    const response = await fetch(`${API_URL}/altausuario/${id_usuario}`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
} catch(e){
    console.log('Error en el servidor')
 }
}
/// Marcas ///
export async function getMarcas(){

    try{
    const response = await fetch(`${API_URL}/marcas`);
    const data= await response.json();
    console.log(data)
    return data;

    }catch(error){
     console.log('Error en el servidor', error)
    }
}
/// baja marca por id ///
export async function BajaMarcas(id){
    const requestOptions={
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        }
};
 try{
    const response = await fetch(`${API_URL}/bajamarca/${id}`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
} catch(e){
    console.log('Error en el servidor')
 }
}
//// dar de alta una marca //// 
export async function AltaMarcas(id){
    const requestOptions={
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        }
};
 try{
    const response = await fetch(`${API_URL}/altamarca/${id}`, requestOptions)
    const data = await response.json();
    console.log(data)
    return data;
} catch(e){
    console.log('Error en el servidor')
 }
}
/// Agregar Marcas ///
export function SaveMarca(datos_enviar){
    const requestOptions={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos_enviar)
    }
       fetch(`${API_URL}/AgregarMarcas`, requestOptions)
}
//// Obtener listado de proveedores ////
export async function getProveedores(){

    try{
    const response = await fetch(`${API_URL}/proveedor`);
    const data= await response.json();
    console.log(data)
    return data;

    }catch(error){
     console.log('Error en el servidor', error)
    }
    
}