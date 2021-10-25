import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import React, { useEffect, useState, useRef } from "react";
import DataTableVenta from "components/DataTableVenta";
import RegistrarVentas from "components/CrearVentas";
import { obtenerUsuarios } from "utils/api";
import { obtenerVentas, editarVenta, eliminarVenta } from "utils/api";
import "styles/ventas.css";
import "react-toastify/dist/ReactToastify.css";

const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState("LISTAR"); //LISTAR, CREAR, ACTUALIZAR
  const [ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Nueva venta");
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
          console.log("la respuesta que se recibio fue", response);
          setVentas(response.data);
          setEjecutarConsulta(false);
          setLoading(false);
        },
        (error) => {
          console.error("Salio un error:", error);
          setLoading(false);
        }
      );
    };
    console.log("consulta", ejecutarConsulta);
    if (ejecutarConsulta) {
      fetchVentas();
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    if (mostrarTabla === "LISTAR") {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla === "LISTAR") {
      setTextoBoton("Registrar Venta");
      setColorBoton("btn-secondary");
    } else if (mostrarTabla === "CREAR") {
      setTextoBoton("Mostrar todas las ventas");
      setColorBoton("btn-info");
      setTextoTituloFormulario("Formulario registro de venta");
    } else if (mostrarTabla === "ACTUALIZAR") {
      setTextoBoton("Mostrar todas las ventas");
      setColorBoton("btn-info");
      setTextoTituloFormulario("Formulario actualizar venta");
    }
  }, [mostrarTabla]);

  const deleteVenta = async () => {
    await eliminarVenta(
      idVentaToDelete,
      (response) => {
        console.log(response.data);
        setEjecutarConsulta(true);
        setMostrarTabla("LISTAR");
        setLoading(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando la venta");
      }
    );
  };

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
                setVentaToEdit={setVentaToEdit}
                setMostrarTabla={setMostrarTabla}
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
                listaVentas={ventas}
                setMostrarTabla={setMostrarTabla}
                setEjecutarConsulta={setEjecutarConsulta}
                setProductToEdit={setVentaToEdit}
                textoTituloFormulario={textoTituloFormulario}
                venta={ventaToEdit}
              />
            );
          default:
            return <h2>Error!</h2>;
        }
      })()}
    </div>
  );
};

function FormularioActualizarVenta({
  setMostrarTabla,
  setEjecutarConsulta,
  textoTituloFormulario,
  venta,
}) {
  useEffect(() => {
    const fetchVendores = async () => {
      await obtenerUsuarios(
        (response) => {
          setVendedores(response.data);
          console.error(setVendedores(response.data));
        },
        (error) => {
          console.error(error);
        }
      );
    };

    fetchVendores();
  }, []);
  const [vendedores, setVendedores] = useState([]);

  const form = useRef(null);
  console.log("venta a editar" + venta);
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });
    console.log("nuevaVenta:", nuevaVenta.valorUnit, "venta._id:", venta._id);
    await editarVenta(
      venta._id,
      {
        totalVenta: nuevaVenta.valorUnit,
      },
      (response) => {
        console.log(response.data);
        toast.success("Venta modificada con éxito! ");
        setMostrarTabla("LISTAR");
        setEjecutarConsulta(true);
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
          <label htmlFor="descripcion" className="col-sm-2 col-form-label">
            Vendedor:{" "}
          </label>
          <div className="col-sm-9">
            <select
              disabled
              name="vendedor"
              className="form-select"
              defaultValue={venta.vendedor}
              required
            >
              <option value="" disabled>
                Seleccione una opción{" "}
              </option>
              {vendedores.map((el) => {
                return (
                  <option key={nanoid()} value={el}>{`${el.correo}`}</option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="valorUnit" className="col-sm-2 col-form-label">
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
          <button type="" className="btn btn-secondary btn">
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
}

export default Ventas;
