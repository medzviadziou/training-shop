import React from 'react';
import './cart.scss'
import cross from './img/x.svg'
import Selected from "../selected";
import {useSelector} from "react-redux";
import classNames from "classnames";


const Cart = (props) => {
    function closeCart() {
        props.setCheckOpenCart(false)
        document.body.style.overflow = "";
    }

    const cart = useSelector(state => state.cart.cart)

    return (
        <div className={classNames('cart', {'cart--open': props.checkOpenCart})}>
            <div className='cart__hidden' onClick={(closeCart)}> </div>
            <div className='cart__block'>
                <header className='cart__header cart__contain'>
                    <div className='cart__title'>Shopping Cart</div>
                    <div onClick={(closeCart)} className='cart__cross'><img src={cross} alt=""/></div>
                </header>
                <menu className='cart__menu cart__contain'>
                    <ul className='cart__list'>
                        <li className='cart__item cart__item--active'>Item in Cart</li>
                        <li className='cart__item cart__item--decor'>/</li>
                        <li className='cart__item'>Delivery Info</li>
                        <li className='cart__item cart__item--decor'>/</li>
                        <li className='cart__item'>Payment</li>
                    </ul>
                </menu>
                <div className='cart__wrap '>
                    <div className='cart__selected cart__contain'>
                        {cart.map((cart, index) => {
                            return <Selected cart={cart} key={index}/>
                        })}
                    </div>
                    <div className='cart__payment cart__contain'><span className='cart__total'>Total</span><span className='cart__total--bold'> $433.99</span></div>
                    <div className='cart__contain'>
                    <button className='cart__button'>Further</button>
                    <button className='cart__button cart__button--light' onClick={(closeCart)}>View Cart</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;