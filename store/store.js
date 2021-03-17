import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import cartReducer from './cartSlice';



export default configureStore({
    reducer: {
        carts: cartReducer
    },
    middleware: [logger]
});