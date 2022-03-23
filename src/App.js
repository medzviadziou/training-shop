import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import './app.scss';
import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./pages/main-page";
import ProductsPage from "./pages/products-page";
import ProductPage from "./pages/product-page";
import Loader from "./components/loader";
import Error from "./components/error";
import {useSelector, useDispatch} from "react-redux";
import {getProductsFetch} from "./store/productsSlice";


function App() {

    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(getProductsFetch())
    },[dispatch])

    const {isLoading, isError} = useSelector((state) => state.products)

    return (

        <section className="app" data-test-id='app'>
            <Header/>
            {isLoading && <Loader/>}
            {isError && <Error/>}
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path=':productType' element={<ProductsPage/>}/>
                <Route path=':productType/:id' element={<ProductPage/>}/>
                <Route element={<main style={{padding: '100px 0', textAlign: 'center', fontSize: '72px'}}><p>There's nothing here!</p></main>}/>
            </Routes>
            <Footer/>
        </section>


    );
}

export default App;
