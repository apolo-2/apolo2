import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {  isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    // useEffect(() => {
    //   console.log('user ', user)
    //   console.log('isAuthenticated ', isAuthenticated)
    //   console.log('isLoading ', isLoading)
    // }, [user, isAuthenticated, isLoading])

    if (isLoading) return <div>Loading ...</div>

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
