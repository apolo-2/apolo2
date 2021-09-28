// import logo from 'media/apolo_logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <h4> <a href="/">Home</a></h4>
        <ul>
          <li>
            <Link to='/admin/ventas'>Modulo ventas </Link>
          </li>
          <li>
            <Link to='/admin/productos'>Modulo productos </Link>
          </li>
        </ul>
    </aside>
  );
};

export default Sidebar;