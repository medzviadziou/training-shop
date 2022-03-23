import React from 'react';
import './error.scss'

const Error = () => {
    return (
        <div className='error contain' data-test-id='error'>
            <div className='error__text'>Ошибка получения данных</div>
        </div>
    );
};

export default Error;