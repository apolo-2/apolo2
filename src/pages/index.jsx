import ListadoVentas from 'components/ListadoVentas';
import LoginForm from 'components/LoginForm';
// import logo from 'media/logo.png';
// import borderCollie from 'media/borderCollie.jpg';
// import rhodesian from 'media/rhodesian.jpg';
 import logoApolo from 'media/apolo_logo.png';


function Index() {
  return (
    <div>
      <header>
        <h1>Ejemplo</h1>
        <br />
      </header>
      <main>
        <LoginForm imagen={logoApolo} />
        <br />
        <hr />
        <h3>Link a otra seccion:</h3>
        <ul>
            <li>
                <a href='/listado-ventas'>listado-ventas </a>
            </li>
        </ul>
      </main>
      <footer></footer>
    </div>
    // <LoginForm imagen={logoApolo} />
  );
}

export default Index;