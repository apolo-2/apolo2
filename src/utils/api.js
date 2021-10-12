import axios from 'axios';

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/producto' };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/producto',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/producto/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id,successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/producto/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
