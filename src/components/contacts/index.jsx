import React from 'react';
import './contacts.scss'
import Social from "../social";

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='contacts__wrap contain'>
                <h2 className="contacts__title">BE IN TOUCH WITH US:</h2>
                <form className='contacts__form'>
                    <input className='contacts__input' placeholder="Enter your email"/>
                    <button className='contacts__button' type='reset'>Join Us</button>
                </form>
                <div className='contacts__social' ><Social size='18'/></div>
            </div>

        </div>
    );
};

export default Contacts;