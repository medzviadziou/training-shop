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
                <Route path='/women' element={<ProductsPage productType='women'/>}/>
                <Route path='/men' element={<ProductsPage productType='men'/>}/>
                <Route path='/women/:id' element={<ProductPage productType="women"/>}/>
                <Route path='/men/:id' element={<ProductPage productType="men"/>}/>
                <Route path="*" element={ <main style={{padding: '100px 0', textAlign: 'center',  fontSize: '72px'}}> <p>There's nothing here!</p></main>}/>
            </Routes>
            <Footer/>
        </section>


    );
}

export default App;
