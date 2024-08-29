import React,{useState} from 'react';
import { LOGO_URL } from '../utils/constants';

function Header() {
  const[btnName, setBtnName] = useState("Login")

  

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
          <button className='login' 
            onClick={() => { 
              btnName === "Login"  
              ? setBtnName("Logout") 
              : setBtnName("Login") }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header