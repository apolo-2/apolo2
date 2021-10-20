import axios from "axios";

const getToken = function(){
  return  `Bearer ${localStorage.getItem('token')}`
}

export const obtenerProductos = async (successCallback, errorCallback) => {
  const options = { 
      method: "GET",
      url: "http://localhost:5000/producto" ,
      headers: { Authorization: getToken() }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/producto",
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
    url: `http://localhost:5000/producto/${id}/`,
    headers: { "Content-Type": "application/json" , Authorization: getToken()},
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarProducto = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:5000/producto/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};


// usuarios
export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/usuarios/", headers: { Authorization: getToken() }};
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// Ruta dummy, o ruta autodiscover
export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios/self',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearUsuario = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/usuarios/",
    headers: { "Content-Type": "application/json" , Authorization: getToken()},
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
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { "Content-Type": "application/json" , Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarUsuario = async (id, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { "Content-Type": "application/json", Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
