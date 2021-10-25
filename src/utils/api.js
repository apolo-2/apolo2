import axios from "axios";

const getToken = function () {
  return `Bearer ${localStorage.getItem("token")}`;
};
const URI_API = "https://serene-forest-26816.herokuapp.com";
//const URI_API = "http://localhost:5000";

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${URI_API}/producto`,
    headers: { Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const obtenerProductosDis = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${URI_API}/productosDisponibles`,
    headers: { Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: `${URI_API}/producto`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarProducto = async (
  id,
  data,
  successCallback,
  errorCallback
) => {
  const options = {
    method: "PATCH",
    url: `${URI_API}/producto/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `${URI_API}/producto/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// usuarios
export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${URI_API}/usuarios/`,
    headers: { Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// Ruta dummy, o ruta autodiscover
export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${URI_API}/usuarios/self`,
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearUsuario = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: `${URI_API}/usuarios/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (
  id,
  data,
  successCallback,
  errorCallback
) => {
  const options = {
    method: "PATCH",
    url: `${URI_API}/usuarios/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarUsuario = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `${URI_API}/usuarios/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD DE VENTAS

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = {
    method: "GET",
    url: `${URI_API}/ventas/`,
    headers: { Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: `${URI_API}/ventas/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: `${URI_API}/ventas/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVenta = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `${URI_API}/ventas/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
