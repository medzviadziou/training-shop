import React from 'react';
import Visit from "../visit/visit";
import Social from "../social/social";

import "./top-bar.scss"

const TopBar = () => {
    return (
        <div className='top-bar'>
            <div className='top-bar__container'>
                <Visit />
                <Social />
            </div>

        </div>
    );
};

export default TopBar;