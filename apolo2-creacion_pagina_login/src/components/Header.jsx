// import logo from 'media/apolo_logo.png';
import 'styles/Style_header.css';
import Mision from 'media/logo_misiontic.png';
import Apolo2 from 'media/APOLO_2.png';

const Header = () => {
  return (
        <header>
        <div class="logo">
            <img src={Apolo2} alt="" />
        </div>
        <div class="logo2">
            <img src={Mision} alt="" />
        </div>
        </header>
  );
};

export default Header;

