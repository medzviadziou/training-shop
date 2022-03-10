import React from 'react';
import {Link} from "react-router-dom";
import './info.scss'
//img
import location from './img/location.svg'
import phone from './img/phone.svg'
import clock from './img/clock.svg'
import mail from './img/mail.svg'


const Info = () => {

    return (
        <div className='info contain'>
            <div className='info__block'>
                <h3 className='info__title'>Categories</h3>
                <ul>
                    <li><Link to='/men' data-test-id='footer-nav-link-men'>Men</Link></li>
                    <li><Link to='/women' data-test-id='footer-nav-link-women'>Women</Link></li>
                    <li><Link to='/accessories' data-test-id='footer-nav-link-accessories'>Accessories</Link></li>
                    <li><Link to='/beauty' data-test-id='footer-nav-link-beauty'>Beauty</Link></li>
                </ul>
            </div>
            <div className='info__block'>
                <h3 className='info__title'>Infomation</h3>
                <ul>
                    <li><Link to='/about' data-test-id='footer-nav-link-about'>About Us</Link></li>
                    <li><Link to='/contact' data-test-id='footer-nav-link-contact'>Contact Us</Link></li>
                    <li><Link to='/blog' data-test-id='footer-nav-link-blog'>Blog</Link></li>
                    <li><Link to='/faqs' data-test-id='footer-nav-link-faqs'>FAQs</Link></li>
                </ul>
            </div>
            <div className='info__block'>
                <h3 className='info__title'>Useful links</h3>
                <ul>
                    <li><Link to='/terms&conditions' data-test-id='footer-nav-link-terms&conditions'>Terms & Conditions</Link></li>
                    <li><Link to='/returns&exchanges' data-test-id='footer-nav-link-returns&exchanges'>Returns & Exchanges</Link></li>
                    <li><Link to='/shipping&delivery' data-test-id='footer-nav-link-shipping&delivery'>Shipping & Delivery</Link></li>
                    <li><Link to='/privacy' data-test-id='footer-nav-link-privacy'>Privacy Policy</Link></li>
                </ul>
            </div>
            <div className='info__block'>
                <h3 className='info__title'>CONTACT US</h3>
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