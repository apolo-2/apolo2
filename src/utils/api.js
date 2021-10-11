import axios from 'axios';

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/producto' };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// export const crearVehiculo = async (data, successCallback, errorCallback) => {
//   const options = {
//     method: 'POST',
//     url: 'http://localhost:5000/vehiculos/',
//     headers: { 'Content-Type': 'application/json' },
//     data,
//   };
//   await axios.request(options).then(successCallback).catch(errorCallback);
// };


// export const obtenerProductos = async (setProductos, setEjecutarConsulta) => {
//   const options = { method: 'GET', url: 'http://localhost:5000/producto' };
// //   console.log('ini axios')
//   await axios
//     .request(options)
//     .then(function (response) {
//         // console.log('Llamada  axios:', response.data)
//       setProductos(response.data);
//     })
//     .catch(function (error) {
//       console.error('error::::', error.message);
//     });
//   setEjecutarConsulta(false);
// };


// export const crearObjeto = async (data, sucessCallback, errorCallback) =>{
//   const options = {
//     method: 'POST',
//     url: 'http://localhost:5000/producto',
//     headers: { 'Content-Type': 'application/json' },
//     data: { descripcion: nuevoProducto.descripcion, valorUnit: nuevoProducto.valorUnit, estado: nuevoProducto.estado },
//   };
// }