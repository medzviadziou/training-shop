import React from 'react';
import slider from './img/slider.jpg'


import './slider.scss'
import next from './img/next.svg'
import prev from './img/previous.svg'

const Slider = () => {
    return (
        <div className='slider'>
            <img className='slider__img' src={slider} alt="slider"/>
            <span className='slider__arrow slider__arrow-prev'><img src={prev} alt="previous"/></span>
            <span className='slider__arrow slider__arrow-next'><img src={next} alt="next"/></span>
            <div className="slider__banner">
                <h3 className="slider__title">BANNER</h3>
                <p className="slider__text">YOUR TITLE TEXT</p>
            </div>
        </div>

    );
};

export default Slider;