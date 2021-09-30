import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTableProducto from 'components/DataTableProducto';
import 'styles/productos.css';

const productosBackend = [
  {
    codigo: '0001',
    descripcion: 'Monitor Samsun 27"',
    valorUnit: 768500,
    estado: 'Disponible',
  },
  {
    codigo: '0002',
    descripcion: 'Monitor Samsun 27"',
    valorUnit: 768500,
    estado: 'Disponible',
  },
  {
    codigo: '0002',
    descripcion: 'Monitor Samsun 27"',
    valorUnit: 768500,
    estado: 'Disponible',
  },
  {
    codigo: '0002',
    descripcion: 'Monitor Samsun 27"',
    valorUnit: 768500,
    estado: 'Disponible',
  },
  {
    codigo: '0002',
    descripcion: 'Monitor Samsun 27"',
    valorUnit: 768500,
    estado: 'Disponible',
  },
  {
    codigo: '0002',
    descripcion: 'Monitor Samsun 27"',
    valorUnit: 768500,
    estado: 'Disponible',
  },
  
];


const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Nuevo Producto');
  const [colorBoton, setColorBoton] = useState('indigo');

  useEffect(() => {
    //obtener lista  desde el backend
    setProductos(productosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Nuevo Producto');
      setColorBoton('indigo');
    } else {
      setTextoBoton('Mostrar Todos los productos');
      setColorBoton('green');
    }
  }, [mostrarTabla]);
  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8 container container-productos'>
      
      <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Administrador de productos
        </h2>
        <br />
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          // className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
          className="btn btn-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          {textoBoton}
          
        </button>
        <br /><br />
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
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  );
};

const TablaProductos = ({ listaProductos }) => {
  useEffect(() => {
    console.log('este es el listado  en el componente de tabla', listaProductos);
  }, [listaProductos]);
  return (
    <DataTableProducto  listaProductos={listaProductos}/>
  //   <div className='flex flex-col items-center justify-center'>
  //     <h2 className='text-2xl font-extrabold text-gray-800'>Todos los productos</h2>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Nombre del vehículo</th>
  //           <th>Marca del vehículo</th>
  //           <th>Modelo del vehículo</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {listaVehiculos.map((vehiculo) => {
  //           return (
  //             <tr>
  //               <td>{vehiculo.nombre}</td>
  //               <td>{vehiculo.marca}</td>
  //               <td>{vehiculo.modelo}</td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </div>
  // );

  );
};

const FormularioCreacionProducto = ({ setMostrarTabla, listaProductos, setProductos }) => {
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
    console.log('nuevoProducto::',nuevoProducto);
    // identificar el caso de éxito y mostrar un toast de éxito
    toast.success('Vehículo agregado con éxito');
    // identificar el caso de error y mostrar un toast de error
    // toast.error('Error creando un vehículo');
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo producto</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor='nombre'>
          Descripción del producto
          <input
            name='descripcion'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='text'
            placeholder='Ingrese descripcion'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='marca'>
          Estado
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='estado'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Disponible</option>
            <option>No disponible</option>
     
          </select>
        </label>
        <label className='flex flex-col' htmlFor='modelo'>
          Valor unitario
          <input
            name='valorUnit'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='number'
            min={0}
            max={9999999999999}
            placeholder='Ingrese valor unitario'
            required
          />
        </label>

        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar producto
        </button>
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