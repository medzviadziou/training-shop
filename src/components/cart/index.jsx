import React, {useState} from 'react';
import './cart.scss'
import cross from './img/x.svg'
import classNames from "classnames";
import Goods from "../goods";
import {useSelector} from "react-redux";
import Delivery from "../delivery";
import Payment from "../payment";



const Cart = (props) => {

    function closeCart() {
        props.setCheckOpenCart(false)
        document.body.style.overflow = "";
    }
    function next() {
        if(cartList==='goods'){
            setCartList('delivery')
        }
    }
    function back(){
        if (cartList==='goods'){
            closeCart()
        }else if(cartList==='delivery'){
            setCartList('goods')
        }else if(cartList==='pay'){
            setCartList('delivery')
        }
    }

    let clear = useSelector(state => state.cart.cart).length < 1;

    const [cartList, setCartList]= useState('goods')

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
                        <li className={classNames('cart__item', {'cart__item--active': cartList==='goods'})}>Item in Cart</li>
                        <li className='cart__item cart__item--decor'>/</li>
                        <li className={classNames('cart__item', {'cart__item--active': cartList==='delivery'})}>Delivery Info</li>
                        <li className='cart__item cart__item--decor'>/</li>
                        <li className={classNames('cart__item', {'cart__item--active': cartList==='pay'})}>Payment</li>
                    </ul>
                </menu>
                <div className='cart__wrap '>
                    {cartList==='goods' && <Goods props={props.setCheckOpenCart}/>}
                    {cartList==='delivery' && <Delivery cartList={cartList} setCartList={setCartList}/>}
                    {cartList==='pay' && <Payment/>}
                    <div className='cart__contain'>
                        {cartList==='goods' && <button className={classNames('cart__button', {'cart__button--none': clear})} onClick={(next)}  form="data">Further</button>}
                        <button className={classNames('cart__button cart__button--light', {'cart__button--none': clear})} onClick={(back)}>View Cart</button>
                        <button className={classNames('cart__button cart__button--back', {'cart__button--none': !clear})} onClick={(closeCart)}>BACK TO SHOPPING</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;