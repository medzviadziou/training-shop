import React from 'react';
import {Routes, Route} from "react-router-dom";
import './app.scss';

import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/main-page";
import ProductsPage from "./pages/products-page";
import ProductPage from "./pages/product-page";
import Cart from "./components/cart";


function App() {
    return (

        <section className="app" data-test-id='app'>
            <Header/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path=':productType' element={<ProductsPage />}/>
                <Route path=':productType/:id' element={<ProductPage />}/>
                <Route  element={ <main style={{padding: '100px 0', textAlign: 'center',  fontSize: '72px'}}> <p>There's nothing here!</p></main>}/>
            </Routes>
            <Cart />
            <Footer/>
        </section>


    );
}

export default App;
