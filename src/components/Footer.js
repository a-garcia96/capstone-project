import React from 'react'

import image from "../assets/restaurantfood.jpg";
import { Link } from 'react-router-dom';

import iconFacebook from '../assets/icon-facebook.png'
import iconInstagram from '../assets/icon-instagram.png'
import iconTwitter from '../assets/icon-twitter.png'
import iconEmail from '../assets/icon-email.png'

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
          <div id='footer__contact' className="col">
            <h3>Contact</h3>
            <div>
              <p>Little Lemon</p>
              <p>123 Main St</p>
              <p>Chicago, IL 60601</p>
            </div>
            <div>
              <p>Phone:(312) 555-1234</p>
              <p>Email: info@littlelemonchicago.com</p>
              <p>Website: www.littlelemonchicago.com</p>
            </div>
            <div>
              <h4>Hours of Operation</h4>
              <p>Monday - Friday: 11:00am - 9:00pm</p>
              <p>Saturday: 10:00am - 10:00pm</p>
              <p>Sunday: 10:00am - 8:00pm</p>
            </div>
          </div>
          <div id='footer__social' className="col">
            <h3>Social Media</h3>
            <div className="row">
              <img src={iconFacebook} alt="" />
              <img src={iconInstagram} alt="" />
              <img src={iconTwitter} alt="" />
              <img src={iconEmail} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer