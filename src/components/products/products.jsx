import React from 'react';
import womenCatalog from "../../data/catalog";
import Product from "../product/product";
import './products.scss'

const Products = () => {
    return (
        <div className='products contain'>
            <div className='products__grid contain'>
                {womenCatalog.map((item) => {
                    return <Product item={item} key={item.id}/>
                })}
            </div>
            <button className='products__button' type="button">See All</button>
        </div>
    );
};

export default Products;