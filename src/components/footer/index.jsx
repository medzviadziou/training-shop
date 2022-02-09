import React from 'react';
import Contacts from "../contacts";
import Reference from "../reference";
import Info from "../info";

const Footer = () => {
    return (
        <footer className='footer'>
            <Contacts/>
            <Info/>
            <Reference/>
        </footer>
    );
};

export default Footer;