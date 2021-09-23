import LoginForm from 'components/LoginForm';
// import logo from 'media/logo.png';
// import borderCollie from 'media/borderCollie.jpg';
// import rhodesian from 'media/rhodesian.jpg';
 import logoApolo from 'media/apolo_logo.png';
 import { Link } from 'react-router-dom';

function Index() {
  return (
          <section>
            <h1>Pagina de bienvenida!</h1>
            <h3>Grupo Apolo2 🚀</h3>
            <br />
            <h5>Programa MisionTIC 2022</h5>
            <p>Otra informacion relacionada con el proyecto: Integrantes, alcance, etc.</p>
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