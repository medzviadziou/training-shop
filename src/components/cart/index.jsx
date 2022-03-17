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

    let clear = useSelector(state => state.cart.cart).length<1;

    let total = 0
    cart.forEach((item)=>{
        total=total+Math.round((item.price + parseInt(item.discount ?? 0) * (item.price / 100))*item.count)
    })


    return (
        <div className={classNames('cart', {'cart--open': props.checkOpenCart})}>
            <div className='cart__hidden' onClick={(closeCart)}> </div>
            <div data-test-id='cart' className='cart__block'>
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
                        <div className={classNames('cart__text cart__contain', {'cart__text--none': !clear})}>Sorry, your cart is empty</div>

                        {cart.map((cart, index) => {
                            return <Selected  data-test-id='cart-card' cart={cart} key={index}/>
                        })}
                    </div>
                    <div className={classNames('cart__payment cart__contain', {'cart__payment--none': clear})}><span className='cart__total'>Total</span><span className='cart__total--bold'> $ {total}</span></div>
                    <div className='cart__contain'>
                    <button className={classNames('cart__button', {'cart__button--none': clear})}>Further</button>
                    <button className={classNames('cart__button cart__button--light', {'cart__button--none': clear})} onClick={(closeCart)}>View Cart</button>
                        <button className={classNames('cart__button', {'cart__button--none': !clear})} onClick={(closeCart)}>BACK TO SHOPPING</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;