import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { $isLoading, $todos, $todosLoaded, getAllTodosFx } from 'stores/effector/todo';
import { UseTodoList } from './types';

export const useTodoListWithEffector = (): UseTodoList => {
    const todos = useStore($todos);
    const todosLoaded = useStore($todosLoaded);
    const isLoading = useStore($isLoading);

    useEffect(() => {
        if (!todosLoaded) {
            getAllTodosFx();
        }
    }, [todosLoaded]);

    return { todos, isLoading };
};
