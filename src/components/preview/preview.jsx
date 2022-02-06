import React from 'react';

import slider from './img/preview_slider.jpg'
import women from './img/preview_women.jpg'
import men from './img/preview_men.jpg'
import accessories from './img/preview_accessories.jpg'

import './preview.scss'



const Preview = () => {
    return (
        <div className='preview'>
            <div className='preview__wrap'>
            <img className='preview__slider' src={slider} alt="slider"/>
            <img src={women} alt="women"/>
            <img src={men} alt="men"/>
            <img className='preview__accessories' src={accessories} alt="accessories"/>
            </div>
        </div>
    );
};

export default Preview;