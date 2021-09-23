import ListadoVentas from 'components/ListadoVentas';
 import logoApolo from 'media/apolo_logo.png';

function ListadoVentasInfoPage() {
    return  <div>
              <h1>Pantalla listado-ventas</h1>
              <section>
                <ul className='loginContainer'>
                  <ListadoVentas  imagen={logoApolo} />
                </ul>
              </section>
              <section></section>
            </div>;
  }
  
  export default ListadoVentasInfoPage;