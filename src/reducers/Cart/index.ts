import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {StateType} from './types';

const initialState:StateType = {
    items: [],
}; 

const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        increment(state, action:PayloadAction<string>){
            const itemIndex = state.items.findIndex(({id})=>id===action.payload);

            if(itemIndex!==-1){
                state.items[itemIndex].count+=1;
            }else{
                state.items.push({
                    id:action.payload,
                    count: 1,
                });
            }
           
        },
        decrement(state, action:PayloadAction<string>){
            const itemIndex = state.items.findIndex(({id})=>id===action.payload);

            if(itemIndex!==-1 && state.items[itemIndex].count === 1){
                state.items = state.items.filter(({id})=> id !== action.payload);
            }else if(itemIndex!==-1){
                state.items[itemIndex].count-=1;
            }
           
        },
        remove(state, action: PayloadAction<string>) {
            state.items = state.items.filter(({id}) => id !== action.payload);
        },
       
    },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;