// import React from 'react'
import React, { useEffect, useState} from 'react';

// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const DataTableProducto = ({listaProductos, setMostrarTabla, setEjecutarConsulta}) => {

    const [busqueda, setBusqueda] = useState('');
    const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);
 
    useEffect(() => {
    
     setProductosFiltrados(
         listaProductos.filter((elemento) => {
             return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
         })
     );
    }, [busqueda, listaProductos]);

    // const eliminarProducto = async () => {
    //     const options = {
    //       method: 'DELETE',
    //       url: 'http://localhost:5000/producto',
    //       headers: { 'Content-Type': 'application/json' },
    //     //   data: { id: producto._id },
    //     data: { id: 1111 },
    //     };
    
    //     await axios
    //       .request(options)
    //       .then(function (response) {
    //         console.log(response.data);
    //         toast.success('Producto eliminado exitosamente!');
    //         setEjecutarConsulta(true);
    //       })
    //       .catch(function (error) {
    //         console.error(error);
    //         toast.error('Error eliminando el Producto');
    //       });
    //     // setOpenDialog(false);
    // };

    return (
        <div>
            {/* bootstrap  */}
            <div class="table-responsive">
            {/*   table-striped  border-light*/}
                <section className="table-search-fields">
                    <div class="input-group mb-3 ">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                        {/* <input type="text" class="form-control" placeholder="Buscar..." aria-label="search" aria-describedby="search" /> */}
                        <input
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            placeholder="Buscar..."
                            type="text" class="form-control" 
                            aria-label="search" aria-describedby="search" />
                    </div>
                </section>

                <table class="table  table-sm table-hover  table-bordered caption-top table-listado">
                    {/* <caption>Lista de productos</caption> */}
                    <thead className='table-light text-center'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Identificador</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor Unitarío</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciónes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {listaProductos.map((producto, index) => { */}
                    {productosFiltrados.map((producto, index) => {
                    return (
                        <tr className='text-center'>
                            <td>{index+1}</td>
                            {/* <td>{producto.codigo}</td> */}
                            <td>{producto._id.substring(17) }</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.valorUnit}</td>
                            <td>{producto.estado}</td>
                            <td className="td_acciones"> 
                                <button type="button" class="btn  btn-sm btn-outline-info" title='Editar'
                                    onClick={() => {
                                        console.log('click edit');
                                        setMostrarTabla(3); //editar
                                    }}
                                >
                                    <i class="fas fa-pencil-alt "></i>
                                    {/* Editar */}
                                </button>
                                <button type="button" class="btn  btn-sm btn-sm btn-outline-danger" title='Eliminar'
                                 data-bs-toggle="modal" data-bs-target="#confirmDeleteModal">
                                    <i class="far fa-trash-alt "></i>
                                    {/* Eliminar */}
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

            {/* <!-- Modal --> */}
            <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmDeleteModalLabel">
                            <i class="fas fa-exclamation-circle "></i> Importante
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Desea eliminar el registro?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button  onClick={
                            // () => eliminarProducto()
                            () =>  console.log('Eliminar acción')
                            } type="button" class="btn btn-primary" data-bs-dismiss="modal">Confirmar</button>
                    </div>
                    </div>
                </div>
            </div> 
            
            {/* fin bootstrap */}
        </div>
    )
}


// const FilaProducto = ({ producto, setEjecutarConsulta }) => {

//     const [edit, setEdit] = useState(false);
//     const [openDialog, setOpenDialog] = useState(false);
//     const [infoNuevoProducto, setInfoNuevoProducto] = useState({
//       _id:          producto._id,
//       descripcion:  producto.descripcion,
//       valorUnit:    producto.valorUnit,
//       estado:       producto.estado,
//     });
  
//     const actualizarProducto = async () => {
//       //enviar la info al backend
//       const options = {
//         method: 'PATCH',
//         url: `http://localhost:5000/producto/${producto._id}/`,
//         headers: { 'Content-Type': 'application/json' },
//         data: { ...infoNuevoProducto },
//       };
  
//       await axios
//         .request(options)
//         .then(function (response) {
//           console.log(response.data);
//           toast.success('Vehículo modificado con éxito');
//           setEdit(false);
//           setEjecutarConsulta(true);
//         })
//         .catch(function (error) {
//           toast.error('Error modificando el vehículo');
//           console.error(error);
//         });
//     };
  
//     // const eliminarProducto = async () => {
//     //   const options = {
//     //     method: 'DELETE',
//     //     url: 'http://localhost:5000/producto/',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     data: { id: producto._id },
//     //   };
  
//     //   await axios
//     //     .request(options)
//     //     .then(function (response) {
//     //       console.log(response.data);
//     //       toast.success('vehículo eliminado con éxito');
//     //       setEjecutarConsulta(true);
//     //     })
//     //     .catch(function (error) {
//     //       console.error(error);
//     //       toast.error('Error eliminando el vehículo');
//     //     });
//     //   setOpenDialog(false);
//     // };
  
//     return (
//       <tr>
//         {edit ? (
//           <>
//             <td>{infoNuevoProducto._id}</td>
//             <td>
//               <input
//                 className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
//                 type='text'
//                 value={infoNuevoProducto.name}
//                 onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, name: e.target.value })}
//               />
//             </td>
//             <td>
//               <input
//                 className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
//                 type='text'
//                 value={infoNuevoProducto.brand}
//                 onChange={(e) =>
//                   setInfoNuevoProducto({ ...infoNuevoProducto, brand: e.target.value })
//                 }
//               />
//             </td>
//             <td>
//               <input
//                 className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
//                 type='text'
//                 value={infoNuevoProducto.model}
//                 onChange={(e) =>
//                   setInfoNuevoProducto({ ...infoNuevoProducto, model: e.target.value })
//                 }
//               />
//             </td>
//           </>
//         ) : (
//           <>
//             <td>{producto._id.slice(20)}</td>
//             <td>{producto.name}</td>
//             <td>{producto.brand}</td>
//             <td>{producto.model}</td>
//           </>
//         )}
//         <td>
//           <div className='flex w-full justify-around'>
//             {edit ? (
//               <>
//                 <Tooltip title='Confirmar Edición' arrow>
//                   <i
//                     onClick={() => actualizarProducto()}
//                     className='fas fa-check text-green-700 hover:text-green-500'
//                   />
//                 </Tooltip>
//                 <Tooltip title='Cancelar edición' arrow>
//                   <i
//                     onClick={() => setEdit(!edit)}
//                     className='fas fa-ban text-yellow-700 hover:text-yellow-500'
//                   />
//                 </Tooltip>
//               </>
//             ) : (
//               <>
//                 <Tooltip title='Editar Vehículo' arrow>
//                   <i
//                     onClick={() => setEdit(!edit)}
//                     className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
//                   />
//                 </Tooltip>
//                 <Tooltip title='Eliminar Vehículo' arrow>
//                   <i
//                     onClick={() => setOpenDialog(true)}
//                     className='fas fa-trash text-red-700 hover:text-red-500'
//                   />
//                 </Tooltip>
//               </>
//             )}
//           </div>
//           <Dialog open={openDialog}>
//             <div className='p-8 flex flex-col'>
//               <h1 className='text-gray-900 text-2xl font-bold'>
//                 ¿Está seguro de querer eliminar el vehículo?
//               </h1>
//               <div className='flex w-full items-center justify-center my-4'>
//                 <button
//                   onClick={() => eliminarProducto()}
//                   className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
//                 >
//                   Sí
//                 </button>
//                 <button
//                   onClick={() => setOpenDialog(false)}
//                   className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </Dialog>
//         </td>
//       </tr>
//     );
//   };
// //   Fin fila producto

export default DataTableProducto;