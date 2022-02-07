import React from 'react';
import './catalog.scss'

const Catalog = (props) => {
    return (
        <section className='catalog'>
            <div className='catalog__header'>
                <h2 className='catalog__title'>{props.name}</h2>
                <ul className='catalog__filter'>
                    <li className='catalog__sorting'>NEW ARRIVALS</li>
                    <li className='catalog__sorting'>SPECIALS</li>
                    <li className='catalog__sorting'>BESTSELLERS</li>
                    <li className='catalog__sorting'>MOST VIEWED</li>
                    <li className='catalog__sorting'>FEATURED PRODUCTS</li>
                </ul>
            </div>
        </section>
    );
};

export default Catalog;