import ListadoVentas from 'components/ListadoVentas';
import logoApolo from 'media/apolo_logo.png';

function ListadoVentasInfoPage() {
    return  <div>
              <h2>Pantalla listado-ventas</h2>
              <section>
                <ul className='loginContainer'>
                  <ListadoVentas  imagen={logoApolo} />
                </ul>
              </section>
              <section></section>
            </div>;
  }
  
  export default ListadoVentasInfoPage;