import { nanoid } from "nanoid";
import React, { useEffect, useState, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ventas.css";
import { crearVenta } from "utils/api";
import { obtenerProductosDis } from "utils/api";
import { obtenerUsuarios } from "utils/api";
import { ToastContainer, toast } from "react-toastify";

const RegistrarVentas = () => {
  const form = useRef(null);
  const [vendedores, setVendedores] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosTabla, setProductosTabla] = useState([]);

  useEffect(() => {
    const fetchVendores = async () => {
      await obtenerUsuarios(
        (response) => {
          setVendedores(response.data);
          console.error(setVendedores(response.data));
        },
        (error) => {
          console.error(error);
        }
      );
    };
    const fetchProductos = async () => {
      await obtenerProductosDis(
        (response) => {
          setProductos(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    fetchVendores();
    fetchProductos();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });
    console.log("nuevoProducto: ", nuevoProducto);
    const listaProductos = Object.keys(nuevoProducto)
      .map((k) => {
        if (k.includes("producto")) {
          return productosTabla.filter((v) => v._id === nuevoProducto[k])[0];
        }
        return null;
      })
      .filter((v) => v);

    for (let i = 0; i < listaProductos.length; i++) {
      delete listaProductos[i].cantidad;
      delete listaProductos[i].estado;
      delete listaProductos[i].created;
    }

    const cantidadesA = Object.keys(nuevoProducto)
      .map((k) => {
        if (k.includes("cantidad")) {
          return nuevoProducto[k];
        }
        return null;
      })
      .filter((v) => v);

    const totalProducto = Object.keys(nuevoProducto)
      .map((k) => {
        if (k.includes("producto_todo")) {
          return nuevoProducto[k];
        }
        return null;
      })
      .filter((v) => v);

    let totalCompra = 0;
    for (let i = 0; i < cantidadesA.length; i++) {
      totalCompra = totalCompra + parseInt(totalProducto[i]);
      cantidadesA[i] = {
        detalleProducto: listaProductos[i],
        unidadesAgregadas: cantidadesA[i],
        valorRegistrado: totalProducto[i],
      };
    }

    let currenteDate = new Date().getTime();
    var date = new Date(currenteDate);
    const datosVenta = {
      vendedor: vendedores.filter((v) => v._id === nuevoProducto.vendedor)[0],
      productosAgregados: cantidadesA,
      totalVenta: totalCompra,
      fechaRegistro: date,
    };

    await crearVenta(
      datosVenta,
      (response) => {
        console.log(response);
        toast.success("Venta creada correctamente", {
          durations: { success: 5000 },
        });
        window.location.replace("");
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <form ref={form} onSubmit={submitForm} className="">
        <h1 className="">Registrar ventas</h1>
        <label className="flex flex-col" htmlFor="vendedor">
          <span className="text-2xl font-gray-900">Vendedores</span>
        </label>

        <select name="vendedor" className="" defaultValue="" required>
          <option value="" disabled>
            Seleccione una opción{" "}
          </option>
          {vendedores.map((el) => {
            return <option value={el._id}>{`${el.nombre}`}</option>;
          })}
        </select>

        <TablaProductos
          productos={productos}
          setProductos={setProductos}
          setProductosTabla={setProductosTabla}
        />

        <button className="btn btn-primary" type="submit">
          <i className="fas fa-save space-button-icon"></i>
          Crear Venta
        </button>
        <ToastContainer position="bottom-center" autoClose={3000} />
      </form>
    </div>
  );
};

const TablaProductos = ({ productos, setProductos, setProductosTabla }) => {
  const [productoAAgregar, setProductoAAgregar] = useState({});
  const [filasTabla, setFilasTabla] = useState([]);
  useEffect(() => {
    setProductosTabla(filasTabla);
  }, [filasTabla, setProductosTabla]);
  function isEmptyObject(obj) {
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        return false;
      }
    }
    return true;
  }
  const agregarNuevoProducto = () => {
    if (!isEmptyObject(productoAAgregar)) {
      setFilasTabla([...filasTabla, productoAAgregar]);
      setProductos(productos.filter((v) => v._id !== productoAAgregar._id));
      setProductoAAgregar({});
    }
  };

  const eliminarProducto = (productoAEliminar) => {
    setFilasTabla(filasTabla.filter((v) => v._id !== productoAEliminar._id));
    setProductos([...productos, productoAEliminar]);
  };

  const modificarProducto = (producto, cantidad) => {
    setFilasTabla(
      filasTabla.map((ft) => {
        if (ft._id === producto._id) {
          ft.cantidad = cantidad;
        }
        return ft;
      })
    );
  };

  return (
    <div className="table-responsive">
      <div className="container-ventas ">
        <label className="flex flex-col" htmlFor="producto">
          Listado de productos
        </label>
        <select
          value={productoAAgregar._id ?? ""}
          name="producto"
          onChange={(e) =>
            setProductoAAgregar(
              productos.filter((v) => v._id === e.target.value)[0]
            )
          }
        >
          <option disabled value="">
            Seleccione uno de los productos
          </option>
          {productos.map((el) => {
            return (
              <option key={nanoid()} value={el._id}>
                {`${el.descripcion}`}
              </option>
            );
          })}
        </select>

        <button
          type="button"
          onClick={() => agregarNuevoProducto()}
          className="btn btn-primary"
        >
          Agregar
        </button>
      </div>
      <table className="table  table-sm table-hover  table-bordered caption-top table-listado">
        <thead>
          <tr>
            <th>COD producto</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Cantidad disponible</th>
            <th>Valor Unitario</th>
            <th>Unidades</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {filasTabla.map((el, index) => {
            return (
              <FilaProducto
                key={el._id}
                prod={el}
                index={index}
                modificarProducto={modificarProducto}
                eliminarProducto={eliminarProducto}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProducto = ({ prod, index, modificarProducto, eliminarProducto }) => {
  const [productoItem, setProducto] = useState(prod);
  useEffect(() => {}, [productoItem]);

  return (
    <tr>
      <td>{productoItem._id}</td>
      <td>{productoItem.descripcion}</td>
      <td>{productoItem.estado}</td>
      <td>{productoItem.cantidad}</td>
      <td>{productoItem.valorUnit}</td>
      <td>
        <input
          required
          type="number"
          min={1}
          max={999}
          size={5}
          placeholder={"Unds"}
          name={`cantidad_${index}`}
          onChange={function (e) {
            modificarProducto(
              productoItem,
              e.target.value === "" ? "0" : e.target.value
            );
            setProducto({
              ...productoItem,
              totalPorProducto:
                parseFloat(productoItem.valorUnit) *
                parseFloat(e.target.value === "" ? "0" : e.target.value),
              cantidadAdicionada: e.target.value === "" ? "0" : e.target.value,
            });
          }}
        />
      </td>
      <td>{productoItem.totalPorProducto}</td>
      <td>
        <button
          onClick={() => eliminarProducto(productoItem)}
          className="fas fa-minus"
        />
      </td>
      <td className="hidden">
        <input
          hidden
          defaultValue={productoItem._id}
          name={`producto_${index}`}
        />
        <input
          hidden
          defaultValue={productoItem.totalPorProducto}
          name={`producto_todo_${index}`}
        />
      </td>
    </tr>
  );
};
export default RegistrarVentas;
