import React from 'react';

import women from './img/preview_women.jpg'
import men from './img/preview_men.jpg'
import accessories from './img/preview_accessories.jpg'

import './preview.scss'
import Slider from "../slider/slider";


const Preview = () => {
    return (
        <div className='preview'>
            <div className='preview__wrap contain'>
                <div className='preview__slider'><Slider/></div>
                <div className='preview__item'>
                    <img src={women} alt="women"/>
                    <span className="preview__banner">Women</span>
                </div>
                <div className='preview__item'>
                    <img src={men} alt="men"/>
                    <span className="preview__banner">Men</span>
                </div>
                <div className='preview__item preview--big'>
                    <img src={accessories} alt="accessories"/>
                    <span className="preview__banner">Accessories</span>
                </div>
            </div>
        </div>
);
};

export default Preview;