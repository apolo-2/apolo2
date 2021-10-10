import React from "react";

const DataTableUsuario = ({ listaUsuarios, setMostrarTabla }) => {
  return (
    <div>
      <div class="table-responsive">
        <section className="table-search-fields">
          <div class="input-group mb-3 ">
            <span class="input-group-text" id="basic-addon1">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Buscar..."
              aria-label="search"
              aria-describedby="search"
            />
          </div>
        </section>
        <table class="table  table-sm table-hover  table-bordered caption-top table-listado">
          <thead className="table-light text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Rol</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaUsuarios.map((usuario, index) => {
              return (
                <tr className="text-center">
                  <td>{index + 1}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.correo}</td>
                  <td>{usuario.rol}</td>
                  <td>{usuario.estado}</td>
                  <td className="td_acciones">
                    <button
                      type="button"
                      class="btn  btn-sm btn-outline-info"
                      title="Editar"
                      onClick={() => {
                        console.log("click edit");
                        setMostrarTabla(3); //editar
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

export default DataTableUsuario;
