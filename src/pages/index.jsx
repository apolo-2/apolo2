// import { Link } from 'react-router-dom';
import Google from 'media/google_logo.png';
import 'styles/index.css';
import Nave from 'media/Nave.png';


function Index() {
  return (
          <section>
            <br /><br /><br />
            <div class="bg-light p-5 rounded mt-3">
            <section id="pantalla_dividida">
              <div class="izquierda">
                  <h1>INTEGRANTES</h1>

                  <h3>Yenni Delgado Balaguera</h3>
                  <h3>Juan David Martinez</h3>
                  <h3>Mayerlín Mondol Cortés</h3>
                  <h3>Hamilton Hernandez Loaiza</h3>
                  <h3>Héctor Alexander Martínez</h3>
                  <h3>Jhojan Smith Sanchez</h3>
              
                  
                    <img src={Nave} alt="" />
                  
              </div>
            
            <div class="cuadrado">
                <p>Este es un aplicativo para la administracion de ventas 
                     hace parte del proyecto MISION TIC 2022</p>

                     <h2>Iniciar Sesion</h2>

                     <a class="btn btn-lg btn-primary" href="/admin" role="button">
                <img className="logo-google" src={Google} alt='Logo Google' />
                Continua con Google
              </a>
            </div>

        </section>
              
            </div>
          </section>
  );
}

export default Index;

