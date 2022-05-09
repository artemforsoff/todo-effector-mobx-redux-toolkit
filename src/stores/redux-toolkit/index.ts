import { configureStore, Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from 'react-redux';
import { todoReducer } from './todo';
import { ACTIVE_STORE_MANAGER, StoreManager } from 'shared/constants';

const middlewares: Middleware[] = [];

if (ACTIVE_STORE_MANAGER === StoreManager.reduxToolkit) {
    middlewares.push(logger);
}

export const store = configureStore({
    reducer: { todo: todoReducer },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        }).concat(middlewares);
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
