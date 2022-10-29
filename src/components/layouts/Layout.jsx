import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';

function Layout() {
   return (
      <div className="wrapper">
         <Header />
         <div className="content">
            <Navbar />
            <Outlet />
         </div>
      </div>
   );
};

export default Layout;