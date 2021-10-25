import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTableProducto from "components/DataTableProducto";
import "styles/productos.css";

import {
  obtenerProductos,
  crearProducto,
  editarProducto,
  eliminarProducto,
} from "utils/api";

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState("LISTAR"); //LISTAR, CREAR, ACTUALIZAR
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Nuevo Producto");
  const [colorBoton, setColorBoton] = useState("btn-secondary");
  const [textoTituloFormulario, setTextoTituloFormulario] = useState(
    "Formulario nuevo producto"
  );
  const [productToEdit, setProductToEdit] = useState({});
  const [idProductToDelete, setIdProductToDelete] = useState();
  const [ejecutarConsulta, setEjecutarConsulta] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      await obtenerProductos(
        (response) => {
          setProductos(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error("Salio un error:", error);
          setLoading(false);
        }
      );
    };

    if (ejecutarConsulta) {
      fetchProductos();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    // if (mostrarTabla) {
    if (mostrarTabla === "LISTAR") {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla === "LISTAR") {
      setTextoBoton("Nuevo Producto");
      setColorBoton("btn-secondary");
    } else if (mostrarTabla === "CREAR") {
      setTextoBoton("Mostrar Todos los productos");
      setColorBoton("btn-info");
      setTextoTituloFormulario("Formulario nuevo producto");
    } else if (mostrarTabla === "ACTUALIZAR") {
      setTextoBoton("Mostrar Todos los productos");
      setColorBoton("btn-info");
      setTextoTituloFormulario("Formulario actualizar producto");
    }
  }, [mostrarTabla]);

  // function Maye - eliminar prod, accionado desde DataTableProducto.jsx
  const deleteProducto = async () => {
    await eliminarProducto(
      idProductToDelete,
      (response) => {
        console.log(response.data);
        toast.success("Producto eliminado con éxito! ");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando el producto");
      }
    );
  };
  //./

  return (
    <div className="container-productos">
      <div className="">
        <div className="container-title">
          <h3 className="">Administrador de productos</h3>
        </div>
        <br />
        <button
          onClick={() => {
            setMostrarTabla(mostrarTabla === "LISTAR" ? "CREAR" : "LISTAR");
          }}
          className={`btn ${colorBoton} btn-rounded`}
        >
          <i className="fas fa-plus-circle fa-lg"></i>
          <span>{textoBoton}</span>
        </button>
      </div>

      {/* {mostrarTabla ? (
        <TablaProductos listaProductos={productos} />
      ) : (
        <FormularioCreacionProducto
          setMostrarTabla={setMostrarTabla}
          listaProductos={productos}
          setProductos={setProductos}
        />
      )}
      */}
      {/* Renderizado dinamico con 3 secciones */}
      {(() => {
        switch (mostrarTabla) {
          case "LISTAR":
            return (
              <DataTableProducto
                listaProductos={productos}
                setMostrarTabla={setMostrarTabla}
                setProductToEdit={setProductToEdit}
                deleteProducto={deleteProducto}
                setIdProductToDelete={setIdProductToDelete}
                loading={loading}
              />
            );
          case "CREAR":
            return (
              <FormularioCreacionProducto
                setMostrarTabla={setMostrarTabla}
                listaProductos={productos}
                setProductos={setProductos}
                textoTituloFormulario={textoTituloFormulario}
                setProductToEdit={setProductToEdit}
              />
            );
          case "ACTUALIZAR":
            return (
              <FormularioActualizarProducto
                setMostrarTabla={setMostrarTabla}
                setEjecutarConsulta={setEjecutarConsulta}
                setProductToEdit={setProductToEdit}
                textoTituloFormulario={textoTituloFormulario}
                producto={productToEdit}
              />
            );
          default:
            return <h2>Error!</h2>;
        }
      })()}

      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

const FormularioCreacionProducto = ({
  setMostrarTabla,
  textoTituloFormulario,
}) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    await crearProducto(
      {
        descripcion: nuevoProducto.descripcion,
        valorUnit: nuevoProducto.valorUnit,
        estado: nuevoProducto.estado,
      },
      (response) => {
        console.log(response.data);
        toast.success("Producto agregado con éxito");
        setMostrarTabla("LISTAR");
      },
      (error) => {
        console.error(error);
        toast.error("Error creando proyecto");
      }
    );
  };

  return (
    // form nuevo producto
    <div className="container">
      <br />
      <h4 className="">{textoTituloFormulario}</h4>
      <br />
      <form ref={form} onSubmit={submitForm} className="">
        <div className="mb-3 row">
          <label htmlFor="descripcion" className="col-sm-2 col-form-label">
            Descripción:{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              placeholder="Ingrese descripción del producto"
              required
              defaultValue=""
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="valorUnit" className="col-sm-2 col-form-label">
            Valor unitario:{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              name="valorUnit"
              className="form-control"
              min={0}
              max={9999999999999}
              placeholder="Ingrese valor por unidad"
              required
              defaultValue=""
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="estado" className="col-sm-2 col-form-label">
            Estado:{" "}
          </label>
          <div className="col-sm-9">
            <select
              className="form-select"
              aria-label="Default select"
              name="estado"
              required
              defaultValue="Disponible"
            >
              <option value="Disponible">Disponible</option>
              <option value="No disponible">No disponible</option>
            </select>
          </div>
        </div>

        <div className="col-md-11 d-flex justify-content-end div-btn-actions">
          <button
            type=""
            className="btn btn-secondary btn"
            onClick={() => {
              setMostrarTabla("LISTAR");
            }}
          >
            <i className="far fa-window-close space-button-icon"></i>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary btn">
            <i className="fas fa-save space-button-icon"></i>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

const FormularioActualizarProducto = ({
  setMostrarTabla,
  textoTituloFormulario,
  producto,
}) => {
  const form = useRef(null);
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    console.log("nuevoProducto:", nuevoProducto, "producto._id:", producto._id);

    // Actualizar producto
    await editarProducto(
      producto._id,
      {
        descripcion: nuevoProducto.descripcion,
        valorUnit: nuevoProducto.valorUnit,
        estado: nuevoProducto.estado,
      },
      (response) => {
        console.log(response.data);
        toast.success("Producto modificado con éxito! ");
        setMostrarTabla("LISTAR");
      },
      (error) => {
        toast.error("Error modificando el producto");
        console.error(error);
      }
    );
  };

  return (
    <div className="container">
      <br />
      <h4 className="">{textoTituloFormulario}</h4>
      <br />
      <form ref={form} onSubmit={submitForm} className="">
        <div className="mb-3 row">
          <label htmlFor="descripcion" className="col-sm-2 col-form-label">
            Descripción:{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              placeholder="Ingrese descripción del producto"
              required
              defaultValue={producto.descripcion}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="valorUnit" className="col-sm-2 col-form-label">
            Valor unitario:{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              name="valorUnit"
              className="form-control"
              min={0}
              max={9999999999999}
              placeholder="Ingrese valor por unidad"
              required
              defaultValue={producto.valorUnit}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="estado" className="col-sm-2 col-form-label">
            Estado:{" "}
          </label>
          <div className="col-sm-9">
            <select
              className="form-select"
              aria-label="Default select"
              name="estado"
              required
              defaultValue={producto.estado}
            >
              <option value="Disponible">Disponible</option>
              <option value="No disponible">No disponible</option>
            </select>
          </div>
        </div>

        <div className="col-md-11 d-flex justify-content-end div-btn-actions">
          <button
            type=""
            className="btn btn-secondary btn"
            onClick={() => {
              setMostrarTabla("LISTAR");
            }}
          >
            <i className="far fa-window-close space-button-icon"></i>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary btn">
            <i className="fas fa-save space-button-icon"></i>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Productos;
