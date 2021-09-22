import ListadoVentas from 'components/ListadoVentas';
// import logo from 'media/logo.png';
// import borderCollie from 'media/borderCollie.jpg';
// import rhodesian from 'media/rhodesian.jpg';
 import logoApolo from 'media/apolo_logo.png';


function Index() {
  return (
    <div>
      <header>
        <span>Este es el header</span>
      </header>
      <main>
        <section>
          <h1>Login</h1>
          <ul className='loginContainer'>
            <ListadoVentas  imagen={logoApolo} />
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default Index;