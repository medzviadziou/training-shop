import React from 'react';
import './nav.scss'
import {Link} from "react-router-dom";
import MENU from "../../data/menuList";

const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list' data-test-id='menu'>
                {MENU.map(({id,name,path}) => {
                    return <li className='nav__item'><Link key={id} to={`/${path}`} data-test-id={`menu-link-${path}`}>{name}</Link></li>
                })}
            </ul>
        </nav>
    );
};

export default Nav;