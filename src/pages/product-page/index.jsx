import React from 'react';
import Related from "../../components/related";
import ProductTop from "../../components/product-top";
import ThumbsSwiper from "../../components/thumbs-swiper";
import './product-page.scss';
import Order from "../../components/order";


const ProductPage = ({productType}) => {

    return (
        <div className='product-page' data-test-id={`product-page-${productType}`}>
            <ProductTop productType={productType} />
            <div className='product-page__block  contain'>
                <ThumbsSwiper />
                <Order/>
            </div>
            <div className='product-page__related contain' data-test-id='related-slider'>
                <Related productType={productType}/>
            </div>
        </div>
    );
};

export default ProductPage;
