import React from 'react';
import { LOGO_URL } from '../utils/constants';

function Header() {
  return (
    <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src={LOGO_URL}
        alt="Logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li className="nav-li">Home</li>
        <li className="nav-li">About Us</li>
        <li className="nav-li">Contact Us</li>
        <li className="nav-li">Cart</li>
      </ul>
    </div>
  </div>
  )
}

export default Header