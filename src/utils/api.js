import axios from 'axios';

export const obtenerProductos = async (setProductos, setEjecutarConsulta) => {
  const options = { method: 'GET', url: 'http://localhost:5000/producto' };
//   console.log('ini axios')
  await axios
    .request(options)
    .then(function (response) {
        // console.log('Llamada  axios:', response.data)
      setProductos(response.data);
    })
    .catch(function (error) {
      console.error('error::::', error.message);
    });
  setEjecutarConsulta(false);
};
