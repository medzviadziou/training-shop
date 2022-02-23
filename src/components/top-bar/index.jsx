import React from 'react';
import Visit from "../visit";
import Social from "../social";
import "./top-bar.scss"


const TopBar = () => {

    return (
        <div className='top-bar'>
            <div className='top-bar__wrap contain'>
                <Visit/>
                <Social size='14'/>
            </div>
        </div>
    );
};

export default TopBar;