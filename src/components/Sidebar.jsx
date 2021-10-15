// import logo from 'media/apolo_logo.png';
import { Link } from "react-router-dom";
import "styles/sidebar.css";
import userImage from "./../media/users.png";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="s-sidebar__nav">
      <input
        id="nav-expand"
        type="button"
        value="MENU"
        className="social-buttons"
      />
      <nav>
        <img src={userImage} alt="" className="image--cover" />
        <p></p>
        <span className="title-sidebar">OPCIONES DISPONIBLES</span>
        <p></p>
        <a id="nav-collapse" href="/#">
          <span className="icon icon-cross" />
        </a>
        <p></p>
        <Ruta icono="fas fa-home" ruta="/admin" nombre="Inicio" />
        <Ruta
          icono="fas fa-hand-holding-usd"
          ruta="/admin/ventas"
          nombre="Ventas"
        />
        <Ruta icono="fas fa-tasks" ruta="/admin/productos" nombre="Productos" />
        <Ruta
          icono="fas fa-user-friends"
          ruta="/admin/usuarios"
          nombre="Usuarios"
        />
        <p></p>
        <p></p>
        <Ruta icono="fas fa-sign-out-alt" ruta="/" nombre="SALIR" />
      </nav>
    </aside>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  return (
    <>
      <Link to={ruta}>
        <i className={`fa ${icono}`} aria-hidden="true" /> {nombre}
      </Link>
    </>
  );
};

export default Sidebar;
