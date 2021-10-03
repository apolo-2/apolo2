import React from 'react'

const DataTableProducto = ({listaProductos}) => {
    return (
        <div>
            {/* bootstrap  */}
            {/* Pendiente encabezado tabla */}
            {/* <h2></h2> */}
                   
            <div class="table-responsive">
            {/*   table-striped  border-light*/}
                <section className="table-search-fields">
                    {/* <div class="row g-3 align-items-end ">
                        <div class="col-auto">
                            <label for="search-field" class="col-form-label">Buscar:</label>
                        </div>
                        <div class="col-auto">
                            <input type="text" id="search-field" class="form-control" />
                        </div>
                    </div> */}
                    <div class="input-group mb-3 ">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                        <input type="text" class="form-control" placeholder="Buscar..." aria-label="search" aria-describedby="search" />
                    </div>
                </section>

                <table class="table  table-sm table-hover  table-bordered caption-top table-listado">
                    {/* <caption>Lista de productos</caption> */}
                    
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
                            {/* <td>{producto.codigo}</td> */}
                            <td>000{index+1}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.valorUnit}</td>
                            <td>{producto.estado}</td>
                            <td className="td_acciones"> 
                                <button type="button" class="btn  btn-sm btn-outline-info" title='Editar'>
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
                        <h5 class="modal-title" id="confirmDeleteModalLabel">Importante</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Desea eliminar el registro?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary">Confirmar</button>
                    </div>
                    </div>
                </div>
            </div>
            
            {/* fin bootstrap */}
        </div>
    )
}

export default DataTableProducto;
