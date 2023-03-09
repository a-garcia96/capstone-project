import React from 'react'

import image from "../assets/restaurantfood.jpg";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__row">
          <div className="col">
            <img src={image} alt="" />
          </div>
          <div className="col">
            <h3>Navigation</h3>
            <ul className="nav__list--footer">
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
          </div>
          <div className="col">
            <h3>Contact</h3>
          </div>
          <div className="col">
            <h3>Social Media</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer