import React from 'react'

const DataTableProducto = ({listaProductos}) => {
    return (
        <div>
            {/* bootstrap  */}
            {/* Pendiente encabezado tabla */}
            {/* <h2></h2> */}
                   
            <div class="table-responsive">
            {/*   table-striped  border-light*/}
                <table class="table  table- table-hover  table-bordered caption-top table-listado">
                    <caption>Lista de productos</caption>
                    <thead className='table-light text-center'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Código</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor Unitarío</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciónes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listaProductos.map((producto, index) => {
                    return (
                        <tr className='text-center'>
                            <td>{index+1}</td>
                            <td>{producto.codigo}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.valorUnit}</td>
                            <td>{producto.estado}</td>
                            <td className="td_acciones"> 
                                <button type="button" class="btn  btn-sm btn-outline-warning" title='Editar'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                    </svg>
                                    {/* Editar */}
                                </button>
                                <button type="button" class="btn  btn-sm btn-sm btn-outline-danger" title='Eliminar'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightred" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
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
                    <a class="page-link" href="admin/productos">&laquo;</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="admin/productos">1</a></li>
                    <li class="page-item"><a class="page-link" href="admin/productos">2</a></li>
                    <li class="page-item"><a class="page-link" href="admin/productos">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="admin/productos">&raquo;</a>
                    </li>
                </ul>
            </nav>
            
            {/* fin bootstrap */}
        </div>
    )
}

export default DataTableProducto;
