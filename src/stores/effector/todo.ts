import { combine, createEffect, createStore } from 'effector';
import { todoApi } from 'shared/api';

export const $todos = createStore<app.Todo[]>([]);
export const $todosLoaded = createStore(false);

export const getAllTodosFx = createEffect(todoApi.getAllTodos);
export const createTodoFx = createEffect(todoApi.createTodo);

export const $isLoading = combine(getAllTodosFx.pending, createTodoFx.pending, (...flags) =>
    flags.some(Boolean)
);

$todos
    .on(getAllTodosFx.doneData, (_, { data }) => data)
    .on(createTodoFx.doneData, (todos, { data }) => {
        return [data, ...todos];
    });

$todosLoaded.on(getAllTodosFx.done, () => true);
