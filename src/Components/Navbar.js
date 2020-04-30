import React from 'react';
import NavLinks from './NavLinks';

import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <div className='nav-logo'>
        <img
          src='/img/background-material-design-for-smart-tech-logo-png_87835.jpg'
          alt=''
        />
      </div>
      <div className='nav-links'>
        <NavLinks />
        {/* Drop Down Menu Once logged in */}
      </div>
    </nav>
  );
}

export default Navbar;
