import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { todoApi } from 'shared/api';
import { Filter } from 'shared/constants';
import { RootState } from '..';

export interface TodoState {
    entities: app.Todo[];
    entitiesLoaded: boolean;
    isLoading: boolean;
    filter: Filter;
}

const initialState: TodoState = {
    entities: [],
    entitiesLoaded: false,
    isLoading: false,
    filter: Filter.all,
};

export const fetchAllTodos = createAsyncThunk('todo/fetchAllTodos', todoApi.getAllTodos);
export const fetchCreateTodo = createAsyncThunk('todo/fetchCreateTodo', todoApi.createTodo);
export const fetchUpdateTodo = createAsyncThunk('todo/fetchUpdateTodo', todoApi.updateTodo);
export const fetchDeleteTodo = createAsyncThunk('todo/fetchDeleteTodo', todoApi.deleteTodo);

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        filterBy: (state, { payload }: PayloadAction<Filter>) => {
            state.filter = payload;
        },
        clearAllCompleted: (state) => {
            state.entities = state.entities.filter(({ completed }) => !completed);
        },
    },
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
            .addCase(fetchDeleteTodo.fulfilled, (state, { meta: { arg } }) => {
                state.entities = state.entities.filter((todo) => {
                    return todo.id !== arg;
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

export const filteredTodosSelector = (state: RootState) => {
    if (state.todo.filter === Filter.all) return state.todo.entities;

    return state.todo.entities.filter(({ completed }) => {
        return state.todo.filter === Filter.active ? completed : !completed;
    });
};

export const { clearAllCompleted, filterBy } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
