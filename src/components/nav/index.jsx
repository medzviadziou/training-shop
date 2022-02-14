import React from 'react';

import './nav.scss'
import {Link} from "react-router-dom";
import menu from "../../data/menuList";

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list' data-test-id='menu'>
                {menu.map((item) => {
                    return <li className='nav__item'><Link key={item.id} to={`/${item.path}`} data-test-id={`menu-link-${item.path}`}>{item.title}</Link></li>
                })}
            </ul>
        </nav>
    );
};

export default Nav;