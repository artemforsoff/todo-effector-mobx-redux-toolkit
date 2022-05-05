import { combine, createEffect, createStore } from 'effector';
import { todoApi } from 'shared/api';

export const $todos = createStore<app.Todo[]>([]);
export const $todosLoaded = createStore(false);

export const getAllTodosFx = createEffect(todoApi.getAllTodos);
export const createTodoFx = createEffect(todoApi.createTodo);
export const updateTodoFx = createEffect(todoApi.updateTodo);
export const deleteTodoFx = createEffect(todoApi.deleteTodo);

export const $isLoading = combine(
    getAllTodosFx.pending,
    createTodoFx.pending,
    updateTodoFx.pending,
    deleteTodoFx.pending,
    (...flags) => flags.some(Boolean)
);

$todos
    .on(getAllTodosFx.doneData, (_, { data }) => {
        return data;
    })
    .on(createTodoFx.doneData, (todos, { data }) => {
        return [data, ...todos];
    })
    .on(updateTodoFx.doneData, (todos, { data: updatedTodo }) => {
        return todos.map((todo) => {
            if (todo.id === updatedTodo.id) {
                return updatedTodo;
            }
            return todo;
        });
    })
    .on(deleteTodoFx.done, (todos, { params: deletedTodoId }) => {
        return todos.filter((todo) => todo.id !== deletedTodoId);
    });

$todosLoaded.on(getAllTodosFx.done, () => true);
