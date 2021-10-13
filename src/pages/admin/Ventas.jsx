import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTableVentas from "components/DataTableVentas";
import "styles/ventas.css";

const VentasBackend = [
  {
    numVenta: "0001",
    cliente: "Pablo Perez",
    vendedor: "Lucia",
    total: 150000,
  },
  {
    numVenta: "0002",
    cliente: "Diana Duran",
    vendedor: "Leidy",
    total: 180000,
  },
  {
    numVenta: "0003",
    cliente: "Diana Duran",
    vendedor: "Laura",
    total: 250000,
  },
  {
    numVenta: "0004",
    cliente: 'Mouse Gamer Genious"',
    vendedor: "Leidy",
    total: 12500,
  },
];

const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [Ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Nuevo Ventas");
  const [colorBoton, setColorBoton] = useState("btn-secondary");

  useEffect(() => {
    //obtener lista  desde el backend
    setVentas(VentasBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Registrar venta");
      setColorBoton("btn-secondary");
    } else {
      setTextoBoton("Mostrar listado de ventas");
      setColorBoton("btn-info");
    }
  }, [mostrarTabla]);
  return (
    <div className="container-ventas">
      <div className="">
        <div className="container-title">
          <h3 className="">Gestión de Ventas</h3>
        </div>
        <br />
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`btn ${colorBoton} btn-rounded`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
          <span>{textoBoton}</span>
        </button>
      </div>

      {mostrarTabla ? (
        <TablaVentas listaVentas={Ventas} />
      ) : (
        <FormularioCreacionVentas
          setMostrarTabla={setMostrarTabla}
          listaVentas={Ventas}
          setVentas={setVentas}
        />
      )}

      <ToastContainer position="bottom-right" autoClose={27017} />
    </div>
  );
};

const TablaVentas = ({ listaVentas }) => {
  useEffect(() => {
    console.log("este es el listado  en el componente de tabla", listaVentas);
  }, [listaVentas]);
  return <DataTableVentas listaVentas={listaVentas} />;
};

const FormularioCreacionVentas = ({
  setMostrarTabla,
  listaVentas,
  setVentas,
}) => {
  const form = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoVentas = {};
    fd.forEach((value, key) => {
      nuevoVentas[key] = value;
    });
    setMostrarTabla(true);
    setVentas([...listaVentas, nuevoVentas]);
    console.log("nuevoVentas::", nuevoVentas);
    toast.success("Genial!, se registró la venta", {});
  };

  return (
    // form nuevo prod
    <div className="container">
      <br />
      <h5 className="">Formulario nuevo Ventas</h5>

      <form ref={form} onSubmit={submitForm} className="">
        <div class="mb-3 row">
          <label for="cliente" class="col-sm-2 col-form-label">
            Cliente:{" "}
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              name="cliente"
              className="form-control"
              placeholder="Ingrese cliente"
              required
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="vendedor" class="col-sm-2 col-form-label">
            Vendedor:{" "}
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              name="vendedor"
              className="form-control"
              placeholder="Ingrese el nombre del vendedor"
              required
            />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="total" class="col-sm-2 col-form-label">
            total:{" "}
          </label>
          <div class="col-sm-9">
            <input
              className="form-select"
              aria-label="Default select"
              name="total"
              required
              defaultValue={0}
            ></input>
          </div>
        </div>

        <div className="col-md-11 d-flex justify-content-end ">
          <button type="submit" className="btn btn-primary btn-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-sd-card"
              viewBox="0 0 16 16"
            >
              <path d="M6.25 3.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2z" />
              <path
                fill-rule="evenodd"
                d="M5.914 0H12.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5V3.914c0-.398.158-.78.44-1.06L4.853.439A1.5 1.5 0 0 1 5.914 0zM13 1.5a.5.5 0 0 0-.5-.5H5.914a.5.5 0 0 0-.353.146L3.146 3.561A.5.5 0 0 0 3 3.914V14.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13z"
              />
            </svg>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ventas;
