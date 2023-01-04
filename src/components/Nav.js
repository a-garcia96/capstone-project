import React from 'react'
import Logo from '../assets/Logo.svg'
import Menu from '../assets/hamburgerMenuIcon.svg'

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='nav__header'>
                <img src={Logo} alt="Little Lemon Logo" className='nav__logo' />
                <img src={Menu} alt="menu button" />
            </div>
            <ul className='nav__list'>
                <li className='nav__item'><a className='nav__link'>Home</a></li>
                <li className='nav__item'><a className='nav__link'>About</a></li>
                <li className='nav__item'><a className='nav__link'>Menu</a></li>
                <li className='nav__item'><a className='nav__link'>Reservations</a></li>
                <li className='nav__item'><a className='nav__link'>Order Online</a></li>
                <li className='nav__item'><a className='nav__link'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav