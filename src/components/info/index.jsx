import React from 'react';
import './info.scss'

import location from './img/location.svg'
import phone from './img/phone.svg'
import clock from './img/clock.svg'
import mail from './img/mail.svg'


const Info = () => {
    return (
        <div className='info contain'>
            <div className='info__block'>
                <h3  className='info__title'>Categories</h3>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Accessories</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className='info__block'>
                <h3  className='info__title'>Infomation</h3>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='info__block'>
                <h3  className='info__title'>Useful links</h3>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Returns & Exchanges</li>
                    <li>Shipping & Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='info__block'>
                <h3  className='info__title'>CONTACT US</h3>
                <ul>
                    <li><img src={location} alt=""/>Belarus, Gomel, Lange 17</li>
                    <li><img src={phone} alt=""/>+375 29 100 20 30</li>
                    <li><img src={clock} alt=""/>All week 24/7</li>
                    <li><img src={mail} alt=""/>info@clevertec.ru</li>
                </ul>
            </div>
        </div>
    );
};

export default Info;