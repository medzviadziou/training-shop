import React from 'react';
import './selected.scss'
import trash from './img/trash.svg'
import plus from './img/plus.svg'
import minus from './img/minus.svg'

const Selected = ({card: {name, price, images, discount}}) => {

    const priceFinal = Math.round(price + parseInt(discount ?? 0) * (price / 100))

    return (
        <div className='selected'>
            <div className='selected__preview'>
                {discount && <span className='selected__sale'>{discount}</span>}
                <img className='selected__img' src={`https://training.cleverland.by/shop${images[0]?.url}`} alt=""/>
            </div>
            <div  className='selected__block'>
                <div className='selected__text'>
                    <h3 className='selected__name'>{name}</h3>
                    <p className='selected__characteristic'><span>Color</span><span>Size</span></p>
                </div>
                <div className='selected__manage'>
                    <div className='selected__quantity'>
                        <img src={minus} alt=""/>
                        <span>1</span>
                        <img src={plus} alt=""/>
                    </div>
                    <span className='selected__price'>$ {priceFinal} {discount && <span className='selected__price selected__price--sale'>$ {price}</span>}</span>
                    <img src={trash} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Selected;