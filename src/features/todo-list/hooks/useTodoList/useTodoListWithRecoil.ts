import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { todoApi } from 'shared/api';
import { recoilStore } from 'stores/recoil';
import { UseTodoList } from './types';

export const useTodoListWithRecoil: UseTodoList = () => {
    const setTodos = useSetRecoilState(recoilStore.todo.atoms.todosState);
    const filteredTodosState = useRecoilValue(recoilStore.todo.selectors.filteredTodosState);
    const [todosLoaded, setTodosLoaded] = useRecoilState(recoilStore.todo.atoms.todosLoadedState);
    const setIsLoading = useSetRecoilState(recoilStore.todo.atoms.isLoadingState);

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
