import React, { useEffect, useState } from "react";

const DataTableProducto = ({
  listaProductos,
  setMostrarTabla,
  setProductToEdit,
  deleteProducto,
  setIdProductToDelete,
}) => {
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

  return (
    <div>
      {/* bootstrap  */}
      <div class="table-responsive">
        <section className="table-search-fields">
          <div class="input-group mb-3 ">
            <span class="input-group-text" id="basic-addon1">
              <i class="fas fa-search"></i>
            </span>
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar..."
              type="text"
              class="form-control"
              aria-label="search"
              aria-describedby="search"
            />
          </div>
        </section>

        <table class="table  table-sm table-hover  table-bordered caption-top table-listado">
          <thead className="table-light text-center">
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
            {productosFiltrados.map((producto, index) => {
              return (
                <tr className="text-center">
                  <td>{index + 1}</td>
                  {/* <td>{producto.codigo}</td> */}
                  <td>{producto._id.substring(17)}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.valorUnit}</td>
                  <td>{producto.estado}</td>
                  <td className="td_acciones">
                    <button
                      type="button"
                      class="btn  btn-sm btn-outline-info"
                      title="Editar"
                      onClick={() => {
                        console.log("Action: edit");
                        setProductToEdit(producto);
                        setMostrarTabla("ACTUALIZAR");
                      }}
                    >
                      <i class="fas fa-pencil-alt "></i>
                      {/* Editar */}
                    </button>
                    <button
                      type="button"
                      class="btn  btn-sm btn-sm btn-outline-danger"
                      title="Eliminar"
                      data-bs-toggle="modal"
                      data-bs-target="#confirmDeleteModal"
                      onClick={() => {
                        setIdProductToDelete(producto._id);
                      }}
                    >
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
            <a class="page-link" href="/admin/productos">
              &laquo;
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="/admin/productos">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/admin/productos">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/admin/productos">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/admin/productos">
              &raquo;
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="confirmDeleteModal"
        tabindex="-1"
        aria-labelledby="confirmDeleteModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmDeleteModalLabel">
                <i class="fas fa-exclamation-circle "></i> Importante
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Desea eliminar el registro?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  console.log("Action: Delete");
                  deleteProducto();
                }}
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* fin bootstrap */}
    </div>
  );
};

export default DataTableProducto;
