import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {getReviewFailure, getReviewSuccess} from "./reviewSlice";



function* reviewRequestWorker({payload}) {
    try {
        console.log(payload, 'payload')
        const {data} = yield call(axios.post, "https://training.cleverland.by/shop/product/review", payload);
        console.log(data, 'data')
        yield put(getReviewSuccess());
    } catch (err) {
        yield put(getReviewFailure());
    }
}


function* reviewSaga() {
    yield takeLatest('review/getReviewFetch', reviewRequestWorker)
}

export default reviewSaga;
