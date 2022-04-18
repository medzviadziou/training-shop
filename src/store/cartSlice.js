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
                quantity: 1,
            })
        },
        removeToCart(state, action){
            state.cart = state.cart.filter(element => element.exclusivity!==action.payload )
        },
        minusItem(state, action){
             state.cart.filter(element => element.exclusivity===action.payload).forEach((item)=>{
                if(item.quantity>1){
                    item.quantity=item.quantity-1
                }
            })
        },
        plusItem(state, action){
            state.cart.filter(element => element.exclusivity===action.payload).forEach((item)=>{
                item.quantity=item.quantity+1
            })
        },
        clearCart(state){
            state.cart = []
        }
    },
});

export const {addToCart,removeToCart,plusItem,minusItem,clearCart} = cartSlice.actions

export default  cartSlice.reducer


