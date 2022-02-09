import React from 'react';

import './nav.scss'

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>About Us</li>
                <li className='nav__item'>Women</li>
                <li className='nav__item'>Men</li>
                <li className='nav__item'>Beauty</li>
                <li className='nav__item'>Accessories</li>
                <li className='nav__item'>Blog</li>
                <li className='nav__item'>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;