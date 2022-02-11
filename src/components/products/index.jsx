import React from 'react';
import './products.scss'

import womenCatalog from "../../data/womenCatalog";
import menCatalog from "../../data/menCatalog";

import Product from "../product";
import Catalog from "../catalog";

const Products = () => {
    return (
        <div className='products'>
            <Catalog title="WOMEN’S"/>
            <div className='products__wrap contain'>
                <div className='products__grid contain'>
                    {womenCatalog.map((item) => {
                        return <Product item={item} key={item.id}/>
                    })}
                </div>
                <button className='products__button' type="button">See All</button>
            </div>
            <Catalog title="MEN’S"/>
            <div className='products__wrap contain'>
                <div className='products__grid contain'>
                    {menCatalog.map((item) => {
                        return <Product item={item} key={item.id}/>
                    })}
                </div>
                <button className='products__button' type="button">See All</button>
            </div>
        </div>
    );
};

export default Products;