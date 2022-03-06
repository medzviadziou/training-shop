import React from 'react';
import {Link} from "react-router-dom";
import './product-top.scss'
//img
import share from "../../pages/products-page/img/share.svg";
import Rating from "../rating";


const ProductTop = (props) => {
    return (
        <div className='product-top'>
            <div className='product-top__header contain'>
                <div className='product-top__link-list'>
                    <Link className='product-top__link' to='/'>Home</Link>
                    <Link className='product-top__link product-top__link--next' to={`/${props.productType}`}>{props.productType}</Link>
                    <Link className='product-top__link product-top__link--next product-top__link--active' to='#'>{props.product.name}</Link>
                </div>
                <span className='product-top__share product-top__link'><img className='product-top__img' src={share} alt=""/>Share</span>
            </div>
            <h1 className='product-top__title'>{props.product.name}</h1>
            <div className='product-top__info contain'>
                <div className='product-top__rating'>
                    <div className='product-top__stars'>
                        <Rating rating={props.product.rating} />
                    </div>
                    <span className='product-top__amount'>{props.product.reviews.length} Reviews</span>
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