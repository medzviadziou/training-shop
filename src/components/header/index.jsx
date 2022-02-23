import React from 'react';
import './header.scss'

import TopBar from "../top-bar";
import Panel from "../panel";

const Header = () => {

    return (
        <header className='header' data-test-id='header'>
            <TopBar/>
            <Panel/>
        </header>
    );
};

export default Header;