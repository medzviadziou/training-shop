import React, {useState} from 'react';
import {Link,} from "react-router-dom";
import './panel.scss'

import logo from "./img/logo.svg";
import search from "./img/search.svg";
import globe from "./img/globe.svg";
import user from "./img/user.svg";
import cart from "./img/cart.svg";

import Nav from "../nav";
import classNames from "classnames";


const Panel = () => {


    const [isMenuOpen, toggleMenu] = useState(false)

    function toggleMenuMode () {
        toggleMenu(!isMenuOpen)
    }
    const clickHandler = () => {
        toggleMenuMode();
    };

    return (
        <div className='panel contain'>
            <Link to="/" data-test-id='header-logo-link'><img className='panel__logo' src={logo} alt="CleverShop"/></Link>
            <Nav className='panel__nav' />
            <ul className='panel__block'>
                <li className='panel__ico'><img src={search} alt="search" width="24" height="24" /></li>
                <li className='panel__ico'><img src={globe} alt="globe" width="24" height="24" /></li>
                <li className='panel__ico'><img src={user} alt="user" width="24" height="24" /></li>
                <li className='panel__ico panel__cart'><img src={cart} alt="cart" width="24" height="24" /></li>
                <li className='panel__meu-burger'><span className={classNames('panel__burger', { 'panel__burger--open': isMenuOpen })} onClick={clickHandler}> </span></li>
            </ul>
        </div>
    );
};

export default Panel;