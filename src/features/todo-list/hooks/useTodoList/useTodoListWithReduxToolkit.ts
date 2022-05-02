import { useEffect } from 'react';
import { useDispatch, useSelector } from 'stores/redux-toolkit';
import { fetchAllTodos } from 'stores/redux-toolkit/todo';
import { UseTodoList } from './types';

export const useTodoListWithReduxToolkit = (): UseTodoList => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.entities);
    const todosLoaded = useSelector((state) => state.todo.entitiesLoaded);
    const isLoading = useSelector((state) => state.todo.isLoading);

    useEffect(() => {
        if (!todosLoaded) {
            dispatch(fetchAllTodos());
        }
    }, [dispatch, todosLoaded]);

    return { todos, isLoading };
};
