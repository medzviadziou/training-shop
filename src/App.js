import React from 'react';
import Header from "./components/header";
import Preview from "./components/preview/preview";
import Advantage from "./components/advantage/advantage";
import Catalog from "./components/catalog/catalog";
import Promo from "./components/promo/promo";
import './app.scss';
import Subscribe from "./components/subscribe/subscribe";
import Products from "./components/products/products";

function App() {
    return (
        <section className="app">
            <Header/>
            <Preview/>
            <Advantage/>
            <Catalog title="men"/>
            <Products/>
            <Promo/>
            <Subscribe/>
        </section>
    );
}

export default App;
