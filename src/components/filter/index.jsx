import React, {useState} from 'react';
import PRODUCTS from "../../data/products";
import adjustments from "./img/adjustments.svg";
import close from "./img/close.svg"
import list from "../../pages/products-page/img/view-list.svg";
import grid from "../../pages/products-page/img/view-grid.svg";
import check from "./img/check.svg"
import './filter.scss'
import classNames from "classnames";
import Cards from "../cards";


const Filter = ({productType}) => {

    //crate FilterList
    let setColor = new Set()
    let setSizes = new Set()
    let setBrand = new Set()
    let arrPrice = ['$300', '$200-$300', '$100-$200', '$50-$100', '$20-$50', '$10-$20', '<$10']

    function createFilterList(card) {
        for (let i = card.images.length; i > 0; i--) {
            setColor.add(card.images[i - 1].color)
        }
        for (let i = card.sizes.length; i > 0; i--) {
            setSizes.add(card.sizes[i - 1])
        }
        setBrand.add(card.brand)
    }

    PRODUCTS[productType].map((card) => {
        return createFilterList(card)
    })


    //Open Filter
    const [isFilterClose, toggleFilter] = useState(true)
    const clickFilter = () => {
        toggleFilter(!isFilterClose)
    };

    //// собираю значения зачекнутых импутов
    let setFilterColor = new Set(['Blue'])
    let setFilterSize = new Set()
    let setFilterBrand = new Set()
    let setFilterPrice = new Set()

    const clickColorInputChange = (e) => {
        if (e.target.checked) {
            setFilterColor.add(e.target.id)
        }
        if (!e.target.checked) {
            setFilterColor.delete(e.target.id)
        }
        console.log(setFilterColor)
    }
    const clickSizeInputChange = (e) => {
        if (e.target.checked) {
            setFilterSize.add(e.target.id)
        }
        if (!e.target.checked) {
            setFilterSize.delete(e.target.id)
        }
        console.log(setFilterSize)
    }
    const clickBrandInputChange = (e) => {
        if (e.target.checked) {
            setFilterBrand.add(e.target.id)
        }
        if (!e.target.checked) {
            setFilterBrand.delete(e.target.id)
        }
        console.log(setFilterBrand)
    }
    const clickPriceInputChange = (e) => {
        if (e.target.checked) {
            setFilterPrice.add(e.target.id)
        }
        if (!e.target.checked) {
            setFilterPrice.delete(e.target.id)
        }
        console.log(setFilterPrice)
    }

    //сравниваю, есть ли значение в коллекции выбраных импутов
    let hasColor = (item) => {
        for (let i = item.images.length; i > 0; i-1) {
            return setFilterColor.has(item.images[i - 1].color)
        }
    }


    return (
        <>
            <div className='filter contain'>
                <div className='filter__top '>
                    <div className='filter__text filter__text--pointer' onClick={clickFilter}><img
                        src={isFilterClose ? adjustments : close} alt=""/><span>Filter</span></div>
                    <div className='filter__ico'>
                        <img src={list} alt=""/>
                        <img src={grid} alt=""/>
                    </div>
                </div>
                <div className='filter__list'>
                    <div className='filter__item'>
                        <form className={classNames('filter__form', {'filter__form--close': isFilterClose})}>
                            <fieldset className='filter__fieldset'>
                                <legend className='filter__legend'>Color</legend>
                                <div className='filter__wrap' onChange={clickColorInputChange}>
                                    {Array.from(setColor).sort().map((color, index) => {
                                        return <label key={index} className='filter__label' htmlFor={color}><input
                                            className='filter__check-input' type="checkbox" id={color}/><span
                                            className='filter__check-box'><img className='filter__check' src={check}
                                                                               alt=""/></span><span
                                            className='filter__point'>{color}</span></label>
                                    })}
                                </div>
                            </fieldset>
                            <fieldset className='filter__fieldset'>
                                <legend className='filter__legend'>Sizes</legend>
                                <div className='filter__wrap' onChange={clickSizeInputChange}>
                                    {Array.from(setSizes).sort().map((size, index) => {
                                        return <label key={index} className='filter__label' htmlFor={size}>
                                            <input className='filter__check-input' type="checkbox" id={size}/>
                                            <span className='filter__check-box'><img className='filter__check'
                                                                                     src={check} alt=""/></span>
                                            <span className='filter__point'>{size}</span>
                                        </label>
                                    })}
                                </div>
                            </fieldset>
                            <fieldset className='filter__fieldset'>
                                <legend className='filter__legend'>Brand</legend>
                                <div className='filter__wrap' onChange={clickBrandInputChange}>
                                    {Array.from(setBrand).sort().map((brand, index) => {
                                        return <label key={index} className='filter__label' htmlFor={brand}><input
                                            className='filter__check-input' type="checkbox" id={brand}/><span
                                            className='filter__check-box'><img className='filter__check' src={check}
                                                                               alt=""/></span><span
                                            className='filter__point'>{brand}</span></label>
                                    })}
                                </div>
                            </fieldset>
                            <fieldset className='filter__fieldset'>
                                <legend className='filter__legend'>Price</legend>
                                <div className='filter__wrap' onChange={clickPriceInputChange}>
                                    {arrPrice.map((price, index) => {
                                        return <label key={index} className='filter__label' htmlFor={price}><input
                                            className='filter__check-input' type="checkbox" id={price}/><span
                                            className='filter__check-box'><img className='filter__check' src={check}
                                                                               alt=""/></span><span
                                            className='filter__point'>{price}</span></label>
                                    })}
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div className='filter__grid contain'>
                {PRODUCTS[productType].filter((item) => setFilterColor.size === 0 || hasColor(item)).map((card) => {
                    return <Cards card={card} key={card.id} productType={productType}/>
                })}
            </div>
        </>
    );

};

export default Filter;




