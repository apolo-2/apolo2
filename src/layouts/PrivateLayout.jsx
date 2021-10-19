import {React, useEffect} from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import PrivateRoute from "components/PrivateRoute";
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading'
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';
// import Footer from "components/Footer";

const PrivateLayout = ({ children }) => {
  
  const {  isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently  } = useAuth0();
  const { setUserData } = useUser();
    //for token
    useEffect(() => {
  
      const fetchAuth0Token = async ()=>{
  
          // si se quieren hacer validaciones con el token:
          // if (localStorage.getItem('token')) {
          //   // validar fecha de expiracion del token
          // } else {
          //   // pedir token
          // }
  
          //1. pedir token a auth0
          const accessToken = await getAccessTokenSilently({
              audience: `api-auth-apolo2-ventas-app`,
              // scope: "read:current_user", //NO utilizando aun porque no no se estan utilizando roles
          })
  
          // 2. recibir token de auth0
          localStorage.setItem('token', accessToken)
          console.log(accessToken);
  
          // 3. enviarle el token al backend
          await obtenerDatosUsuario(
              (response) => {
                console.log('response con datos del usuario', response);
                setUserData(response.data);
              },
              (err) => {
                console.log('err', err);
              }
          );
      }
  
      if (isAuthenticated) 
          fetchAuth0Token() 
  
  }, [isAuthenticated , getAccessTokenSilently ])

  if (isLoading) return <ReactLoading type='cylon' color='abc123' height={'10%'} width={'10%'} />

  // opc 2, cargando directamente el login al no estar autorizado
  if (!isAuthenticated) 
      return loginWithRedirect()
  
  return (
    // <PrivateRoute>
      <div>
        <Header />
        <div className="columnContainer">
          <div className="flexContainer">
            <Sidebar />
            <main>{children}</main>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    // </PrivateRoute>
  );
};

export default PrivateLayout;
