import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";

function* mailRequestWorker() {
    try {
        const mailData = {
            "mail": "email@test.by"
        }
        const {data} = yield call(axios.post, "https://training.cleverland.by/shop/email", mailData);
        yield put(getMailSuccess());
    } catch (err) {
        yield put(getMailFailure());
    }
}


function* mailSaga() {
    yield takeLatest('mail', mailRequestWorker)
}

export default mailSaga;
