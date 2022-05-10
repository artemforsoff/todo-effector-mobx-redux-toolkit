import { UseTodo } from './types';
import { updateTodoFx, deleteTodoFx } from 'stores/effector/todo';
import { todoApi } from 'shared/api';

export const useTodoWithEffector: UseTodo = (todo) => {
    const handleChangeСompleted = (completed: boolean) => {
        return updateTodoFx({
            ...todo,
            completed,
        });
    };

    const updateTodo = (payload: Parameters<typeof todoApi.updateTodo>['0']) => {
        return updateTodoFx({
            ...todo,
            ...payload,
        });
    };

    const handleDelete = () => deleteTodoFx(todo.id);

    return {
        handleChangeСompleted,
        updateTodo,
        handleDelete,
    };
};
