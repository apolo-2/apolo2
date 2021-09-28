import React from 'react';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

const PrivateLayout = ({ children }) => {
  return (
    <div className="columnContainer">
      <div className='flexContainer'>
          {/* <Header /> */}
          <Sidebar />
          <main>{children}</main>
      </div>
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