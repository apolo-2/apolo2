import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTableVenta from "components/DataTableVenta";
import RegistrarVentas from "components/CrearVentas";
import "styles/ventas.css";

import { obtenerVentas, editarVenta, eliminarVenta } from "utils/api";

const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState("LISTAR"); //LISTAR, CREAR, ACTUALIZAR
  const [ventas, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Nuevo Venta");
  const [colorBoton, setColorBoton] = useState("btn-secondary");
  const [textoTituloFormulario, setTextoTituloFormulario] = useState(
    "Formulario nueva venta"
  );
  const [ventaToEdit, setVentaToEdit] = useState({});
  const [idVentaToDelete, setIdVentaToDelete] = useState();
  const [ejecutarConsulta, setEjecutarConsulta] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVentas = async () => {
      setLoading(true);
      await obtenerVentas(
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
      fetchVentas();
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
      setTextoBoton("Registrar Venta");
      setColorBoton("btn-secondary");
    } else if (mostrarTabla === "CREAR") {
      setTextoBoton("Mostrar Todas las ventas");
      setColorBoton("btn-info");
      setTextoTituloFormulario("Formulario registro de venta");
    } else if (mostrarTabla === "ACTUALIZAR") {
      setTextoBoton("Mostrar Todas las ventas");
      setColorBoton("btn-info");
      setTextoTituloFormulario("Formulario actualizar venta");
    }
  }, [mostrarTabla]);

  // function Maye - eliminar prod, accionado desde DataTableVenta.jsx
  const deleteVenta = async () => {
    await eliminarVenta(
      idVentaToDelete,
      (response) => {
        console.log(response.data);
        toast.success("Venta eliminada con éxito! ");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando el venta");
      }
    );
  };
  //./

  return (
    <div className="container-ventas">
      <div className="">
        <div className="container-title">
          <h3 className="">Administrador de ventas</h3>
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
      {(() => {
        switch (mostrarTabla) {
          case "LISTAR":
            return (
              <DataTableVenta
                listaVentas={ventas}
                setMostrarTabla={setMostrarTabla}
                setVentaToEdit={setVentaToEdit}
                deleteVenta={deleteVenta}
                setIdVentaToDelete={setIdVentaToDelete}
                loading={loading}
              />
            );
          case "CREAR":
            return <RegistrarVentas />;
          case "ACTUALIZAR":
            return (
              <FormularioActualizarVenta
                setMostrarTabla={setMostrarTabla}
                setEjecutarConsulta={setEjecutarConsulta}
                setVentaToEdit={setVentaToEdit}
                textoTituloFormulario={textoTituloFormulario}
                venta={ventaToEdit}
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

const FormularioActualizarVenta = ({
  setMostrarTabla,
  textoTituloFormulario,
  venta,
}) => {
  const form = useRef(null);
  console.log(venta);
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    // Actualizar venta
    await editarVenta(
      venta._id,
      {
        descripcion: nuevaVenta.descripcion,
      },
      (response) => {
        console.log(response.data);
        toast.success("Venta modificado con éxito! ");
        setMostrarTabla("LISTAR");
      },
      (error) => {
        toast.error("Error modificando el venta");
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
          <label for="descripcion" className="col-sm-2 col-form-label">
            Vendedor:{" "}
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              placeholder="Ingrese descripción del venta"
              required
              defaultValue={venta.vendedor.nombre}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label for="valorUnit" className="col-sm-2 col-form-label">
            Total Venta:{" "}
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
              defaultValue={venta.totalVenta}
            />
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

export default Ventas;
