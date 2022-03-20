import {createSlice} from "@reduxjs/toolkit";


const productsSlice = createSlice ({
    products: {
        men: [],
        women: [],
    },
    isLoading: false,// для отслеживания хода запроса
    isError: false, // для отслеживания ошибки запроса
});

export const {} = productsSlice.actions

export default  productsSlice.reducer

