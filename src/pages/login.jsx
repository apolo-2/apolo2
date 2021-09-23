import LoginForm from 'components/LoginForm';
import logoApolo from 'media/apolo_logo.png';

function LoginFormInfoPage() {
    return  (
            <main>
                <LoginForm imagen={logoApolo} />
            </main>
    );
  }
  
  export default LoginFormInfoPage;