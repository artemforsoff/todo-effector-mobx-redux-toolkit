import { useEffect } from 'react';
import { useDispatch, useSelector } from 'stores/redux-toolkit';
import { fetchAllTodos } from 'stores/redux-toolkit/todo';
import { UseTodoListResponse } from './types';

export const useTodoListWithReduxToolkit = (): UseTodoListResponse => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.entities);
    const todosLoaded = useSelector((state) => state.todo.entitiesLoaded);

    useEffect(() => {
        if (!todosLoaded) {
            dispatch(fetchAllTodos());
        }
    }, [dispatch, todosLoaded]);

    return { todos };
};
