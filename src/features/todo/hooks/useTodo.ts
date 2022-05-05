import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ACTIVE_STORE_MANAGER, StoreManager } from 'shared/constants';
import { UseTodo } from './types';
import { useTodoWithEffector } from './useTodoWithEffector';
import { useTodoWithMobx } from './useTodoWithMobx';
import { useTodoWithReduxToolkit } from './useTodoWithReduxToolkit';

const hooks: Record<StoreManager, UseTodo> = {
    effector: useTodoWithEffector,
    mobx: useTodoWithMobx,
    'redux-toolkit': useTodoWithReduxToolkit,
};

export const useTodo = (todo: app.Todo) => {
    const { handleChangeСompleted, handleDelete, updateTodo } = hooks[ACTIVE_STORE_MANAGER](todo);

    const [isOpenForm, setIsOpenForm] = useState(false);

    const form = useForm<{ title: app.Todo['title'] }>();

    const handleSubmit = form.handleSubmit(async ({ title }) => {
        const { status } = await updateTodo({
            ...todo,
            title,
        });

        if (status === 200) {
            setIsOpenForm(false);
        }
    });

    useEffect(() => {
        form.setValue('title', todo.title);
    }, [form, todo.title]);

    return {
        handleChangeСompleted,
        handleDelete,
        form: {
            ...form,
            handleSubmit,
        },
        isOpenForm,
        setIsOpenForm,
    };
};
