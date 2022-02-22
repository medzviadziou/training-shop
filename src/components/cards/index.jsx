import React from 'react';
import './cards.scss'
import {Link} from "react-router-dom";
import Rating from "../rating";


const Cards = ({card: {name, price, images, rating, discount, id}, productType}) => {

    return (
        <div className='cards__item'>
            <Link to={`/${productType}/${id}`} data-test-id={`clothes-card-${productType}`}>
                {discount && <span className='cards__sale'>{discount}</span>}
                <img className='cards__img' src={`https://training.cleverland.by/shop${images[0]?.url}`} alt="clothes"/>
                <h3 className='cards__title'>{name}</h3>
                <div className='cards__info'>
                    <span
                        className='cards__price'>$ {Math.round(price + (parseInt(discount ?? 0) * (price / 100)))} {discount &&
                    <span className='cards__price cards__price--sale'>$ {price}</span>}</span>
                    <Rating rating={rating}/>
                </div>
            </Link>
        </div>
    );


};

export default Cards;