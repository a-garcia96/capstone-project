import React from 'react'

import image from "../assets/restaurantfood.jpg";
import { Link } from 'react-router-dom';

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
              <Link to={'/'} className="nav__link">Home</Link>
            </li>
            <li className="nav__item">
              <Link to={'/about'} className="nav__link">About</Link>
            </li>
            <li className="nav__item">
              <Link to={'/menu'} className="nav__link">Menu</Link>
            </li>
            <li className="nav__item">
              <Link to={'/reservation'} className="nav__link">Reservations</Link>
            </li>
            <li className="nav__item">
              <Link to={'/order'} className="nav__link">Order Online</Link>
            </li>
            <li className="nav__item">
              <Link to={'/login'} className="nav__link">Login</Link>
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