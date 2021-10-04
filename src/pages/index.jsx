// import { Link } from 'react-router-dom';
import Google from 'media/google_logo.png';

function Index() {
  return (
          <section>
            <br /><br /><br />
            <div class="bg-light p-5 rounded mt-3">
              <h1>Pagina de bienvenida Ejemplo!</h1>
              <p class="lead">Programa MisionTIC 2022 - Otra informacion relacionada con el proyecto: Integrantes, alcance, etc.</p>
              <a class="btn btn-lg btn-primary" href="/admin" role="button">
                <img className="logo-google" src={Google} alt='Logo Google' />
                Continua con Google
              </a>
            </div>
          </section>
  );
}

export default Index;