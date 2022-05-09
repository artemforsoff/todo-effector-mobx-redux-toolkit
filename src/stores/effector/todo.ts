import * as effectorLogger from 'effector-logger';
import * as effector from 'effector';
import { todoApi } from 'shared/api';
import { ACTIVE_STORE_MANAGER, Filter, StoreManager } from 'shared/constants';

const { createEffect, createStore, createEvent, combine } =
    ACTIVE_STORE_MANAGER === StoreManager.effector ? effectorLogger : effector;

// stores
export const $todos = createStore<app.Todo[]>([], { name: '$todos' });
export const $todosLoaded = createStore(false, { name: '$todosLoaded' });
const $filter = createStore(Filter.all, { name: '$filter' });

// effects
export const getAllTodosFx = createEffect({
    name: 'getAllTodosFx',
    handler: todoApi.getAllTodos,
});
export const createTodoFx = createEffect({
    name: 'createTodoFx',
    handler: todoApi.createTodo,
});
export const updateTodoFx = createEffect({
    name: 'updateTodoFx',
    handler: todoApi.updateTodo,
});
export const deleteTodoFx = createEffect({
    name: 'deleteTodoFx',
    handler: todoApi.deleteTodo,
});

// events
export const clearAllCompleted = createEvent('clearAllCompleted');
export const filterBy = createEvent<Filter>('filterBy');

export const $isLoading = combine(
    getAllTodosFx.pending,
    createTodoFx.pending,
    updateTodoFx.pending,
    deleteTodoFx.pending,
    (...flags) => flags.some(Boolean)
);

// binding
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
