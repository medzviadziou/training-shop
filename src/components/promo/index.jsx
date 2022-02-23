import React from 'react';
import './promo.scss'
//img
import newSeason from "./img/new.jpg";
import sale from "../promo/img/sale.jpg";


const Promo = () => {
    return (
        <div className='contain promo'>
            <div className='promo__block'>
                <img className='promo__img' src={newSeason} alt="new season"/>
                <div className="promo__banner">
                    <h3 className="promo__title">New Season</h3>
                    <p className="promo__text">lookbook collection</p>
                </div>
            </div>
            <div className='promo__block'>
                <img className='promo__img' src={sale} alt="sale"/>
                <div className="promo__banner">
                    <h3 className="promo__title">Sale</h3>
                    <p className="promo__text">Get UP to <span className="promo__text promo__text--color">50% off</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Promo;