import React from 'react';

import './nav.scss'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><Link to='/aboutUs'>About Us</Link></li>
                <li className='nav__item'><Link to='/women'>Women</Link></li>
                <li className='nav__item'><Link to='/men'>Men</Link></li>
                <li className='nav__item'><Link to='/beauty'>Beauty</Link></li>
                <li className='nav__item'><Link to='/accessories'>Accessories</Link></li>
                <li className='nav__item'><Link to='/blog'>Blog</Link></li>
                <li className='nav__item'><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;