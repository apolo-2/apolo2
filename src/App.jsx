import PrivateLayout from "layouts/PrivateLayout";
import PublicLayout from "layouts/PublicLayout";
import Admin from "pages/admin/Index";
import Productos from "pages/admin/Productos";
import Ventas from "pages/admin/Ventas";
import Index from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/styles.css";
import Usuarios from "pages/admin/Usuarios";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (

    <Auth0Provider
    domain="misiontic-apolo2-appventas.us.auth0.com"
    clientId="DNOD2uQnF7gGDbJU9RnFt2C4shNBTUUh"
    // redirectUri={window.location.origin}
    redirectUri='http://localhost:3000/admin'
    >
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
    </Auth0Provider>
    
  );
}

export default App;
