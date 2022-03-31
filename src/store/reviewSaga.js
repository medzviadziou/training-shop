import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {getReviewFailure, getReviewSuccess} from "./reviewSlice";


function* reviewRequestWorker({payload}) {
    try {
        yield call(axios.post, "https://training.cleverland.by/shop/product/review", payload);
        yield put(getReviewSuccess());
    } catch (err) {
        yield put(getReviewFailure());
    }
}


function* reviewSaga() {
    yield takeLatest('review/getReviewFetch', reviewRequestWorker)
}

export default reviewSaga;
