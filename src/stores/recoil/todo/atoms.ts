import { atom, selector } from 'recoil';
import { Filter } from 'shared/constants';

export const todosState = atom<app.Todo[]>({
    key: 'todosState',
    default: [],
});

export const isLoadingState = atom({
    key: 'isLoadingState',
    default: false,
});

export const todosLoadedState = atom({
    key: 'todosLoadedState',
    default: false,
});

export const filterState = atom<Filter>({
    key: 'filterState',
    default: Filter.all,
});

export const filteredTodosState = selector({
    key: 'filteredTodosState',
    get: ({ get }) => {
        const todos = get(todosState);
        const filter = get(filterState);

        if (filter === Filter.all) return todos;

        return todos.filter(({ completed }) => {
            return filter === Filter.active ? completed : !completed;
        });
    },
});
