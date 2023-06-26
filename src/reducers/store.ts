import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import Cart from './Cart';
const rootReducer = combineReducers({Cart});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch