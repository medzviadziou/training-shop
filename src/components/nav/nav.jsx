import React from 'react';
import logo from './img/logo.svg'

import search from './img/search.svg'
import globe from './img/globe.svg'
import user from './img/user.svg'
import cart from './img/cart.svg'

import './nav.scss'

const Nav = () => {
    return (
        <nav className='nav'>
            <img className='nav__logo' src={logo} alt="CleverShop"/>
            <ul className='nav__list'>
                <li className='nav__item'>About Us</li>
                <li className='nav__item'>Women</li>
                <li className='nav__item'>Men</li>
                <li className='nav__item'>Beauty</li>
                <li className='nav__item'>Accessories</li>
                <li className='nav__item'>Blog</li>
                <li className='nav__item'>Contact</li>
            </ul>
            <ul className='nav__block'>
                <li className='nav__ico'><img src={search} alt="search"/></li>
                <li className='nav__ico'><img src={globe} alt="globe"/></li>
                <li className='nav__ico'><img src={user} alt="user"/></li>
                <li className='nav__ico'><img src={cart} alt="cart"/></li>
            </ul>
        </nav>
    );
};

export default Nav;