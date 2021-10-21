import React, { useState } from 'react';
import PrivateLayout from "layouts/PrivateLayout";
import PublicLayout from "layouts/PublicLayout";
import Admin from "pages/admin/Index";
import Productos from "pages/admin/Productos";
import Ventas from "pages/admin/Ventas";
import Index from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "styles/styles.css";
import Usuarios from "pages/admin/Usuarios";
import Usuarios2 from "pages/admin/Usuarios2";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from 'context/userContext';
import PrivateRoute from 'components/PrivateRoute';

window.uri='https://thawing-thicket-08307.herokuapp.com/'

function App() {

  const [userData, setUserData] = useState({});
  console.log(window.location.origin)
  return (

    <Auth0Provider
    domain="misiontic-apolo2-appventas.us.auth0.com"
    clientId="DNOD2uQnF7gGDbJU9RnFt2C4shNBTUUh"
    //redirectUri={window.location.origin}
    redirectUri={window.location.origin+'/admin'}
    audience =  'api-auth-apolo2-ventas-app'
    
    >
      <div className="App">
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route path={["/admin", "/admin/productos", "/admin/ventas"]}>
                <PrivateLayout>
                  <Switch>
                    <Route path="/admin/productos">
                      <PrivateRoute roleList={['admin', 'vendedor']}>
                        <Productos />
                      </PrivateRoute>
                    </Route>
                    <Route path="/admin/ventas">
                      <PrivateRoute roleList={['admin', 'vendedor']}>
                        <Ventas />
                      </PrivateRoute>
                    </Route>
                    <Route path="/admin/usuarios">
                      <PrivateRoute roleList={['admin']}>
                        <Usuarios />
                        </PrivateRoute>
                    </Route>
                    <Route path="/admin/usuarios2">
                      <PrivateRoute roleList={['admin']}>
                        <Usuarios2 />
                      </PrivateRoute>
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
        </UserContext.Provider>
      </div>
    </Auth0Provider>
    
  );
}

export default App;
