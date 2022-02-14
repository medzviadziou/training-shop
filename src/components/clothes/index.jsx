import React from 'react';
import './products.scss'

import womenCatalog from "../../data/womenCatalog";
import menCatalog from "../../data/menCatalog";

import Product from "../product";
import Catalog from "../catalog";

const Clothes = () => {
    return (
        <div className='clothes' >
            <div data-test-id='clothes-women'>
            <Catalog title="WOMEN’S"/>
            <div className='clothes__wrap contain'>
                <div className='clothes__grid contain'>
                    {womenCatalog.map((item) => {
                        return <Product item={item} key={item.id}/>
                    })}
                </div>
                <button className='clothes__button' type="button">See All</button>
            </div>
            </div>
            <div data-test-id='clothes-men'>
            <Catalog title="MEN’S"/>
            <div className='clothes__wrap contain'>
                <div className='clothes__grid contain'>
                    {menCatalog.map((item) => {
                        return <Product item={item} key={item.id}/>
                    })}
                </div>
                <button className='clothes__button' type="button">See All</button>
            </div>
            </div>
        </div>
    );
};

export default Clothes;