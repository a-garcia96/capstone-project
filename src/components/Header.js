import React from "react";
import image from "../assets/restaurantfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__col-1">
          <div className="container"></div>
          <h1 className="header__title">Little Lemon</h1>
          <h2 className="header__location">Chicago</h2>
          <p className="header__text">
            We are a family owned mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button className="btn header__ctaBtn"><a href="">Reserve a Table</a></button>
        </div>
        <div className="header__col-2">
          <div className="header__image"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
