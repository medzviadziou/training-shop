import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import cartReducer from './cartSlice'
import productsReducer from './productsSlice'
import mailReducer from './mailSlise'
import reviewReducer from './reviewSlice'
import productsSaga from "./productsSaga";
import mailSaga from "./mailSaga";
import reviewSaga from "./reviewSaga";

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
        reducer: {
            cart: cartReducer,
            products: productsReducer,
            mail: mailReducer,
            review: reviewReducer,
        },
        middleware: [sagaMiddleware]
    },
)

sagaMiddleware.run(productsSaga)
sagaMiddleware.run(mailSaga)
sagaMiddleware.run(reviewSaga)