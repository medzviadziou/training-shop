import React from 'react';

import women from './img/women_left.png'
import men from './img/men_right.png'

import './subscribe.scss'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='subscribe__wrap contain'>
                <div className='subscribe__block'>
                    <h3 className='subscribe__title'>Special Offer</h3>
                    <p className='subscribe__text'>Subscribe <br/> And <span className='subscribe__text subscribe__text--color'>Get 10% Off</span></p>
                    <input className='subscribe__input' placeholder='Enter your email'/>
                    <button className='subscribe__button' type='button'>Subscribe</button>
                </div>
                <img className='subscribe__img subscribe__img--left' src={women} alt="the lady in the hat"/>
                <img className='subscribe__img subscribe__img--right' src={men} alt="dandy man"/>
            </div>
        </div>
    );
};

export default Subscribe;