import React, { useEffect, useState, useRef } from "react";

import "styles/usuarios.css";
import Swal from "sweetalert2";
import axios from "axios";
import { Dialog, Tooltip } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import DataTableUsuario from "components/DataTableUsuario";
import { obtenerUsuarios } from "utils/api";
import { nanoid } from "nanoid";

const Usuarios = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear Nuevo Usuario");
  const [colorBoton, setColorBoton] = useState("indigo");
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
      setTextoBoton("Mostrar Todos los usuarios");
      setColorBoton("green");
    }
  }, [mostrarTabla]);

  return (
    <div className="container-productos">
      <div className="flex flex-col w-full">
        <div className="container-title">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Página de administración de usuarios
          </h2>
        </div>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
        >
          {textoBoton}
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

/*
const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);
  useEffect(() => {
    setUsuariosFiltrados(
      listaUsuarios.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaUsuarios]);
  return (
    <div>
      <div class="table-responsive">
        <section className="table-search-fields">
          <div class="input-group mb-3 ">
            <span class="input-group-text" id="basic-addon1">
              <i class="fas fa-search"></i>
            </span>
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar"
              className="form-control border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
        </section>
        <table class="table  table-sm table-hover  table-bordered caption-top table-listado">
          <thead className="table-light text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Correo</th>
              <th scope="col">Nombre y Apellido</th>
              <th scope="col">Rol</th>
              <th scope="col">Estado</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map((usuario) => {
              return (
                <FilaUsuario
                  key={nanoid()}
                  usuario={usuario}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col w-full m-2 md:hidden">
        {usuariosFiltrados.map((el) => {
          return (
            <div className="bg-gray-400 m-2 shadow-xl flex flex-col p-2 rounded-xl">
              <span>{el.correo}</span>
              <span>{el.nombre}</span>
              <span>{el.rol}</span>
              <span>{el.estado}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}; */
/*
const FilaUsuario = ({ usuario, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    _id: usuario._id,
    correo: usuario.correo,
    nombre: usuario.nombre,
    rol: usuario.rol,
    estado: usuario.estado,
  });

  const actualizarUsuario = async () => {
    //enviar la info al backend
    const options = {
      method: "PATCH",
      url: `http://localhost:27017/usuarios/${usuario._id}/`,
      headers: { "Content-Type": "application/json" },
      data: { ...infoNuevoUsuario },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Usuario modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error("Error modificando el usuario");
        console.error(error);
      });
  };

  const eliminarUsuario = async () => {
    const options = {
      method: "DELETE",
      url: "http://localhost:27017/usuarios/eliminar/",
      headers: { "Content-Type": "application/json" },
      data: { id: usuario._id },
    };
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("usuario eliminado con éxito");
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error eliminando el usuario");
      });
    setOpenDialog(false);
  };
  return (
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoUsuario._id}</td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoUsuario.correo}
              onChange={(e) =>
                setInfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  correo: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoUsuario.nombre}
              onChange={(e) =>
                setInfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  nombre: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoUsuario.rol}
              onChange={(e) =>
                setInfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  rol: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevoUsuario.estado}
              onChange={(e) =>
                setInfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  estado: e.target.value,
                })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{usuario._id.slice(20)}</td>
          <td>{usuario.correo}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.rol}</td>
          <td>{usuario.estado}</td>
        </>
      )}
      <td>
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <Tooltip title="Confirmar Edición" arrow>
                <i
                  onClick={() => actualizarUsuario()}
                  className="fas fa-check text-green-700 hover:text-green-500"
                />
              </Tooltip>
              <Tooltip title="Cancelar edición" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-ban text-yellow-700 hover:text-yellow-500"
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar Usuario" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
                />
              </Tooltip>
              <Tooltip title="Eliminar Usuario" arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className="fas fa-trash text-red-700 hover:text-red-500"
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-900 text-2xl font-bold">
              ¿Está seguro de querer eliminar el usuario?
            </h1>
            <div className="flex w-full items-center justify-center my-4">
              <button
                onClick={() => eliminarUsuario()}
                className="mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md"
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className="mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md"
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
}; */

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
    const options = {
      method: "POST",
      url: "http://localhost:27017/usuarios/",
      headers: { "Content-Type": "application/json" },
      data: {
        correo: nuevoUsuario.correo,
        nombre: nuevoUsuario.nombre,
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
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear un nuevo usuario
      </h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        <label className="flex flex-col" htmlFor="nombre">
          Nombre
          <input
            name="nombre"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"
            required
          />
        </label>
        <label className="flex flex-col" htmlFor="correo">
          Correo
          <input
            name="correo"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="correo"
            placeholder="Ingrese aquí el nombre del usuario"
            required
          />
        </label>
        <label className="flex flex-col" htmlFor="rol">
          Rol
          <select
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            name="rol"
            required
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Administrador/a</option>
            <option>Vendedor/a</option>
          </select>
        </label>
        <label className="flex flex-col" htmlFor="estado">
          Estado
          <select
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            name="estado"
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Autorizado</option>
            <option>Pendiente</option>
            <option>No autorizado</option>
          </select>
        </label>
        <button
          type="submit"
          className="col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white"
        >
          Guardar Usuario
        </button>
      </form>
    </div>
  );
};

export default Usuarios;
