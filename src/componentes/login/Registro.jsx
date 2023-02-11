import { Link } from 'react-router-dom'
import { useState } from "react"
import * as API from '../../servicios/servicio'

export function Registro(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [apellido_nombre, setApellido_nombre] = useState(''); 
    const [mensajeSuccess, setmensajeSuccess] = useState(''); 

    const registroForm = async (event)=>{
        event.preventDefault();
        const user = await API.Registro({username, password, email, apellido_nombre}) 
        if(user.status){
          setmensajeSuccess(user.mensaje)
          setTimeout(()=>{
            setmensajeSuccess('');
            window.location.href('/')
        }, 3000)
        
    }
  }
    return(
        <>
        <div className='container'>
        {
                    mensajeSuccess?
                    <div className="alert alert-success" role="alert">
                    {mensajeSuccess}
                    </div>:''      
         }
        <div className="card">
      <div className="card-header">
        Crear Usuario
      </div>
      <div className="card-body">
        <form onSubmit={registroForm}>
        <div className="form-group">
          <label for="">Nombre Usuario</label>
          <input required
          type="text" 
          value={username} 
          className="form-control" 
          placeholder="Nombre del Usuario" 
          onChange={(event)=>setUsername(event.target.value)}
         />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label for="">Password</label>
          <input required
          type="password" 
          value={password} 
          className="form-control" 
          placeholder="Password"
          onChange={(event)=>setPassword(event.target.value)} 
         />
          <small id="helpId" className="text-muted"></small>
        </div>

       <div className="form-group">
          <label for="">Email</label>
          <input required
          type="email" 
          value={email} 
          className="form-control" 
          placeholder="Email" 
          onChange={(event)=>setEmail(event.target.value)} 
         />
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label for="">Apellido y Nombre</label>
          <input required
          type="text" 
          value={apellido_nombre} 
          className="form-control" 
          placeholder="Apellido_nombre" 
          onChange={(event)=>setApellido_nombre(event.target.value)} 
         />
          <small id="helpId" className="text-muted"></small>
        </div>
        <div className="card-body">
          <button type="submit" className="btn btn-primary">Guardar</button>
          <Link to={'/'}><button type="button" className="btn btn-secondary">Volver</button></Link>
        </div>
        </form>
          </div>
      <div classNameName="card-footer text-muted">
        Bazar Capicua
      </div>
    </div>
 </div>
        </>
    )
}