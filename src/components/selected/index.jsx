import React from 'react';
import './selected.scss'
import trash from './img/trash.svg'
import plus from './img/plus.svg'
import minus from './img/minus.svg'
import {removeToCart} from "../../store/cartSlice";
import {useDispatch} from "react-redux";

const Selected = (props) => {
    const dispatch = useDispatch();


   const priceFinal = Math.round(props.cart.price + parseInt(props.cart.discount ?? 0) * (props.cart.price / 100))

    return (
        <div className='selected'>
            <div className='selected__preview'>
                { props.cart.discount && <span className='selected__sale'>{ props.cart.discount}</span>}
                <img className='selected__img' src={`https://training.cleverland.by/shop${props.cart.image}`} alt=""/>
            </div>
            <div  className='selected__block'>
                <div className='selected__text'>
                    <h3 className='selected__name'>{props.cart.name}</h3>
                    <p className='selected__characteristic'><span>{props.cart.color}</span><span>{props.cart.size}</span></p>
                </div>
                <div className='selected__manage'>
                    <div className='selected__quantity'>
                        <button className='selected__button'><img src={minus} alt=""/></button>
                        <span  className='selected__number'>1</span>
                       <button  className='selected__button'><img src={plus} alt=""/></button>
                    </div>
                    <span className='selected__price'>$ {priceFinal} { props.cart.discount && <span className='selected__price selected__price--sale'>$ { props.cart.price}</span>}</span>
                    <img src={trash} onClick={()=>dispatch(removeToCart(props.cart))} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Selected;