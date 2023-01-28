const API_URL='http://localhost:3300';

export async function getClientes(){

    try{
    const response = await fetch(`${API_URL}/cliente`);
    const data= await response.json();
    console.log(data)
    return data;

    }catch(error){
     console.log('Error en el server', error)
    }
};
export async function getProductos(){

    try{
    const response = await fetch(`${API_URL}/productos`);
    const data= await response.json();
    console.log(data)
    return data;

    }catch(error){
     console.log('Error en el server', error)
    }
};