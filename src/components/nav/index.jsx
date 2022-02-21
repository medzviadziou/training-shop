import React from 'react';
import './nav.scss'
import {Link} from "react-router-dom";
import MENU from "../../data/menuList";
import classNames from "classnames";

const Nav = (props) => {


    return (
        <nav className='nav'>
            <div className={classNames('nav__overlay', {'nav__overlay--open':props.isMenuOpen})}> </div>
            <ul className={classNames('nav__list', {'nav__list--open':props.isMenuOpen})} data-test-id='burger-menu'>
                {MENU.map(({id,name,path}) => {
                    return <li key={id} className='nav__item'><Link to={`/${path}`} data-test-id={`menu-link-${path}`}>{name}</Link></li>
                })}
            </ul>
        </nav>
    );
};

export default Nav;