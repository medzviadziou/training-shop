import React from 'react';
import "./top-bar.scss"

import Visit from "../visit";
import Social from "../social";

const TopBar = () => {
    return (
        <div className='top-bar'>
            <div className='top-bar__wrap contain'>
                <Visit/>
                <Social size='12'/>
            </div>
        </div>
    );
};

export default TopBar;