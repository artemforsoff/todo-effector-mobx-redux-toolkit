import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { recoilStore } from 'stores/recoil';
import { UseTodoList } from './types';

export const useTodoListWithRecoil: UseTodoList = () => {
    const { fetchTodos } = recoilStore.todo.useTodoActions();

    const filteredTodosState = useRecoilValue(recoilStore.todo.selectors.filteredTodosState);
    const todosLoaded = useRecoilValue(recoilStore.todo.atoms.todosLoadedState);

    useEffect(() => {
        if (!todosLoaded) {
            fetchTodos();
        }
    }, [fetchTodos, todosLoaded]);

    return {
        todos: filteredTodosState,
    };
};
