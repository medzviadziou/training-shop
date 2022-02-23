import React from 'react';
import './reference.scss'
//img
import partner1 from './img/1.png'
import partner2 from './img/2.png'
import partner3 from './img/3.png'
import partner4 from './img/4.png'
import partner5 from './img/5.png'
import partner6 from './img/6.png'
import partner7 from './img/7.png'

const Reference = () => {
    return (
        <div className='reference'>
            <div className='reference__wrap contain'>
                <span className='reference__text'>Copyright © 2032 all rights reserved</span>
                <div className='reference__partner'>
                    <img className='reference__img' src={partner1} alt="stripe"/>
                    <img className='reference__img' src={partner2} alt="aes 256 bit"/>
                    <img className='reference__img' src={partner3} alt="pay pal"/>
                    <img className='reference__img' src={partner4} alt="visa"/>
                    <img className='reference__img' src={partner5} alt="master card"/>
                    <img className='reference__img' src={partner6} alt="discover network"/>
                    <img className='reference__img' src={partner7} alt="american express"/>
                </div>
                <span className='reference__text reference__text--underline'>Clevertec.ru/training</span>

            </div>
        </div>
    );
};

export default Reference;