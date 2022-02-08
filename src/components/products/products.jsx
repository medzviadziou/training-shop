import React from 'react';
import womenCatalog from "../../data/catalog";
import Product from "../product/product";
import './products.scss'

const Products = () => {
    return (
        <div className='products contain'>
            {womenCatalog.map((item)=>{
               return <Product item={item} key={item.id}/>
            })}
        </div>
    );
};

export default Products;