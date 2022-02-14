import React from 'react';
import './product-page.scss';
import {Link} from "react-router-dom";
import share from "../products-page/img/share.svg";
import star from '../../components/product/img/ico/star_gold.svg'
import Product from "../../components/product";
import relatedCatalog from "../../data/related";
import arrowLeft from './img/ico/-arrow.svg'
import arrowRight from './img/ico/arrow-.svg'
import Slider from "../../components/slider";
import slider from './img/slider/slider.jpg'
import q1 from './img/slider/Q109-1.jpg'
import q2 from './img/slider/Q109-2.jpg'
import q3 from './img/slider/Q109-3.jpg'
import q4 from './img/slider/Q109-4.jpg'
import color1 from './img/color/color-1.jpg'
import color2 from './img/color/color-2.jpg'
import color3 from './img/color/color-3.jpg'
import color4 from './img/color/color-4.jpg'
import hanger from './img/ico/hanger.svg'
import heart from './img/ico/heart.svg'
import scale from './img/ico/scale.svg'
import truck from './img/ico/truck.svg'
import refresh from './img/ico/refresh.svg'
import annotation from './img/ico/annotation.svg'
import mail from './img/ico/mail.svg'
import pay1 from './img/pay/stripe.png'
import pay2 from './img/pay/AES256.png'
import pay3 from './img/pay/paypal.png'
import pay4 from './img/pay/visa.png'
import pay5 from './img/pay/mastercard.png'
import pay6 from './img/pay/discover.png'
import pay7 from './img/pay/express.png'

