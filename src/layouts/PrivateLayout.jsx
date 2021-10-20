import {React, useEffect, useState} from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading'
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';
// import Footer from "components/Footer";

const PrivateLayout = ({ children }) => {
  
  const {  isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently  } = useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false)
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
          setLoadingUserInformation(true)
          const accessToken = await getAccessTokenSilently({
              audience: `api-auth-apolo2-ventas-app`,
              // scope: "read:current_user", //NO utilizando aun porque no no se estan utilizando roles
          })
  
          // 2. recibir token de auth0
          localStorage.setItem('token', accessToken)
          console.log('accessToken:',accessToken);
  
          // 3. enviarle el token al backend
          await obtenerDatosUsuario(
              (response) => {
                console.log('response con datos del usuario desde el BE', response);
                setUserData(response.data);
                setLoadingUserInformation(false)
              },
              (err) => {
                console.log('err', err);
                setLoadingUserInformation(false)
              }
          );
      }
  
      if (isAuthenticated) 
          fetchAuth0Token() 
  
  }, [isAuthenticated , getAccessTokenSilently, setUserData ])

  if (isLoading || loadingUserInformation) return <ReactLoading type='cylon' color='abc123' height={'10%'} width={'10%'} />

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
