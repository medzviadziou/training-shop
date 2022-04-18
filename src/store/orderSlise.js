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
            console.log(action.payload.data.message);
            state.isMessage = action.payload.data.message;
        },
        getOrderError(state, action) {
            console.log(action.payload.data.message);
            state.isMessage = action.payload.data.message;
        },
    },
});

export const {getOrderFetch, getOrderSuccess, getOrderError} = orderSlice.actions

export default orderSlice.reducer

