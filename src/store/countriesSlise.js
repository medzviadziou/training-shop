import {createSlice} from "@reduxjs/toolkit";


const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countries:  [],
        isCountriesFilled : false,
        isCountriesLoading: false,
    },
    reducers: {
        getCountriesFetch(state) {
            state.isCountriesLoading = true
        },
        getCountriesSuccess(state, action) {
            state.countries = action.payload;
            state.isCountriesFilled = true
        },
        getCountriesFailure(state) {
            state.isCountriesLoading = false
        },
    },
});

export const {getCountriesFetch, getCountriesSuccess, getCountriesFailure} = countriesSlice.actions

export default countriesSlice.reducer

