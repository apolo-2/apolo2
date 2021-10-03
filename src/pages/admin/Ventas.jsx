import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTableVentas from 'components/DataTableVentas';
import 'styles/ventas.css';

const VentasBackend = [
  {
    codigo: '0001',
    descripcion: 'Monitor Samsung 27"',
    valorUnit: 685000,
    estado: 'Disponible',
  },
  {
    codigo: '0002',
    descripcion: 'Disco SSD Kingston 256GB',
    valorUnit: 168500,
    estado: 'No Disponible',
  },
  {
    codigo: '0003',
    descripcion: 'Monitor LG 27"',
    valorUnit: 568500,
    estado: 'Disponible',
  },
  {
    codigo: '0004',
    descripcion: 'Mouse Gamer Genious"',
    valorUnit: 212500,
    estado: 'No Disponible',
  },
  {
    codigo: '0005',
    descripcion: 'Monitor Samsung 21"',
    valorUnit: 568500,
    estado: 'Disponible',
  },
  
];


const Ventas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [Ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Nuevo Ventas');
  const [colorBoton, setColorBoton] = useState('btn-secondary');

  useEffect(() => {
    //obtener lista  desde el backend
    setVentas(VentasBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Nuevo Ventas');
      setColorBoton('btn-secondary');
    } else {
      setTextoBoton('Mostrar Todos los Ventas');
      setColorBoton('btn-info');
    }
  }, [mostrarTabla]);
  return (

    <div className='container-ventas'>
      <div className=''>
        <div className="container-title">
          <h3 className=''>Gestión de Ventas</h3>
        </div>
        <br />
        <button onClick={() => {setMostrarTabla(!mostrarTabla);}} className={`btn ${colorBoton} btn-rounded`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
            <span>{textoBoton}</span>
          </button>
      </div>

      {mostrarTabla ? (
        <TablaVentas listaVentas={Ventas} />
      ) : (
        <FormularioCreacionVentas
          setMostrarTabla={setMostrarTabla}
          listaVentas={Ventas}
          setVentas={setVentas}
        />
      )}

      <ToastContainer position='bottom-right' autoClose={5000} />
    </div>
  );
};

const TablaVentas = ({ listaVentas }) => {
  useEffect(() => {
    console.log('este es el listado  en el componente de tabla', listaVentas);
  }, [listaVentas]);
  return (
    <DataTableVentas  listaVentas={listaVentas}/>
  );
};

const FormularioCreacionVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
  const form = useRef(null);
  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const nuevoVentas = {};
    fd.forEach((value, key) => {
      nuevoVentas[key] = value;
    });
    setMostrarTabla(true);
    setVentas([...listaVentas, nuevoVentas]);
    console.log('nuevoVentas::',nuevoVentas);
    // identificar el caso de éxito y mostrar un toast de éxito
    toast.success('Ventas agregado con éxito', {
      // position: toast.POSITION.BOTTOM_RIGHT,
      // className: 'foo-bar'
    });
    // identificar el caso de error y mostrar un toast de error
    // toast.error('Error creando un vehículo');
  };

  return (
        // form nuevo prod
        <div className="container">
          <br />
          <h5 className=''>Formulario nuevo Ventas</h5>
          
          <form ref={form} onSubmit={submitForm} className=''>

            <div class="mb-3 row">
              <label for="descripcion" class="col-sm-2 col-form-label">Descripción: </label>
              <div class="col-sm-9">
                <input type="text"
                  name='descripcion'
                  className='form-control'
                  placeholder='Ingrese descripción del Ventas'
                  required />
                {/* <div id="descHelp" class="form-text">Descripción del Ventas</div> */}
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
                  required />
                {/* <div id="descHelp" class="form-text">Descripción del Ventas</div> */}
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
                {/* <div id="descHelp" class="form-text">Descripción del Ventas</div> */}
              </div>
            </div>

            <div className="col-md-11 d-flex justify-content-end ">
                <button
                  type='submit'
                  className='btn btn-primary btn-lg'
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sd-card" viewBox="0 0 16 16">
                  <path d="M6.25 3.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2z"/>
                  <path fill-rule="evenodd" d="M5.914 0H12.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5V3.914c0-.398.158-.78.44-1.06L4.853.439A1.5 1.5 0 0 1 5.914 0zM13 1.5a.5.5 0 0 0-.5-.5H5.914a.5.5 0 0 0-.353.146L3.146 3.561A.5.5 0 0 0 3 3.914V14.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13z"/>
                </svg>
                   Guardar
                </button>
            </div>
          </form>   
        </div>
      
  );
};

export default Ventas;