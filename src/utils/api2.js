import axios from "axios";
/*
export const obtenerProductos = async (setProductos, setEjecutarConsulta) => {
  const options = { method: "GET", url: "http://localhost:27017/productos" };
  console.log("ini axios");
  await axios
    .request(options)
    .then(function (response) {
      console.log("Llamada  axios:", response.data);
      setProductos(response.data);
    })
    .catch(function (error) {
      console.error("error::::", error.message);
    });
  setEjecutarConsulta(false);
};

export const obtenerUsuarios = async (setUsuarios, setEjecutarConsulta) => {
  const options = { method: "GET", url: "http://localhost:27017/usuarios" };
  console.log("ini axios");
  await axios
    .request(options)
    .then(function (response) {
      console.log("Llamada  axios:", response.data);
      setUsuarios(response.data);
    })
    .catch(function (error) {
      console.error("error::::", error.message);
    });
  setEjecutarConsulta(false);
};

export const crearVehiculo = async (setUsuarios, setEjecutarConsulta) => {};
*/

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