const ProductPage = (props) => {
    return (
        <div className='product-page' data-test-id={`product-page-${props.productType}`}>
            <div className='product-page__top'>
                <div className='product-page__header contain'>
                    <div className='product-page__link-list'>
                        <Link className='product-page__link' to='/'>Home</Link>
                        <Link className='product-page__link product-page__link--next' to='/women'>Women</Link>
                        <Link className='product-page__link product-page__link--next product-page__link--active' to='#'>Women's
                            tracksuit Q109</Link>
                    </div>
                    <span className='product-page__share product-page__link'><img className='product-page__img'
                                                                                  src={share} alt=""/>Share</span>
                </div>
                <h1 className='product-page__title'>Women's tracksuit Q109</h1>
                <div className='product-page__info contain'>
                    <div className='product-page__rating'>
                    <span className='product-page__stars'>
                    <img className='product-page__star' src={star} alt=""/>
                    <img className='product-page__star' src={star} alt=""/>
                    <img className='product-page__star' src={star} alt=""/>
                    <img className='product-page__star' src={star} alt=""/>
                    <img className='product-page__star' src={star} alt=""/>
                </span>
                        <span className='product-page__amount'>2 Reviews</span>
                    </div>
                    <div className='product-page__availability'>
                        <div className='product-page__item'>
                            <h3 className='product-page__text'>SKU:</h3>
                            <p className='product-page__text product-page__text--bold'>777</p>
                        </div>
                        <div className='product-page__item'>
                            <h3 className='product-page__text'>Availability:</h3>
                            <p className='product-page__text product-page__text--bold'>In Stock</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-page__block  contain'>
                <div className='product-page__ribbon'>
                    <span className='product-page__control'>
                        <img className='product-page__arrow' src={arrowLeft} alt=""/>
                        <img className='product-page__arrow' src={arrowRight} alt=""/>
                    </span>
                    <img src={q1} alt=""/>
                    <img src={q2} alt=""/>
                    <img src={q3} alt=""/>
                    <img src={q4} alt=""/>
                </div>
                <div className='product-page__slider'>
                    <Slider slider={slider}/>
                </div>
                <div className='product-page__order'>
                    <div className='product-page__color'>
                        <span className='product-page__text'>COLOR:</span>
                        <span className='product-page__text product-page__text--bold'>Blue</span>
                    </div>
                    <div className='product-page__choice'>
                        <img src={color1} alt="" width='64' height='64'/>
                        <img src={color2} alt="" width='64' height='64'/>
                        <img src={color3} alt="" width='64' height='64'/>
                        <img src={color4} alt="" width='64' height='64'/>
                    </div>
                    <div className='product-page__sizes'>
                        <span className='product-page__text'>SIZE:</span>
                        <span className='product-page__text product-page__text--bold'>S</span>
                    </div>
                    <div className='product-page__choice'>
                        <span className='product-page__size'>XS</span>
                        <span className='product-page__size product-page__size--active'>S</span>
                        <span className='product-page__size'>M</span>
                        <span className='product-page__size'>L</span>
                    </div>
                    <div className='product-page__hanger'>
                        <img src={hanger} alt=""/><span className='product-page__text'>Size guide</span>
                    </div>
                    <div className='product-page__chapter'>
                        <span className='product-page__price'>$ 379.99</span>
                        <button className='product-page__button'>Add to card</button>
                        <img src={heart} alt="" width="24" height="24"/>
                        <img src={scale} alt="" width="24" height="24"/>
                    </div>
                    <div className='product-page__advantage'>
                        <div><img className='product-page__ico' src={truck} alt="" width="24" height="24"/><span
                            className='product-page__text'>Shipping & Delivery</span></div>
                        <div><img className='product-page__ico' src={refresh} alt="" width="24" height="24"/><span
                            className='product-page__text'>Returns & Exchanges</span></div>
                        <div><img className='product-page__ico' src={mail} alt="" width="24" height="24"/><span
                            className='product-page__text'>Ask a question</span></div>
                    </div>
                    <div className='product-page__checkout'>
                        <span>guaranteed safe checkout</span>
                        <span className='product-page__line'>.</span>
                    </div>
                    <div className='product-page__payment'>
                        <img src={pay1} alt=""/>
                        <img src={pay2} alt=""/>
                        <img src={pay3} alt=""/>
                        <img src={pay4} alt=""/>
                        <img src={pay5} alt=""/>
                        <img src={pay6} alt=""/>
                        <img src={pay7} alt=""/>

                    </div>
                    <div className='product-page__chapter'>
                        <span className='product-page__text'>DESCRIPTION</span></div>
                    <div className='product-page__stickers'>
                        <span className='product-page__text product-page__text--bold'>ADDITIONAL INFORMATION</span>
                        <div className='product-page__stickers-list'>
                            <div className='product-page__sticker'>
                                <span className='product-page__text product-page__text--bold'>Color:</span>
                                <span className='product-page__text'>Blue, White, Black, Grey</span>

                            </div>
                            <div className='product-page__sticker'>
                                <span className='product-page__text product-page__text--bold'>Size:</span>
                                <span className='product-page__text'>XS, S, M, L</span>

                            </div>
                            <div className='product-page__sticker'>
                                <span className='product-page__text product-page__text--bold'>Material:</span>
                                <span className='product-page__text'>100% Polyester</span>
                            </div>
                        </div>
                    </div>
                    <div className='product-page__chapter product-page__reviews'>
                        <span className='product-page__text product-page__text--bold'>REVIEWS</span>
                        <div className='product-page__annotations'>
                            <div className='product-page__rating'>
                                <span className='product-page__stars'>
                                    <img className='product-page__star' src={star} alt="" width='16' height='16'/>
                                    <img className='product-page__star' src={star} alt="" width='16' height='16'/>
                                    <img className='product-page__star' src={star} alt="" width='16' height='16'/>
                                    <img className='product-page__star' src={star} alt="" width='16' height='16'/>
                                    <img className='product-page__star' src={star} alt="" width='16' height='16'/>
                                 </span>
                                <span className='product-page__amount'>2 Reviews</span>
                            </div>
                            <div className='product-page__annotation'>
                                <img src={annotation} alt=""/>
                                <span className='product-page__text'>Write a review</span>
                            </div>
                        </div>
                        <div className='product-page__review'>
                            <div className='product-page__review-title'>
                                <span  className='product-page__text product-page__text--large product-page__text--bold'>Oleh Chabanov</span>
                                <span className='product-page__stars'>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                </span>
                            </div>
                            <p className='product-page__text product-page__text--large'>On the other hand, we denounce with righteous indignation and like men who are so
                                beguiled and demoralized by the charms of pleasure of the moment</p>

                        </div>
                        <div className='product-page__review product-page__review--next'>
                            <div  className='product-page__review-title'>
                                <span className='product-page__text product-page__text--large product-page__text--bold'>ShAmAn design</span>
                                <span className='product-page__stars'>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                    <img className='product-page__star' src={star} alt="" width='10' height='10'/>
                </span>
                            </div>
                            <p className='product-page__text product-page__text--large'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-page__related contain'>
                <div className='product-page__name'>
                    <span className='product-page__h2'>RELATED PRODUCTS</span>
                    <span>
                        <img src={arrowLeft} alt=""/>
                        <img src={arrowRight} alt=""/>
                    </span>
                </div>
                <div className='product-page__grid'>
                    {relatedCatalog.map((item) => {
                        return <Product item={item} key={item.id}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;