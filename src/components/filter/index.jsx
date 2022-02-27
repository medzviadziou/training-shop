import React from 'react';
import PRODUCTS from "../../data/products";


let setColor = new Set()
let setSizes = new Set()
let setBrand = new Set()
let setPrice = new Set()

function createFilterList(card) {

    for (let i = card.images.length; i > 0; i--) {
        setColor.add(card.images[i - 1].color)
    }
    for (let i = card.sizes.length; i > 0; i--) {
        setSizes.add(card.sizes[i - 1])
    }
    setBrand.add(card.brand)
    setPrice.add(card.price)

}

const Filter = ({productType}) => {


    PRODUCTS[productType].map((card) => {
        createFilterList(card)
    })

    console.log(setColor)
    console.log(setSizes)
    console.log(setBrand)
    console.log(setPrice)

    return (

        <div>

        </div>
    );

};

export default Filter;