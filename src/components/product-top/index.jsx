import React from 'react';
import {Link} from "react-router-dom";
import './product-top.scss'
//img
import share from "../../pages/products-page/img/share.svg";
import star from "../cards/img/ico/star_gold.svg";


const ProductTop = ({productType}) => {
    return (
        <div className='product-top'>
            <div className='product-top__header contain'>
                <div className='product-top__link-list'>
                    <Link className='product-top__link' to='/'>Home</Link>
                    <Link className='product-top__link product-top__link--next' to={`/${productType}`}>{productType}</Link>
                    <Link className='product-top__link product-top__link--next product-top__link--active' to='#'>Women's tracksuit Q109</Link>
                </div>
                <span className='product-top__share product-top__link'><img className='product-top__img' src={share} alt=""/>Share</span>
            </div>
            <h1 className='product-top__title'>Women's tracksuit Q109</h1>
            <div className='product-top__info contain'>
                <div className='product-top__rating'>
                    <div className='product-top__stars'>
                        <img className='product-top__star' src={star} alt=""/>
                        <img className='product-top__star' src={star} alt=""/>
                        <img className='product-top__star' src={star} alt=""/>
                        <img className='product-top__star' src={star} alt=""/>
                        <img className='product-top__star' src={star} alt=""/>
                    </div>
                    <span className='product-top__amount'>2 Reviews</span>
                </div>
                <div className='product-top__availability'>
                    <div className='product-top__item'>
                        <h3 className='product-top__text'>SKU:</h3>
                        <p className='product-top__text product-top__text--bold'>777</p>
                    </div>
                    <div className='product-top__item'>
                        <h3 className='product-top__text'>Availability:</h3>
                        <p className='product-top__text product-top__text--bold'>In Stock</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTop;