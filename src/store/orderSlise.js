import {createSlice} from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name: 'order',
    initialState: {
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
    reducers: {
        getOrderFetch(state, action) {
            state.order = action.payload;
        },
        getOrderSuccess(action) {
            console.log('action.payload', action.payload)
        },
    },
});

export const {getOrderFetch, getOrderSuccess} = orderSlice.actions

export default orderSlice.reducer

