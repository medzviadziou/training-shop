import React from 'react';
import './order.scss'
//img
import color1 from "./img/color/color-1.jpg";
import color2 from "./img/color/color-2.jpg";
import color3 from "./img/color/color-3.jpg";
import color4 from "./img/color/color-4.jpg";
import hanger from "./img/ico/hanger.svg";
import heart from "./img/ico/heart.svg";
import scale from "./img/ico/scale.svg";
import truck from "./img/ico/truck.svg";
import refresh from "./img/ico/refresh.svg";
import mail from "./img/ico/mail.svg";
import pay1 from "./img/pay/stripe.png";
import pay2 from "./img/pay/AES256.png";
import pay3 from "./img/pay/paypal.png";
import pay4 from "./img/pay/visa.png";
import pay5 from "./img/pay/mastercard.png";
import pay6 from "./img/pay/discover.png";
import pay7 from "./img/pay/express.png";
import star from "../cards/img/ico/star_gold.svg";
import annotation from "./img/ico/annotation.svg";

const Order = () => {
    return (
        <div className='order'>
            <div className='order__color'>
                <span className='order__text'>COLOR:</span>
                <span className='order__text order__text--bold'>Blue</span>
            </div>
            <div className='order__choice'>
                <img src={color1} alt="" width='64' height='64'/>
                <img src={color2} alt="" width='64' height='64'/>
                <img src={color3} alt="" width='64' height='64'/>
                <img src={color4} alt="" width='64' height='64'/>
            </div>
            <div className='order__sizes'>
                <span className='order__text'>SIZE:</span>
                <span className='order__text order__text--bold'>S</span>
            </div>
            <div className='order__choice'>
                <span className='order__size'>XS</span>
                <span className='order__size order__size--active'>S</span>
                <span className='order__size'>M</span>
                <span className='order__size'>L</span>
            </div>
            <div className='order__hanger'>
                <img src={hanger} alt=""/><span className='order__text'>Size guide</span>
            </div>
            <div className='order__chapter'>
                <span className='order__price'>$ 379.99</span>
                <button className='order__button'>Add to card</button>
                <img src={heart} alt="" width="24" height="24"/>
                <img src={scale} alt="" width="24" height="24"/>
            </div>
            <div className='order__advantage'>
                <div><img className='order__ico' src={truck} alt="" width="24" height="24"/><span className='order__text'>Shipping & Delivery</span></div>
                <div><img className='order__ico' src={refresh} alt="" width="24" height="24"/><span className='order__text'>Returns & Exchanges</span></div>
                <div><img className='order__ico' src={mail} alt="" width="24" height="24"/><span className='order__text'>Ask a question</span></div>
            </div>
            <div className='order__checkout'>
                <span>guaranteed safe checkout</span>
                <span className='order__line'>.</span>
            </div>
            <div className='order__payment'>
                <img src={pay1} alt=""/>
                <img src={pay2} alt=""/>
                <img src={pay3} alt=""/>
                <img src={pay4} alt=""/>
                <img src={pay5} alt=""/>
                <img src={pay6} alt=""/>
                <img src={pay7} alt=""/>
            </div>
            <div className='order__chapter'>
                <span className='order__text'>DESCRIPTION</span></div>
            <div className='order__stickers'>
                <span className='order__text order__text--bold'>ADDITIONAL INFORMATION</span>
                <div className='order__stickers-list'>
                    <div className='order__sticker'>
                        <span className='order__text order__text--bold'>Color:</span>
                        <span className='order__text'>Blue, White, Black, Grey</span>
                    </div>
                    <div className='order__sticker'>
                        <span className='order__text order__text--bold'>Size:</span>
                        <span className='order__text'>XS, S, M, L</span>

                    </div>
                    <div className='order__sticker'>
                        <span className='order__text order__text--bold'>Material:</span>
                        <span className='order__text'>100% Polyester</span>
                    </div>
                </div>
            </div>
            <div className='order__chapter order__reviews'>
                <span className='order__text order__text--bold'>REVIEWS</span>
                <div className='order__annotations'>
                    <div className='order__rating'>
                                <span className='order__stars'>
                                    <img className='order__star' src={star} alt="" width='16' height='16'/>
                                    <img className='order__star' src={star} alt="" width='16' height='16'/>
                                    <img className='order__star' src={star} alt="" width='16' height='16'/>
                                    <img className='order__star' src={star} alt="" width='16' height='16'/>
                                    <img className='order__star' src={star} alt="" width='16' height='16'/>
                                 </span>
                        <span className='order__amount'>2 Reviews</span>
                    </div>
                    <div className='order__annotation'>
                        <img src={annotation} alt=""/>
                        <span className='order__text'>Write a review</span>
                    </div>
                </div>
                <div className='order__review'>
                    <div className='order__review-title'>
                        <span className='order__text order__text--large order__text--bold'>Oleh Chabanov</span>
                        <span className='order__stars'>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                        </span>
                    </div>
                    <p className='order__text order__text--large'>On the other hand, we
                        denounce
                        with righteous indignation and like men who are so
                        beguiled and demoralized by the charms of pleasure of the moment</p>
                </div>
                <div className='order__review order__review--next'>
                    <div className='order__review-title'>
                        <span className='order__text order__text--large order__text--bold'>ShAmAn design</span>
                        <span className='order__stars'>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                            <img className='order__star' src={star} alt="" width='10' height='10'/>
                        </span>
                    </div>
                    <p className='order__text order__text--large'>At vero eos et accusamus et
                        iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti</p>
                </div>
            </div>
        </div>
    );
};

export default Order;