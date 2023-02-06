import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";





const initialState = {

    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}



const cartSlice = createSlice({
    name: 'someRandomName',
    initialState,

    //the reducers are made for updating the initial state 
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        }
        ,
        removeItem: (state, actions) => {

            //if you pass a parameter It becomes an actions then you can receive it and mutate it 
            const itemId = actions.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        }

        ,
        increment: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;


        }
        ,
        decrement: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;


        }
    }

})

//to call a reducer you need to export it by using the acton prop

export const { clearCart, removeItem, increment, decrement } = cartSlice.actions

export default cartSlice.reducer 
