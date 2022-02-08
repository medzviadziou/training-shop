import React from 'react';

const Product = (props) => {
    return (
        <div className='products__item'>
            <img className='products__img' src={props.item.photo} alt=""/>
            <h3 className='products__title'>{props.item.title}</h3>
            <div>
                <span className='products__price'>{props.item.price}</span>
                <span className='products__star'>{props.item.star}</span>
            </div>
        </div>
    );
};

export default Product;