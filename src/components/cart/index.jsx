import React from 'react';
import './cart.scss'
import cross from './img/x.svg'
import PRODUCTS from "../../data/products";
import Selected from "../selected";


const Cart = () => {
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
                <div className='cart__selected cart__contain'>
                    {PRODUCTS['women'].map((card,index) => {
                        if (index<3){
                            return <Selected card={card} key={card.id} productType={'men'}/>
                        }else {
                            return console.log('ok')
                        }

                    })}
                </div>
                <div className='cart__contain'>
                    <button className='cart__button'>Further</button>
                    <button className='cart__button cart__button--light'>View Cart</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;