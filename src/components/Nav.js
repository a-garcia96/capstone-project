import React from "react";
import { useRef } from "react";

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
        <img src={Logo} alt="Little Lemon Logo" className="nav__logo" />
        <button onClick={handleClick}>
          <img src={Menu} alt="menu button" />
        </button>
      </div>
      <ul ref={navRef} className="nav__list">
        <li className="nav__item">
          <a className="nav__link">Home</a>
        </li>
        <li className="nav__item">
          <a className="nav__link">About</a>
        </li>
        <li className="nav__item">
          <a className="nav__link">Menu</a>
        </li>
        <li className="nav__item">
          <a className="nav__link">Reservations</a>
        </li>
        <li className="nav__item">
          <a className="nav__link">Order Online</a>
        </li>
        <li className="nav__item">
          <a className="nav__link">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
