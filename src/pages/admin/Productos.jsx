import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTableProducto from 'components/DataTableProducto';
import 'styles/productos.css';
import { obtenerProductos} from 'utils/api';
import axios from 'axios';

let dataEjemploEditarProduct = {
  codigo: '0001',
  descripcion: 'Monitor Samsung 27',
  valorUnit: 685000,
  estado: 'Disponible',
}

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(1); // 1 listar prod, 2 crear prod, 3 editar prod
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Nuevo Producto');
  const [colorBoton, setColorBoton] = useState('btn-secondary');
  const [textoTituloFormulario, setTextoTituloFormulario] = useState('Formulario nuevo producto');
  const [dataEditarProduct, setDataEditarProduct] = useState({});  
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    
    if (ejecutarConsulta) {
      obtenerProductos(
        (response) => {
          console.log('la respuesta que se recibio fue', response);
          setProductos(response.data);
        },
        (error) => {
          console.error('Salio un error:', error);
        }
      );
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);


  useEffect(() => {
    // if (mostrarTabla) {
    if (mostrarTabla ===1 ) {

      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  // useEffect(() => {
  //   //obtener lista  desde el backend
  //   setProductos(productosBackend);
  // }, []);

  useEffect(() => {

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
        <div className="container-title">
          <h3 className=''>
            Administrador de productos
          </h3>
        </div>
        <br />
        <button
            onClick={() => {
              setMostrarTabla(mostrarTabla === 1? 2 : 1);
            }}
            className={`btn ${colorBoton} btn-rounded`}
          >
           <i class="fas fa-plus-circle fa-lg"></i>
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
      {/* Rendirizado dinamico, 3 secciones */}
      {(() => {
              switch (mostrarTabla) {
                case 1:   
                  return <DataTableProducto listaProductos={productos} setMostrarTabla={setMostrarTabla} setEjecutarConsulta={setEjecutarConsulta}/>;
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
                  return <DataTableProducto listaProductos={productos} setMostrarTabla={setMostrarTabla} setEjecutarConsulta={setEjecutarConsulta}/>;
              }
            })()}
      <ToastContainer position='bottom-right' autoClose={5000} />
    </div>
  );
};

// Esto no es necesario, este ya quedó como un componente
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
  
  const form = useRef(null);
  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    
    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    //nuevo llamad a el post en la api
    // await crearProducto(
    // {
    //   descripcion: nuevoProducto.descripcion,
    //   valorUnit: nuevoProducto.valorUnit,
    //   estado: nuevoProducto.estado
    // },
    // ()=>
    // )

    // API POST
    const options = {
      method: 'POST',
      url: 'http://localhost:5000/producto',
      headers: { 'Content-Type': 'application/json' },
      data: { descripcion: nuevoProducto.descripcion, valorUnit: nuevoProducto.valorUnit, estado: nuevoProducto.estado },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un producto');
      });


    setMostrarTabla(1);
    // setProductos([...listaProductos, nuevoProducto]);
    // console.log('nuevoProducto::',nuevoProducto);
    // identificar el caso de éxito y mostrar un toast de éxito
    // toast.success('Producto agregado con éxito');
    // identificar el caso de error y mostrar un toast de error
    // toast.error('Error creando un vehículo');
  };

  return (
        // form nuevo producto
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
  );
};

// const FormularioEditProducto 
//   = ({ setMostrarTabla, listaProductos, setProductos, textoTituloFormulario, dataEditarProduct, producto }) => {
  
//   const form = useRef(null);
//   const submitForm = async (e) => {
//     e.preventDefault();
//     const fd = new FormData(form.current);
    
//     const nuevoProducto = {};
//     fd.forEach((value, key) => {
//       nuevoProducto[key] = value;
//     });


//     // const [edit, setEdit] = useState(false);
//     // const [openDialog, setOpenDialog] = useState(false);
//     const [infoNuevoProducto, setInfoNuevoProducto] = useState({
//       _id:          producto._id,
//       descripcion:  producto.descripcion,
//       valorUnit:    producto.valorUnit,
//       estado:       producto.estado,
//     });
  
//     const actualizarProducto = async () => {
//       //enviar la info al backend
//       const options = {
//         method: 'PATCH',
//         url: `http://localhost:5000/producto/${producto._id}/`,
//         headers: { 'Content-Type': 'application/json' },
//         data: { ...infoNuevoProducto },
//       };
  
//       await axios
//         .request(options)
//         .then(function (response) {
//           console.log(response.data);
//           toast.success('Vehículo modificado con éxito');
//           setEdit(false);
//           setEjecutarConsulta(true);
//         })
//         .catch(function (error) {
//           toast.error('Error modificando el vehículo');
//           console.error(error);
//         });
//     };
  

   

//     setMostrarTabla(1);

//   };

//   return (
//         // form nuevo producto
//         <div className="container">
//           <br />
//           {/* <h4 className=''>Formulario nuevo producto</h4> */}
//           <h4 className=''>{textoTituloFormulario}</h4>
//           <br />
//           <form ref={form} onSubmit={submitForm} className=''>

//             <div class="mb-3 row">
//               <label for="descripcion" class="col-sm-2 col-form-label">Descripción: </label>
//               <div class="col-sm-9">
//                 <input type="text"
//                   name='descripcion'
//                   className='form-control'
//                   placeholder='Ingrese descripción del producto'
//                   required 
//                   defaultValue={dataEditarProduct.descripcion}
//                   />
//                 {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
//               </div>
//             </div>

//             <div class="mb-3 row">
//               <label for="valorUnit" class="col-sm-2 col-form-label">Valor unitario: </label>
//               <div class="col-sm-9">
//                 <input type="number"
//                   name='valorUnit'
//                   className='form-control'
//                   min={0}
//                   max={9999999999999}
//                   placeholder='Ingrese valor por unidad'
//                   required
//                   defaultValue={dataEditarProduct.valorUnit}
//                   />
//                 {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
//               </div>
//             </div>

//             <div class="mb-3 row">
//               <label for="estado" class="col-sm-2 col-form-label">Estado: </label>
//               <div class="col-sm-9">
//                   <select
//                     className='form-select'
//                     aria-label="Default select"
//                     name='estado'
//                     required
//                     defaultValue={0}
//                   >
//                     <option value="Disponible" selected>Disponible</option>
//                     <option value="No disponible">No disponible</option>
//                   </select>
//                 {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
//               </div>
//             </div>

//             <div className="col-md-11 d-flex justify-content-end div-btn-actions">
//                 <button
//                   type=''
//                   className='btn btn-secondary btn'
//                   onClick={()=>{setMostrarTabla(1);}}
//                 >
//                   <i class="far fa-window-close space-button-icon"></i>
//                   Cancelar
//                 </button>
//                 <button
//                   type='submit'
//                   className='btn btn-primary btn'
//                 >
//                   <i class="fas fa-save space-button-icon"></i>
//                   Guardar
//                 </button>
//             </div>
//           </form>   
//         </div>
//   );
// };


export default Productos;