import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {getOrderSuccess, getOrderError} from "./orderSlise";


function* orderRequestWorker({payload}) {
    try {
        const {data} = yield call(axios.post, "https://training.cleverland.by/shop/cart", payload);
        yield put(getOrderSuccess({data}));
    } catch (err) {

        console.log(err)
        yield put(getOrderError(err));
    }
}


function* orderSaga() {
    yield takeLatest('order/getOrderFetch', orderRequestWorker)
}

export default orderSaga;
