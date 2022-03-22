import {createSlice} from "@reduxjs/toolkit";


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: {
            men: [],
            women: [],
        },
        isLoading: false,// для отслеживания хода запроса
        isError: false, // для отслеживания ошибки запроса
    },
    reducers: {
        getProductsFetch(state) {
            state.isError = false;
            state.isLoading = true;
        },
        getProductsSuccess(state, action) {
            state.isError = false;
            state.products = action.payload;
            state.isLoading = false;
        },
        getProductsFailure(state) {
            state.isLoading = false;
            state.isError = true;

        },
    },
});


export const {getProductsFetch, getProductsSuccess, getProductsFailure} = productsSlice.actions

export default productsSlice.reducer

