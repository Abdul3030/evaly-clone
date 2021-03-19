import { createSlice } from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: 'carts',
    initialState: [{
            id: 150,
            title: 'Product Title',
            price: 520,
            quantity: 3,
    },
    {
            id: 110,
            title: 'Product Title',
            price: 230,
            quantity: 1,
    }],
    reducers: {
        
        addToCart: (state, action) => {
            const item = action.payload;
            const itemIndex = state.findIndex(product => product.id === item.id);

            if(itemIndex < 0){
                state.push(item);
                state[state.length - 1].quantity = 1;
                return
            }

            state[itemIndex].quantity += 1
            return
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.map(item => { 
                if(itemId === item.id){
                    item.quantity--
                }
            })
        },
        deleteFromCart: (state, action) => {
            const itemId = action.payload;
            state.filter(item => item.id !== itemId);
        },
        customQuantity: {}
    }
});


export const  { addToCart, removeFromCart, deleteFromCart, customQuantity } = cartSlice.actions;

export default cartSlice.reducer;