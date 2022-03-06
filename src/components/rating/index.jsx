import React from 'react';
import './rating.scss'
//img
import starGray from "../cards/img/ico/star_gray.svg";
import starGold from "../cards/img/ico/star_gold.svg";

const Rating = (props) => {
    const star = [starGray, starGray, starGray, starGray, starGray,]
    let i = props.rating
    while (i > 0) {
        star.push(starGold)
        star.shift()
        i = i - 1
    }

    return (
        <div className='rating'>
            <img className='rating__star' src={star[4]} alt="" width={props.size} height={props.size}/>
            <img className='rating__star' src={star[3]} alt="" width={props.size} height={props.size}/>
            <img className='rating__star' src={star[2]} alt="" width={props.size} height={props.size}/>
            <img className='rating__star' src={star[1]} alt="" width={props.size} height={props.size}/>
            <img className='rating__star' src={star[0]} alt="" width={props.size} height={props.size}/>
        </div>
    );
};

export default Rating;