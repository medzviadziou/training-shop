import React from 'react';
import Slider from "../slider";
import './preview.scss'
//img
import women from './img/preview_women.jpg'
import men from './img/preview_men.jpg'
import accessories from './img/preview_accessories.jpg'
import slider from '../../components/slider/img/slider.jpg'


const Preview = () => {

    return (
        <div className='preview'>
            <div className='preview__wrap contain'>
                <div className='preview__slider' data-test-id="main-slider">
                    <Slider slider={slider}/>
                    <div className="preview__banner preview__banner--slider">
                        <h3 className="preview__title">BANNER</h3>
                        <p className="preview__text">YOUR TITLE TEXT</p>
                    </div>
                </div>
                <div className='preview__block'>
                    <div className='preview__list'>
                        <div className='preview__item'>
                            <img className='preview__img' src={women} alt="women"/>
                            <span className="preview__banner">Women</span>
                        </div>
                        <div className='preview__item'>
                            <img className='preview__img' src={men} alt="men"/>
                            <span className="preview__banner">Men</span>
                        </div>
                    </div>

                    <div className='preview__item '>
                        <img className='preview__img' src={accessories} alt="accessories"/>
                        <span className="preview__banner">Accessories</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;