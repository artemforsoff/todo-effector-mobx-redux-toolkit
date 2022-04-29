import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todoApi } from "shared/api";

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

export const fetchAllTodos = createAsyncThunk(
  "todo/fetchAllTodos",
  todoApi.getAllTodos
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllTodos.fulfilled, (state, { payload: { data } }) => {
      state.entities = data;
      state.entitiesLoaded = true;
      state.isLoading = false;
    });
    builder.addCase(fetchAllTodos.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const todoReducer = todoSlice.reducer;
