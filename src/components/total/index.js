import React from 'react';
import './total.scss'
const Total = (props) => {
    return (
        <>
            <div className='total__payment'><span className='total__total'>Total</span><span className='total__total--bold'> $ {props.total}</span></div>
        </>
    );
};

export default Total;