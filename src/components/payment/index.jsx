import React from 'react';
import './payment.scss'
import Total from "../total";

const Payment = () => {
    return (
        <div className='payment'>
            <div className='payment__wrap'>
            </div>
            <Total total='100'/>
            <button className='payment__button'>CHECK OUT</button>
        </div>
    );
};

export default Payment;