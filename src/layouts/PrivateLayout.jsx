import {React, useEffect} from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
// import Footer from "components/Footer";
import { useAuth0 } from "@auth0/auth0-react";


const PrivateLayout = ({ children }) => {

  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    console.log('user ', user)
    console.log('isAuthenticated ', isAuthenticated)
    console.log('isLoading ', isLoading)
  }, [user, isAuthenticated, isLoading])

  return (
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
  );
};

export default PrivateLayout;

// import React from 'react';
// import Sidebar from 'components/Sidebar';

// const PrivateLayout = ({ children }) => {
//   return (
//     <div className='flex w-screen h-screen'>
//       <div className='flex flex-nowrap h-full w-full'>
//         <Sidebar />
//         <main className='flex w-full bg-blue-500 overflow-y-scroll'>{children}</main>
//       </div>
//     </div>
//   );
// };

// export default PrivateLayout;
