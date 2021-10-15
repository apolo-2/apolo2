import React, { useEffect, useState, useRef } from "react";
import "styles/styles.css";
import "styles/usuarios.css";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import {
  obtenerUsuarios,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
} from "utils/api";

const Usuarios = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear Nuevo Usuario");
  const [colorBoton, setColorBoton] = useState("btn-secondary");
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  //hooks
  useEffect(() => {
    const fetchUsuarios = async () => {
      await obtenerUsuarios(
        (response) => {
          console.log("la respuesta que se recibio fue", response);
          setUsuarios(response.data);
          setEjecutarConsulta(false);
        },
        (error) => {
          console.error("Salio un error:", error);
        }
      );
    };
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchUsuarios();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de vehículos desde el backend
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
          <i className="fas fa-plus-circle fa-lg"></i>
          <span>{textoBoton}</span>
        </button>
      </div>
      {mostrarTabla ? (
        <TablaUsuarios
          listaUsuarios={usuarios}
          //setMostrarTabla={setMostrarTabla}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      ) : (
        <FormularioCreacionUsuario
          //setMostrarTabla={setMostrarTabla}
          listaUsuarios={usuarios}
          setUsuarios={setUsuarios}
        />
      )}
      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

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
    <div className="table-responsive">
      <section className="table-search-fields">
        <div className="input-group mb-3 ">
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-search"></i>
          </span>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Buscar..."
            aria-label="search"
            aria-describedby="search"
          />
        </div>
      </section>
      <table className="table  table-sm table-hover  table-bordered caption-top table-listado">
        <thead className="table-light text-center">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Rol</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
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
  );
};

const FilaUsuario = ({ usuario, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    _id: usuario._id,
    nombre: usuario.nombre,
    correo: usuario.correo,
    rol: usuario.rol,
    estado: usuario.estado,
  });

  const actualizarUsuario = async () => {
    await editarUsuario(
      usuario._id,
      {
        nombre: infoNuevoUsuario.nombre,
        correo: infoNuevoUsuario.correo,
        rol: infoNuevoUsuario.rol,
        estado: infoNuevoUsuario.estado,
      },
      (response) => {
        setEdit(false);
        console.log(response.data);
        toast.success("Usuario modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      },
      (error) => {
        toast.error("Error modificando el usuario");
        console.error(error);
      }
    );
  };
  const deleteUsuario = async () => {
    await eliminarUsuario(
      usuario._id,
      (response) => {
        console.log(response.data);
        toast.success("usuario eliminado con éxito");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando el usuario");
      }
    );
    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
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
            <select
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
              name="rol"
              required
              defaultValue={infoNuevoUsuario.rol}
              onChange={(e) =>
                setInfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  rol: e.target.value,
                })
              }
            >
              <option value="Administrador/a">Administrador/a</option>
              <option value="Vendedor">Vendedor/a</option>
            </select>
          </td>
          <td>
            <select
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
              name="estado"
              required
              value={infoNuevoUsuario.estado}
              onChange={(e) =>
                setInfoNuevoUsuario({
                  ...infoNuevoUsuario,
                  estado: e.target.value,
                })
              }
            >
              <option value="Pendiente">Pendiente</option>
              <option value="No autorizado">No autorizado</option>
              <option value="Autorizado">Autorizado</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td>{usuario.nombre}</td>
          <td>{usuario.correo}</td>
          <td>{usuario.rol}</td>
          <td>{usuario.estado}</td>
        </>
      )}
      <td>
        <div className="flex w-full td_acciones">
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
              <Tooltip title="Eliminar Vehículo" arrow>
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
                onClick={() => deleteUsuario()}
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
};

const FormularioCreacionUsuario = ({ setMostrarTabla }) => {
  const form = useRef(null);

  async function submitForm(e) {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoUsuario = {};
    fd.forEach((value, key) => {
      nuevoUsuario[key] = value;
    });

    const formatoMayusculas = (str) => {
      return str
        .toLowerCase()
        .split(" ")
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join(" ");
    };

    await crearUsuario(
      {
        correo: nuevoUsuario.correo,
        nombre: formatoMayusculas(nuevoUsuario.nombre),
        rol: nuevoUsuario.rol,
        estado: nuevoUsuario.estado,
      },
      (response) => {
        console.log(response.data);
        toast.success("Usuario agregado con éxito");
      },
      (error) => {
        console.error(error);
        toast.error("Error creando un usuario");
      }
    );
    setMostrarTabla(true);
  }

  return (
    <div className="form-usuarios">
      <h2 className="text-2xl font-extrabold text-gray-800">Crear usuario</h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        <div className="mb-3 row">
          <label className="col-sm-2 label-usuarios" htmlFor="nombre">
            Nombre
          </label>
          <div className="col-sm-9">
            <input
              name="nombre"
              className="form-control"
              type="text"
              required
              minLength="3"
              maxLength="30"
              size="8"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 label-usuarios" htmlFor="correo">
            Correo
          </label>
          <div className="col-sm-9">
            <input
              name="correo"
              className="form-control"
              type="email"
              required
              size="10"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 label-usuarios" htmlFor="rol">
            Rol
          </label>
          <div className="col-sm-9">
            <select
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
              name="rol"
              required
              defaultValue=""
            >
              <option disabled value="">
                Seleccione una opción
              </option>
              <option value="Administrador/a">Administrador/a</option>
              <option value="Vendedor">Vendedor/a</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 label-usuarios" htmlFor="estado">
            Estado
          </label>
          <div className="col-sm-9">
            <select
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg"
              name="estado"
              required
              defaultValue=""
            >
              <option disabled value="">
                Seleccione una opción
              </option>
              <option value="Pendiente">Pendiente</option>
              <option value="No autorizado">No autorizado</option>
              <option value="Rechazado">Autorizado</option>
            </select>
          </div>
        </div>
        <div className="buttons">
          <button className="btn btn-secondary" type="reset">
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
          <button className="btn btn-primary" type="submit">
            <i className="fas fa-save space-button-icon"></i>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Usuarios;
