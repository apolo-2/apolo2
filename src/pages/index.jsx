import Google from "media/google_logo.png";
import "./../index.css";
import Nave from "media/Nave.png";

function Index() {
  return (
    <div class="wrapper">
    <div class="sct brand">
    <div class="izquierda">
        <h1>INTEGRANTES</h1>
        <span>Yenni Delgado Balaguera</span><br />
        <span>Juan David Martinez</span><br />
        <span>Mayerlín Mondol Cortés</span><br />
        <span>Hamilton Hernandez Loaiza</span><br />
        <span>Héctor Alexander Martínez</span><br />
        <span>Jhojan Smith Sanchez</span><br />
        <span><img src={Nave} alt="" /></span>
    </div>
    </div>
    <div class="sct">
      <div class="form">
        <h2>Iniciar Sesion</h2>
        <a class="btn btn-lg btn-primary" href="/admin" role="button">
        <img className="logo-google" src={Google} alt="Logo Google" />
        Continua con Google
        </a>
      </div>
    </div>
</div>

  );
}

export default Index;
