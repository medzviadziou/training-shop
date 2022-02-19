import React from 'react';
import './clothes.scss'
import PRODUCTS from "../../data/products";

import Cards from "../cards";
import Catalog from "../catalog";

const Clothes = ({productType}) => {

    return (
        <div className='clothes'>
            <div data-test-id={`clothes-${productType}`}>
                <Catalog productType={productType}/>
                <div className='clothes__wrap contain'>
                    <div className='clothes__grid contain'>
                        {PRODUCTS[productType].map((card) => {
                            return <Cards card={card} key={card.id} productType={productType}/>
                        })}
                    </div>
                    <button className='clothes__button' type="button">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Clothes;