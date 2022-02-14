import React from 'react';
import {Routes, Route} from "react-router-dom";
import './app.scss';

import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/main-page";
import ProductsPage from "./pages/products-page";
import ProductPage from "./pages/product-page";


function App() {
    return (

        <section className="app" data-test-id='app'>
            <Header/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path='/women' element={<ProductsPage item='women'/>}/>
                <Route path='/men' element={<ProductsPage item='men'/>}/>
                <Route path='/men/1' element={<ProductPage productType="men"/>}/>
                <Route path='/men/2' element={<ProductPage productType="men"/>}/>
                <Route path='/men/3' element={<ProductPage productType="men"/>}/>
                <Route path='/men/4' element={<ProductPage productType="men"/>}/>
                <Route path='/men/5' element={<ProductPage productType="men"/>}/>
                <Route path='/men/6' element={<ProductPage productType="men"/>}/>
                <Route path='/men/7' element={<ProductPage productType="men"/>}/>
                <Route path='/men/8' element={<ProductPage productType="men"/>}/>
                <Route path='/women/1' element={<ProductPage productType="women"/>}/>
                <Route path='/women/2' element={<ProductPage productType="women"/>}/>
                <Route path='/women/3' element={<ProductPage productType="women"/>}/>
                <Route path='/women/4' element={<ProductPage productType="women"/>}/>
                <Route path='/women/5' element={<ProductPage productType="women"/>}/>
                <Route path='/women/6' element={<ProductPage productType="women"/>}/>
                <Route path='/women/7' element={<ProductPage productType="women"/>}/>
                <Route path='/women/8' element={<ProductPage productType="women"/>}/>
            </Routes>
            <Footer/>
        </section>


    );
}

export default App;
