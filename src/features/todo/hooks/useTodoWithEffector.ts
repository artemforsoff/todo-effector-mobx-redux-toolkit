import { UseTodo } from './types';
import { updateTodoFx, deleteTodoFx } from 'stores/effector/todo';

export const useTodoWithEffector: UseTodo = (todo: app.Todo) => {
    const handleChangeСompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateTodoFx({
            ...todo,
            completed: event.target.checked,
        });
    };

    const handleDelete = () => {
        deleteTodoFx(todo.id);
    };

    return {
        handleChangeСompleted,
        handleDelete,
    };
};
