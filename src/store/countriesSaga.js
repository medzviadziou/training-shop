import {call, put, takeLatest} from 'redux-saga/effects';
import axios from "axios";
import {getCountriesSuccess, getCountriesFailure} from "./countriesSlise";

function* productsRequestWorker() {
    try {
        const {data} = yield call(axios.get, "https://training.cleverland.by/shop/countries");
        console.log('data saga', data)
        yield put(getCountriesSuccess(data));
    } catch (err) {
        yield put(getCountriesFailure());
    }
}


function* countriesSaga() {
    yield takeLatest('countries/getCountriesFetch', productsRequestWorker)
}

export default countriesSaga;

