import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {getOrderSuccess, submitOrderError} from "./orderSlise";


function* orderRequestWorker({payload}) {
    try {
        const {data} = yield call(axios.post, "https://training.cleverland.by/shop/cart", payload);
        if (data.message === "success") {
            yield put(getOrderSuccess(data.message));
        } else {
            yield put(submitOrderError(data.message));
        }
    } catch (err) {
        yield put(submitOrderError("timeout"));
    }
}


function* orderSaga() {
    yield takeLatest('order/getOrderFetch', orderRequestWorker)
}

export default orderSaga;
