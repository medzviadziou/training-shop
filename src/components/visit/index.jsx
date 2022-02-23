import React from 'react';
import './visit.scss'
//img
import phone from "./img/phone.svg"
import location from "./img/location.svg"
import clock from "./img/clock.svg"

const Visit = () => {
    return (
        <div className='visit'>
            <div className='visit__tel'><a className='visit__item' href="tel:+375298521563"><img className="visit__img" src={phone} alt="phone" />+375 29 100 20 30</a></div>
            <div className='visit__address'><a className='visit__item' href="https://maps.google.com?saddr=Current+Location&daddr=52.427704,31.014710"><img className="visit__img" src={location} alt="location"/>Belarus, Gomel, Lange 17</a></div>
            <div className='visit__item visit__time'><img className="visit__img" src={clock} alt="clock" />All week 24/7</div>
        </div>
    );
};

export default Visit;