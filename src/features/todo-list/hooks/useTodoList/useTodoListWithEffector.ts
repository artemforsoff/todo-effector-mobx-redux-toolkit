import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { $todos, $todosLoaded, getAllTodosFx } from 'stores/effector/todo';
import { UseTodoListResponse } from './types';

export const useTodoListWithEffector = (): UseTodoListResponse => {
    const todos = useStore($todos);
    const todosLoaded = useStore($todosLoaded);

    useEffect(() => {
        if (!todosLoaded) {
            getAllTodosFx();
        }
    }, [todosLoaded]);

    return { todos };
};
