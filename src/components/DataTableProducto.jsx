import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading'
import PrivateComponent from "./PrivateComponent";

const DataTableProducto = ({
  listaProductos,
  setMostrarTabla,
  setProductToEdit,
  deleteProducto,
  setIdProductToDelete,
  loading,
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
      <div className="table-responsive">
        <section className="table-search-fields">
          <div className="input-group mb-3 ">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-search"></i>
            </span>
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar..."
              type="text"
              className="form-control"
              aria-label="search"
              aria-describedby="search"
            />
          </div>
        </section>
        {loading ?  (
            <ReactLoading type='cylon' color='abc123' height={'10%'} width={'10%'} />
         ) : (
          <table className="table  table-sm table-hover  table-bordered caption-top table-listado">
            <thead className="table-light text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Identificador</th>
                <th scope="col">Descripción</th>
                <th scope="col">Valor Unitarío</th>
                <th scope="col">Estado</th>
                <PrivateComponent roleList = {['admin']}>
                  <th scope="col">Acciónes</th>
                </PrivateComponent>
              </tr>
            </thead>
            <tbody>
              {productosFiltrados.map((producto, index) => {
                return (
                  <tr key={index.toString()} className="text-center">
                    <td>{index + 1}</td>
                    {/* <td>{producto.codigo}</td> */}
                    <td>{producto._id.substring(17)}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.valorUnit}</td>
                    <td>{producto.estado}</td>
                    <PrivateComponent roleList = {['admin']}>
                      <td className="td_acciones">
                        <button
                          type="button"
                          className="btn  btn-sm btn-outline-info"
                          title="Editar"
                          onClick={() => {
                            console.log("Action: edit");
                            setProductToEdit(producto);
                            setMostrarTabla("ACTUALIZAR");
                          }}
                        >
                          <i className="fas fa-pencil-alt "></i>
                          {/* Editar */}
                        </button>
                        <button
                          type="button"
                          className="btn  btn-sm btn-sm btn-outline-danger"
                          title="Eliminar"
                          data-bs-toggle="modal"
                          data-bs-target="#confirmDeleteModal"
                          onClick={() => {
                            setIdProductToDelete(producto._id);
                          }}
                        >
                          <i className="far fa-trash-alt "></i>
                          {/* Eliminar */}
                        </button>
                      </td>
                    </PrivateComponent>
                  </tr>
                );
              })}
            </tbody>
          </table>
         )} 
      </div>

      {/* paginator */}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="/admin/productos">
              &laquo;
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="/admin/productos">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/admin/productos">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/admin/productos">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/admin/productos">
              &raquo;
            </a>
          </li>
        </ul>
      </nav>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="confirmDeleteModal"
        // tabindex="-1"
        tabIndex="-1"
        aria-labelledby="confirmDeleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmDeleteModalLabel">
                <i className="fas fa-exclamation-circle "></i> Importante
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">¿Desea eliminar el registro?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
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
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTableProducto;
