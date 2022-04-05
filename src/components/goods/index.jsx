import React from 'react';
import './goods.scss'
import classNames from "classnames";
import Selected from "../selected";
import {useSelector} from "react-redux";

const Goods = () => {

    const cart = useSelector(state => state.cart.cart)
    let clear = useSelector(state => state.cart.cart).length < 1;
    let total = 0

    cart.forEach((item) => {
        total = total + Math.round((item.price + parseInt(item.discount ?? 0) * (item.price / 100)) * item.count)
    })

    return (
        <>
            <div className='goods__selected goods__contain'>
                <div className={classNames('goods__text goods__contain', {'goods__text--none': !clear})}>Sorry, your cart is empty</div>
                {cart.map((cart, index) => {
                    return <Selected data-test-id='cart-card' cart={cart} key={index}/>
                })}
            </div>
            <div className={classNames('goods__payment goods__contain', {'goods__payment--none': clear})}><span className='goods__total'>Total</span><span className='goods__total--bold'> $ {total}</span></div>
        </>
    );
};

export default Goods;