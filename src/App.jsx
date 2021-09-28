// import Layout from 'layouts/Layout';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';

import Admin from 'pages/admin/Index';
import Productos from 'pages/admin/Productos';
import Ventas from 'pages/admin/Ventas';


import Index from 'pages';
// import ListadoVentasInfoPage from 'pages/Listado-ventas';
import LoginFormInfoPage from 'pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/productos', '/admin/ventas']}>
            <PrivateLayout>
              <Switch>
                <Route path='/admin/productos'>
                  <Productos />
                </Route>
                <Route path='/admin/ventas'>
                  <Ventas />
                </Route>
                <Route path='/admin'>
                  <Admin />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login']}>
            <PublicLayout>
              <Switch>
                <Route path='/login'>
                  <LoginFormInfoPage />
                </Route>
              </Switch>
            </PublicLayout>
          </Route>
          <Route path={['/']}>
            <PublicLayout>
              <Switch>
                <Route path='/'>
                  <Index />
                </Route>
              </Switch>
            </PublicLayout>
          </Route>
        </Switch>
      </Router> 

      {/* Ejemplo Daniel */}
      {/* <Router>
      <Switch>
        <Route path={['/admin', '/admin/vehiculos', '/admin/clientes']}>
          <PrivateLayout>
            <Switch>
              <Route path='/admin/vehiculos'>
                <Vehiculos />
              </Route>
              <Route path='/admin/clientes'>
                <Clientes />
              </Route>
              <Route path='/admin'>
                <Admin />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={['/login', '/registro']}>
          <AuthLayout>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/registro'>
                <Registro />
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        <Route path={['/']}>
          <PublicLayout>
            <Switch>
              <Route path='/'>
                <Index />
              </Route>
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router> */}

    </div>
  );
}

// Version con un solo layout
// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <Layout>
//           <Switch>
//             <Route path='/login'>
//               <LoginFormInfoPage />
//             </Route>
//             <Route path='/listado-ventas'>
//               <ListadoVentasInfoPage />
//             </Route>
//             {/* De ultimo la ruta base */}
//             <Route path='/'>
//               <Index />
//             </Route>
//           </Switch>
//         </Layout>
//       </Router>

//     </div>
//   );
// }

export default App;

