import { useUser } from "context/userContext";
import React from "react";

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();
  console.log("Rol de usuario:", userData.rol);
  if (roleList.includes(userData.rol)) {
    return children;
  }

  return (
    <div class="bg-dark text-white">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-2 text-center">
            <p>
              <i class="fa fa-exclamation-triangle fa-5x"></i>
            </p>
          </div>
          <div class="col-md-10">
            <h3>OPPSSS!!!! Lo sentimos...</h3>
            <p>
              No estas autorizado para ver este sitio.
              <br />
              Intenta con otro usuario.
              <br />
            </p>
            <p>Equipo APOLO 2 &#129299;</p>
            <a class="btn btn-danger" href={`${window.location.origin}/Admin`}>
              Volver
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute;
