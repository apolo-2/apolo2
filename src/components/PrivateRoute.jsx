import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    useEffect(() => {
      console.log('user ', user)
      console.log('isAuthenticated ', isAuthenticated)
      console.log('isLoading ', isLoading)
    }, [user, isAuthenticated, isLoading])
    
    return (
        <div>
            
        </div>
    )
}

export default PrivateRoute
