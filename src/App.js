import React from 'react';
import {Routes, Route} from "react-router-dom";
import './app.scss';

import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/main-page";
import ProductsPage from "./pages/products-page";


function App() {
    return (

        <section className="app">
            <Header/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path='/women' element={<ProductsPage item='women'/>}/>
                <Route path='/men' element={<ProductsPage item='men'/>}/>
            </Routes>
            <Footer/>
        </section>


    );
}

export default App;
