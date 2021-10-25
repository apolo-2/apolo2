import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

const DataTableVenta = ({
  listaVentas,
  setMostrarTabla,
  setVentaToEdit,
  deleteVenta,
  setIdVentaToDelete,
  setEjecutarConsulta,
}) => {
  const [busqueda, setBusqueda] = useState("");
  const [ventasFiltradas, setVentasFiltrados] = useState(listaVentas);
  const [loading] = useState(false);
  useEffect(() => {
    setVentasFiltrados(
      listaVentas.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVentas]);

  function ListItem(props) {
    return <li>{props.value}</li>;
  }
  const formatDetalleVenta = (str) => {
    let acumulo = [];
    let long = str.length;
    let nuevoStr = str;
    for (let i = 0; i < long; i++) {
      acumulo[i] = (
        <ol>
          <p>Producto {i}</p>
          <ol>
            {
              <ListItem
                value={`Prod: ${nuevoStr[i].detalleProducto.descripcion}`}
              />
            }
            {
              <ListItem
                key={nanoid()}
                value={`Und: ${nuevoStr[i].unidadesAgregadas}`}
              />
            }
          </ol>
        </ol>
      );
    }
    return acumulo;
  };

  return (
    <div>
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
        {loading ? (
          <ReactLoading
            type="cylon"
            color="abc123"
            height={"20%"}
            width={"20%"}
          />
        ) : (
          <table className="table  table-sm table-hover  table-bordered caption-top table-listado">
            <thead className="table-light text-center">
              <tr>
                <th scope="col">COD Venta</th>
                <th scope="col">Vendedor</th>
                <th scope="col">Productos Vendidos</th>
                <th scope="col">Total Venta</th>
                <th scope="col">Fecha de Registro</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ventasFiltradas.map((venta, index) => {
                return (
                  <tr key={index.toString()} className="text-center">
                    <td>{venta._id.substring(17)}</td>
                    <td> {venta.vendedor.nombre}</td>
                    <td>{formatDetalleVenta(venta.productosAgregados)}</td>
                    <td> {venta.totalVenta}</td>
                    <td> {venta.fechaRegistro}</td>
                    <td className="td_acciones">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-info"
                        title="Editar"
                        onClick={() => {
                          console.log("Action: edit venta");
                          setVentaToEdit(venta);
                          setMostrarTabla("ACTUALIZAR");
                        }}
                      >
                        <i className="fas fa-pencil-alt "></i>
                      </button>
                      <button
                        type="button"
                        className="btn  btn-sm btn-sm btn-outline-danger"
                        title="Eliminar"
                        data-bs-toggle="modal"
                        data-bs-target="#confirmDeleteModal"
                        onClick={() => {
                          setIdVentaToDelete(venta._id);
                          setMostrarTabla("LISTAR");
                        }}
                      >
                        <i className="far fa-trash-alt "></i>
                        {/* Eliminar */}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
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
                  deleteVenta();
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

export default DataTableVenta;
