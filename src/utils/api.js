import axios from "axios";

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:27017/producto" };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:27017/producto",
    headers: { "Content-Type": "application/json" },
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
    url: `http://localhost:27017/producto/${id}/`,
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:27017/producto/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


// usuarios
export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:27017/usuarios/" };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearUsuario = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:27017/usuarios/",
    headers: { "Content-Type": "application/json" },
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
    url: `http://localhost:27017/usuarios/${id}/`,
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarUsuario = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:27017/usuarios/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
