import Footer from 'components/Footer';
import Header from 'components/Header';

import React from 'react';

const PublicLayout = ({ children }) => {
  return (
    <div className='mainContainer'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
