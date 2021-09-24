import LoginForm from 'components/LoginForm';
// import logo from 'media/logo.png';
// import borderCollie from 'media/borderCollie.jpg';
// import rhodesian from 'media/rhodesian.jpg';
 import logoApolo from 'media/apolo_logo.png';
 import { Link } from 'react-router-dom';

function Index() {
  return (
          <section>
            <div class="bg-light p-5 rounded mt-3">
              <h1>Ejemplo Pagina de bienvenida!</h1>
              <p class="lead">Programa MisionTIC 2022 - Otra informacion relacionada con el proyecto: Integrantes, alcance, etc.</p>
              <a class="btn btn-lg btn-primary" href="/login" role="button">Login</a>
            </div>

            <ul>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/listado-ventas'>Listado-ventas</Link>
              </li>
            </ul>

          </section>
  );
}

export default Index;