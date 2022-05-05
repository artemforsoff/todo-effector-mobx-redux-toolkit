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
export const fetchUpdateTodo = createAsyncThunk('todo/fetchUpdateTodo', todoApi.updateTodo);
export const fetchDeleteTodo = createAsyncThunk('todo/fetchDeleteTodo', todoApi.deleteTodo);

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
            .addCase(fetchUpdateTodo.fulfilled, (state, { payload: { data } }) => {
                state.entities = state.entities.map((todo) => {
                    if (todo.id === data.id) {
                        return data;
                    }
                    return todo;
                });
            })
            .addCase(fetchDeleteTodo.fulfilled, (state, { payload: { data } }) => {
                state.entities = state.entities.filter((todo) => {
                    return todo.id !== data;
                });
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
