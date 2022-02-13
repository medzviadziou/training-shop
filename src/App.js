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
                <Route path='/product/1' element={<ProductPage/>}/>
                <Route path='/product/2' element={<ProductPage/>}/>
                <Route path='/product/3' element={<ProductPage/>}/>
                <Route path='/product/4' element={<ProductPage/>}/>
                <Route path='/product/5' element={<ProductPage/>}/>
                <Route path='/product/6' element={<ProductPage/>}/>
                <Route path='/product/7' element={<ProductPage/>}/>
                <Route path='/product/8' element={<ProductPage/>}/>
            </Routes>
            <Footer/>
        </section>


    );
}

export default App;
