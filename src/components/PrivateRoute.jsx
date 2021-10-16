import {React, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading'
// import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {  isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently  } = useAuth0();

    //Get informacion sobre la autenticación
    // useEffect(() => {
    //   console.log('user ', user)
    //   console.log('isAuthenticated ', isAuthenticated)
    //   console.log('isLoading ', isLoading)
    // }, [user, isAuthenticated, isLoading])

    //for token
    useEffect(() => {

        const fetchAuth0Token = async ()=>{

            // si se quieren hacer validaciones con el token:
            // if (localStorage.getItem('token')) {
            //   // validar fecha de expiracion del token
            // } else {
            //   // pedir token
            // }

            const accessToken = await getAccessTokenSilently({
                audience: `api-auth-apolo2-ventas-app`,
                // scope: "read:current_user", //NO utilizando aun porque no no se estan utilizando roles
            })

            localStorage.setItem('token', accessToken)
            console.log(accessToken);
        }

        if (isAuthenticated) fetchAuth0Token() 

    }, [isAuthenticated , getAccessTokenSilently ])

    if (isLoading) return <ReactLoading type='cylon' color='abc123' height={'10%'} width={'10%'} />

    // opc 2, cargando directamente el login al no estar autorizado
    if (!isAuthenticated) return loginWithRedirect()
    return <>{children}</>

//     opc 1 Mensaje que no esta autorizado e invitacion al login
//    return isAuthenticated ? <>{children}</> : 
//         <>
//             <div>No estas autorizado para ver este sitio</div>
//             <Link to="/">[Inicia sesión...]</Link>
//         </>

}

export default PrivateRoute
