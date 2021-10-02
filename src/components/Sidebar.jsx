import logo from 'media/apolo_logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <nav className='hidden sm:flex sm:w-72 border border-gray-300 h-full flex-col bg-gray-200 p-4 sidebar'>
        <Link to='/admin'>
          {/* <ImagenLogo /> */}
        </Link>

        <div className='my-4 menu-items'>
          <Ruta icono='fas fa-hand-holding-usd' ruta='/admin/ventas' nombre='Ventas' />
          <Ruta icono='fas fa-tasks' ruta='/admin/productos' nombre='Productos' />
          <Ruta icono='fas fa-user-friends' ruta='/admin/usuarios' nombre='Usuarios' />
        </div>
        <br />
        <br />
        <h6><Link to='/'>Cerrar Sesión</Link></h6>
      </nav>
    </aside>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <button className='p-1 my-2 bg-indigo-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md btn_menu'>
        <i className={`${icono} w-10`} />
        {nombre}
      </button>
    </Link>
  );
};

export default Sidebar;



// const Sidebar = () => {
//   return (
//     <aside id="sidebar">
//         <h4> <a href="/">Menu</a></h4>
//         <ul>
//           <li>
//             <Link to='/admin/ventas'>
//               <i class="fas fa-hand-holding-usd"></i>
//                 Ventas
//               </Link>
//           </li>
//           <li>
//             <Link to='/admin/productos'>
//               <i class="fas fa-tasks"></i>
//                 Productos
//             </Link>
//           </li>
//           <li>
//             <Link to='/admin/usuarios'>
              
//               <i class="fas fa-user-friends"></i>
//               Usuarios
//             </Link>
//           </li>
//           <li>
//             <Link to='/admin/clase-sept-29'><i class="fas fa-sign-out-alt"></i>Cerrar Sesión</Link>
//           </li>
//         </ul>
//     </aside>
//   );
// };

// export default Sidebar;