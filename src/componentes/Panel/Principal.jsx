import React from "react";
import "../Panel/principal.css";
import "bootstrap/dist/css/bootstrap.css";

export function Principal() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel  slide"
        data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="1.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="2.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="6.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="divisor"></div>
      <hr className="featurette-divider"></hr>

      <div className="row">
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Productos</h2>
        <p>Mira los productos que hay a la venta.</p>
        <p><a className="btn btn-secondary" href="/productos">Ir a productos</a></p>
      </div>
      
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle"  width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Clientes</h2>
        <p>Muestra todos los clientes de la base de datos.</p>
        <p><a className="btn btn-secondary" href="/cliente">Ir a clientes »</a></p>
      </div>

      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Ventas</h2>
        <p>Mira las ventas efectuadas o haz una nueva.</p>
        <p><a className="btn btn-secondary" href="/ventas">Ir a ventas »</a></p>
      </div>



      </div>
     
    </>
  );
}
