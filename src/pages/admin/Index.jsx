import React from "react";
import { Link } from "react-router-dom";
import "styles/index.css";
import Nave from "media/Nave.png";

const Admin = () => {
  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <div className="row center-main">
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <Card
                icono="fa-shopping-basket"
                ruta="/admin/ventas"
                nombre="Ventas"
              />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <Card
                icono="fa-list"
                ruta="/admin/productos"
                nombre="Productos"
              />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <Card icono="fa-users" ruta="/admin/usuarios" nombre="Usuarios" />
            </div>
          </div>
        </div>
        <row className="center-main">
          <img src={Nave} alt="" />
        </row>
      </div>
    </div>
  );
};

const Card = ({ icono, ruta, nombre }) => {
  return (
    <div className="card-body icon-card">
      <div className="card-body-icon">
        <i className={`fa ${icono}`} aria-hidden="true" />
      </div>
      <div className="mr-5">{nombre}</div>
      <Link to={ruta} className="colorLinkCard">
        <span className="float-left d-flex justify-content-center">
          VER DETALLES
        </span>
      </Link>
    </div>
  );
};
export default Admin;
