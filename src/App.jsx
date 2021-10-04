<<<<<<< HEAD
import PrivateLayout from "layouts/PrivateLayout";
import PublicLayout from "layouts/PublicLayout";
import Admin from "pages/admin/Index";
import Productos from "pages/admin/Productos";
import Ventas from "pages/admin/Ventas";
=======
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Admin from 'pages/admin/Index';
import Productos from 'pages/admin/Productos';
import Ventas from 'pages/admin/Ventas';

import Index from 'pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import Usuarios from 'pages/admin/Usuarios';
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a

import Index from "pages";
import LoginFormInfoPage from "pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/styles.css";
import Usuarios from "pages/admin/Usuarios";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={["/admin", "/admin/productos", "/admin/ventas"]}>
            <PrivateLayout>
              <Switch>
                <Route path="/admin/productos">
                  <Productos />
                </Route>
                <Route path="/admin/ventas">
                  <Ventas />
                </Route>
                <Route path="/admin/usuarios">
                  <Usuarios />
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
<<<<<<< HEAD
          <Route path={["/login"]}>
=======
          {/* <Route path={['/login']}>
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a
            <PublicLayout>
              <Switch>
                <Route path="/login">
                  <LoginFormInfoPage />
                </Route>
              </Switch>
            </PublicLayout>
<<<<<<< HEAD
          </Route>
          <Route path={["/"]}>
=======
          </Route> */}
          <Route path={['/']}>
>>>>>>> 5637c6b522b85c1294fa6a4c82f64506a6ac0d9a
            <PublicLayout>
              <Switch>
                <Route path="/">
                  <Index />
                </Route>
              </Switch>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
