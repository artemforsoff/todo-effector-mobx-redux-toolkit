import { todoApi } from 'shared/api';

export type UseTodo = (todo: app.Todo) => {
    handleChangeСompleted: (completed: boolean) => ReturnType<typeof todoApi.updateTodo>;
    updateTodo: (todo: Parameters<typeof todoApi.updateTodo>['0']) => ReturnType<typeof todoApi.updateTodo>;
    handleDelete: () => void;
};
