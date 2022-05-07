import { combine, createEffect, createEvent, createStore } from 'effector';
import { todoApi } from 'shared/api';
import { Filter } from 'shared/constants';

export const $todos = createStore<app.Todo[]>([]);
export const $todosLoaded = createStore(false);

const $filter = createStore(Filter.all);

export const getAllTodosFx = createEffect(todoApi.getAllTodos);
export const createTodoFx = createEffect(todoApi.createTodo);
export const updateTodoFx = createEffect(todoApi.updateTodo);
export const deleteTodoFx = createEffect(todoApi.deleteTodo);

export const clearAllCompleted = createEvent();
export const filterBy = createEvent<Filter>();

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
    .on(deleteTodoFx.done, (todos, { params }) => {
        return todos.filter((todo) => todo.id !== params);
    })
    .on(clearAllCompleted, (todos) => {
        return todos.filter(({ completed }) => !completed);
    });

$filter.on(filterBy, (_, filter) => filter);

export const $filteredTodos = combine($todos, $filter, (todos, filter) => {
    if (filter === Filter.all) return todos;

    return todos.filter(({ completed }) => {
        return filter === Filter.active ? !completed : completed;
    });
});

$todosLoaded.on(getAllTodosFx.done, () => true);
