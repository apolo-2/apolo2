import { Link } from 'react-router-dom';

function ListadoVentas({ imagen }) {
  return (
    <Link to='/listado-ventas'>
        <div className='contenedorImagen'>
          <img src={imagen} alt='alt title' />
        </div>
      </Link>
  );
}

export default ListadoVentas;