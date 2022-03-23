import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import classNames from "classnames";
import Cards from "../cards";
import './filter.scss'
//img
import adjustments from "./img/adjustments.svg";
import close from "./img/close.svg"
import list from "../../pages/products-page/img/view-list.svg";
import grid from "../../pages/products-page/img/view-grid.svg";
import check from "./img/check.svg"





const Filter = ({productType}) => {

    const PRODUCTS =useSelector((state) => state.products.products)

    //crate FilterList
    let setColor = new Set()
    let setSizes = new Set()
    let setBrand = new Set()
    let setPrice = new Set(['$200-$300', '$100-$200', '$50-$100', '$20-$50',])

    function createFilterList(card) {
        for (let i = card.images.length; i > 0; i--) {
            card.images.map((item) => setColor.add(item.color))
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
        setRenderFilter(PRODUCTS[productType].filter((color) => setFilterColor.size === 0 || hasColor(color)).filter((size) => setFilterSize.size === 0 || hasSize(size)).filter((brand) => setFilterBrand.size === 0 || hasBrand(brand)).filter((price) => setFilterPrice.size === 0 || hasPrice(price)));
        count = setRenderFilter.length
    }
    const onChangeSizeInput = (e) => {
        if (e.target.checked) {
            setSetFilterSize(setFilterSize.add(e.target.id))
        }
        if (!e.target.checked) {
            setFilterSize.delete(e.target.id)
            setSetFilterSize(setFilterSize)

        }
        setRenderFilter(PRODUCTS[productType].filter((color) => setFilterColor.size === 0 || hasColor(color)).filter((size) => setFilterSize.size === 0 || hasSize(size)).filter((brand) => setFilterBrand.size === 0 || hasBrand(brand)).filter((price) => setFilterPrice.size === 0 || hasPrice(price)));
        count = setRenderFilter.length
    }
    const onChangeBrandInput = (e) => {
        if (e.target.checked) {
            setSetFilterBrand(setFilterBrand.add(e.target.id))
        }
        if (!e.target.checked) {
            setFilterBrand.delete(e.target.id)
            setSetFilterBrand(setFilterBrand)
        }
        setRenderFilter(PRODUCTS[productType].filter((color) => setFilterColor.size === 0 || hasColor(color)).filter((size) => setFilterSize.size === 0 || hasSize(size)).filter((brand) => setFilterBrand.size === 0 || hasBrand(brand)).filter((price) => setFilterPrice.size === 0 || hasPrice(price)));
        count = setRenderFilter.length
    }
    const onChangePriceInput = (e) => {
        if (e.target.checked) {
            setSetFilterPrice(setFilterPrice.add(e.target.id))
        }
        if (!e.target.checked) {
            setFilterPrice.delete(e.target.id)
            setSetFilterPrice(setFilterPrice)
        }
        setRenderFilter(PRODUCTS[productType].filter((color) => setFilterColor.size === 0 || hasColor(color)).filter((size) => setFilterSize.size === 0 || hasSize(size)).filter((brand) => setFilterBrand.size === 0 || hasBrand(brand)).filter((price) => setFilterPrice.size === 0 || hasPrice(price)));
        count = setRenderFilter.length
    }

    //сравниваю, есть ли значение в коллекции выбраных импутов
    let hasColor = (item) => {
        for (let i = item.images.length; i > 0; i--) {
            if (item.images.some(function (step) {
                return setFilterColor.has(step.color)
            })) {
                return true
            }
        }
    }
    let hasSize = (item) => {
        for (let i = item.sizes.length; i > 0; i--) {
            if (setFilterSize.has(item.sizes[i - 1])) {
                return true
            }
        }

    }
    let hasBrand = (item) => {
        if (setFilterBrand.has(item.brand)) {
            return true
        }
    }
    let hasPrice = (item) => {
        let cost = Math.round(item.price + (parseInt(item.discount ?? 0) * (item.price / 100)))
        if (setFilterPrice.has('$20-$50')) {
            if (cost >= 20 && cost <= 50) {
                return true
            }
        }
        if (setFilterPrice.has('$50-$100')) {
            if (cost >= 50 && cost <= 100) {
                return true
            }
        }
        if (setFilterPrice.has('$100-$200')) {
            if (cost >= 100 && cost <= 200) {
                return true
            }
        }
        if (setFilterPrice.has('$200-$300')) {
            if (cost >= 200 && cost <= 300) {
                return true
            }
        }
    }

    const [renderFilter, setRenderFilter] = useState(PRODUCTS[productType])

    let count = renderFilter.length

    useEffect(() => {
        toggleFilter(true)
        // eslint-disable-next-line
        setSetFilterSize(setFilterSize = new Set())
        // eslint-disable-next-line
        setSetFilterBrand(setFilterBrand = new Set())
        // eslint-disable-next-line
        setSetFilterPrice(setFilterPrice = new Set())
        // eslint-disable-next-line
        setFilterColor.clear()
        setSetFilterColor(setFilterColor)

        setRenderFilter(PRODUCTS[productType])

    }, [productType])


    return (

        <>
            <div className='filter contain'>
                <div className='filter__top '>
                    <div className='filter__text filter__text--pointer' onClick={clickFilter} data-test-id='filter-button'>
                        <img src={isFilterClose ? adjustments : close} alt=""/>
                        <span>Filter</span>
                    </div>
                    <div className='filter__ico'>
                        <img src={list} alt=""/>
                        <img src={grid} alt=""/>
                    </div>
                </div>
                <div className='filter__list'>
                    <div className='filter__item' data-test-id={`filters-${productType}`}>
                        <form className={classNames('filter__form', {'filter__form--close': isFilterClose})}>
                            <fieldset className='filter__fieldset'>
                                <legend className='filter__legend'>Color</legend>
                                <div className='filter__wrap' data-test-id='filters-color'>
                                    {Array.from(setColor).sort().map((color, index) => {
                                        return <label key={index} className='filter__label' htmlFor={color}>
                                            <input onChange={onChangeColorInput} checked={setFilterColor.has(color)} data-test-id={`filter-color-${color}`} className='filter__check-input' type="checkbox" id={color}/>
                                            <span className='filter__check-box'><img className='filter__check' src={check} alt=""/></span>
                                            <span className='filter__point'>{color}</span>
                                        </label>
                                    })}
                                </div>
                            </fieldset>
                            <fieldset className='filter__fieldset'>
                                <legend className='filter__legend'>Sizes</legend>
                                <div className='filter__wrap' data-test-id='filters-size'>
                                    {Array.from(setSizes).sort().map((size, index) => {
                                        return <label key={index} className='filter__label' htmlFor={size}>
                                            <input onChange={onChangeSizeInput} checked={setFilterSize.has(size)} data-test-id={`filter-size-${size}`} className='filter__check-input' type="checkbox" id={size}/>
                                            <span className='filter__check-box'><img className='filter__check' src={check} alt=""/></span>
                                            <span className='filter__point'>{size}</span>
                                        </label>
                                    })}
                                </div>
                            </fieldset>
                            <fieldset className='filter__fieldset'>
                                <legend className='filter__legend'>Brand</legend>
                                <div className='filter__wrap' data-test-id='filters-brand'>
                                    {Array.from(setBrand).sort().map((brand, index) => {
                                        return <label key={index} className='filter__label' htmlFor={brand}>
                                            <input onChange={onChangeBrandInput} checked={setFilterBrand.has(brand)} data-test-id={`filter-brand-${brand}`} className='filter__check-input' type="checkbox" id={brand}/>
                                            <span className='filter__check-box'><img className='filter__check' src={check} alt=""/></span>
                                            <span className='filter__point'>{brand}</span>
                                        </label>
                                    })}
                                </div>
                            </fieldset>
                            <fieldset className='filter__fieldset'>
                                <legend className='filter__legend'>Price</legend>
                                <div className='filter__wrap'>
                                    {Array.from(setPrice).map((price, index) => {
                                        return <label key={index} className='filter__label' htmlFor={price}><input onChange={onChangePriceInput} checked={setFilterPrice.has(price)} className='filter__check-input' type="checkbox" id={price}/>
                                            <span className='filter__check-box'><img className='filter__check' src={check} alt=""/></span>
                                            <span className='filter__point'>{price}</span>
                                        </label>
                                    })}
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div className='filter__found contain'>
                <div className={classNames('filter__count', {'filter__count--close': setFilterColor.size === 0 && setFilterSize.size === 0 && setFilterBrand.size === 0 && setFilterPrice.size === 0})}>{`${count} items Found`}</div>
                <span className={classNames('filter__set', {'filter__set--close': setFilterColor.size === 0})}>Color: {Array.from(setFilterColor).join(", ")}</span>
                <span className={classNames('filter__set', {'filter__set--close': setFilterSize.size === 0})}>Size: {Array.from(setFilterSize).join(", ")}</span>
                <span className={classNames('filter__set', {'filter__set--close': setFilterBrand.size === 0})}>Brand: {Array.from(setFilterBrand).join(", ")}</span>
                <span className={classNames('filter__set', {'filter__set--close': setFilterPrice.size === 0})}>Price: {Array.from(setFilterPrice).join(", ")}</span>
            </div>
            <div className='filter__grid contain'>
                {renderFilter.map((card) => {
                    return <Cards card={card} key={card.id} productType={productType}/>
                })}
            </div>
        </>
    );
};

export default Filter;




