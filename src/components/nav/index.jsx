import React from 'react';

import './nav.scss'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'><Link to='/'>About Us</Link></li>
                <li className='nav__item'><Link to='/women'>Women</Link></li>
                <li className='nav__item'><Link to='/men'>Men</Link></li>
                <li className='nav__item'><Link to='/'>Beauty</Link></li>
                <li className='nav__item'><Link to='/'>Accessories</Link></li>
                <li className='nav__item'><Link to='/'>Blog</Link></li>
                <li className='nav__item'><Link to='/'>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;