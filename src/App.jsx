import PrivateLayout from "layouts/PrivateLayout";
import PublicLayout from "layouts/PublicLayout";
import Admin from "pages/admin/Index";
import Productos from "pages/admin/Productos";
import Ventas from "pages/admin/Ventas";

import Index from "pages";
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
          <Route path={["/"]}>
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
