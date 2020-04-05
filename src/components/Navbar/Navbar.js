import React from 'react';
import './Navbar.scss';

// holds display order of each view and icons
function Navbar() {
  return (
    <div className="navbar">
      <a href='www.brucehong.com'>
        Home
      </a>
      <a href='www.brucehong.com'>
        About
      </a> 
      <a href='www.brucehong.com'>
        Experience
      </a>
      <a href='www.brucehong.com'>
        Projects
      </a>
    </div>
  );
}

export default Navbar;
