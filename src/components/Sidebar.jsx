// import logo from 'media/apolo_logo.png';
import { Link } from "react-router-dom";
import "styles/sidebar.css";

const Sidebar = () => {
  return (
    <aside id="sidebar" class="s-sidebar__nav">
      <input
        id="nav-expand"
        type="button"
        Value="MENU"
        className="social-buttons"
      />
      <nav>
        <span class="title-sidebar">OPCIONES DISPONIBLES</span>
        <a id="nav-collapse" href="#">
          <span class="icon icon-cross" />
        </a>
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
      </nav>
    </aside>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  return <Link to={ruta}>{nombre}</Link>;
};

export default Sidebar;
