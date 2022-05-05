import { autorun } from 'mobx';
import { useEffect } from 'react';
import { todoStore } from 'stores/mobx';
import { UseTodoListResponse } from './types';

export const useTodoListWithMobx = (): UseTodoListResponse => {
    useEffect(() => {
        autorun(() => {
            if (!todoStore.entitiesLoaded) {
                todoStore.fetchAllTodos();
            }
        });
    }, []);

    return {
        todos: todoStore.filteredTodos,
    };
};
