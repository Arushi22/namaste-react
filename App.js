import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure to import the CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img 
        className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" 
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
  );
};

const ResturantCard = (props) =>{
    return(
        <div className="res-card">
          <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7" />
          <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4>
          <h4>4.4 stars</h4>
          <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              <ResturantCard
                resName="Meghana Foods"
                cuisine="Biryani, North Indian, Asian"
              />
              <ResturantCard
              resName="KGC"
              cuisine="Chicken, Burger, Asian" />
            </div>
        </div>
    )
}
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
