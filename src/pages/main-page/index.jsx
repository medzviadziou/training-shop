import React from 'react';
import Preview from "../../components/preview";
import Advantage from "../../components/advantage";
import Products from "../../components/products";
import Promo from "../../components/promo";
import Subscribe from "../../components/subscribe";
import Blog from "../../components/blog";


const MainPage = () => {
    return (
            <main className='main-page'>
                <Preview/>
                <Advantage/>
                <Products/>
                <Promo/>
                <Subscribe/>
                <Blog/>
            </main>

    );
};

export default MainPage;