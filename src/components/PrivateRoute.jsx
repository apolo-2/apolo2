import { useUser } from 'context/userContext';
import React from 'react';
import { Link } from 'react-router-dom';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();
    console.log('Rol de usuario:', userData.rol);
  if (roleList.includes(userData.rol)) {
    return children;
  }

  return <>
            <div>No estas autorizado para ver este sitio</div>
            <Link to="/">[Inicia sesión...]</Link>
        </>;
};

export default PrivateRoute;