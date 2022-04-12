import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {getOrderSuccess} from "./orderSlise";


function* orderRequestWorker({payload}) {
    try {
        const {data} =yield call(axios.post, "https://training.cleverland.by/shop/cart", payload);
        console.log(data)
      yield put(getOrderSuccess());
    } catch (err) {
       console.log(err)
    }
}


function* orderSaga() {
    yield takeLatest('order/getOrderFetch', orderRequestWorker)
}

export default orderSaga;
