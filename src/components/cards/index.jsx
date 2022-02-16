import React from 'react';
import './cards.scss'
import {Link} from "react-router-dom";
import Rating from "../rating";



const Cards = ({card: {name, price, images, rating, /*discount,*/ id}, productType}) => {




    return (
        <Link to={`/${productType}/${id}`} data-test-id={`clothes-card-${productType}`}>
{/*         {discount && <span className='cards__sale'>{discount}</span>}*/}
            <img className='cards__img' src={`https://training.cleverland.by/shop${images[0]?.url}`} alt="clothes"/>
            <h3 className='cards__title'>{name}</h3>
            <div className='cards__info'>
                <span className='cards__price'>$ {price}</span>
                <Rating rating={rating}/>
            </div>
        </Link>
    );
};

export default Cards;