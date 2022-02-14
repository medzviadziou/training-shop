import React from 'react';
import './slider.scss'
import next from './img/next.svg'
import prev from './img/previous.svg'

const Slider = (props) => {
    return (
        <div className='slider'>
            <img className='slider__img' src={props.slider} alt="slider"/>
            <button className='slider__arrow slider__arrow-prev'><img src={prev} alt="previous"/></button>
            <button className='slider__arrow slider__arrow-next'><img src={next} alt="next"/></button>
        </div>

    );
};

export default Slider;