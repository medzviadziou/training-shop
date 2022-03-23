import React from 'react';
import './loader.scss'

const Loader = () => {
    return (
        <div className="loader" data-test-id='loader'>
            <div className="loader__row">
                <div className="loader__item"> </div>
                <div className="loader__item"> </div>
            </div>
        </div>
    );
};

export default Loader;