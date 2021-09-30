import React from 'react'

const DataTableProducto = ({listaProductos}) => {
    return (
        <div>
            {/* bootstrap  */}
            {/* Pendiente encabezado tabla */}
            {/* <h2></h2> */}
            <div class="table-responsive">
            {/*   table-striped  border-light*/}
                <table class="table  table- table-hover  table-bordered caption-top">
                    <caption>Lista de productos</caption>
                    <thead className='table-light'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Código</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor Unitarío</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                    {listaProductos.map((producto, index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{producto.codigo}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.valorUnit}</td>
                            <td>{producto.estado}</td>
                            <td> 
                                <button type="button" class="btn btn-secondary btn-sm">Editar</button>
                            </td>
                        </tr>
                         );
                    })}
                    </tbody>
                </table>
            </div>

            {/* paginator */}
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                    <a class="page-link" href="admin/productos">&laquo;</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="admin/productos">1</a></li>
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
