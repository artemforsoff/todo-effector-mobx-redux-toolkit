import { AxiosResponse } from 'axios';
import { todoApi } from 'shared/api';
import { useDispatch } from 'stores/redux-toolkit';
import { fetchDeleteTodo, fetchUpdateTodo } from 'stores/redux-toolkit/todo';
import { UseTodo } from './types';

export const useTodoWithReduxToolkit: UseTodo = (todo) => {
    const dispatch = useDispatch();

    const handleChangeСompleted = async (completed: boolean) => {
        const { payload } = await dispatch(
            fetchUpdateTodo({
                ...todo,
                completed,
            })
        );

        return payload as Promise<AxiosResponse<app.Todo>>;
    };

    const updateTodo = async (payload: Parameters<typeof todoApi.updateTodo>['0']) => {
        const action = await dispatch(
            fetchUpdateTodo({
                ...todo,
                ...payload,
            })
        );
        return action.payload as Promise<AxiosResponse<app.Todo>>;
    };

    const handleDelete = () => dispatch(fetchDeleteTodo(todo.id));

    return {
        handleChangeСompleted,
        updateTodo,
        handleDelete,
    };
};
