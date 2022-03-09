import React, {useState} from 'react';
import './clothes.scss'
import PRODUCTS from "../../data/products";
import MAIM_CLOTHES_BLOCK_MENU from "../../data/clothes-menu";
import Cards from "../cards";
import classNames from "classnames";


const Clothes = ({productType}) => {

    const [filter, setFilter] = useState(MAIM_CLOTHES_BLOCK_MENU[0].particularName)

    const clickFilter = (e) => {
        setFilter(e.target.id)
    }

    return (
        <div className='clothes'>
            <div data-test-id={`clothes-${productType}`}>
                <section className='clothes__top'>
                    <div className='clothes__header contain'>
                        <h2 className='clothes__title'>{productType}’S</h2>
                        <ul className='clothes__filter' onClick={clickFilter}>
                            {MAIM_CLOTHES_BLOCK_MENU.map((item, index) => {
                                return <li key={index} data-test-id={`clothes-${productType}-${item.particularName}`} id={item.particularName}
                                           className={classNames('clothes__sorting', {'clothes__sorting--active': (filter === item.particularName)})}>{item.name}</li>
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
                    <button className='clothes__button' type="button">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Clothes;