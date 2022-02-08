import React from 'react';
import TopBar from "../top-bar/top-bar";

import './header.scss'
import Panel from "../panel/panel";

const Header = () => {
    return (
        <header className='header'>
            <TopBar/>
            <Panel/>
        </header>
    );
};

export default Header;