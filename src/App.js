import React from 'react';

import './app.scss';

import Header from "./components/header";
import Preview from "./components/preview";
import Advantage from "./components/advantage";
import Promo from "./components/promo";
import Subscribe from "./components/subscribe";
import Products from "./components/products/products";
import Blog from "./components/blog";
import Footer from "./components/footer";

function App() {
    return (
        <section className="app">
            <Header/>
            <Preview/>
            <Advantage/>
            <Products/>
            <Promo/>
            <Subscribe/>
            <Blog/>
            <Footer/>
        </section>
    );
}

export default App;
