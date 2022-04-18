import {createSlice} from "@reduxjs/toolkit";


const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countries:  [],
        isCountriesFilled : false,
        isCountriesLoading: false,
        isCountriesError: false,
    },
    reducers: {
        getCountriesFetch(state) {
            state.isCountriesLoading = true
            state.isCountriesError = false
        },
        getCountriesSuccess(state, action) {
            state.countries = action.payload;
            state.isCountriesFilled = true
            state.isCountriesError = false
        },
        getCountriesFailure(state) {
            state.isCountriesLoading = false
            state.isCountriesError = true
        },
    },
});

export const {getCountriesFetch, getCountriesSuccess, getCountriesFailure} = countriesSlice.actions

export default countriesSlice.reducer

