import React from 'react';
import './nav.scss'
import {Link} from "react-router-dom";
import MENU from "../../data/menuList";
import classNames from "classnames";

const Nav = () => {


    return (
        <nav className='nav'>
            <div className={classNames('nav__overlay', {'nav__overlay--open':false})}></div>
            <ul className={classNames('nav__list', {'nav__list--open':false})} data-test-id='menu'>
                {MENU.map(({id,name,path}) => {
                    return <li className='nav__item'><Link key={id} to={`/${path}`} data-test-id={`menu-link-${path}`}>{name}</Link></li>
                })}
            </ul>
        </nav>
    );
};

export default Nav;