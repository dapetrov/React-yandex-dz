import {RootState} from '../reducers/store';

export const selectCartItems = (state: RootState) => state.Cart.items;