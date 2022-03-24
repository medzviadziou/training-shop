import React from 'react';
import Related from "../../components/related";
import ProductTop from "../../components/product-top";
import ThumbsSwiper from "../../components/thumbs-swiper";
import './product-page.scss';
import Order from "../../components/order";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";


const ProductPage = () => {

    const PRODUCTS = useSelector((state) => state.products.products)

    const {id, productType} = useParams();

    const product = PRODUCTS[productType].filter((product) => product.id === id)

    if (product[0] !== undefined) {
        return (
            <div className='product-page' data-test-id={`product-page-${productType}`}>
                <ProductTop productType={productType} product={product[0]}/>
                <div className='product-page__block  contain'>
                    <ThumbsSwiper product={product[0]}/>
                    <Order product={product[0]}/>
                </div>
                <div className='product-page__related contain' data-test-id='related-slider'>
                    <Related productType={productType}/>
                </div>
            </div>
        );
    } else {
        return (
            <>
            </>
        )
    }
};

export default ProductPage;
