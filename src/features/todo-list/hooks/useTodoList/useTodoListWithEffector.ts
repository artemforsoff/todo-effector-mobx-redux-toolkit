import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { $filteredTodos, $todosLoaded, getAllTodosFx } from 'stores/effector/todo';
import { UseTodoList } from './types';

export const useTodoListWithEffector: UseTodoList = () => {
    const todos = useStore($filteredTodos);
    const todosLoaded = useStore($todosLoaded);

    useEffect(() => {
        if (!todosLoaded) {
            getAllTodosFx();
        }
    }, [todosLoaded]);

    return { todos };
};
