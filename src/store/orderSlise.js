import {createSlice} from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: {
            products: [],
            deliveryMethod: "",
            paymentMethod: "",
            totalPrice: "",
            phone: "",
            email: "",
            country: "",
            cashEmail: "",
            city: "",
            street: "",
            house: "",
            apartment: "",
            postcode: "",
            storeAddress: "",
            card: "",
            cardDate: "",
            cardCVV: ""
        },
        isMessage: ""
    },
    reducers: {
        getOrderFetch(state, action) {
            state.isMessage ="";
            state.order = action.payload;
        },
        getOrderSuccess(state, action) {
            state.isMessage = action.payload;
        },
        submitOrderError(state, action) {
            state.isMessage = action.payload;
        },
    },
});

export const {getOrderFetch, getOrderSuccess, submitOrderError} = orderSlice.actions

export default orderSlice.reducer

