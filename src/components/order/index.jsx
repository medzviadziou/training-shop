import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import Rating from "../rating";
import './order.scss';
//img
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
import annotation from "./img/ico/annotation.svg";



const Order = (props) => {

    //Color
    const setColor = new Set()
    const [colorChose, setColorChose] = useState(props.product.images[0].color)
    const choseColor = (e) => {
        setColorChose(e.target.id)
    }

    //Size
    const setSize = new Set()
    for (let i = props.product.sizes.length; i > 0; i--) {
        setSize.add(props.product.sizes[i - 1])
    }
    const [sizeChose, setSizeChose] = useState(Array.from(setSize).sort()[0])
    const choseSize = (e) => {
        setSizeChose(e.target.id)
    }

    useEffect(()=>{
        setColorChose(props.product.images[0].color)
        setSizeChose(Array.from(setSize).sort()[0])
            },[props])

    return (
        <div className='order'>
            <div className='order__color'>
                <span className='order__text'>COLOR:</span>
                <span className='order__text order__text--bold'>{colorChose}</span>
            </div>
            <div className='order__choice' onClick={choseColor}>
                {props.product.images.map((item) => {
                    if (!setColor.has(item.color)) {
                        setColor.add(item.color)
                        return <img id={item.color} key={item.id}
                                    className={classNames('order__img', {'order__img--active': (colorChose === item.color)})}
                                    src={`https://training.cleverland.by/shop${item.url}`} alt="" width='64'
                                    height='64'/>
                    } else {
                        setColor.add(item.color)
                        return console.log("ok")
                    }
                })}
            </div>
            <div className='order__sizes'>
                <span className='order__text'>SIZE:</span>
                <span className='order__text order__text--bold'>{sizeChose}</span>
            </div>
            <div className='order__choice' onClick={choseSize}>
                {Array.from(setSize).sort().map((size, index) => {
                    return <span id={size} key={index} className={classNames('order__size', {'order__size--active': (sizeChose === size)})}>{size}</span>
                    })}
            </div>
            <div className='order__hanger'>
                <img src={hanger} alt=""/><span className='order__text'>Size guide</span>
            </div>
            <div className='order__chapter'>
                <span className='order__price'>$  {Math.round(props.product.price + (parseInt(props.product.discount ?? 0) * (props.product.price / 100)))} {props.product.discount &&
                <span className='order__price order__price--sale'>$ {props.product.price}</span>}</span>
                <button className='order__button'>Add to card</button>
                <img src={heart} alt="" width="24" height="24"/>
                <img src={scale} alt="" width="24" height="24"/>
            </div>
            <div className='order__advantage'>
                <div><img className='order__ico' src={truck} alt="" width="24" height="24"/><span
                    className='order__text'>Shipping & Delivery</span></div>
                <div><img className='order__ico' src={refresh} alt="" width="24" height="24"/><span
                    className='order__text'>Returns & Exchanges</span></div>
                <div><img className='order__ico' src={mail} alt="" width="24" height="24"/><span
                    className='order__text'>Ask a question</span></div>
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
                        <span className='order__text'>{Array.from(setColor).join()}</span>
                    </div>
                    <div className='order__sticker'>
                        <span className='order__text order__text--bold'>Size:</span>
                        <span className='order__text'>{Array.from(setSize).join()}</span>
                    </div>
                    <div className='order__sticker'>
                        <span className='order__text order__text--bold'>Material:</span>
                        <span className='order__text'>{props.product.material}</span>
                    </div>
                </div>
            </div>
            <div className='order__chapter order__reviews'>
                <span className='order__text order__text--bold'>REVIEWS</span>
                <div className='order__annotations'>
                    <div className='order__rating'>
                                <span className='order__stars'>
                                    <Rating rating={props.product.rating} size="16"/>
                                 </span>
                        <span className='order__amount'>{props.product.reviews.length} Reviews</span>
                    </div>
                    <div className='order__annotation'>
                        <img src={annotation} alt=""/>
                        <span className='order__text'>Write a review</span>
                    </div>
                </div>
                {props.product.reviews.map((review) => {
                    return <div key={review.id} className='order__review'>
                        <div className='order__review-title'>
                            <span className='order__text order__text--large order__text--bold'>{review.name}</span>
                            <span className='order__stars'>
                                <Rating rating={review.rating}/>
                            </span>
                        </div>
                        <p className='order__text order__text--large'>{review.text}</p>
                    </div>
                })}

            </div>
        </div>
    );
};

export default Order;