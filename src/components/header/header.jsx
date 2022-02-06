import React from 'react';
import Nav from "../nav/nav";
import TopBar from "../top-bar/top-bar";

const Header = () => {
    return (
        <header className='header'>
            <TopBar/>
            <Nav/>
        </header>
    );
};

export default Header;