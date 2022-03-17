import {createSlice} from "@reduxjs/toolkit";

function existingCart(cart, action) {
       if (cart.name === action.payload.nameItem && cart.color === action.payload.colorChose && cart.size === action.payload.sizeChose){
           return true
       }
}

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
        removeToCart(state, action){
            state.cart = state.cart.filter(state => !existingCart(state, action) )
        },
    },
});

export const {addToCart,removeToCart} = cartSlice.actions

export default  cartSlice.reducer


