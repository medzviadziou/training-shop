import React from 'react';
import "./social.scss"
//img
import facebook from "./img/facebook.svg"
import twitter from "./img/twitter.svg"
import instagram from "./img/instagram.svg"
import pinterest from "./img/pinterest.svg"


const Social = (props) => {
    return (
        <ul className='social'>
            <li className='social__item'><img src={facebook} alt="facebook" width={props.size} height={props.size}/></li>
            <li className='social__item'><img src={twitter} alt="twitter" width={props.size} height={props.size}/></li>
            <li className='social__item'><img src={instagram} alt="instagram" width={props.size} height={props.size}/></li>
            <li className='social__item'><img src={pinterest} alt="pinterest" width={props.size} height={props.size}/></li>
        </ul>
    );
};

export default Social;