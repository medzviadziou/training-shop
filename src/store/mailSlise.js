import {createSlice} from "@reduxjs/toolkit";


const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        mail: '',
        isMailLoading: false,// для отслеживания хода запроса
        isMailSendSuccess: false, // для отслеживания ошибки запроса
    },
    reducers: {
        getProductsFetch(state) {
            state.isMailLoading = true;
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

export const {} = mailSlice.actions

export default mailSlice.reducer

