import React from 'react';
import {Link} from "react-router-dom";
import Filter from "../../components/filter";
//img
import share from './img/share.svg'
import square from './img/square-loading.png'
//css
import './products-page.scss'
//data
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const ProductsPage = () => {
    const {productType} = useParams();
    const {isLoading} = useSelector((state) => state.products)

    return (
        <div data-test-id={`products-page-${productType}`}>
            <div className='products-page__top'>
                <div className='products-page__header contain'>
                    <div className='products-page__link-list'>
                        <Link className='products-page__link' to='/'>Home</Link>
                        <Link className='products-page__link products-page__link--next products-page__link--active'
                              to={`/${productType}`}>{productType}</Link>
                    </div>
                    <span className='products-page__share products-page__link'><img className='products-page__img' src={share} alt=""/>Share</span>
                </div>
                <h1 className='products-page__title'>{productType}</h1>
            </div>
            {!isLoading && <Filter productType={productType}/>}
            <div className='products-page__square'><img src={square} alt=""/></div>
        </div>
    );
};

export default ProductsPage;
