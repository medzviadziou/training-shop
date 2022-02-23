import React from 'react';
import './rating.scss'
//img
import starGray from "../cards/img/ico/star_gray.svg";
import starGold from "../cards/img/ico/star_gold.svg";

const Rating = ({rating}) => {
    const star = [starGray, starGray, starGray, starGray, starGray,]
    let i = rating
    while (i > 0) {
        star.push(starGold)
        star.shift()
        i = i - 1
    }

    return (
        <div className='rating'>
            <img className='rating__star' src={star[4]} alt=""/>
            <img className='rating__star' src={star[3]} alt=""/>
            <img className='rating__star' src={star[2]} alt=""/>
            <img className='rating__star' src={star[1]} alt=""/>
            <img className='rating__star' src={star[0]} alt=""/>
        </div>
    );
};

export default Rating;