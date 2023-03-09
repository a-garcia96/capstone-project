import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.svg";
import Menu from "../assets/hamburgerMenuIcon.svg";

const Nav = () => {

  const navRef = useRef(null)

  const handleClick = (e) => {
    // console.log(navRef.current);
    const nav = navRef.current;
    const navItemList = document.querySelectorAll(".nav__item")

    nav.classList.toggle("show--navbar")

    navItemList.forEach(navItem => {
      navItem.classList.toggle("show--navItem")
    })
  }

  return (
    <nav className="nav">
      <div className="nav__header">
        <div className="container">
          <img src={Logo} alt="Little Lemon Logo" className="nav__logo" />
          <button onClick={handleClick}>
            <img src={Menu} alt="menu button" />
          </button>
          <ul ref={navRef} className="nav__list--mobile">
            <li className="nav__item">
              <Link to={'/'} className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
              <Link to={"/about"} className="nav__link">About</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link">Menu</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link">Reservations</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link">Order Online</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link">Login</Link>
            </li>
          </ul>
          <ul className="nav__list--desktop">
            <li className="nav__item">
              <Link to={'/'} className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
              <Link to={'/about'} className="nav__link">About</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link">Menu</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link">Reservations</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link">Order Online</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
