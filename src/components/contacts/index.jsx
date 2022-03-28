import React from 'react';
import Social from "../social";
import './contacts.scss'
import Donut from "../donut";


const Contacts = () => {
    let error = false

    return (
        <div className='contacts'>
            <div className='contacts__wrap contain'>
                <h2 className="contacts__title">BE IN TOUCH WITH US:</h2>
                <form className='contacts__form'>
                    <input className='contacts__input' placeholder="Enter your email"/>
                    <button className='contacts__button' type='reset'>
                        {!error && <span className='contacts__error'>Ошибка при отправке почты</span>}
                        {error && <span className='contacts__success'>Почта отправлена успешно</span>}
                        <div className='contacts__donut'><Donut/></div>
                        <span className='contacts__button-text'>Join Us</span>
                    </button>
                </form>
                <div className='contacts__social'><Social size='18'/></div>
            </div>
        </div>
    );
};

export default Contacts;