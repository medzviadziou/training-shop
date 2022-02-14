import React from 'react';
import womenCatalog from "../../data/womenCatalog";
import menCatalog from "../../data/menCatalog";
import Product from "../../components/product";
import './products-page.scss'
import {Link} from "react-router-dom";
import share from './img/share.svg'
import list from './img/view-list.svg'
import grid from './img/view-grid.svg'
import adjustments from './img/adjustments.svg'
import square from './img/square-loading.png'

const ProductsPage = (props) => {
    if (props.item === 'men') {
        return (
            <div data-test-id='clothes-men'>
                <div className='products-page__top'>
                    <div className='products-page__header contain'>
                        <div className='products-page__link-list'>
                            <Link  className='products-page__link' to='/'>Home</Link>
                            <Link  className='products-page__link products-page__link--next products-page__link--active' to='/men'>Men</Link>
                        </div>
                        <span  className='products-page__share products-page__link'><img className='products-page__img' src={share} alt=""/>Share</span>
                    </div>
                    <h1 className='products-page__title'>Men</h1>
                </div>
                <div className='products-page__filter contain'>
                    <div className='products-page__text'><img src={adjustments} alt=""/><span>Filter</span></div>
                    <div className='products-page__ico'>
                        <img src={list} alt=""/>
                        <img src={grid} alt=""/>
                    </div>
                </div>
                <div className='products-page__grid contain'>
                    {menCatalog.map((item) => {
                        return <Product item={item}  key={item.id}/>
                    })}
                </div>
                <div className='products-page__square'><img src={square} alt=""/></div>
            </div>
        );
    } else {
        return (
            <div data-test-id='clothes-women'>
                <div className='products-page__top'>
                    <div className='products-page__header contain'>
                        <div className='products-page__link-list'>
                            <Link  className='products-page__link' to='/'>Home</Link>
                            <Link  className='products-page__link products-page__link--next products-page__link--active' to='/women'>Women</Link>
                        </div>
                        <span  className='products-page__share products-page__link'><img className='products-page__img' src={share} alt=""/>Share</span>
                    </div>
                    <h1 className='products-page__title'>Women</h1>
                </div>
                <div className='products-page__filter contain'>
                    <div className='products-page__text'><img src={adjustments} alt=""/><span>Filter</span></div>
                    <div className='products-page__ico'>
                        <img src={list} alt=""/>
                        <img src={grid} alt=""/>
                    </div>
                </div>
                <div className='products-page__grid contain'>
                    {womenCatalog.map((item) => {
                        return <Product item={item} key={item.id}/>
                    })}
                </div>
                <div className='products-page__square'><img src={square} alt=""/></div>
            </div>
        );
    }


};

export default ProductsPage;