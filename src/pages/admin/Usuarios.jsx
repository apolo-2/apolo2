import React, { useEffect, useState, useRef } from "react";

import "styles/usuarios.css";
//import Swal from "sweetalert2";
import axios from "axios";
//import { Dialog, Tooltip } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import DataTableUsuario from "components/DataTableUsuario";
import { obtenerUsuarios } from "utils/api";
//import { nanoid } from "nanoid";

const Usuarios = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear Nuevo Usuario");
  const [colorBoton, setColorBoton] = useState("btn-secondary");
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerUsuarios(setUsuarios, setEjecutarConsulta);
      console.log("usuarios:::::", usuarios);
    }
  }, [ejecutarConsulta, usuarios]);

  useEffect(() => {
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear Nuevo usuario");
      setColorBoton("indigo");
    } else {
      setTextoBoton("Mostrar todos los usuarios");
      setColorBoton("green");
    }
  }, [mostrarTabla]);

  return (
    <div className="container">
      <div className="flex flex-col w-full">
        <div className="container-title">
          <h2>Administración de usuarios</h2>
        </div>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`${colorBoton} btn-rounded`}
        >
          <i class="fas fa-plus-circle fa-lg"></i>
          <span>{textoBoton}</span>
        </button>
      </div>
      {mostrarTabla ? (
        <DataTableUsuario
          listaUsuarios={usuarios}
          setMostrarTabla={setMostrarTabla}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      ) : (
        <FormularioCreacionUsuarios
          setMostrarTabla={setMostrarTabla}
          listaUsuarios={usuarios}
          setUsuarios={setUsuarios}
        />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const FormularioCreacionUsuarios = ({
  setMostrarTabla,
  listaUsuarios,
  setUsuarios,
}) => {
  const form = useRef(null);
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoUsuario = {};
    fd.forEach((value, key) => {
      nuevoUsuario[key] = value;
    });
    const formato = (str) => {
      // funcion para darle formato al nombre (mayusculas)
      return str
        .toLowerCase()
        .split(" ")
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(" ");
    };

    const options = {
      method: "POST",
      url: "http://localhost:27017/usuarios/",
      headers: { "Content-Type": "application/json" },
      data: {
        correo: nuevoUsuario.correo,
        nombre: formato(nuevoUsuario.nombre),
        rol: nuevoUsuario.rol,
        estado: nuevoUsuario.estado,
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Usuario agregado con éxito");
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error creando un Usuario");
      });
    setMostrarTabla(true);
  };

  return (
    <div className="form-usuarios">
      <h2 className="text-2xl font-extrabold text-gray-800">Crear usuario</h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        <div class="mb-3 row">
          <label className="col-sm-2 label-usuarios" htmlFor="nombre">
            Nombre
          </label>
          <div class="col-sm-9">
            <input
              name="nombre"
              className="form-control"
              type="text"
              required
              minlength="3"
              maxlength="30"
              size="8"
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label className="col-sm-2 label-usuarios" htmlFor="correo">
            Correo
          </label>
          <div class="col-sm-9">
            <input
              name="correo"
              className="form-control"
              type="email"
              required
              size="10"
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label className="col-sm-2 label-usuarios" htmlFor="rol">
            Rol
          </label>
          <div class="col-sm-9">
            <select
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
              name="rol"
              required
            >
              <option selected="true" disabled value="">
                Seleccione una opción
              </option>
              <option value="Administrador/a">Administrador/a</option>
              <option value="Vendedor">Vendedor/a</option>
            </select>
          </div>
        </div>

        <div class="mb-3 row">
          <label className="col-sm-2 label-usuarios" htmlFor="estado">
            Estado
          </label>
          <div class="col-sm-9">
            <select
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
              name="estado"
              required
            >
              <option selected="true" disabled value="">
                Seleccione una opción
              </option>
              <option value="Pendiente">Pendiente</option>
              <option value="No autorizado">No autorizado</option>
              <option value="Rechazado">Autorizado</option>
            </select>
          </div>
        </div>
        <div className="buttons">
          <button class="btn btn-secondary" type="reset">
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
          <button className="btn btn-primary" type="submit">
            <i class="fas fa-save space-button-icon"></i>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Usuarios;
