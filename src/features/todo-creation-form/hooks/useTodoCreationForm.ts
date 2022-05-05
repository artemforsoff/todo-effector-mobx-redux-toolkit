import { useForm } from 'react-hook-form';
import { todoApi } from 'shared/api';
import { ACTIVE_STORE_MANAGER } from 'shared/constants';
import { createTodoFx } from 'stores/effector/todo';
import { todoStore } from 'stores/mobx/todo';
import { useDispatch } from 'stores/redux-toolkit';
import { fetchCreateTodo } from 'stores/redux-toolkit/todo';

type TodoCreationFormValues = {
    title: app.Todo['title'];
};

export const useTodoCreationForm = () => {
    const dispatch = useDispatch();
    const form = useForm<TodoCreationFormValues>();

    const handleSubmit = form.handleSubmit(async ({ title }) => {
        const todo: Parameters<typeof todoApi.createTodo>['0'] = {
            completed: false,
            title,
            userId: 1,
        };

        switch (ACTIVE_STORE_MANAGER) {
            case 'effector':
                await createTodoFx(todo);
                break;
            case 'mobx':
                await todoStore.fetchCreateTodo(todo);
                break;
            case 'redux-toolkit':
                await dispatch(fetchCreateTodo(todo));
                break;
            default:
                console.log('Unknown store manager');
        }

        form.reset();
    });

    return { form: { ...form, handleSubmit } };
};
