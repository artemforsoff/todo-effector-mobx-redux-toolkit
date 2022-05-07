import { autorun } from 'mobx';
import { useEffect } from 'react';
import { todoStore } from 'stores/mobx';
import { UseTodoList } from './types';

export const useTodoListWithMobx: UseTodoList = () => {
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
