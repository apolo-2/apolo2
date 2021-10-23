import React from "react";

const DataTableVenta = ({ listaVentas }) => {
  return (
    <div>
      <div className="table-responsive">
        <section className="table-search-fields">
          <div className="input-group mb-3 ">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar..."
              aria-label="search"
              aria-describedby="search"
            />
          </div>
        </section>

        <table className="table table-sm table-hover table-bordered caption-top table-listado">
          <caption>Listado de ventas</caption>
          <thead className="table-light text-center">
            <tr>
              <th scope="col"># Venta</th>
              <th scope="col">Cliente</th>
              <th scope="col">Vendedor</th>
              <th scope="col">Total</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {listaVentas.map((venta) => {
              return (
                <tr className="text-center">
                  <td>{venta.numVenta}</td>
                  <td>{venta.cliente}</td>
                  <td>{venta.vendedor}</td>
                  <td>{venta.total}</td>
                  <td className="td_acciones">
                    <button
                      type="button"
                      className="btn  btn-sm btn-outline-warning"
                      title="Ver detalle"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      title="Editar"
                    >
                      <i className="far fa-edit"></i>
                    </button>
                    <button
                      type="button"
                      className="btn  btn-sm btn-sm btn-outline-danger"
                      title="Eliminar"
                      data-bs-toggle="modal"
                      data-bs-target="#confirmDeleteModal"
                    >
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="confirmDeleteModal"
        tabIndex="-1"
        aria-labelledby="confirmDeleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmDeleteModalLabel">
                Confirmación
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Desea eliminar el registro?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTableVenta;
