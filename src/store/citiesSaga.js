import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {getCitiesSuccess, getCitiesFailure} from "./citiesSlise";



function* citiesRequestWorker({payload}) {
    try {
        const {data} = yield call(axios.post, "https://training.cleverland.by/shop/search/cities", payload);
        yield put(getCitiesSuccess(data));
    } catch (err) {
        yield put(getCitiesFailure());
    }
}


function* citiesSaga() {
    yield takeLatest('cities/getCitiesFetch', citiesRequestWorker)
}

export default citiesSaga;
