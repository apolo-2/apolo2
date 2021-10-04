import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataTableProducto from "components/DataTableProducto";
import "styles/productos.css";

const productosBackend = [
  {
    codigo: "0001",
    descripcion: 'Monitor Samsung 27"',
    valorUnit: 685000,
    estado: "Disponible",
  },
  {
    codigo: "0002",
    descripcion: "Disco SSD Kingston 256GB",
    valorUnit: 168500,
    estado: "No Disponible",
  },
  {
    codigo: "0003",
    descripcion: 'Monitor LG 27"',
    valorUnit: 568500,
    estado: "Disponible",
  },
  {
    codigo: "0004",
    descripcion: 'Mouse Gamer Genious"',
    valorUnit: 212500,
    estado: "No Disponible",
  },
  {
    codigo: "0005",
    descripcion: 'Monitor Samsung 21"',
    valorUnit: 568500,
    estado: "Disponible",
  },
  {
    codigo: "0006",
    descripcion: 'Monitor Samsung 29"',
    valorUnit: 868500,
    estado: "Disponible",
  },
  {
    codigo: "0007",
    descripcion: 'Monitor Samsung 21"',
    valorUnit: 568500,
    estado: "Disponible",
  },
  {
    codigo: "0008",
    descripcion: "Laptop ASUS X441UV",
    valorUnit: 1568500,
    estado: "Disponible",
  },
  {
    codigo: "0009",
    descripcion: 'Monitor Samsung 19"',
    valorUnit: 368600,
    estado: "No Disponible",
  },
  {
    codigo: "0010",
    descripcion: 'Impresora Canon LX400"',
    valorUnit: 968500,
    estado: "Disponible",
  },
];

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Nuevo Producto");
  const [colorBoton, setColorBoton] = useState("btn-secondary");

  useEffect(() => {
    //obtener lista  desde el backend
    setProductos(productosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Nuevo Producto");
      setColorBoton("btn-secondary");
    } else {
      setTextoBoton("Mostrar Todos los productos");
      setColorBoton("btn-info");
    }
  }, [mostrarTabla]);
  return (
    // <div className='flex h-full w-full flex-col items-center justify-start p-8 container-productos'>
    <div className="container-productos">
      <div className="">
        <div className="container-title">
          <h3 className="">Administrador de productos</h3>
        </div>
        <br />
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          // className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
          className={`btn ${colorBoton} btn-rounded`}
        >
          <i class="fas fa-plus-circle fa-lg"></i>
          <span>{textoBoton}</span>
        </button>
      </div>

      {mostrarTabla ? (
        <TablaProductos listaProductos={productos} />
      ) : (
        <FormularioCreacionProducto
          setMostrarTabla={setMostrarTabla}
          listaProductos={productos}
          setProductos={setProductos}
        />
      )}
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

const TablaProductos = ({ listaProductos }) => {
  useEffect(() => {
    console.log(
      "este es el listado  en el componente de tabla",
      listaProductos
    );
  }, [listaProductos]);
  return <DataTableProducto listaProductos={listaProductos} />;
};

const FormularioCreacionProducto = ({
  setMostrarTabla,
  listaProductos,
  setProductos,
}) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    setMostrarTabla(true);
    setProductos([...listaProductos, nuevoProducto]);
    console.log("nuevoProducto::", nuevoProducto);
    // identificar el caso de éxito y mostrar un toast de éxito
    toast.success("Producto agregado con éxito");
    // identificar el caso de error y mostrar un toast de error
    // toast.error('Error creando un vehículo');
  };

  return (
    // form nuevo prod
    <div className="container">
      <br />
      <h5 className="">Formulario nuevo producto</h5>
      <br />
      <form ref={form} onSubmit={submitForm} className="">
        <div class="mb-3 row">
          <label for="descripcion" class="col-sm-2 col-form-label">
            Descripción:{" "}
          </label>
          <div class="col-sm-9">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              placeholder="Ingrese descripción del producto"
              required
            />
            {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
          </div>
        </div>

        <div class="mb-3 row">
          <label for="valorUnit" class="col-sm-2 col-form-label">
            Valor unitario:{" "}
          </label>
          <div class="col-sm-9">
            <input
              type="number"
              name="valorUnit"
              className="form-control"
              min={0}
              max={9999999999999}
              placeholder="Ingrese valor por unidad"
              required
            />
            {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
          </div>
        </div>

        <div class="mb-3 row">
          <label for="estado" class="col-sm-2 col-form-label">
            Estado:{" "}
          </label>
          <div class="col-sm-9">
            <select
              className="form-select"
              aria-label="Default select"
              name="estado"
              required
              defaultValue={0}
            >
              <option value="Disponible" selected>
                Disponible
              </option>
              <option value="No disponible">No disponible</option>
            </select>
            {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
          </div>
        </div>

        <div className="col-md-11 d-flex justify-content-end div-btn-actions">
          <button
            type=""
            className="btn btn-secondary btn"
            onClick={() => {
              setMostrarTabla(true);
            }}
          >
            <i class="far fa-window-close space-button-icon"></i>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary btn">
            <i class="fas fa-save space-button-icon"></i>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Productos;

// const Productos = () => {
//   return <div>
//             <span>Administracion de Productos 🥑</span>
//             <DataTableProducto />
//         </div>;
// };
