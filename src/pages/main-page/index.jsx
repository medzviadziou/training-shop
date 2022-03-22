import React from 'react';
import Preview from "../../components/preview";
import Advantage from "../../components/advantage";
import Clothes from "../../components/clothes";
import Promo from "../../components/promo";
import Subscribe from "../../components/subscribe";
import Blog from "../../components/blog";


const MainPage = () => {

    return (
        <main className='main-page'>
            <Preview/>
            <Advantage/>
            <Clothes productType="women"/>
            <Clothes productType="men"/>
            <Promo/>
            <Subscribe/>
            <Blog/>
        </main>
    );
};

export default MainPage;