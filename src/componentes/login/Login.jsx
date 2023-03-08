import { useState } from "react";
import { Link } from "react-router-dom";
import * as API from '../../servicios/servicio'
import '../login/Login.css'


export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [mensajeError, setmensajeError] = useState("");

  const enviarForm = async (event) => {
    event.preventDefault();
    const user = await API.Login({ username, password });
    if (user.status) {
      window.localStorage.setItem("usuario", JSON.stringify(user));
      window.localStorage.setItem("token", JSON.stringify(user.token));

      setUsername("");
      setPassword("");
      window.location.reload(true);
    } else {
      setmensajeError(user.mensaje);
      console.log(user.mensaje)
      setTimeout(() => {
        setmensajeError("");
      }, 5000);
    }
  };
  return (
    <section>
      {/* <Link rel="stylesheet" href="style.css" />; */}
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={enviarForm}>
            <h2>INGRESAR</h2>

            <div className="imput-box">
              <form id="quote-process-form" data-hs-cf-bound="true"></form>
              <form onSubmit={enviarForm} />
              {mensajeError ? (
                <div className="alert alert-danger" role="alert">
                  {mensajeError}
                </div>
              ) : (
                ""
              )}

              <div className="inputbox">
                <input
                  type="text"
                  required="required"
                  id=""
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <label for="">Usuario</label>
              </div>

              <div className="inputbox">
                {/* <ion-icon name="lock-closed-outline" ></ion-icon> */}
                <input
                  type="password"
                  required="required"
                  id="floatingPassword"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <label for="">Password</label>
              </div>

              <button type="submit" className="button">
                {" "}
                Ingresar{" "}
              </button>
              <div className="checkbox mb-3">
                <p>
                  No tienes cuenta?
                  <Link to={"/registro"}>
                    {" "}
                    <a> Registrate</a>{" "}
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
