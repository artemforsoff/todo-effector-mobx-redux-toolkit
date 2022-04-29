import { createEffect, createStore } from "effector";
import { todoApi } from "shared/api";

export const $todos = createStore<app.Todo[]>([]);
export const $todosLoaded = createStore(false);

export const getAllTodosFx = createEffect(todoApi.getAllTodos);

$todos.on(getAllTodosFx.doneData, (_, { data }) => data);

$todosLoaded.on(getAllTodosFx.done, () => true);
