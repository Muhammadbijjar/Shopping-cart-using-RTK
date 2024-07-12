import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/CartSlice/cartSlice";

export const store = configureStore({
    reducer:{
        cart: cartSlice
    }
})