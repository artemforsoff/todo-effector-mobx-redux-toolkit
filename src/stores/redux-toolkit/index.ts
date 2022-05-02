import { configureStore } from '@reduxjs/toolkit';
import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from 'react-redux';
import { todoReducer } from './todo';

export const store = configureStore({
    reducer: { todo: todoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<AppDispatch>(); // export a hook that can be reused to resolve types
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
