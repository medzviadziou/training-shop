import React from 'react';
import Nav from "../nav/nav";
import TopBar from "../top-bar/top-bar";

import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <TopBar/>
            <Nav/>
            <hr className='header__line' />
        </header>
    );
};

export default Header;