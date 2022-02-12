import React from 'react';
import starGold from './img/star_gold.svg'
import starGray from './img/star_gray.svg'

import './product.scss'

const Product = (props) => {

    const star = [starGray, starGray, starGray, starGray, starGray,]
    let i = props.item.star
    while (i>0) {
        star.push(starGold)
        star.shift()
        i=i-1
    }

    const sale =(props.item.sale > 0)?' product__item--sale':""

    return (
        <div className={`product__item${sale}`} >
            <img className='product__img' src={props.item.photo} alt=""/>
            <h3 className='product__title'>{props.item.title}</h3>
            <div className='product__info'>
                <span className='product__price'>{props.item.price}</span>
                <span className='product__stars'>
                    <img className='product__star' src={star[4]} alt=""/>
                    <img className='product__star' src={star[3]} alt=""/>
                    <img className='product__star' src={star[2]} alt=""/>
                    <img className='product__star' src={star[1]} alt=""/>
                    <img className='product__star' src={star[0]} alt=""/>
                </span>
            </div>
        </div>
    );
};

export default Product;