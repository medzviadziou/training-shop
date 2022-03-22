import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {getProductsSuccess} from "./productsSlice";


function* productsRequestWorker() {
    try {
        const {data} = yield call(axios.get, "https://training.cleverland.by/shop/products");
        yield put(getProductsSuccess(data));
    } catch (err) {
        yield put({type: 'error'});
    }
}


function* productsSaga() {
    yield takeLatest('products/getProductsFetch', productsRequestWorker)
}

export default productsSaga;

