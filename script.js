import React from "react";
import ReactDOM from "react-dom/client";

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Restaurant Card
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png"
      />
      <h3>Meghana Foods</h3>
      <p>Biryani, North Indian, Asian</p>
      <p>4.4 ⭐</p>
      <p>38 minutes</p>
    </div>
  );
};

// Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        <RestaurantCard />
         <RestaurantCard />
          <RestaurantCard />
           <RestaurantCard />
            <RestaurantCard />
             <RestaurantCard />
              <RestaurantCard />
               <RestaurantCard />
                <RestaurantCard />
                 <RestaurantCard />
                  <RestaurantCard />
                   <RestaurantCard />
      </div>
    </div>
  );
};

// App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
};




const Footer = () => {
  return (
    <div className="footer">
      <h4>© 2026 Food App</h4>
      <p>Made with ❤️ by Vishal Maurya</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);