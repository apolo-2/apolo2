import LoginForm from 'components/LoginForm';
// import logo from 'media/logo.png';
// import borderCollie from 'media/borderCollie.jpg';
// import rhodesian from 'media/rhodesian.jpg';
 import logoApolo from 'media/apolo_logo.png';
 import { Link } from 'react-router-dom';
 import Google from 'media/google_logo.png';

function Index() {
  return (
          <section>
            <br /><br /><br />
            <div class="bg-light p-5 rounded mt-3">
              <h1>Pagina de bienvenida!</h1>
              <p class="lead">Programa MisionTIC 2022 - Otra informacion relacionada con el proyecto: Integrantes, alcance, etc.</p>
              <a class="btn btn-lg btn-primary" href="/admin" role="button">
                <img className="logo-google" src={Google} alt='Logo Google' />
                Continua con Google
              </a>
            </div>

            <ul>
              <li>
                <Link to='/login'>Login Anterior Prueba </Link>
              </li>
            </ul>

          </section>
  );
}

export default Index;