import { Link } from 'react-router-dom';

function ListadoVentas({ imagen }) {
  return (
      <Link to='/listado-ventas'>
        <div className='contenedorImagen'>
          <img src={imagen} title="LINK HACIA LISTADO VENTAS PRUEBA"/>
        </div>
      </Link>
  );
}

export default ListadoVentas;