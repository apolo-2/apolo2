// import logo from 'media/apolo_logo.png';

const Header = () => {
  return (
        /*<header>
            <small> <a href="./"><h5>🚀 Grupo Apolo2</h5></a> </small>   
        </header>*/
 <nav class="w-100 d-flex px-4 py-2 mb-4 shadow-sm">
        <button class="btn py-0 d-lg-none" id="open-sidebar">
          <span class="bi bi-list text-primary h3"></span>
        </button>
        <div class="dropdown ml-auto">
          <button class="btn py-0 d-flex align-items-center" id="logout-dropdown" data-toggle="dropdown" aria-expanded="false">
            <span class="bi bi-person text-primary h4"></span>
            <span class="bi bi-chevron-down ml-1 mb-2 small"></span>
          </button>
          <div class="dropdown-menu dropdown-menu-right border-0 shadow-sm" aria-labelledby="logout-dropdown">
            <a class="dropdown-item" href="#">Logout</a>
            <a class="dropdown-item" href="#">Settings</a>
          </div>
        </div>
      </nav>
  );
};

export default Header;
