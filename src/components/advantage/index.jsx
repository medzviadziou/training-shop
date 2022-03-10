import React from 'react';
//css
import './advantage.scss'
//img
import truck from './img/truck.svg'
import refresh from './img/refresh.svg'
import support from './img/support.svg'

const Advantage = () => {
    return (
        <div className='advantage'>
            <div className='advantage__wrap contain'>
                <div className='advantage__block'>
                    <img className='advantage__img' src={truck} alt="" width='40' height='40'/>
                    <div className='advantage__description'>
                        <h3 className='advantage__title'>FREE SHIPPING</h3>
                        <p className='advantage__text'>On all UA order or order above $100</p>
                    </div>
                </div>
                <div className='advantage__block'>
                    <img className='advantage__img' src={refresh} alt="" width='40' height='40'/>
                    <div className='advantage__description'>
                        <h3 className='advantage__title'>30 DAYS RETURN</h3>
                        <p className='advantage__text'>Simply return it within 30 days for an exchange</p>
                    </div>
                </div>
                <div className='advantage__block'>
                    <img className='advantage__img' src={support} alt="" width='40' height='40'/>
                    <div className='advantage__description'>
                        <h3 className='advantage__title'>SUPPORT 24/7</h3>
                        <p className='advantage__text'>Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantage;