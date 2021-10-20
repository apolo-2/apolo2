import React from "react";

export const TablaUsuario = ({ usuarios }, { setMostrarTabla }) => {
  return (
    <div>
    <section className="table-search-fields">
                    <div className="input-group mb-3 ">
                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
                        <input type="text" className="form-control" placeholder="Buscar..." aria-label="search" aria-describedby="search" />
                    </div>
                </section>
      <div className="table-responsive">
      
        <table className="table  table-sm table-hover  table-bordered caption-top table-listado">
          <thead className="table-light text-center">
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
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.rol}</td>
                  <td>{usuario.estado}</td>
                  <td className="td_acciones">
                    <button
                      onClick={setMostrarTabla(true)}
                      type="button"
                      className="btn  btn-sm btn-outline-warning"
                      title="Editar"
                    >
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

      {/* fin bootstrap */}
    </div>
  );
};
