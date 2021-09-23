import { Link } from 'react-router-dom';

function ListadoVentas({ imagen }) {
  return (
      // <Link to='/listado-ventas'>
        <div>
          <h4>Componente listado para visualizar las ventas. (Consolidado)</h4>
          <table className='tabla_consolidado'>
            <thead>
              <tr>
                <td>campo1</td>
                <td>campo2</td>
                <td>campo3</td>
                <td>campo4</td>
              </tr>
            </thead>
          </table>
          <br />
          <small>Imagen prueba del componente:</small>
          <div className='contenedorImagen'>
            <img src={imagen} title=''/>
          </div>
        </div>
      // </Link>
  );
}

export default ListadoVentas;


