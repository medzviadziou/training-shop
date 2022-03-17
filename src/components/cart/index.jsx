import React from 'react';
import './cart.scss'
import cross from './img/x.svg'
import Selected from "../selected";
import {useSelector} from "react-redux";


const Cart = () => {
    const cart = useSelector(state => state.cart.cart)
console.log(cart, "Это карт")
    return (
        <div className='cart'>
            <div className='cart__block'>
                <header className='cart__header cart__contain'>
                    <div className='cart__title'>Shopping Cart</div>
                    <div className='cart__cross'><img src={cross} alt=""/></div>
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
                        {cart.map((cart,index) => {
                            return <Selected  cart={cart} key={index}/>
                        })}
                    </div>
                    <div className='cart__payment cart__contain'><span  className='cart__total'>Total</span><span className='cart__total--bold'> $433.99</span></div>
                    <button className='cart__button cart__contain'>Further</button>
                    <button className='cart__button cart__button--light cart__contain'>View Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;