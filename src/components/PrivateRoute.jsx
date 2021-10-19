import {React} from 'react'
// import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    //Get informacion sobre la autenticación
    // useEffect(() => {
    //   console.log('user ', user)
    //   console.log('isAuthenticated ', isAuthenticated)
    //   console.log('isLoading ', isLoading)
    // }, [user, isAuthenticated, isLoading])

    return <>{children}</>

//     opc 1 Mensaje que no esta autorizado e invitacion al login
//    return isAuthenticated ? <>{children}</> : 
//         <>
//             <div>No estas autorizado para ver este sitio</div>
//             <Link to="/">[Inicia sesión...]</Link>
//         </>

}

export default PrivateRoute
