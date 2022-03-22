import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import cartReducer from './cartSlice'
import productsReducer from './productsSlice'
import productsSaga from "./productsSaga";

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: {
            cart: cartReducer,
            products: productsReducer,
        },
    middleware:[sagaMiddleware]
    },
)

sagaMiddleware.run(productsSaga)