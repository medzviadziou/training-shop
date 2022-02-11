import React from 'react';
import {Link,} from "react-router-dom";
import './panel.scss'

import logo from "./img/logo.svg";
import search from "./img/search.svg";
import globe from "./img/globe.svg";
import user from "./img/user.svg";
import cart from "./img/cart.svg";

import Nav from "../nav";


const Panel = () => {
    return (
        <div className='panel contain'>
            <Link to="/" className='header-nav-logo' data-test-id='header-logo-link'><img className='panel__logo' src={logo} alt="CleverShop"/></Link>
            <Nav/>
            <ul className='panel__block'>
                <li className='panel__ico'><img src={search} alt="search"/></li>
                <li className='panel__ico'><img src={globe} alt="globe"/></li>
                <li className='panel__ico'><img src={user} alt="user"/></li>
                <li className='panel__ico panel__cart'><img src={cart} alt="cart"/></li>
            </ul>
        </div>
    );
};

export default Panel;