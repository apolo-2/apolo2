import React, { useEffect, useState, useRef } from 'react';

import 'styles/productos.css'
import 'styles/usuarios.css';
import Swal from 'sweetalert2';


const Usuariosdata = [
  {
    email: 'yenni@gmail.com',
    nombre: 'yenni delgado',
    rol: 'administradora',
    estado: 'Autorizado',
  },
  {
    email: 'sandra@gmail.com',
    nombre: 'sandra lopez',
    rol: 'Vendedora',
    estado: 'Pendiente',
  },
  {
    email: 'cristian@gmail.com',
    nombre: 'cristian martinez',
    rol: 'Vendedor',
    estado: 'No Autorizado',
  },
  {
    email: 'sami@gmail.com',
    nombre: 'samy perez',
    rol: 'Vendedor',
    estado: 'Autorizado',
  },
  {
    email: 'david@gmail.com',
    nombre: 'david rey',
    rol: 'Vendedor',
    estado: 'Autorizado',
  },
  
];


 const Usuarios = () => {

  const [mostrarTabla, setMostrarTabla] = useState(true);
   useEffect(() => {
   
  }, [mostrarTabla]);
  console.log(mostrarTabla);
  return (
   
    <div className='container-productos'>
      <div className=''>
        
        <div className="container-title">
          <h3 className=''>
              Listado de usuarios
          </h3>
        </div>
        <br />
        
      </div>

      {mostrarTabla ? (
        <TablaUsuario usuarios={Usuariosdata} setMostrarTabla={setMostrarTabla} />
      ) : (
        <FormularioEditarUsuario
          setMostrarTabla={setMostrarTabla}
          
        />
      )}
      
    </div>
  );
};
const TablaUsuario = ({usuarios, setMostrarTabla }) => {
  const editar= ()=>{
    setMostrarTabla(false);
    
  }
    return (
        <div>
          
                   
            <div class="table-responsive">
          
                <table class="table  table-sm table-hover  table-bordered caption-top table-listado">
                   
                    <thead className='table-light text-center'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Nombre y Apellido</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {usuarios.map((usuario, index) => {
                    return (
                        <tr key={index} className='text-center'>
                            <td>{index+1}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.rol}</td>
                            <td>{usuario.estado}</td>
                            <td className="td_acciones"> 
                                <button onClick={()=>{editar();}} type="button" class="btn  btn-sm btn-outline-warning" title='Editar'>
                                   Editar
                                    {/* Editar */}
                                </button>
                                
                            </td>
                        </tr>
                         );
                    })}
                    </tbody>
                </table>
            </div>

            {/* paginator */}
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                    <a class="page-link" href="/admin/productos">&laquo;</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="/admin/productos">1</a></li>
                    <li class="page-item"><a class="page-link" href="/admin/productos">2</a></li>
                    <li class="page-item"><a class="page-link" href="/admin/productos">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="/admin/productos">&raquo;</a>
                    </li>
                </ul>
            </nav>
            
            {/* fin bootstrap */}
        </div>
    )
}


const FormularioEditarUsuario = ({ setMostrarTabla }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
              Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Usuario actualizado!.',
            showConfirmButton: false,
            timer: 1500
          })

    setMostrarTabla(true);
    
    
  };

  return (
        // form nuevo prod
        <div className="container">
          <br />
          <h5 className=''>Editar usuario</h5>
          
          <form ref={form} onSubmit={submitForm} className=''>

            <div class="mb-3 row">
              <label for="descripcion" class="col-sm-2 col-form-label">Correo: </label>
              <div class="col-sm-9">
                <input type="text"
                  name='descripcion'
                  className='form-control'
                  placeholder=''
                  required />
                {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
              </div>
            </div>

            <div class="mb-3 row">
              <label for="valorUnit" class="col-sm-2 col-form-label">Nombre: </label>
              <div class="col-sm-9">
                <input type="text"
                  name='valorUnit'
                  className='form-control'
                  placeholder=''
                  required />
               
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
                    <option value="Disponible" selected>Autorizado</option>
                    <option value="No disponible">No autorizado</option>
                    <option value="No disponible">Pendiente</option>
                  </select>
                {/* <div id="descHelp" class="form-text">Descripción del producto</div> */}
              </div>
            </div>
            <div class="mb-3 row">
              <label for="estado" class="col-sm-2 col-form-label">Rol: </label>
              <div class="col-sm-9">
                  <select
                    className='form-select'
                    aria-label="Default select"
                    name='estado'
                    required
                    defaultValue={0}
                  >
                    <option value="Disponible" selected>Administrador</option>
                    <option value="No disponible">Vendedor</option>
                    
                  </select>
               
              </div>
            </div>

            <div className="col-md-11 d-flex justify-content-end ">
                 <button
                  
                  className='btn btn-danger btn-lg'
                  onClick={()=>{setMostrarTabla(true);}}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sd-card" viewBox="0 0 16 16">
                  <path d="M6.25 3.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2z"/>
                  <path fill-rule="evenodd" d="M5.914 0H12.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5V3.914c0-.398.158-.78.44-1.06L4.853.439A1.5 1.5 0 0 1 5.914 0zM13 1.5a.5.5 0 0 0-.5-.5H5.914a.5.5 0 0 0-.353.146L3.146 3.561A.5.5 0 0 0 3 3.914V14.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13z"/>
                </svg>
                   Cancelar
                </button>
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

export default Usuarios;




