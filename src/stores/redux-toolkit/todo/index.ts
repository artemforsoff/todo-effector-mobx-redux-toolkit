import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { todoApi } from 'shared/api';

export interface TodoState {
    entities: app.Todo[];
    entitiesLoaded: boolean;
    isLoading: boolean;
}

const initialState: TodoState = {
    entities: [],
    entitiesLoaded: false,
    isLoading: false,
};

export const fetchAllTodos = createAsyncThunk('todo/fetchAllTodos', todoApi.getAllTodos);
export const fetchCreateTodo = createAsyncThunk('todo/fetchCreateTodo', todoApi.createTodo);

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTodos.fulfilled, (state, { payload: { data } }) => {
                state.entities = data;
                state.entitiesLoaded = true;
            })
            .addCase(fetchCreateTodo.fulfilled, (state, { payload: { data } }) => {
                state.entities.unshift(data);
            })
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/fulfilled'),
                (state) => {
                    state.isLoading = false;
                }
            );
    },
});

export const todoReducer = todoSlice.reducer;
