// import { Link } from 'react-router-dom';

function LoginForm({ imagen }) {
  return (
    <div idName="loginForm" class="text-center">
      <span>Esto es un ejemplo de un componente dentro de una pagina.</span>
      <main className='form-signin'>
        <form>
          <img className='mb-4' src={imagen} alt='' width='120'  />
          <h1 className='h4 mb-3 fw-normal'>Inicia sesión</h1>
      
          <div className='form-floating'>
            <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
            <label for='floatingInput'>Email</label>
          </div>
          <div className='form-floating'>
            <input type='password' className='form-control' id='floatingPassword' placeholder='Contraseña' />
            <label for='floatingPassword'>Contraseña</label>
          </div>
      
          <div className='checkbox mb-3'>
            <label>
              <input type='checkbox' value='remember-me' /> Recordar usuario
            </label>
          </div>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>Ingresar</button>
          <p className='mt-5 mb-3 text-muted'>&copy; 2021 Equipo Apolo2</p>
        </form>
      </main>
    </div>
  );
}

export default LoginForm;
