import React from 'react';
import womenCatalog from "../../data/womenCatalog";
import menCatalog from "../../data/menCatalog";
import Product from "../../components/product";
import './products-page.scss'

const ProductsPage = (props) => {
    if (props.item === 'men'){
        return (
            <div>
                <div className='products-page__grid contain'>
                    {menCatalog.map((item) => {
                        return <Product item={item} key={item.id}/>
                    })}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className='products-page__grid contain'>
                    {womenCatalog.map((item) => {
                        return <Product item={item} key={item.id}/>
                    })}
                </div>
            </div>
        );
    }


};

export default ProductsPage;