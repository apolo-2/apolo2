import "styles/header.css";
import Mision from "media/logo_misiontic.png";
import Apolo2 from "media/APOLO_2.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Apolo2} alt="" />
      </div>
      <div className="logo2">
        <img src={Mision} alt="" />
      </div>
    </header>
  );
};
export default Header;
