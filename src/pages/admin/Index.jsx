import React from "react";
import { Link } from "react-router-dom";
import "styles/index.css";

const Admin = () => {
  return (
    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-primary o-hidden h-100">
              <Card
                icono="fa-shopping-basket"
                ruta="/admin/ventas"
                nombre="Ventas"
              />
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-primary o-hidden h-100">
              <Card
                icono="fa-list"
                ruta="/admin/productos"
                nombre="Productos"
              />
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-primary o-hidden h-100">
              <Card icono="fa-users" ruta="/admin/usuarios" nombre="Usuarios" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icono, ruta, nombre }) => {
  return (
    <div class="card-body icon-card">
      <div class="card-body-icon">
        <i class={`fa ${icono}`} aria-hidden="true" />
      </div>
      <div class="mr-5">{nombre}</div>
      <Link to={ruta}>
        <span class="float-left d-flex justify-content-center">
          VER DETALLES
        </span>
      </Link>
    </div>
  );
};
export default Admin;
