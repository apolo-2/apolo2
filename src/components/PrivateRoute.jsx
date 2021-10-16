import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    // useEffect(() => {
    //   console.log('user ', user)
    //   console.log('isAuthenticated ', isAuthenticated)
    //   console.log('isLoading ', isLoading)
    // }, [user, isAuthenticated, isLoading])

    if (isLoading) return <div>Loading ...</div>
   return isAuthenticated ? <>{children}</> : 
        <>
            <div>No estas autoizado para ver este sitio</div>
            <Link to="/">[Inicia sesión...]</Link>
        </>
}

export default PrivateRoute
