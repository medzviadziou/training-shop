import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";

function* mailRequestWorker() {
    try {
        const {data} = yield call(axios.get, "https://training.cleverland.by/shop/email");
        yield put();
    } catch (err) {
        yield put();
    }
}


function* productsSaga() {
    yield takeLatest('products', mailRequestWorker)
}

export default productsSaga;
