import {createSlice} from "@reduxjs/toolkit";


const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        citiesGet: {},
        cities: [],
        isCitiesError: false, // для отслеживания ошибки запроса
    },
    reducers: {
        getCitiesFetch(state, action) {
            state.isCitiesError = false;
            state.citiesGet = action.payload;
        },
        getCitiesSuccess(state, action) {
            state.isCitiesError = false;
            state.cities = action.payload;
            console.log(state.cities)
        },
        getCitiesFailure(state) {
            state.isCitiesError = true;
        },
        clearCities(state) {
            state.cities = [];
        }
    },
});

export const {getCitiesFetch, getCitiesSuccess, getCitiesFailure, clearCities} = citiesSlice.actions

export default citiesSlice.reducer

