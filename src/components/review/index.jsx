import React from 'react';
import './review.scss'
import starGray from "../cards/img/ico/star_gray.svg";
import starGold from "../cards/img/ico/star_gold.svg";

const Review = () => {
    const star = [starGray, starGray, starGray, starGray, starGray,]
    let i = 1
    while (i > 0) {
        star.push(starGold)
        star.shift()
        i = i - 1
    }
    const size = 20

    return (
        <div className='review'>
            <div className='review__hidden'> </div>
            <div className='review__block'>
                <h2 className='review__title'>Write a review</h2>
                <div className='review__rating'>
                    <img className='review__star' src={star[4]} alt="" width={size} height={size}/>
                    <img className='review__star' src={star[3]} alt="" width={size} height={size}/>
                    <img className='review__star' src={star[2]} alt="" width={size} height={size}/>
                    <img className='review__star' src={star[1]} alt="" width={size} height={size}/>
                    <img className='review__star' src={star[0]} alt="" width={size} height={size}/>
                </div>
                <div className='review__wrap'>
                    <button className='review__button'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Review;