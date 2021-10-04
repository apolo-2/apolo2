import React from "react";

const DataTableVenta = ({ listaVentas }) => {
  return (
    <div>
      <div class="table-responsive">
        <table class="table table-sm table-hover table-bordered caption-top table-listado">
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
                      class="btn  btn-sm btn-sm btn-outline-danger"
                      title="Ver detalles"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <button
                      type="button"
                      class="btn  btn-sm btn-outline-warning"
                      title="Editar"
                    ></button>
                    <button
                      type="button"
                      class="btn  btn-sm btn-sm btn-outline-danger"
                      title="Eliminar"
                      data-bs-toggle="modal"
                      data-bs-target="#confirmDeleteModal"
                    >
                      <i class="far fa-trash-alt"></i>
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
                Confirmación
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
              <button type="button" class="btn btn-primary">
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
