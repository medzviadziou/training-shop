import React, {useState} from 'react';
import {Link,} from "react-router-dom";
import Nav from "../nav";
import classNames from "classnames";
import {useSelector} from "react-redux";
import Cart from "../cart";

import './panel.scss'
//img
import logo from "./img/logo.svg";
import search from "./img/search.svg";
import globe from "./img/globe.svg";
import user from "./img/user.svg";
import cart from "./img/cart.svg";


const Panel = () => {

    const [isMenuOpen, toggleMenu] = useState(false)

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen)
    }
    const clickHandler = () => {
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        }
        toggleMenuMode();
    };
    const clickClose = () => {
        if (isMenuOpen) {
            document.body.style.overflow = '';
            toggleMenuMode();
        }
    }

    let [checkOpenCart, setCheckOpenCart] = useState(false)

     const openCart =()=> {
        setCheckOpenCart(true)
        document.body.style.overflow = "hidden";
    }

    let quantity = useSelector(state => state.cart.cart).length;

    return (

        <div className='panel contain' onClick={clickClose}>
            <Link to="/" data-test-id='header-logo-link'><img className='panel__logo' src={logo} alt="CleverShop"/></Link>
            <Nav isMenuOpen={isMenuOpen}/>
            <ul className='panel__block'>
                <li className='panel__ico'><img src={search} alt="search" width="24" height="24"/></li>
                <li className='panel__ico'><img src={globe} alt="globe" width="24" height="24"/></li>
                <li className='panel__ico'><img src={user} alt="user" width="24" height="24"/></li>
                <li onClick={(openCart)} data-test-id='cart-button' className='panel__ico panel__cart'><img src={cart} alt="cart" width="24" height="24"/>{quantity>0 && <span className='panel__quantity'>{quantity}</span>}</li>
                <li className='panel__ico panel__ico--display'>
                    <button onClick={clickHandler} className='panel__menu-burger' data-test-id='burger-menu-btn'>
                        <span className={classNames('panel__burger', {'panel__burger--1': isMenuOpen})}> </span>
                        <span className={classNames('panel__burger', {'panel__burger--2': isMenuOpen})}> </span>
                        <span className={classNames('panel__burger', {'panel__burger--3': isMenuOpen})}> </span>
                    </button>
                </li>
            </ul>
            {checkOpenCart &&<Cart checkOpenCart={checkOpenCart} setCheckOpenCart={setCheckOpenCart} />}
        </div>
    );
};

export default Panel;