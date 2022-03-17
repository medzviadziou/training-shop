import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: 'cart',
    initialState:{
        cart:[]
    },
    reducers: {
        addToCart(state, action){
            state.cart.push({
                id: action.payload.idItem,
                name:  action.payload.nameItem,
                color: action.payload.colorChose,
                size: action.payload.sizeChose,
                image: action.payload.imageChose,
                price: action.payload.priceItem,
                discount:  action.payload.discountItem,
            })
        },
    },
});

export const {addToCart} = cartSlice.actions

export default  cartSlice.reducer