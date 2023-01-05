import React from "react";
import image from "../assets/restaurantfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__col-1">
        <h1 className="header__title">Little Lemon</h1>
        <h2 className="header__location">Chicago</h2>
        <p className="header__text">
          We are a family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="header__ctaBtn">Reserve a Table</button>
      </div>
      <div className="header__col-2">
        <img
          className="header__image"
          src={image}
          alt="Bruschetta on a board"
        />
      </div>
    </header>
  );
};

export default Header;
