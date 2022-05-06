import { todoApi } from 'shared/api';
import { recoilStore } from 'stores/recoil';
import { UseTodo } from './types';

export const useTodoWithRecoil: UseTodo = (todo) => {
    const { fetchDeleteTodo, fetchUpdateTodo } = recoilStore.todo.useTodoActions();

    const handleChangeСompleted = (completed: boolean) => {
        return fetchUpdateTodo({
            ...todo,
            completed,
        });
    };

    const updateTodo = (payload: Parameters<typeof todoApi.updateTodo>['0']) => {
        return fetchUpdateTodo({
            ...todo,
            ...payload,
        });
    };

    const handleDelete = () => fetchDeleteTodo(todo.id);

    return {
        handleChangeСompleted,
        updateTodo,
        handleDelete,
    };
};
