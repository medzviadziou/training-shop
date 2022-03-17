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
                exclusivity: action.payload.idItem+action.payload.colorChose+action.payload.sizeChose,
                count: 1,
            })
        },
        removeToCart(state, action){
            state.cart = state.cart.filter(element => element.exclusivity!==action.payload )
        },
        minusItem(state, action){
             state.cart.filter(element => element.exclusivity===action.payload).forEach((item)=>{
                if(item.count>1){
                    item.count=item.count-1
                }
            })
        },
        plusItem(state, action){
            state.cart.filter(element => element.exclusivity===action.payload).forEach((item)=>{
                item.count=item.count+1
            })
        },
    },
});

export const {addToCart,removeToCart,plusItem,minusItem} = cartSlice.actions

export default  cartSlice.reducer


