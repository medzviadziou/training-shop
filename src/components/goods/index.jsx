import React from 'react';
import './goods.scss'
import classNames from "classnames";
import Selected from "../selected";
import {useSelector} from "react-redux";
import Total from "../total";

const Goods = () => {

    const cart = useSelector(state => state.cart.cart)
    let clear = useSelector(state => state.cart.cart).length < 1;
    let total = 0

    cart.forEach((item) => {
        total = total + Math.round((item.price + parseInt(item.discount ?? 0) * (item.price / 100)) * item.count)
    })

    return (
        <div className='goods'>
            <div className='goods__selected'>
                <div className={classNames('goods__text', {'goods__text--none': !clear})}>Sorry, your cart is empty</div>
                {cart.map((cart, index) => {
                    return <Selected data-test-id='cart-card' cart={cart} key={index}/>
                })}
            </div>
            {!clear && <Total total={total}/>}
        </div>
    );
};

export default Goods;