import { useEffect } from 'react';
import { useDispatch, useSelector } from 'stores/redux-toolkit';
import { fetchAllTodos, filteredTodosSelector } from 'stores/redux-toolkit/todo';
import { UseTodoListResponse } from './types';

export const useTodoListWithReduxToolkit = (): UseTodoListResponse => {
    const dispatch = useDispatch();
    const todos = useSelector(filteredTodosSelector);
    const todosLoaded = useSelector((state) => state.todo.entitiesLoaded);

    useEffect(() => {
        if (!todosLoaded) {
            dispatch(fetchAllTodos());
        }
    }, [dispatch, todosLoaded]);

    return { todos };
};
