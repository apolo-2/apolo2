import React, { useEffect, useState } from 'react';

// realizar un formulario que le pida al usuario su edad y muestre un mensaje
// que diga si el usuario es mayor de edad o no

const vehiculosBackend = [
  {
    nombre: 'Corolla',
    marca: 'Toyota',
    modelo: 2014,
  },
  {
    nombre: 'Sandero',
    marca: 'Renault',
    modelo: 2020,
  },
  {
    nombre: 'Rav4',
    marca: 'Toyota',
    modelo: 2021,
  },
  {
    nombre: 'Fiesta',
    marca: 'Ford',
    modelo: 2017,
  },
  {
    nombre: 'Mazda 3',
    marca: 'Mazda',
    modelo: 2020,
  },
  {
    nombre: 'Chevrolet',
    marca: 'Onix',
    modelo: 2020,
  },
  {
    nombre: 'Chevrolet',
    marca: 'Onix',
    modelo: 2020,
  },
];

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo Vehículo');

  useEffect(() => {
    //obtener lista de vehículos desde el backend
    setVehiculos(vehiculosBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear Nuevo Vehículo');
    } else {
      setTextoBoton('Mostrar Todos los vehículos');
    }
  }, [mostrarTabla]);
  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Página de administración de vehículos Ejemplo Daniel
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className='text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end'
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={vehiculos} />
      ) : (
        <FormularioCreacionVehiculos />
      )}
    </div>
  );
};

const TablaVehiculos = ({ listaVehiculos }) => {
  useEffect(() => {
    console.log('este es el listado de vehiculos en el componente de tabla', listaVehiculos);
  }, [listaVehiculos]);
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del vehículo</th>
            <th>Marca del vehículo</th>
            <th>Modelo del vehículo</th>
          </tr>
        </thead>
        <tbody>
          {listaVehiculos.map((vehiculo) => {
            return (
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionVehiculos = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo vehículo</h2>
      <form className='grid grid-cols-2'>
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
        <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
        <button className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>
          Guardar vehiculo
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;



// import React from 'react';

// const Productos = () => {
//   return <div>Administracion de Productos 🥑</div>;
// };

// // crea form 
// // add funcionalidad con use effect 



// export default Productos;
