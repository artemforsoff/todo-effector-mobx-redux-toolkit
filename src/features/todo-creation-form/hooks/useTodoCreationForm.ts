import { useForm } from 'react-hook-form';
import { todoApi } from 'shared/api';
import { ACTIVE_STATE_MANAGER, StateManager } from 'shared/constants';
import { createTodoFx } from 'stores/effector/todo';
import { todoStore } from 'stores/mobx/todo';
import { recoilStore } from 'stores/recoil';
import { useDispatch } from 'stores/redux-toolkit';
import { fetchCreateTodo } from 'stores/redux-toolkit/todo';

type TodoCreationFormValues = {
    title: app.Todo['title'];
};

export const useTodoCreationForm = () => {
    const dispatch = useDispatch();
    const form = useForm<TodoCreationFormValues>();

    const actions = recoilStore.todo.useTodoActions();

    const handleSubmit = form.handleSubmit(async ({ title }) => {
        const todo: Parameters<typeof todoApi.createTodo>['0'] = {
            completed: false,
            title,
            userId: 1,
        };

        switch (ACTIVE_STATE_MANAGER) {
            case StateManager.effector:
                await createTodoFx(todo);
                break;
            case StateManager.mobx:
                await todoStore.fetchCreateTodo(todo);
                break;
            case StateManager.reduxToolkit:
                await dispatch(fetchCreateTodo(todo));
                break;
            case StateManager.recoil:
                await actions.fetchCreateTodo(todo);
                break;
            default:
                console.log('Unknown store manager');
        }

        form.reset();
    });

    return { form: { ...form, handleSubmit } };
};
