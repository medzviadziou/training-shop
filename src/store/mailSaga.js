import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {getMailFailure, getMailSuccess} from "./mailSlise";



function* mailRequestWorker({payload}) {
    try {
        const {data} = yield call(axios.post, "https://training.cleverland.by/shop/email", payload);
        console.log(data)
        yield put(getMailSuccess());
    } catch (err) {
        yield put(getMailFailure());
    }
}


function* mailSaga() {
    yield takeLatest('mail/getMailFetch', mailRequestWorker)
}

export default mailSaga;
