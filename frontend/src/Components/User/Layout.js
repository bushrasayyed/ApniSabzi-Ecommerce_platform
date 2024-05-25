// Layout component (Layout.js)
import React from 'react';
import Navbar from './Navbar';  
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
   <div style={{ paddingTop: '20px' }}>
    <Navbar />
    <div style={{ marginTop: '60px' }}>{children}</div> 
    <Footer />
    </div>
  </>
);

export default Layout;
