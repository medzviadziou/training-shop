import React from 'react';
/*import {Link} from "react-router-dom";*/

const Nav = () => {
    return (
        <nav className='nav'>
         {/*   <Link to='/'>CleverShop</Link>*/}
            <ul className='nav__list'>
                <li className='nav__item'>linkAbout Us</li>
                <li className='nav__item'>Women</li>
                <li className='nav__item'>Men</li>
                <li className='nav__item'>Beauty</li>
                <li className='nav__item'>Accessories</li>
                <li className='nav__item'>Blog</li>
                <li className='nav__item'>Contact</li>
            </ul>
            <ul className='nav__block'>
                <li className='nav__ico'><img src="" alt="search"/></li>
                <li className='nav__ico'><img src="" alt="globe"/></li>
                <li className='nav__ico'><img src="" alt="user"/></li>
                <li className='nav__ico'><img src="" alt="cart"/></li>
            </ul>
        </nav>
    );
};

export default Nav;