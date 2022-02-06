import React from 'react';

import facebook from "./img/facebook.svg"
import twitter from "./img/twitter.svg"
import instagram from "./img/instagram.svg"
import pinterest from "./img/pinterest.svg"

import "./social.scss"


const Social = () => {
    return (
        <ul className='social'>
            <li className='social__item'><img src={facebook} alt="facebook" width="12" height='12'/></li>
            <li className='social__item'><img src={twitter} alt="twitter" width="12" height='12'/></li>
            <li className='social__item'><img src={instagram} alt="instagram" width="12" height='12'/></li>
            <li className='social__item'><img src={pinterest} alt="pinterest" width="12" height='12'/></li>
        </ul>
    );
};

export default Social;