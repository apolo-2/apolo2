import ListadoVentas from 'components/ListadoVentas';
// import logo from 'media/logo.png';
// import borderCollie from 'media/borderCollie.jpg';
// import rhodesian from 'media/rhodesian.jpg';
 import logoApolo from 'media/apolo_logo.png';


function Index() {
  return (
    <div>
      <header>
        <h1>Ejemplo pantalla login</h1>
        <br />
      </header>
      <main>
        <div class="login-page">
            <div class="form">
            <form class="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
            </form>
            </div>
        </div>
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
  );
}

export default Index;