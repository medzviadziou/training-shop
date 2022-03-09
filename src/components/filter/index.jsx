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
    let setPrice = new Set([ '$200-$300', '$100-$200', '$50-$100', '$20-$50',])

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
    let [setFilterColor, setSetFilterColor] = useState(new Set())
    let [setFilterSize, setSetFilterSize] = useState(new Set())
    let [setFilterBrand, setSetFilterBrand] = useState(new Set())
    let [setFilterPrice, setSetFilterPrice] = useState(new Set())

    const onChangeColorInput = (e) => {
        if (e.target.checked) {
            setSetFilterColor(setFilterColor.add(e.target.id))
        }
        if (!e.target.checked) {
            setFilterColor.delete(e.target.id)
            setSetFilterColor(setFilterColor)
        }
        console.log(setFilterColor)
    }
    const onChangeSizeInput = (e) => {
        if (e.target.checked) {
            setSetFilterSize(setFilterSize.add(e.target.id))
        }
        if (!e.target.checked) {
            setFilterSize.delete(e.target.id)
            setSetFilterSize(setFilterSize)

        }
        console.log(setFilterSize, "это поиск")
    }
    const onChangeBrandInput = (e) => {
        if (e.target.checked) {
            setSetFilterBrand(setFilterBrand.add(e.target.id))
        }
        if (!e.target.checked) {
            setFilterBrand.delete(e.target.id)
            setSetFilterBrand(setFilterBrand)
        }
        console.log(setFilterBrand)
    }
    const onChangePriceInput = (e) => {
        if (e.target.checked) {
            setSetFilterPrice(setFilterPrice.add(e.target.id))
        }
        if (!e.target.checked) {
            setFilterPrice.delete(e.target.id)
            setSetFilterPrice(setFilterPrice)
        }
        console.log(setFilterPrice)
    }

    //сравниваю, есть ли значение в коллекции выбраных импутов
    let hasColor = (item) => {
        for (let i = item.images.length; i > 0; i - 1) {
            return setFilterColor.has(item.images[i - 1].color)
        }
    }
    let hasSize = (item) => {
        for (let i = item.sizes.length; i > 0; i--) {
            console.log(item.sizes.length, i, item.sizes[i - 1])
            if (setFilterSize.has(item.sizes[i - 1])) {
                return true
            }
        }

    }
    let hasBrand = (item) => {
        for (let i = item.brand.length; i > 0; i - 1) {
            return setFilterBrand.has(item.brand)
        }
    }
    let hasPrice = (item) => {
        let cost = Math.round(item.price + (parseInt(item.discount ?? 0) * (item.price / 100)))
        if (setFilterPrice.has('$20-$50')){
           if (cost>=20&&cost<=50){
               return true
           }
        }
        if (setFilterPrice.has('$50-$100')){
            if (cost>=50&&cost<=100){
                return true
            }
        }
        if (setFilterPrice.has('$100-$200')){
            if (cost>=100&&cost<=200){
                return true
            }
        }
        if (setFilterPrice.has('$200-$300')){
            if (cost>=200&&cost<=300){
                return true
            }
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
                                <div className='filter__wrap' onChange={onChangeColorInput}>
                                    {Array.from(setColor).sort().map((color, index) => {
                                        return <label key={index} className='filter__label' htmlFor={color}>
                                            <input className='filter__check-input' type="checkbox" id={color}/>
                                            <span className='filter__check-box'><img className='filter__check'
                                                                                     src={check} alt=""/></span>
                                            <span className='filter__point'>{color}</span>
                                        </label>
                                    })}
                                </div>
                            </fieldset>
                            <fieldset className='filter__fieldset'>
                                <legend className='filter__legend'>Sizes</legend>
                                <div className='filter__wrap' onChange={onChangeSizeInput}>
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
                                <div className='filter__wrap' onChange={onChangeBrandInput}>
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
                                <div className='filter__wrap' onChange={onChangePriceInput}>
                                    {Array.from(setPrice).map((price, index) => {
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
            <div className='filter__found'>
                <span className='filter__found'>{"?"} items Found</span>
                <span className='filter__found'>Color:{setFilterColor}</span>
                <span className='filter__found'>Size:{setFilterSize}</span>
                <span className='filter__found'>Brand:{setFilterBrand}</span>
                <span className='filter__found'>Price:{setFilterPrice}</span>
            </div>
            <div className='filter__grid contain'>
                {PRODUCTS[productType].filter((color) => setFilterColor.size === 0 || hasColor(color)).filter((size) => setFilterSize.size === 0 || hasSize(size)).filter((brand) => setFilterBrand.size === 0 || hasBrand(brand)).filter((price) => setFilterPrice.size === 0 || hasPrice(price)).map((card) => {
                    return <Cards card={card} key={card.id} productType={productType}/>
                })}
            </div>
        </>
    );

};

export default Filter;




