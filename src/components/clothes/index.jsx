import React, {useState} from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";
import MAIM_CLOTHES_BLOCK_MENU from "../../data/clothes-menu";
import Cards from "../cards";
import './clothes.scss'
import {useSelector} from "react-redux";


const Clothes = ({productType}) => {

    const PRODUCTS =useSelector((state) => state.products.products)

    const [filter, setFilter] = useState(MAIM_CLOTHES_BLOCK_MENU[0].particularName)

    const clickFilter = (e) => {
        setFilter(e.target.id)
    }

    return (
        <div className='clothes'>
            <div data-test-id={`clothes-${productType}`}>
                <section className='clothes__top'>
                    <div className='clothes__header contain'>
                        <Link to={`/${productType}`}  ><h2 className='clothes__title'>{productType}’S</h2></Link>
                        <ul className='clothes__filter' onClick={clickFilter}>
                            {MAIM_CLOTHES_BLOCK_MENU.map((item, index) => {
                                return <li key={index} data-test-id={`clothes-${productType}-${item.particularName}`} id={item.particularName} className={classNames('clothes__sorting', {'clothes__sorting--active': (filter === item.particularName)})}>{item.name}</li>
                            })}
                        </ul>
                    </div>
                </section>
                <div className='clothes__wrap contain'>
                    <div className='clothes__grid contain'>
                        {PRODUCTS[productType].filter(({particulars}) => particulars[filter]).map((card) => {
                            return <Cards card={card} key={card.id} productType={productType}/>
                        })}
                    </div>
                    <Link to={`/${productType}`}  ><div className='clothes__button'><span className='clothes__button-text'>See All</span></div></Link>
                </div>
            </div>
        </div>
    );
};

export default Clothes;