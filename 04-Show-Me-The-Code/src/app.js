import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./images/logo.jpg";

/**
 * Body
 *  Search
 *  Restaurant cards
 *    Restaurant card container
 *      Dishname
 *      Image
 *      Restaurant Name
 *      Rating
 *      Cuisines
 *      Time to Deliver
 * Footer
 *  Copywright
 *  Links
 *  Address
 *  Contact
 *
 */

console.log(`logo is ${logo}`);

// Inline css style example

const styleCard = {
  "backgroundColor": "grey"
}
const RestaurantCard = () => {
  return <div className="restaurant-card" style={styleCard}>
    <h3>Meghna Foods</h3>
  </div>;
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="restaurant-container">
        <RestaurantCard/>
      </div>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" style={{ width: "200px" }} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayoutComponent = () => {
  return (
    <div className="app">
      {/* Header */}
      <HeaderComponent />
      <Body/>
      {/* Body */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
