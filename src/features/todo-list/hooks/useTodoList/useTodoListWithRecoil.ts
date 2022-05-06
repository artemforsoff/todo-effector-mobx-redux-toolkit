import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoApi } from 'shared/api';
import { recoilStore } from 'stores/recoil';
import { UseTodoListResponse } from './types';

export const useTodoListWithRecoil = (): UseTodoListResponse => {
    const [, setTodos] = useRecoilState(recoilStore.todo.atoms.todosState);
    const filteredTodosState = useRecoilValue(recoilStore.todo.atoms.filteredTodosState);
    const [todosLoaded, setTodosLoaded] = useRecoilState(recoilStore.todo.atoms.todosLoadedState);
    const [, setIsLoading] = useRecoilState(recoilStore.todo.atoms.isLoadingState);

    useEffect(() => {
        if (!todosLoaded) {
            (async () => {
                setIsLoading(true);
                try {
                    const { data } = await todoApi.getAllTodos();
                    setTodosLoaded(true);
                    setTodos(data);
                } finally {
                    setIsLoading(false);
                }
            })();
        }
    }, [setIsLoading, setTodos, setTodosLoaded, todosLoaded]);

    return {
        todos: filteredTodosState,
    };
};
