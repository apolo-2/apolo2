import Google from "media/google_logo.png";
import "./../index.css";
import Nave from "media/Nave.png";

function Index() {
  return (
    <section>
      <br />
      {/* <br /><br /> */}
      <div className="bg-light p-5 rounded mt-3">
        <section id="pantalla_dividida">
          <div className="izquierda">
            <h2>INTEGRANTES</h2>

            <h5>Yenni Delgado Balaguera</h5>
            <h5>Juan David Martinez</h5>
            <h5>Mayerlín Mondol Cortés</h5>
            <h5>Hamilton Hernandez Loaiza</h5>
            <h5>Héctor Alexander Martínez</h5>
            <h5>Jhojan Smith Sanchez</h5>

            <img src={Nave} alt="" />
          </div>

          <div className="cuadrado">
            <p>
              Este es un aplicativo para la administracion de ventas hace parte
              del proyecto MISION TIC 2022
            </p>

            <h2>Iniciar Sesion</h2>

            <a className="btn btn-lg btn-primary" href="/admin" role="button">
              <img className="logo-google" src={Google} alt="Logo Google" />
              Continua con Google
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Index;
