import { Link } from "react-router-dom";
import "styles/sidebar.css";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from "./PrivateComponent";

const Sidebar = () => {
  const { user, logout } = useAuth0();

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    logout({ returnTo: window.location.origin + "/admin" });
  };

  return (
    <aside id="sidebar" className="s-sidebar__nav">
      <input
        id="nav-expand"
        type="button"
        value="MENU"
        className="social-buttons"
      />
      <nav>
        <p className="center">
          <Ruta
            icono="fas fa-user"
            ruta="/admin"
            nombre="Perfil"
            usuario={user}
          />
        </p>
        <span className="title-sidebar">OPCIONES DISPONIBLES</span>
        <p></p>
        <a id="nav-collapse" href="/#">
          <span className="icon icon-cross" />
        </a>
        <p></p>
        <Ruta icono="fas fa-home" ruta="/admin" nombre="Inicio" />

        <PrivateComponent roleList={["admin", "vendedor"]}>
          <Ruta
            icono="fas fa-hand-holding-usd"
            ruta="/admin/ventas"
            nombre="Ventas"
          />
        </PrivateComponent>
        <PrivateComponent roleList={["admin", "vendedor"]}>
          <Ruta
            icono="fas fa-tasks"
            ruta="/admin/productos"
            nombre="Productos"
          />
        </PrivateComponent>
        <PrivateComponent roleList={["admin"]}>
          <Ruta
            icono="fas fa-user-friends"
            ruta="/admin/usuarios"
            nombre="Usuarios"
          />

          {/*<Ruta
            icono="fas fa-user-friends"
            ruta="/admin/usuarios2"
            nombre="Usuarios2"
          >*/}
        </PrivateComponent>
        <p></p>
        {/* <Ruta icono="fas fa-sign-out-alt" ruta="/" nombre="SALIR" /> */}
        <button onClick={() => cerrarSesion()} className="btn-menu-salir">
          <i className="fas fa-sign-out-alt" aria-hidden="true" />
          SALIR
        </button>
      </nav>
    </aside>
  );
};

const Ruta = ({ icono, ruta, nombre, usuario }) => {
  return (
    <>
      <Link to={ruta}>
        {usuario ? (
          <>
            <img
              src={usuario.picture}
              alt="Imagen usuario"
              className="image--cover center"
            />
            <br></br>
            <span className="title-sidebar">{usuario.name}</span>
          </>
        ) : (
          <>
            <i className={`fa ${icono}`} aria-hidden="true" /> {nombre}
          </>
        )}
      </Link>
    </>
  );
};

export default Sidebar;
