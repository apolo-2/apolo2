import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { format } from "date-fns";

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
          <p>Producto {i + 1}</p>
          <ol>
            {
              <ListItem
                value={`* Prod: ${nuevoStr[i].detalleProducto.descripcion}`}
              />
            }
            {
              <ListItem
                value={`* Unds vendidas: ${nuevoStr[i].unidadesAgregadas}`}
              />
            }
            {
              <ListItem
                value={`* Valor Und: ${formatNumber(
                  nuevoStr[i].detalleProducto.valorUnit
                )}`}
              />
            }
          </ol>
        </ol>
      );
    }
    return acumulo;
  };
  const formatDate = function (date) {
    return format(new Date(date), "Pp");
  };

  const formatNumber = function (num) {
    let numSplit, int, ints;
    //let dec;
    num = Math.abs(num);
    num = num.toFixed(2);
    numSplit = num.split(".");
    int = numSplit[0];
    //dec = numSplit[1];
    ints = int.split("");
    console.log(ints);
    let intStr = "";
    if (int.length > 3) {
      let newInt = int;
      let nCommas = Math.floor(int.length / 3);
      let N = [];
      for (let i = 1; i <= nCommas; i++) {
        N.push(i);
      }
      let K = [];
      for (let i = 0; i < N.length; i++) {
        let intGroup = newInt.substring(0, 3);
        newInt = newInt.replace(newInt.substring(0, 3), "");

        K.push(intGroup + ".");
      }

      for (let i = 0; i < K.length; i++) {
        intStr = intStr + K[i];
      }
    } else {
      intStr = int;
    }
    int = intStr.substring(0, intStr.length - 1);

    return "$" + int; // + "," + dec; //Listo para decimales
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
                <th scope="col">Fecha/Hora Registro</th>
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
                    <td> {formatNumber(venta.totalVenta)}</td>
                    <td> {formatDate(venta.fechaRegistro)}</td>
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
