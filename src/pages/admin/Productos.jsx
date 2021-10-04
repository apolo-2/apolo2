=======
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTableProducto from 'components/DataTableProducto';
import 'styles/productos.css';
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a

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
<<<<<<< HEAD
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

=======
  // {
  //   codigo: '0007',
  //   descripcion: 'Monitor Samsung 21"',
  //   valorUnit: 568500,
  //   estado: 'Disponible',
  // },
  // {
  //   codigo: '0008',
  //   descripcion: 'Laptop ASUS X441UV',
  //   valorUnit: 1568500,
  //   estado: 'Disponible',
  // },
];

let dataEjemploEditarProduct = {
  codigo: '0001',
  descripcion: 'Monitor Samsung 27',
  valorUnit: 685000,
  estado: 'Disponible',
}

>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a
const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(1); // 1 listar prod, 2 crear prod, 3 editar prod
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Nuevo Producto");
  const [colorBoton, setColorBoton] = useState("btn-secondary");

  const [textoTituloFormulario, setTextoTituloFormulario] = useState('Formulario nuevo producto');
  const [dataEditarProduct, setDataEditarProduct] = useState({});  

  useEffect(() => {
    //obtener lista  desde el backend
    setProductos(productosBackend);
  }, []);

  useEffect(() => {
<<<<<<< HEAD
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
=======

    // 1 listar prod, 2 crear prod, 3 editar prod
    if (mostrarTabla ===1) {
      setTextoBoton('Nuevo Producto');
      setColorBoton('btn-secondary');
      setDataEditarProduct({});
      
    } else  if(mostrarTabla ===2){
      setTextoBoton('Mostrar Todos los productos');
      setColorBoton('btn-info');
      setTextoTituloFormulario('Formulario nuevo producto');
      setDataEditarProduct({});

    } else  if(mostrarTabla ===3){
      setTextoBoton('Mostrar Todos los productos');
      setColorBoton('btn-info');
      setTextoTituloFormulario('Formulario actualizar producto');
      setDataEditarProduct(dataEjemploEditarProduct);
    }
  }, [mostrarTabla]);
  return (

    <div className='container-productos'>
      <div className=''>       
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a
        <div className="container-title">
          <h3 className="">Administrador de productos</h3>
        </div>
        <br />
        <button
<<<<<<< HEAD
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          // className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
          className={`btn ${colorBoton} btn-rounded`}
        >
          <i class="fas fa-plus-circle fa-lg"></i>
          <span>{textoBoton}</span>
        </button>
=======
            onClick={() => {
              setMostrarTabla(mostrarTabla === 1? 2 : 1);
            }}
            className={`btn ${colorBoton} btn-rounded`}
          >
           <i class="fas fa-plus-circle fa-lg"></i>
            <span>{textoBoton}</span>
          </button>
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a
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
<<<<<<< HEAD
      <ToastContainer position="bottom-right" autoClose={5000} />
=======
      */}
      {/* Rendirizado dinamico, 3 secciones */}
      {(() => {
              switch (mostrarTabla) {
                case 1:   
                  return <DataTableProducto listaProductos={productos} setMostrarTabla={setMostrarTabla}/>;
                case 2: 
                    return <FormularioCreacionProducto
                              setMostrarTabla={setMostrarTabla}
                              listaProductos={productos}
                              setProductos={setProductos}
                              textoTituloFormulario = {textoTituloFormulario}
                              dataEditarProduct = {dataEditarProduct}
                            />;
                case 3: 
                    // temporalmente el mismo form  
                    return <FormularioCreacionProducto
                                setMostrarTabla={setMostrarTabla}
                                listaProductos={productos}
                                setProductos={setProductos}
                                textoTituloFormulario = {textoTituloFormulario}
                                dataEditarProduct = {dataEditarProduct}
                              />;
                default:      
                  return <DataTableProducto listaProductos={productos} setMostrarTabla={setMostrarTabla} />;
              }
            })()}
      <ToastContainer position='bottom-right' autoClose={5000} />
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a
    </div>
  );
};

<<<<<<< HEAD
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
=======
// const TablaProductos = ({ listaProductos }) => {
//   useEffect(() => {
//     console.log('este es el listado  en el componente de tabla', listaProductos);
//   }, [listaProductos]);
//   return (
//     <DataTableProducto  listaProductos={listaProductos}/>
//   );
// };

const FormularioCreacionProducto 
  = ({ setMostrarTabla, listaProductos, setProductos, textoTituloFormulario, dataEditarProduct }) => {
  
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a
  const form = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    setMostrarTabla(1);
    setProductos([...listaProductos, nuevoProducto]);
    console.log("nuevoProducto::", nuevoProducto);
    // identificar el caso de éxito y mostrar un toast de éxito
    toast.success("Producto agregado con éxito");
    // identificar el caso de error y mostrar un toast de error
    // toast.error('Error creando un vehículo');
  };

  return (
<<<<<<< HEAD
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
=======
        // form nuevo prod
        <div className="container">
          <br />
          {/* <h4 className=''>Formulario nuevo producto</h4> */}
          <h4 className=''>{textoTituloFormulario}</h4>
          <br />
          <form ref={form} onSubmit={submitForm} className=''>

            <div class="mb-3 row">
              <label for="descripcion" class="col-sm-2 col-form-label">Descripción: </label>
              <div class="col-sm-9">
                <input type="text"
                  name='descripcion'
                  className='form-control'
                  placeholder='Ingrese descripción del producto'
                  required 
                  defaultValue={dataEditarProduct.descripcion}
                  />
                {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
              </div>
            </div>

            <div class="mb-3 row">
              <label for="valorUnit" class="col-sm-2 col-form-label">Valor unitario: </label>
              <div class="col-sm-9">
                <input type="number"
                  name='valorUnit'
                  className='form-control'
                  min={0}
                  max={9999999999999}
                  placeholder='Ingrese valor por unidad'
                  required
                  defaultValue={dataEditarProduct.valorUnit}
                  />
                {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
              </div>
            </div>

            <div class="mb-3 row">
              <label for="estado" class="col-sm-2 col-form-label">Estado: </label>
              <div class="col-sm-9">
                  <select
                    className='form-select'
                    aria-label="Default select"
                    name='estado'
                    required
                    defaultValue={0}
                  >
                    <option value="Disponible" selected>Disponible</option>
                    <option value="No disponible">No disponible</option>
                  </select>
                {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
              </div>
            </div>

            <div className="col-md-11 d-flex justify-content-end div-btn-actions">
                <button
                  type=''
                  className='btn btn-secondary btn'
                  onClick={()=>{setMostrarTabla(1);}}
                >
                  <i class="far fa-window-close space-button-icon"></i>
                  Cancelar
                </button>
                <button
                  type='submit'
                  className='btn btn-primary btn'
                >
                  <i class="fas fa-save space-button-icon"></i>
                  Guardar
                </button>
            </div>
          </form>   
        </div>
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a
  );
};

export default Productos;
<<<<<<< HEAD

// const Productos = () => {
//   return <div>
//             <span>Administracion de Productos 🥑</span>
//             <DataTableProducto />
//         </div>;
// };
=======
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a
